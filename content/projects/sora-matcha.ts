import type { ProjectInput } from '@/types/content';

/**
 * SORA — ceremonial matcha.
 *
 * This file is the entire case study: prose, facts, and the order and
 * layout of every image. No component needs editing to change any of it.
 * Images live in /public/projects/sora-matcha/.
 */

const dir = '/projects/sora-matcha';

/** Most source images share these two shapes. */
const P = { width: 927, height: 1147 } as const; // portrait
const S = { width: 1022, height: 1022 } as const; // square

export const soraMatcha: ProjectInput = {
  slug: 'sora-matcha',
  index: '01',
  title: 'SORA',
  kicker: 'Ceremonial matcha',
  discipline: 'Brand identity · Packaging · Art direction',
  year: '2025',
  summary:
    'A ceremonial matcha brand built on one idea — the packaging should be as still as the ritual it belongs to.',

  thumbnail: {
    src: `${dir}/hero-tin-bowl.jpg`,
    alt: 'SORA ceremonial matcha tin beside a stoneware bowl in low winter light',
    ...P,
  },

  meta: {
    client: 'Concept project',
    role: 'Brand strategy, visual identity, packaging, art direction, photography direction, brand guidelines',
    timeframe: '4 weeks',
    scope: 'Mark · wordmark · palette · icon set · packaging · stationery · campaign',
    tools: 'Illustrator · Photoshop · Figma · Dimension',
  },

  overview:
    'Ceremonial matcha in western retail tends to arrive as one of two things: a wellness supplement in a clinical white tub, or an imported curio wrapped in borrowed ornament. Neither describes what the product actually is — a slow, deliberate morning. SORA needed an identity that reads as premium without raising its voice, and that a small team could apply across tins, pouches, cups and cards without a designer in the room.',

  approach: [
    'Drew the mark from the moment rather than the plant: a sunrise breaking over two leaves. Sora means sky, so the mark reads as dawn before it reads as tea.',
    'Set the wordmark in a high-contrast serif with wide letterspacing so the name sits still on the pack instead of competing with it, with one line of copy underneath and never more.',
    'Split the range by light — a cream, silver-lidded tin for daylight retail and a deep green tin with gold foil for gifting and dark shelves. Same layout, same margins, different temperature.',
    'Wrote the photography rules into the system itself: natural daylight, soft shadows, no clutter, no artificial colour. Every future shot has a spec to meet.',
    'Ran a black-and-white typographic campaign as counterweight. The name repeats until it becomes texture, which lets the packaging stay quiet while the campaign carries the volume.',
  ],

  outcome:
    'A complete identity system — mark, wordmark, four-colour palette, a ten-icon set, photography direction, packaging across five formats, full stationery, and retail and gifting collateral — documented in a guidelines book that can be handed to any printer or photographer without a briefing call.',

  metrics: [
    { label: 'Pack formats', value: '5' },
    { label: 'Core colours', value: '4' },
    { label: 'Icons drawn', value: '10' },
  ],

  blocks: [
    {
      type: 'bleed',
      image: {
        src: `${dir}/hero-tin-bowl.jpg`,
        alt: 'Deep green SORA tin with its lid removed, beside a stoneware bowl of matcha powder on a dark wooden floor',
        ...P,
      },
      caption: 'Ceremonial tin, low winter light',
    },

    { type: 'heading', marker: 'A', title: 'The mark', note: 'Sunrise over two leaves' },
    {
      type: 'pair',
      images: [
        {
          src: `${dir}/mark-deboss.jpg`,
          alt: 'The SORA sunrise-and-leaves mark blind-debossed into textured uncoated paper',
          ...P,
        },
        {
          src: `${dir}/guidelines-cover.jpg`,
          alt: 'Brand identity guidelines cover, debossed mark and wordmark on white stock',
          ...P,
        },
      ],
      captions: ['Blind deboss on uncoated stock', 'Brand identity guidelines'],
    },
    {
      type: 'note',
      text: 'The mark is drawn on a single stroke weight so it holds at 6mm on a hang tag and at 300mm on a shopfront. The wordmark never sits closer to it than the height of the sun.',
    },
    {
      type: 'full',
      image: {
        src: `${dir}/lockup-board.jpg`,
        alt: 'Primary SORA lockup with the tagline "Ceremonial grade. Born from the morning ritual." above a green rule',
        width: 1147,
        height: 927,
      },
      caption: 'Primary lockup with the fixed line of copy',
    },

    {
      type: 'heading',
      marker: 'B',
      title: 'The system',
      note: 'Colour, icons, photography',
    },
    {
      type: 'pair',
      images: [
        {
          src: `${dir}/palette.jpg`,
          alt: 'SORA colour palette: cream and deep green primaries with tan and sage secondaries',
          width: 896,
          height: 1200,
        },
        {
          src: `${dir}/icon-set.jpg`,
          alt: 'Ten line icons for tea, scoop, leaf, gift, steam, shipping, bowl, journal, whisk and sustainability',
          width: 896,
          height: 1200,
        },
      ],
      captions: ['Two primaries, two secondaries', 'Ten icons, one stroke weight'],
    },
    {
      type: 'full',
      image: {
        src: `${dir}/photography-rules.jpg`,
        alt: 'Annotated photography guidelines calling out natural daylight, soft shadows, minimal composition and no artificial colour',
        width: 896,
        height: 1200,
      },
      caption: 'Photography direction, written as rules rather than references',
    },

    { type: 'heading', marker: 'C', title: 'Packaging', note: 'Split by light' },
    {
      type: 'pair',
      images: [
        {
          src: `${dir}/tin-green-foil.jpg`,
          alt: 'Deep green gift tin with the SORA wordmark in gold foil, on dark slate',
          ...P,
        },
        {
          src: `${dir}/tin-cream.jpg`,
          alt: 'Cream retail tin with a silver lid and the SORA wordmark in charcoal',
          width: 889,
          height: 1101,
        },
      ],
      captions: ['Gift tin — deep green, gold foil', 'Retail tin — cream, silver lid'],
    },
    {
      type: 'triptych',
      images: [
        {
          src: `${dir}/tin-green-deboss.jpg`,
          alt: 'Green tin variant with the wordmark debossed rather than foiled',
          ...P,
        },
        {
          src: `${dir}/pouch.jpg`,
          alt: 'Cream 30g resealable matcha pouch in raking daylight',
          ...P,
        },
        {
          src: `${dir}/carrier-bag.jpg`,
          alt: 'Cream carrier bag with rope handles and the SORA mark above the wordmark',
          ...P,
        },
      ],
      captions: ['Deboss-only variant', '30g resealable pouch', 'Carrier bag'],
    },
    {
      type: 'note',
      text: 'Both tins carry the same grid: mark at the optical centre, wordmark below, one rule, one line of copy. Only the temperature changes.',
    },
    {
      type: 'pair',
      images: [
        {
          src: `${dir}/cup-green.jpg`,
          alt: 'Deep green takeaway cup with a gold SORA wordmark and gold rim line',
          ...P,
        },
        {
          src: `${dir}/cup-cream.jpg`,
          alt: 'Cream takeaway cup with the SORA mark and a green rim line',
          ...P,
        },
      ],
      captions: ['Takeaway cup, gift range', 'Takeaway cup, retail range'],
    },

    { type: 'heading', marker: 'D', title: 'Gifting', note: 'The ceremonial kit' },
    {
      type: 'full',
      image: {
        src: `${dir}/kit-box.jpg`,
        alt: 'Open cream gift box containing a bamboo whisk, scoop, stoneware bowl and matcha tin',
        ...P,
      },
      caption: 'Kit box — whisk, scoop, bowl, tin',
    },
    {
      type: 'pair',
      images: [
        {
          src: `${dir}/kit-dark.jpg`,
          alt: 'Overhead flat lay of the ceremonial kit on charcoal linen with a green tin and gold scoop',
          ...P,
        },
        {
          src: `${dir}/kit-light.jpg`,
          alt: 'Overhead flat lay of the ceremonial kit on cream linen with the retail tin and gold scoop',
          ...P,
        },
      ],
      captions: ['Kit, dark set', 'Kit, light set'],
    },

    {
      type: 'heading',
      marker: 'E',
      title: 'Stationery',
      note: 'Applied across every surface',
    },
    {
      type: 'full',
      image: {
        src: `${dir}/stationery.jpg`,
        alt: 'Business cards, envelope, letterhead, notebook, stickers and gift card in the SORA identity',
        ...P,
      },
      caption: 'Cards, letterhead, stickers, notebook',
    },
    {
      type: 'full',
      image: {
        src: `${dir}/applications.jpg`,
        alt: 'The SORA mark applied to a card, carrier bag, ceramic bowl, tin, window vinyl, tote, metal sign and tissue paper',
        width: 896,
        height: 1200,
      },
      caption: 'Mark applied from window vinyl to tissue paper',
    },

    {
      type: 'gallery',
      title: 'The campaign',
      note: 'Counterweight',
      text: 'The packaging holds still, so the campaign does the shouting. One compressed grotesque, the name repeated until it stops being a word and becomes a pattern.',
      images: [
        {
          src: `${dir}/campaign-billboard.jpg`,
          alt: 'SORA typographic poster installed in a street-side billboard beside a bike rack',
          width: 1786,
          height: 2297,
        },
        {
          src: `${dir}/campaign-bag.jpg`,
          alt: 'Black and white poster of a carrier bag behind repeated SORA lettering',
          ...P,
        },
        {
          src: `${dir}/campaign-grid.jpg`,
          alt: 'Poster of stacked SORA wordmarks interleaved with whisk and bowl photography',
          ...P,
        },
        {
          src: `${dir}/campaign-tiles.jpg`,
          alt: 'Nine-tile campaign grid mixing repeated SORA lettering with product photography',
          ...S,
        },
        {
          src: `${dir}/campaign-pouch.jpg`,
          alt: 'Poster of the kraft matcha pouch behind repeated SORA lettering',
          ...P,
        },
        {
          src: `${dir}/campaign-cup.jpg`,
          alt: 'Poster of a steaming takeaway cup behind repeated SORA lettering',
          ...P,
        },
        {
          src: `${dir}/campaign-box.jpg`,
          alt: 'Poster of the open ceremonial kit box behind repeated SORA lettering',
          ...P,
        },
        {
          src: `${dir}/campaign-tin.jpg`,
          alt: 'Poster of a stacked matcha tin behind repeated SORA lettering',
          ...P,
        },
      ],
    },

    {
      type: 'heading',
      marker: 'F',
      title: 'In the world',
      note: 'Shelf, street, table',
    },
    {
      type: 'full',
      image: {
        src: `${dir}/retail-shelf.jpg`,
        alt: 'The cream SORA tin on a wooden retail shelf between artisanal coffee bags and chocolate bars',
        ...P,
      },
      caption: 'On shelf, among the category it had to stand apart from',
    },
    {
      type: 'pair',
      images: [
        {
          src: `${dir}/street.jpg`,
          alt: 'Three people walking a city street carrying SORA takeaway cups',
          ...P,
        },
        {
          src: `${dir}/cafe.jpg`,
          alt: 'A SORA tin and matcha bowl on a café table in daylight',
          ...P,
        },
      ],
      captions: ['Street', 'Café'],
    },
    {
      type: 'pair',
      images: [
        {
          src: `${dir}/desk.jpg`,
          alt: 'SORA tin, stoneware bowl and gold scoop on a linen-covered desk beside a camera and notebook',
          width: 896,
          height: 1200,
        },
        {
          src: `${dir}/outdoors.jpg`,
          alt: 'Four people sitting on a blanket outdoors with books, a camera and a SORA tin',
          ...P,
        },
      ],
      captions: ['Desk', 'Outdoors'],
    },

    {
      type: 'heading',
      marker: 'G',
      title: 'The system, together',
      note: 'Two boards',
    },
    {
      type: 'pair',
      images: [
        {
          src: `${dir}/board-grid.jpg`,
          alt: 'Nine-tile brand board showing the logo, tins, powder, pouch, whisk and taglines',
          ...S,
        },
        {
          src: `${dir}/board-collateral.jpg`,
          alt: 'Collateral board showing the gift box, tote, both tins, stationery suite and whisking photography',
          ...P,
        },
      ],
      captions: ['Brand grid', 'Full collateral'],
    },
  ],

  seo: {
    description:
      'SORA — a ceremonial matcha identity covering mark, packaging across five formats, stationery, photography direction and a black-and-white typographic campaign.',
  },

  published: true,
};
