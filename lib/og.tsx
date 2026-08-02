import { ImageResponse } from 'next/og';

/**
 * Shared Open Graph image renderer.
 *
 * One layout, used by the site card and every case study, so social previews
 * stay consistent as projects are added. Deliberately typographic rather than
 * photographic: it renders identically everywhere and needs no font fetch,
 * which keeps generation fast and dependency-free.
 */

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = 'image/png';

const PAPER = '#EDEDE8';
const INK = '#14140F';
const SIGNAL = '#E33F1E';
const MUTE = '#6B6B63';

export function renderOgImage({
  kicker,
  title,
  note,
}: {
  kicker: string;
  title: string;
  note: string;
}) {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: PAPER,
          color: INK,
          padding: 72,
          fontFamily: 'Helvetica, Arial, sans-serif',
        }}
      >
        {/* signal block, echoing the site's wordmark glyph */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <div style={{ width: 32, height: 32, background: SIGNAL }} />
          <div
            style={{
              fontSize: 22,
              letterSpacing: 3,
              textTransform: 'uppercase',
              color: MUTE,
            }}
          >
            {kicker}
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            fontSize: title.length > 24 ? 92 : 132,
            lineHeight: 1,
            letterSpacing: -5,
            fontWeight: 600,
          }}
        >
          {title}
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            borderTop: `1px solid ${INK}`,
            paddingTop: 24,
            fontSize: 24,
            color: MUTE,
          }}
        >
          <div style={{ display: 'flex', maxWidth: 720 }}>{note}</div>
          <div style={{ display: 'flex', color: INK }}>Hemant Singh</div>
        </div>
      </div>
    ),
    OG_SIZE,
  );
}
