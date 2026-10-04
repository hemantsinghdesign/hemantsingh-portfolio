import type { ProjectInput } from '@/types/content';

/**
 * HSBC — a welcome experience for international students.
 *
 * Follows the structure of the designer's own presentation deck
 * (Design_portfolio.pdf, slides 6–20), edited for accuracy:
 *
 * - It is a brand experience concept, unaffiliated with HSBC. Nothing on the
 *   page may suggest HSBC commissioned, endorsed or implemented it.
 * - "Service design" was dropped from the disciplines. The finished work is
 *   a set of branded touchpoints; there is no journey map or service
 *   blueprint among the assets to support the larger claim.
 * - The research was desk research (no interviews). Its conclusion is
 *   presented as the premise the design was built on, not as a finding
 *   about what students feel.
 *
 * Images live in /public/projects/hsbc-onboarding/.
 */

const dir = '/projects/hsbc-onboarding';

export const hsbcOnboarding: ProjectInput = {
  slug: 'hsbc-onboarding',
  index: '02',
  title: 'HSBC',
  kicker: 'Welcome experience for international students',
  discipline: 'Brand experience · Illustration · Print',
  year: '2025',
  summary:
    'A concept for how HSBC could welcome international students before asking them to open an account, through a set of Warli-illustrated touchpoints.',

  thumbnail: {
    src: `${dir}/tote-held.jpg`,
    blurDataURL: 'data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAMAAwDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABAX/xAAgEAACAgEDBQAAAAAAAAAAAAABAwIRAAQSITFhcoHh/8QAFAEBAAAAAAAAAAAAAAAAAAAAAv/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AKK9OWqMrAF1d9rwEk88PaB5fMssRCKwsXtu/eAamMJAAnphJ//Z',
    alt: 'A hand holding out a white HSBC tote bag printed with a red Warli-inspired peacock',
    width: 1600,
    height: 1600,
  },

  hero: {
    lines: [
      'Moving to a new country is exciting.',
      "Managing your money there shouldn't feel overwhelming.",
    ],
  },

  meta: {
    client: 'Brand experience concept. Not commissioned or endorsed by HSBC',
    role: 'Concept, illustration, touchpoint and print design',
    timeframe: 'December 2024 – May 2025',
    scope: 'Welcome letter · Debit card · Tote bag & bottle · Stationery & lanyard · Student kit & cap',
    tools: 'Illustrator · Photoshop · Figma',
    type: 'Brand experience concept',
  },

  // overview/approach/outcome are structured data only for this project —
  // the editorial layout (hero + blocks) carries the actual narrative.
  // Kept truthful to the deck rather than unused placeholder text.
  overview:
    'Opening a bank account is one of the first things a student has to do in a new country. This concept asks how HSBC could make that first contact feel like a welcome, at a moment when a student is likely to need reassurance more than a product.',
  approach: [
    'Reduce anxiety. The design should feel simple, reassuring, and easy to understand from the first interaction.',
    'Create familiarity. Introduce subtle cultural references and welcoming touchpoints without overwhelming the HSBC brand.',
    'Build trust. Every interaction should reinforce clarity, professionalism, and confidence.',
  ],
  outcome:
    "A set of welcome touchpoints that keep HSBC's identity and add Warli-inspired drawing: a welcome letter, debit card designs, a student kit box, a tote bag, bottles, a lanyard, stationery and a cap.",

  /* Every figure here is countable on the page itself.
     Two figures have been through this slot and both were wrong:
     "Languages explored: 4" (only the Chinese card appears anywhere, so a
     reader counting finds one) and then "Warli motifs drawn: 3", taken from
     the three motif SVGs below. That one undercounts: the peacock rides on
     the cards, tote, letter, notebook and gift box, the elephants are on the
     welcome letter, and the mandala is on the cap — none of them in the set
     of three. The palette is the honest third figure, because the visual
     language block prints exactly those three swatches and labels them.
     If a figure cannot be recounted from what is on screen, it does not
     belong in this row. */
  metrics: [
    { label: 'Touchpoints designed', value: '5' },
    { label: 'Design principles', value: '3' },
    { label: 'Brand colours', value: '3' },
  ],

  blocks: [
    {
      type: 'note',
      text: 'How might HSBC make international students feel welcomed before asking them to become customers?',
    },

    {
      type: 'compare',
      marker: 'A',
      title: 'Research',
      left: {
        title: 'What I looked at',
        items: [
          'HSBC’s existing student onboarding',
          'International students’ experiences of arriving',
          'Other banks’ student offers',
          'Emotional design',
        ],
      },
      right: {
        title: 'The premise I took from it',
        text: 'A student who has just arrived needs reassurance before they need a product. Every touchpoint was designed around that idea.',
      },
    },

    {
      type: 'interlude',
      lines: [
        'The first thing a bank sends a new student',
        'can help them feel at home.',
      ],
    },

    {
      type: 'columns',
      marker: 'B',
      title: 'Design Principles',
      note: 'These principles guided every design decision throughout the project.',
      items: [
        {
          marker: '01',
          title: 'Reduce Anxiety',
          body: 'Moving to a new country can be overwhelming. The design should feel simple, reassuring, and easy to understand from the very first interaction.',
        },
        {
          marker: '02',
          title: 'Create Familiarity',
          body: 'Introduce subtle cultural references and welcoming touchpoints that help students feel comfortable without overwhelming the HSBC brand.',
        },
        {
          marker: '03',
          title: 'Build Trust',
          body: 'Every interaction should reinforce clarity, professionalism, and confidence, helping students feel supported as they settle into a new environment.',
        },
      ],
    },

    { type: 'heading', marker: 'C', title: 'Designing a Welcome Experience' },
    {
      type: 'prose',
      text: "The concept turns a routine account opening into a welcome: a letter, a debit card, a student kit and a few everyday things a student would actually use in their first weeks in the UK.\n\nThe brief covered international students in general. For the visual treatment I focused on one group, students arriving from India, and drew on Warli, a folk-art tradition from Maharashtra, so the touchpoints carry a reference to home. The same approach could be localised for other groups; an early card direction, shown below, set its greeting in Chinese.",
    },

    {
      type: 'visualLanguage',
      marker: 'D',
      title: 'Building a Familiar Visual Language',
      text: "I kept HSBC's identity intact, its red, white and grey and its logo, and added a layer of Warli-inspired line drawing on top. The drawings are meant to feel familiar to Indian students without competing with the bank's own marks.",
      reference: {
        src: `${dir}/warli-reference.jpg`,
        blurDataURL: 'data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAMAAYDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAXEAEBAQEAAAAAAAAAAAAAAAAAAQJR/8QAFQEBAQAAAAAAAAAAAAAAAAAAAgP/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwC9dW9CCZP/2Q==',
        alt: 'Pencil reference sheet of traditional Warli folk-art motifs including dancers, huts, trees and geometric patterns, used as the source material for the illustration style',
        width: 694,
        height: 1400,
      },
      palette: [
        { hex: '#DB0011', label: 'Signal red' },
        { hex: '#FFFFFF', label: 'White' },
        { hex: '#888888', label: 'Grey' },
      ],
      motifs: [
        { src: `${dir}/motifs/dancer.svg`, label: 'Dancer' },
        { src: `${dir}/motifs/musician.svg`, label: 'Musician' },
        { src: `${dir}/motifs/lotus.svg`, label: 'Lotus' },
      ],
    },

    { type: 'heading', marker: 'E', title: 'Exploring Different Directions' },
    {
      type: 'full',
      image: {
        src: `${dir}/exploration-metal-card.jpg`,
        blurDataURL: 'data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAIAAwDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAT/xAAhEAACAgIBBAMAAAAAAAAAAAABAgMRAAQSBRUhIiNBkf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCrd6iibc0L7M/JZiGCl1Kgn6I8VVZD3SNHkE29vAcvjosfWhRv9xjA/9k=',
        alt: 'Early premium metal debit card concept, shown in a dark studio render with the greeting "Welcome to your journey" set in Chinese',
        width: 1800,
        height: 1241,
      },
      caption: 'An early direction, localised. "Welcome to your journey," in Chinese',
    },
    {
      type: 'prose',
      text: "My first direction was a single metal debit card. It looked good, but it was one product, and it did little for a student in their first weeks. That is what pushed the project towards a set of touchpoints instead.",
    },

    { type: 'heading', marker: 'F', title: 'Touchpoints' },

    {
      type: 'pair',
      images: [
        {
          src: `${dir}/welcome-letter.jpg`,
          blurDataURL: 'data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAJAAwDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAwb/xAAaEAEAAwADAAAAAAAAAAAAAAABAAIRIUFh/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AKjUqtU06Yg8G5vkOsSB/9k=',
          alt: 'HSBC welcome letter and envelope, illustrated with a peacock and a pair of facing elephants',
          width: 1800,
          height: 1280,
        },
        {
          src: `${dir}/cards.jpg`,
          blurDataURL: 'data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAKAAwDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAQIEBf/EAB4QAAEEAwADAAAAAAAAAAAAAAEAAgMRBBIxFEFR/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/xAAWEQEBAQAAAAAAAAAAAAAAAAAAESH/2gAMAwEAAhEDEQA/ANzMyosQtEpI3vU1fEcaTyIGShpbsOH0rC1rugGvoSEUi5H/2Q==',
          alt: 'Two HSBC Visa card designs leaning against each other, an ivory card with a peacock watermark and a red card with a heritage skyline',
          width: 1800,
          height: 1440,
        },
      ],
      captions: [
        'Welcome letter, a reassuring first interaction',
        'Debit card, minimal with subtle Warli-inspired details',
      ],
    },
    {
      type: 'note',
      text: 'Two touchpoints, one language. Warmth and restraint applied the same way whether the surface is paper or plastic.',
    },

    {
      type: 'gallery',
      title: 'Tote Bag and Bottle',
      text: 'Everyday essentials designed to extend the welcome experience beyond the bank.',
      images: [
        {
          src: `${dir}/tote-held.jpg`,
          blurDataURL: 'data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAMAAwDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABAX/xAAgEAACAgEDBQAAAAAAAAAAAAABAwIRAAQSITFhcoHh/8QAFAEBAAAAAAAAAAAAAAAAAAAAAv/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AKK9OWqMrAF1d9rwEk88PaB5fMssRCKwsXtu/eAamMJAAnphJ//Z',
          alt: 'A hand holding out a white HSBC tote bag printed with a red Warli peacock',
          width: 1600,
          height: 1600,
        },
        {
          src: `${dir}/bottle-white.jpg`,
          blurDataURL: 'data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAJAAwDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAQIDBf/EABwQAAIDAQADAAAAAAAAAAAAAAECAAMRMRIhUf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDfe1kZcB8es2cEpTYzVguMJ958EVewwP/Z',
          alt: 'White HSBC water bottle with a red Warli dancer border at the base',
          width: 1800,
          height: 1280,
        },
        {
          src: `${dir}/bottle-red.jpg`,
          blurDataURL: 'data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAJAAwDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAQIDBf/EAB4QAAICAQUBAAAAAAAAAAAAAAECAAMRBCEjMVGR/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDce+1dQiqnEFLWOR8Al6bGasFxgnfHgir3DCv/2Q==',
          alt: 'Red HSBC water bottle with a white Warli dancer border at the base',
          width: 1800,
          height: 1280,
        },
        {
          src: `${dir}/tote-light.jpg`,
          blurDataURL: 'data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAMAAwDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAgMEBf/EAB8QAAIBAwUBAAAAAAAAAAAAAAECAwARIQQSEyIxUf/EABQBAQAAAAAAAAAAAAAAAAAAAAL/xAAWEQEBAQAAAAAAAAAAAAAAAAABABH/2gAMAwEAAhEDEQA/ANZ0lbaY3VV2kkN5iouXd2+5FI1k8qxMvISLWF7YzRy9WAHgAojsky//2Q==',
          alt: 'White HSBC tote bag hanging from the back of a wooden chair in soft directional daylight',
          width: 1600,
          height: 1600,
        },
      ],
    },

    {
      type: 'pair',
      images: [
        {
          src: `${dir}/lanyard-twist.jpg`,
          blurDataURL: 'data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAIAAwDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAIF/8QAGhABAAIDAQAAAAAAAAAAAAAAAQARAgNBEv/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDZfbsoax6hLCu3EQP/2Q==',
          alt: 'White HSBC lanyard patterned with a small repeating Warli motif, coiled with its metal clip visible',
          width: 1800,
          height: 1152,
        },
        {
          src: `${dir}/notebook-pen.jpg`,
          blurDataURL: 'data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAJAAwDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAQIDBv/EAB0QAAICAgMBAAAAAAAAAAAAAAECABEDIQQTUeH/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABYRAQEBAAAAAAAAAAAAAAAAAAARIf/aAAwDAQACEQMRAD8A1HKd1RutTYXRHtH5DgLtgxtkFOVBYVW63LGLC3H/2Q==',
          alt: 'Red and white HSBC welcome notebooks reading "Together We Thrive" beside a branded pen',
          width: 1800,
          height: 1280,
        },
      ],
      captions: ['Lanyard', 'Stationery'],
    },
    {
      type: 'note',
      text: 'Small details that create consistency across every interaction with the brand.',
    },

    {
      type: 'pair',
      images: [
        {
          src: `${dir}/student-kit-box.jpg`,
          blurDataURL: 'data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAJAAwDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAwIG/8QAGhABAAIDAQAAAAAAAAAAAAAAAQACAxEhQf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDV5btKnU75IMuRDdHcZhsD/9k=',
          alt: 'White HSBC gift box and carrier bag with a peacock mark and Warli dancer border on the lid',
          width: 1800,
          height: 1280,
        },
        {
          src: `${dir}/cap-detail.jpg`,
          blurDataURL: 'data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAIAAwDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAMG/8QAGxAAAQUBAQAAAAAAAAAAAAAAAAECAxEhMXH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A0sc1olJ6Xa/N6AB//9k=',
          alt: 'White cap with a red circular Warli mandala and HSBC logo on the front, shown beside a side view with dancing figures embroidered along the brim',
          width: 1800,
          height: 1260,
        },
      ],
      captions: ['Student kit box', 'Cap'],
    },

    {
      type: 'prose',
      text: "Every touchpoint uses HSBC's red, white and grey with the same Warli-inspired line drawing, so the letter, the card, the kit and the merchandise read as one welcome.",
    },

    {
      type: 'prose',
      variant: 'reflection',
      text: "The metal card taught me the most. It was the most polished thing I made and it answered the wrong question. Once I treated the welcome as a sequence of small things a student receives in their first weeks, the design had a job to do.\n\nThis is a proposal. Whether the sequence actually helps students settle in is something I would want to test with them before taking it further.",
    },
  ],

  seo: {
    description:
      'HSBC welcome experience concept for international students: Warli-inspired illustration across a welcome letter, debit cards, a student kit and everyday merchandise. Not commissioned by HSBC.',
  },

  published: true,
};
