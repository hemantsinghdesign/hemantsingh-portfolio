/**
 * Regenerates the blur placeholders in `content/projects/*.ts`.
 *
 *   node scripts/generate-blur.mjs
 *
 * Reads every image referenced by a content file, produces a 12px JPEG,
 * and writes it back as `blurDataURL`. Run this after adding or replacing
 * artwork — the placeholders are derived data, never edited by hand.
 */
import { readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const CONTENT_DIR = 'content/projects';
const PUBLIC_DIR = 'public';

const files = (await readdir(CONTENT_DIR)).filter((f) => f.endsWith('.ts'));

for (const file of files) {
  const full = path.join(CONTENT_DIR, file);
  let source = await readFile(full, 'utf8');
  const refs = [...source.matchAll(/src: `\$\{dir\}\/([\w-]+\.jpg)`/g)].map((m) => m[1]);
  const dirMatch = source.match(/const dir = '([^']+)'/);
  if (!dirMatch) continue;

  for (const name of new Set(refs)) {
    const buf = await sharp(path.join(PUBLIC_DIR, dirMatch[1], name))
      .resize(12, 12, { fit: 'inside' })
      .jpeg({ quality: 40 })
      .toBuffer();
    const url = `data:image/jpeg;base64,${buf.toString('base64')}`;
    // Insert or replace the blurDataURL that follows this src.
    // Global: an image can legitimately appear more than once in a case
    // study (a thumbnail and a full-bleed, for example).
    const re = new RegExp(
      `(src: \\\`\\$\\{dir\\}/${name.replace('.', '\\.')}\\\`,)([\\s\\S]{0,400}?)(\\n\\s*\\},)`,
      'g',
    );
    source = source.replace(re, (m, a, mid, end) => {
      const cleaned = mid.replace(/\n\s*blurDataURL: '[^']*',/g, '');
      const indent = end.match(/\n(\s*)/)[1] + '  ';
      return `${a}${cleaned}\n${indent}blurDataURL: '${url}',${end}`;
    });
  }
  await writeFile(full, source);
  console.log(`${file}: ${new Set(refs).size} placeholders written`);
}
