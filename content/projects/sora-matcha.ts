import type { ProjectInput } from '@/types/content';

/**
 * SORA — ceremonial matcha.
 *
 * This file is the entire case study: prose, facts, and the order and
 * layout of every image. No component needs editing to change any of it.
 * Images live in /public/projects/sora-matcha/.
 *
 * Five of those files used to carry each other's names — `pouch.jpg` held
 * the ceremonial kit, `stationery.jpg` held the applications grid, and so
 * on round a five-file cycle — so every alt text and caption below
 * described an image the reader was not looking at. The files have been
 * renamed to match what is inside them. If artwork is ever re-exported,
 * open it before trusting the filename, then run `npm run blur`.
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
    blurDataURL: 'data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAMAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABgQF/8QAIxAAAgECBAcAAAAAAAAAAAAAAQIDABEEBSExEiIkUWFxkf/EABQBAQAAAAAAAAAAAAAAAAAAAAP/xAAVEQEBAAAAAAAAAAAAAAAAAAAAEf/aAAwDAQACEQMRAD8AwsT1BQRlbxoqtc21pHDmcKQxqS/KoGi+PdElRd7DerOM9h8o4Sv/2Q==',
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
    // Opens in daylight, not in the dark. The case study argues for
    // "natural daylight, soft shadows, no artificial colour"; opening on the
    // dark studio shot contradicted that before a word was read.
    {
      type: 'bleed',
      image: {
        src: `${dir}/tin-oak-window.jpg`,
        blurDataURL: 'data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAMAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAwX/xAAhEAACAQMEAwEAAAAAAAAAAAACAwEAESEEEhNxFDFRYf/EABUBAQEAAAAAAAAAAAAAAAAAAAME/8QAFxEBAQEBAAAAAAAAAAAAAAAAAQACEf/aAAwDAQACEQMRAD8AXWs8h3G5gAYDu2Dmbd+qaATaLPx1UnStl+qBbhE8zYpixRf9ir3GuMQoMfRqd1ycL//Z',
        alt: 'Open cream SORA tin of matcha powder beside a stoneware bowl of whisked matcha on an oak table in window light',
        ...P,
      },
      caption: 'The morning ritual, in the light the brand specifies',
    },

    { type: 'heading', marker: 'A', title: 'The mark', note: 'Sunrise over two leaves' },
    // The deboss macro is the single clearest statement of the mark.
    // Pairing it with the guidelines cover halved its scale for an image
    // that carries almost no information.
    {
      type: 'full',
      image: {
        src: `${dir}/mark-deboss.jpg`,
        blurDataURL: 'data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAMAAoDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAgMEBv/EABsQAAICAwEAAAAAAAAAAAAAAAABAhEDEjFh/8QAFAEBAAAAAAAAAAAAAAAAAAAAAf/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/ANIsqjKu+JDtiaLYdsC//9k=',
        alt: 'The SORA sunrise-and-leaves mark blind-debossed into textured uncoated paper',
        ...P,
      },
      caption: 'Blind deboss on uncoated stock',
    },
    {
      type: 'note',
      text: 'The mark is drawn on a single stroke weight so it holds at 6mm on a hang tag and at 300mm on a shopfront. The wordmark never sits closer to it than the height of the sun.',
    },
    {
      type: 'full',
      image: {
        src: `${dir}/lockup-board.jpg`,
        blurDataURL: 'data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAKAAwDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAwQFBv/EABsQAQACAwEBAAAAAAAAAAAAAAEAAgMRMRIj/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/ANNht8qKbXsNZBkqqjodRvEvjsD/2Q==',
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
    // Palette, icons and photography rules are reference slides, not
    // photography. At half and full width they competed with the artwork;
    // as a triptych the system is stated without breaking the tempo.
    {
      type: 'triptych',
      images: [
        {
          src: `${dir}/palette.jpg`,
          blurDataURL: 'data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAMAAkDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAQMEBv/EACEQAAEEAQMFAAAAAAAAAAAAAAEAAgMREgQGMRYhUVOh/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AKtRuiNkjDEybBxohwArtyj1fF6ZPiysgyAyJNcWl4DyUH//2Q==',
          alt: 'SORA colour palette: cream and deep green primaries with tan and sage secondaries',
          width: 896,
          height: 1200,
        },
        {
          src: `${dir}/icon-set.jpg`,
          blurDataURL: 'data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAMAAkDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAwQFBv/EABwQAAICAgMAAAAAAAAAAAAAAAABAgMSIREiYf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDUUPpD1IJyT6r5rFa0NZsD/9k=',
          alt: 'Ten line icons for tea, scoop, leaf, gift, steam, shipping, bowl, journal, whisk and sustainability',
          width: 896,
          height: 1200,
        },
        {
          src: `${dir}/photography-rules.jpg`,
          blurDataURL: 'data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAMAAkDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAQMEBf/EAB8QAAICAQQDAAAAAAAAAAAAAAECABESBBMxUQUiof/EABQBAQAAAAAAAAAAAAAAAAAAAAH/xAAVEQEBAAAAAAAAAAAAAAAAAAAAIf/aAAwDAQACEQMRAD8A39X5bZDhEGavj7ggS3ePQ+xrIrVkoNcWOIaHUKX/2Q==',
          alt: 'Annotated photography guidelines calling out natural daylight, soft shadows, minimal composition and no artificial colour',
          width: 896,
          height: 1200,
        },
      ],
      captions: ['Two primaries, two secondaries', 'Ten icons, one stroke weight', 'Photography written as rules'],
    },

    { type: 'heading', marker: 'C', title: 'Packaging', note: 'Split by light' },
    {
      type: 'pair',
      images: [
        {
          src: `${dir}/tin-green-foil.jpg`,
          blurDataURL: 'data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAMAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAwb/xAAeEAACAQMFAAAAAAAAAAAAAAABAgADESESE0Fhof/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCccgUww5bT5Djulxkk5vD2x3A//9k=',
          alt: 'Deep green gift tin with the SORA wordmark in gold foil, on dark slate',
          ...P,
        },
        {
          src: `${dir}/tin-cream.jpg`,
          blurDataURL: 'data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAMAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABQD/xAAdEAACAgIDAQAAAAAAAAAAAAABAgADERITIUFS/8QAFAEBAAAAAAAAAAAAAAAAAAAAAv/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AFwh1rZfbApyPIlrDmvdwA2OjkdS5rPqEn//2Q==',
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
          blurDataURL: 'data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAMAAoDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAgMEBv/EAB4QAAEEAQUAAAAAAAAAAAAAAAEAAgMRIRITUmGh/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDOOw0Gsl1Ia6Kskja6tTQaStqPj6iv/9k=',
          alt: 'Green tin variant with the wordmark debossed rather than foiled',
          ...P,
        },
        {
          src: `${dir}/pouch.jpg`,
          blurDataURL: 'data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAMAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABAIF/8QAIxAAAgECBAcAAAAAAAAAAAAAAQIEAAMFERIhFSMxQVKhwf/EABUBAQEAAAAAAAAAAAAAAAAAAAID/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8ARDsR1w8SLloO2orv33y+0w4XEzPK9msxpbrCFpURU16sgD1qeJSPIVM3/9k=',
          alt: 'Cream 30g resealable matcha pouch in raking daylight',
          ...P,
        },
        {
          src: `${dir}/carrier-bag.jpg`,
          blurDataURL: 'data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAMAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAwIG/8QAGhAAAgMBAQAAAAAAAAAAAAAAAREAAgMhMf/EABQBAQAAAAAAAAAAAAAAAAAAAAL/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDQ51Z9SKiqRmBQKoXXEcJP/9k=',
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
          blurDataURL: 'data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAMAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAwb/xAAdEAACAQQDAAAAAAAAAAAAAAABAgADERIhQVFh/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AJ5yBTDdtjaFHdbjZJ3fiHgPYH//2Q==',
          alt: 'Deep green takeaway cup with a gold SORA wordmark and gold rim line',
          ...P,
        },
        {
          src: `${dir}/cup-cream.jpg`,
          blurDataURL: 'data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAMAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABQH/xAAdEAACAgIDAQAAAAAAAAAAAAABAgARAzEEEyFS/8QAFAEBAAAAAAAAAAAAAAAAAAAAAv/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AGFx2iMNlwtRGoeeQ7KAa8N6k7sn1Cb/2Q==',
          alt: 'Cream takeaway cup with the SORA mark and a green rim line',
          ...P,
        },
      ],
      captions: ['Takeaway cup, gift range', 'Takeaway cup, retail range'],
    },
    {
      type: 'full',
      image: {
        src: `${dir}/retail-shelf.jpg`,
        blurDataURL: 'data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAMAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABAP/xAAfEAACAAYDAQAAAAAAAAAAAAABAgADBBExURIhccH/xAAUAQEAAAAAAAAAAAAAAAAAAAAD/8QAFREBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhEDEQA/AE1iqlBNea7OuuiDn7BlWp4i2LbEMqHMugmsApNjkexBXPEdLjQgix//2Q==',
        alt: 'The cream SORA tin on a wooden retail shelf between artisanal coffee bags and chocolate bars',
        ...P,
      },
      caption: 'On shelf, among the category it had to stand apart from',
    },

    { type: 'heading', marker: 'D', title: 'Gifting', note: 'The ceremonial kit' },
    {
      type: 'full',
      image: {
        src: `${dir}/kit-box.jpg`,
        blurDataURL: 'data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAMAAoDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAQIEBf/EACAQAAIBAwQDAAAAAAAAAAAAAAECAwAEEQUhMVESE3H/xAAVAQEBAAAAAAAAAAAAAAAAAAACA//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/ANi9ktyhPsUP319qZbOQqDmPcUY4lu4nSUZwORzTJptsEUeBOANyTUzf/9k=',
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
          blurDataURL: 'data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAMAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAwQF/8QAHBABAAICAwEAAAAAAAAAAAAAAQIRACEDIlFB/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDC5+SQ9wLdV45JKdSSjTjTkpt+VgUeZR//2Q==',
          alt: 'Overhead flat lay of the ceremonial kit on charcoal linen with a green tin and gold scoop',
          ...P,
        },
        {
          src: `${dir}/kit-light.jpg`,
          blurDataURL: 'data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAMAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABAMF/8QAHxAAAgIBBAMAAAAAAAAAAAAAAQIDIQAEERIxQVFS/8QAFAEBAAAAAAAAAAAAAAAAAAAAAv/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AN5NXI2smheFlRNuLhgQ1XXjGV9DBMNpQwJvvK8j7wE//9k=',
          alt: 'Overhead flat lay of the ceremonial kit on cream linen with the retail tin and gold scoop',
          ...P,
        },
      ],
      captions: ['Kit, dark set', 'Kit, light set'],
    },
    {
      type: 'note',
      text: 'The kit is the one place the range is allowed to be generous — whisk, scoop, bowl and tin in a box that opens flat. Everything else here is made to be bought again. This is made to be given once, which is why it gets the foil.',
    },

    {
      type: 'heading',
      marker: 'E',
      title: 'Stationery and applications',
      note: 'Applied across every surface',
    },
    {
      type: 'pair',
      images: [
        {
          src: `${dir}/stationery.jpg`,
          blurDataURL: 'data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAMAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAwIG/8QAHRAAAQQCAwAAAAAAAAAAAAAAAQACEVESIQMiMf/EABQBAQAAAAAAAAAAAAAAAAAAAAL/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDSN6SXPcQLpXIOwi5jhi4e7TAyJtEn/9k=',
          alt: 'Business cards, envelope, letterhead, notebook, stickers and gift card in the SORA identity',
          ...P,
        },
        {
          src: `${dir}/applications.jpg`,
          blurDataURL: 'data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAMAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABAIF/8QAIxAAAgECBQUBAAAAAAAAAAAAAQIDAAQREyExQRIyUWHR8P/EABQBAQAAAAAAAAAAAAAAAAAAAAL/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDaivEnOXHIrlB1ajD9xS17Rq23gUBwtvAZo0QOVHHqoW8nKg5mGI2Cj5RJ/9k=',
          alt: 'Application grid — gift box, carrier bag, stoneware bowl, tin, shopfront window, tote bag and wall signage all carrying the mark',
          ...P,
        },
      ],
      captions: [
        'Cards, letterhead, stickers, notebook',
        'The same mark at tote and shopfront scale',
      ],
    },
    // A dark full-bleed before the black campaign band, so the page
    // darkens gradually instead of cutting from cream to ink. It also
    // breaks the pair/full metronome that had run for nine blocks.
    {
      type: 'bleed',
      image: {
        src: `${dir}/hero-tin-bowl.jpg`,
        blurDataURL: 'data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAMAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABgQF/8QAIxAAAgECBAcAAAAAAAAAAAAAAQIDABEEBSExEiIkUWFxkf/EABQBAQAAAAAAAAAAAAAAAAAAAAP/xAAVEQEBAAAAAAAAAAAAAAAAAAAAEf/aAAwDAQACEQMRAD8AwsT1BQRlbxoqtc21pHDmcKQxqS/KoGi+PdElRd7DerOM9h8o4Sv/2Q==',
        alt: 'Deep green SORA tin with its lid lying beside it and a stoneware bowl of matcha powder, on a dark wooden table by a shoji screen',
        ...P,
      },
      caption: 'The same system, after dark',
    },

    {
      type: 'gallery',
      title: 'The campaign',
      note: 'Counterweight',
      text: 'The packaging holds still, so the campaign does the shouting. One compressed grotesque, the name repeated until it stops being a word and becomes a pattern.',
      images: [
        {
          src: `${dir}/campaign-billboard.jpg`,
          blurDataURL: 'data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAMAAkDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABQIG/8QAIxAAAgEDAQkAAAAAAAAAAAAAAQIRAAMSBBMiMVFUYXGh0f/EABQBAQAAAAAAAAAAAAAAAAAAAAH/xAAVEQEBAAAAAAAAAAAAAAAAAAABAP/aAAwDAQACEQMRAD8Ai+pOnuu4VrktLZETygTQWN7pb/v5WiXRDeXb3ipfKCRxB8UrPYULIX//2Q==',
          alt: 'SORA typographic poster installed in a street-side billboard beside a bike rack',
          width: 1786,
          height: 2297,
        },
        {
          src: `${dir}/campaign-bag.jpg`,
          blurDataURL: 'data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAMAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABQT/xAAkEAACAgEDAgcAAAAAAAAAAAABAgMRAAQSIhMhMUFRgZGxwf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCcySK4URRsVfaGA9QPz6xCPS3GheRwxAsXVH4wvUvJCSEkbnKASavv28axQzdImNVG1OI5N5e+B//Z',
          alt: 'Black and white poster of a carrier bag behind repeated SORA lettering',
          ...P,
        },
        {
          src: `${dir}/campaign-grid.jpg`,
          blurDataURL: 'data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAMAAoDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAgMEBf/EACIQAAIBAwMFAQAAAAAAAAAAAAECAwARIQQGMRIyQWKB4f/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCptyatVIMMIY9hsbfc0abi1DICY0uRfj9rKMCNLKMgRxO4A8nHNIDkADpXHqKD/9k=',
          alt: 'Poster of stacked SORA wordmarks interleaved with whisk and bowl photography',
          ...P,
        },
        {
          src: `${dir}/campaign-tiles.jpg`,
          blurDataURL: 'data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAMAAwDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAIDBP/EACMQAAIBAgQHAAAAAAAAAAAAAAECAwARBBIhcRMxMkFRYeH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AIkjlRiozDqzHvfxtSKAHkJQm7X1a1tqsYw+HhYswbhqzMDYsffysSzyqzgSNbMeZOlB//9k=',
          alt: 'Nine-tile campaign grid mixing repeated SORA lettering with product photography',
          ...S,
        },
        {
          src: `${dir}/campaign-pouch.jpg`,
          blurDataURL: 'data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAMAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABQIE/8QAIxAAAgIBAQkBAAAAAAAAAAAAAQIDEQASBBMhIiMxQYGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AhnWKOPUI2kL6AQPB4fPmaIoUaJC05DFRYDj8wva0aNVVZXrfBaNHv6xKlh6SoCqcosm6HvCv/9k=',
          alt: 'Poster of the matcha pouch behind repeated SORA lettering',
          ...P,
        },
        {
          src: `${dir}/campaign-cup.jpg`,
          blurDataURL: 'data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAMAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABQID/8QAIRAAAgEEAgIDAAAAAAAAAAAAAQIDAAQRIRMUBXESIjH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8APmkaFmMhOQxCFdY1ScHXaCNnu1DFQSOVRg49Vh5VEa3QFQS84jLHOQD+1XDax/Tp2zfHWWj2fdB//9k=',
          alt: 'Poster of a takeaway cup behind repeated SORA lettering',
          ...P,
        },
        {
          src: `${dir}/campaign-box.jpg`,
          blurDataURL: 'data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAMAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABAMF/8QAIRABAQABBAEFAQAAAAAAAAAAAQIDAAQREjEhIlGBseH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AAXW03tOWS48FL45+DWvi2vbFDWSymRQf5oOaqLFrszSHaR/TVinCGKWmY9pzTz6feg//2Q==',
          alt: 'Poster of the open ceremonial kit box behind repeated SORA lettering',
          ...P,
        },
        {
          src: `${dir}/campaign-tin.jpg`,
          blurDataURL: 'data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAMAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABAX/xAAfEAADAAICAgMAAAAAAAAAAAABAgMRIQAEElETMZH/xAAUAQEAAAAAAAAAAAAAAAAAAAAB/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8APW7QeK/HFyX8PL0D63xs5TM0L3IYgZAcaP5yX2g0shaMQ1VGCAcb+xrXLbdt5sUCJhTga4F//9k=',
          alt: 'Poster of a stacked matcha tin behind repeated SORA lettering',
          ...P,
        },
      ],
    },

    {
      type: 'heading',
      marker: 'F',
      title: 'The system, together',
      note: 'Two boards',
    },
    {
      type: 'full',
      image: {
        src: `${dir}/board-grid.jpg`,
        blurDataURL: 'data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAMAAwDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAwX/xAAgEAABAwQDAQEAAAAAAAAAAAABAgMRAAQSMQUhQTJh/8QAFQEBAQAAAAAAAAAAAAAAAAAAAgP/xAAWEQEBAQAAAAAAAAAAAAAAAAAhAAH/2gAMAwEAAhEDEQA/ALfJ3Jty0Q3mSTEmNRQOciLQhtSFKJGX1qfO6VJUJxWoYO6B317VLH9JqeLPS//Z',
        alt: 'Nine-tile brand board showing the logo, tins, powder, pouch, whisk and taglines',
        ...S,
      },
      caption: 'The system on one board',
    },
    // Closes on the argument rather than an inventory. This spread states
    // the light-and-shadow idea the whole range is split on, which is a
    // stronger last impression than a second contact sheet.
    {
      type: 'bleed',
      image: {
        src: `${dir}/editorial-spread.jpg`,
        blurDataURL: 'data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAMAAkDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAwX/xAAjEAABAgUDBQAAAAAAAAAAAAABAgQAAwUR0RUiMVFUYZGS/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/ALjqoMWe6e7WgXI4OIfVGncn5OIm1Kkt3CbLKxeYVGxHNj4h9NkdV+xiA//Z',
        alt: 'SORA editorial spread pairing a daylight still life with a dark studio still life under the line about light and shadow',
        // Not ...P — this one is 896×1200.
        width: 896,
        height: 1200,
      },
    },

    {
      type: 'prose',
      variant: 'reflection',
      text: 'SORA taught me that restraint only reads as confidence when something else is carrying the volume. For most of the four weeks I thought the quiet was the whole idea — then I mocked the cream tin onto a shelf beside coffee bags and chocolate bars and saw that quiet, on a shelf, is just invisible. The campaign came out of that, not out of the brief. It exists so the packaging can afford to stay still.\n\nThe part I would still want to test is the part a concept project cannot answer. Everything here depends on things a screen flatters — the deboss, the foil, the weight of an uncoated stock — and none of it has met a printer. Until it does, this is a set of decisions rather than a finished system, which is why I wrote the photography and the margins down as rules instead of leaving them to taste.',
    },
  ],


  seo: {
    description:
      'SORA — a ceremonial matcha identity covering mark, packaging across five formats, stationery, photography direction and a black-and-white typographic campaign.',
  },

  published: true,
};
