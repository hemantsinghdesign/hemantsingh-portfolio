import type { ProjectInput } from '@/types/content';

/**
 * HSBC — onboarding for international students.
 *
 * This case study follows the structure and words of the designer's own
 * presentation deck (Design_portfolio.pdf, slides 6–20) rather than a
 * narrative written for the website. Copy is taken verbatim from the deck
 * wherever possible; only grammar and readability are touched, never voice.
 * Unaffiliated with HSBC — a concept project, not commissioned work.
 *
 * Images live in /public/projects/hsbc-onboarding/.
 */

const dir = '/projects/hsbc-onboarding';

export const hsbcOnboarding: ProjectInput = {
  slug: 'hsbc-onboarding',
  index: '02',
  title: 'HSBC',
  kicker: 'Onboarding for international students',
  discipline: 'Brand experience · Service design',
  year: '2025',
  summary:
    'How might HSBC make international students feel welcomed — before asking them to become customers?',

  thumbnail: {
    src: `${dir}/tote-light.jpg`,
    blurDataURL: 'data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAMAAwDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAgMEBf/EAB8QAAIBAwUBAAAAAAAAAAAAAAECAwARIQQSEyIxUf/EABQBAQAAAAAAAAAAAAAAAAAAAAL/xAAWEQEBAQAAAAAAAAAAAAAAAAABABH/2gAMAwEAAhEDEQA/ANZ0lbaY3VV2kkN5iouXd2+5FI1k8qxMvISLWF7YzRy9WAHgAojsky//2Q==',
    alt: 'White HSBC tote bag with a red Warli peacock mark, standing in soft daylight',
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
    client: 'Concept project — unaffiliated with HSBC',
    role: 'Brand experience, service design',
    timeframe: 'University brief, extended independently for this case study',
    scope: 'Welcome letter · Debit card · Tote bag & bottle · Stationery & lanyard · Student kit & cap',
    tools: 'Illustrator · Photoshop · Figma',
    type: 'Service design · Brand experience',
  },

  // overview/approach/outcome are structured data only for this project —
  // the editorial layout (hero + blocks) carries the actual narrative.
  // Kept truthful to the deck rather than unused placeholder text.
  overview:
    'When students arrive in a new country, opening a bank account becomes one of their first essential tasks. Yet the experience often feels transactional at a time when reassurance matters most. This project explores how HSBC could transform onboarding into something that feels welcoming, supportive, and human.',
  approach: [
    'Reduce anxiety — the design should feel simple, reassuring, and easy to understand from the first interaction.',
    'Create familiarity — introduce subtle cultural references and welcoming touchpoints without overwhelming the HSBC brand.',
    'Build trust — every interaction should reinforce clarity, professionalism, and confidence.',
  ],
  outcome:
    "The final design system combines HSBC's trusted brand identity with subtle cultural storytelling. Every touchpoint shares the same visual language, creating a consistent and welcoming experience for international students from their first interaction onwards.",

  metrics: [
    { label: 'Touchpoints designed', value: '5' },
    { label: 'Design principles', value: '3' },
    { label: 'Languages explored', value: '4' },
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
          'Existing HSBC onboarding',
          'Student experiences',
          'Competitors',
          'Emotional design',
        ],
      },
      right: {
        title: 'What I found',
        text: "Students weren't only looking for a bank. They were looking for confidence.",
      },
    },

    {
      type: 'interlude',
      lines: [
        "Good onboarding isn't about opening an account.",
        "It's about helping someone feel at home.",
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
      text: "Rather than focusing only on banking, I explored how HSBC could become one of the first positive experiences for international students arriving in the UK. The concept was to transform a routine onboarding process into a thoughtful welcome experience through a collection of branded touchpoints that offer guidance, familiarity, and reassurance. To reinforce that sense of familiarity, I incorporated subtle Warli-inspired illustrations throughout the experience, creating a visual connection to home while respecting HSBC's existing brand identity.",
    },

    {
      type: 'visualLanguage',
      marker: 'D',
      title: 'Building a Familiar Visual Language',
      text: "HSBC already has a strong visual identity. Rather than replacing it, I extended it with subtle Warli-inspired illustrations that create familiarity for Indian students while preserving the brand's clarity and trust.",
      reference: {
        src: `${dir}/warli-reference.jpg`,
        blurDataURL: 'data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAMAAYDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAXEAEBAQEAAAAAAAAAAAAAAAAAAQJR/8QAFQEBAQAAAAAAAAAAAAAAAAAAAgP/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwC9dW9CCZP/2Q==',
        alt: 'Pencil reference sheet of traditional Warli folk-art motifs — dancers, huts, trees, and geometric patterns — used as the source material for the illustration style',
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
      caption: 'An early direction, localised — "Welcome to your journey," in Chinese',
    },
    {
      type: 'prose',
      text: "My initial explorations focused primarily on creating a premium-looking debit card. Although visually appealing, the concept didn't fully address the emotional needs identified during research. This exploration helped me realise that the project needed to extend beyond a single product and become a complete welcome experience.",
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
          alt: 'Two HSBC Visa card designs — an ivory card with a peacock watermark and a red card with a heritage skyline — leaning against each other',
          width: 1800,
          height: 1440,
        },
      ],
      captions: [
        'Welcome letter — a reassuring first interaction',
        'Debit card — minimal, with subtle Warli-inspired details',
      ],
    },
    {
      type: 'note',
      text: 'Two touchpoints, one language — warmth and restraint applied the same way whether the surface is paper or plastic.',
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
          alt: 'White HSBC tote bag standing upright in soft directional daylight',
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
      text: "The final design system combines HSBC's trusted brand identity with subtle cultural storytelling. Every touchpoint shares the same visual language, creating a consistent and welcoming experience for international students from their first interaction onwards.",
    },

    {
      type: 'prose',
      variant: 'reflection',
      text: "This project changed how I think about onboarding. I realised that trust isn't built through a logo — it's built through a series of small, reassuring interactions. That idea has influenced how I approach every project since.",
    },
  ],

  seo: {
    description:
      'HSBC — how might HSBC make international students feel welcomed before asking them to become customers? A brand experience and service design case study.',
  },

  published: true,
};
