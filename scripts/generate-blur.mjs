/**
 * Regenerates the blur placeholders in `content/projects/*.ts`.
 *
 *   npm run blur
 *
 * Reads every image referenced by a content file, produces a 12px JPEG, and
 * writes it back as `blurDataURL`. Run this after adding or replacing
 * artwork — the placeholders are derived data and are never hand-written.
 *
 * The rewrite is idempotent: for each image object it strips any existing
 * placeholder and inserts a fresh one after `height`. Object boundaries are
 * found by counting braces rather than by pattern-matching a closing brace,
 * because an image can be written compactly inside a larger block and a
 * naive match will attach the placeholder to the wrong object.
 */
import { readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const CONTENT_DIR = 'content/projects';
const PUBLIC_DIR = 'public';

/** Index of the `}` that closes the object opened at or before `from`. */
function closingBrace(source, from) {
  let depth = 0;
  for (let i = from; i < source.length; i += 1) {
    if (source[i] === '{') depth += 1;
    else if (source[i] === '}') {
      if (depth === 0) return i;
      depth -= 1;
    }
  }
  return -1;
}

/** Index of the `{` that opens the object containing `at`. */
function openingBrace(source, at) {
  let depth = 0;
  for (let i = at; i >= 0; i -= 1) {
    if (source[i] === '}') depth += 1;
    else if (source[i] === '{') {
      if (depth === 0) return i;
      depth -= 1;
    }
  }
  return -1;
}

const files = (await readdir(CONTENT_DIR)).filter((f) => f.endsWith('.ts'));
const cache = new Map();

for (const file of files) {
  const full = path.join(CONTENT_DIR, file);
  let source = await readFile(full, 'utf8');
  const dirMatch = source.match(/const dir = '([^']+)'/);
  if (!dirMatch) continue;

  let written = 0;
  let cursor = 0;

  for (;;) {
    const srcIndex = source.indexOf('src: `${dir}/', cursor);
    if (srcIndex === -1) break;

    const nameMatch = /src: `\$\{dir\}\/([\w-]+\.(?:jpg|png|webp))`/.exec(
      source.slice(srcIndex, srcIndex + 200),
    );
    if (!nameMatch) {
      cursor = srcIndex + 1;
      continue;
    }
    const name = nameMatch[1];

    const open = openingBrace(source, srcIndex);
    const close = closingBrace(source, srcIndex);
    if (open === -1 || close === -1) {
      cursor = srcIndex + 1;
      continue;
    }

    let body = source.slice(open, close);
    body = body.replace(/\n[ \t]*blurDataURL: '[^']*',/g, '');

    if (!cache.has(name)) {
      const buffer = await sharp(path.join(PUBLIC_DIR, dirMatch[1], name))
        .resize(12, 12, { fit: 'inside' })
        .jpeg({ quality: 40 })
        .toBuffer();
      cache.set(name, `data:image/jpeg;base64,${buffer.toString('base64')}`);
    }

    // Anchor to the `src` line. `height` is not reliable — an image object
    // may take its dimensions from a spread rather than a literal field.
    const srcMatch = /(\n?([ \t]*)src: `\$\{dir\}\/[\w-]+\.(?:jpg|png|webp)`,)/.exec(body);
    if (srcMatch) {
      body = body.replace(
        srcMatch[1],
        `${srcMatch[1]}\n${srcMatch[2]}blurDataURL: '${cache.get(name)}',`,
      );
      written += 1;
    }

    source = source.slice(0, open) + body + source.slice(close);
    cursor = open + body.length;
  }

  await writeFile(full, source);
  console.log(`${file}: ${written} placeholders written`);
}
