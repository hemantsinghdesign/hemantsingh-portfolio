import type { ProjectInput } from '@/types/content';

/**
 * TADKA TRAIL — cultural branding, Madhya Pradesh.
 *
 * Built to the approved Editorial Blueprint. The governing rule, which
 * decides every ordering and sizing choice in this file:
 *
 *   Packaging is evidence. Culture is the story.
 *
 * So the concept, the art forms, the hand-drawn patterns and the story cards
 * come early and large; the dielines, the wordmark and the pack shots come
 * late and small. A reader who leaves before the packaging should still
 * understand the project.
 *
 * All copy is taken from the project's own sketchbook, story cards and the
 * accompanying research report. None of it is written for the website.
 *
 * The report describes an earlier direction in places — a turmeric and chilli
 * palette, truck art and henna reference, a three-layer tiffin structure. The
 * finished work went elsewhere, so none of that appears here: the case study
 * shows the project that exists, not the one that was proposed. What is taken
 * from the report is the part that still holds — the research question, the
 * competitor picture, and the limitations.
 */

const dir = '/projects/tadka-trail';

const PAGE = { width: 1415, height: 1900 } as const; // sketchbook sheet
const CARD = { width: 2400, height: 1972 } as const; // story card
const PHOTO = { width: 2200, height: 1467 } as const; // final photography

export const tadkaTrail: ProjectInput = {
  slug: 'tadka-trail',
  index: '03',
  title: 'Tadka Trail',
  kicker: 'Cultural branding',
  discipline: 'Brand identity · Illustration · Packaging',
  year: '2025',
  summary:
    'A food brand for international students from Madhya Pradesh — built so that a meal arrives with the story of where it comes from.',

  thumbnail: {
    src: `${dir}/jharokha-hero.png`,
    blurDataURL: 'data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAMAAgDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAQF/8QAHxAAAQMDBQAAAAAAAAAAAAAAAQAREgMxQQIEExQj/8QAFAEBAAAAAAAAAAAAAAAAAAAAAv/EABYRAQEBAAAAAAAAAAAAAAAAAAABAv/aAAwDAQACEQMRAD8AxSag2QqxHEdFsO1kU8vODButLN0QzCr/2Q==',
    alt: 'Illustrated jharokha window with a tribal woman of Madhya Pradesh cooking inside it, a heritage fort behind her',
    width: 1104,
    height: 1704,
  },

  /* The drawing opens the case. Nothing in front of it — a jharokha is a
     window, and a window does not need a caption. */
  hero: {
    image: {
      src: `${dir}/jharokha-hero.png`,
      blurDataURL: 'data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAMAAgDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAQF/8QAHxAAAQMDBQAAAAAAAAAAAAAAAQAREgMxQQIEExQj/8QAFAEBAAAAAAAAAAAAAAAAAAAAAv/EABYRAQEBAAAAAAAAAAAAAAAAAAABAv/aAAwDAQACEQMRAD8AxSag2QqxHEdFsO1kU8vODButLN0QzCr/2Q==',
      alt: 'Illustrated jharokha window in deep green and orange, a tribal woman of Madhya Pradesh cooking inside it beneath a heritage fort',
      width: 1104,
      height: 1704,
    },
  },

  meta: {
    client: 'Final Major Project — MA Graphic Design, Coventry University',
    role: 'Cultural research, brand strategy, illustration, pattern design, packaging, bilingual copy',
    timeframe: '2025',
    scope: 'Illustration · pattern system · packaging · story cards · print craft',
    tools: 'Illustrator · Photoshop · InDesign · lino cutting · block printing',
  },

  overview:
    'Madhya Pradesh is called the heart of India and its food is a blend of tribal, Mughal, Rajput and Maratha influence — and in global markets it is almost entirely unexplored. Meal-kit brands sell Indian food abroad as convenience: recipes adapted to general palates, no story behind the dish, nothing of where it came from. For a student living away from home, that misses the point of the meal entirely.',

  approach: [
    'Built the identity on a jharokha — an ornamental Indian window whose whole purpose is to look out from, and to be looked into. It carries the tribal woman cooking, the heritage fort, and the map of the state.',
    'Studied four folk art forms of Madhya Pradesh — Bhil, Mandana, Bhilala and Pithora — before drawing anything, so the motifs are learned rather than borrowed.',
    'Drew every pattern by hand on grid paper first, then digitised them into a repeatable system for packaging.',
    'Cut and printed the mark by hand in lino, to test how the illustration behaves as ink on paper rather than as vector on screen.',
    'Wrote a story card for each daal — its region, its folk story and its benefit — set in Hindi and English at equal weight, so the language is part of the artefact rather than a translation of it.',
  ],

  outcome:
    'A complete cultural brand — illustrated mark, hand-drawn pattern system, four-colour palette, bilingual story cards for three regional daals, and packaging built around them — where the meal is the delivery mechanism and the story is the product.',

  metrics: [
    { label: 'Folk art forms studied', value: '4' },
    { label: 'Regions mapped to daals', value: '3' },
    { label: 'Languages, equal weight', value: '2' },
  ],

  blocks: [
    /* 02 — WHY THIS EXISTS ----------------------------------------------- */
    {
      type: 'prose',
      text: 'As an international design student from Madhya Pradesh studying abroad, I have personally experienced the emotional void of being away from home cooked food and familiar spices. This project is a way to channel that nostalgia into a meaningful design outcome — one that feels personal yet widely relatable.',
    },

    /* 03 — THE HEART OF INDIA -------------------------------------------- */
    { type: 'heading', marker: 'A', title: 'The heart of India', note: 'Madhya Pradesh' },
    {
      type: 'note',
      text: 'Madhya Pradesh is often called the heart of India, and is known for its unique blend of tribal, Mughal, Rajput and Maratha food influences. In global markets its food culture remains unexplored.',
    },

    /* 04 — WHAT THE MARKET MISSES ---------------------------------------- */
    {
      type: 'compare',
      marker: 'B',
      title: 'What the market misses',
      left: {
        title: 'What is already there',
        items: [
          'HelloFresh, Gousto — convenience and personalisation',
          'MasalaBox, Patak’s, Indian Tiffin Room — culturally styled',
          'Indian dishes adapted to general palates',
          'Nothing of the region a dish comes from',
        ],
      },
      right: {
        title: 'What is missing',
        text: 'The gap is not that culture is absent from the shelf. Culturally inspired brands exist, but their cultural work stops at the surface — a palette, a pattern, a name. The large kits sell convenience, and sell it well. Neither carries the thing a person actually misses: where a dish is from, and who cooked it. For a student who already knows what the food should taste like, an adapted recipe with no story is a meal, not a memory.',
      },
    },

    /* The question the gap produces. Placed here rather than at the top
       because it is a finding, not an introduction — it only means anything
       once the reader has seen what is already on the shelf. */
    {
      type: 'note',
      text: 'What role does packaging design play in delivering cultural narrative and emotional value in food branding?',
    },

    /* 05 — THE IDEA · EMOTIONAL CENTRE ----------------------------------- */
    {
      type: 'annotate',
      marker: 'C',
      title: 'A window to look through',
      note: 'The jharokha',
      image: {
        src: `${dir}/jharokha-hero.png`,
        blurDataURL: 'data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAMAAgDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAQF/8QAHxAAAQMDBQAAAAAAAAAAAAAAAQAREgMxQQIEExQj/8QAFAEBAAAAAAAAAAAAAAAAAAAAAv/EABYRAQEBAAAAAAAAAAAAAAAAAAABAv/aAAwDAQACEQMRAD8AxSag2QqxHEdFsO1kU8vODButLN0QzCr/2Q==',
        alt: 'The Tadka Trail jharokha illustration, showing a tribal woman cooking, a heritage fort and the outline of Madhya Pradesh',
        width: 1104,
        height: 1704,
      },
      notes: [
        {
          label: 'The window',
          x: 50,
          y: 8,
          text: 'A jharokha is an ornamental projecting window found in Mughal and Rajput architecture. Its purpose is to look out at the world from inside — and for the world to look in. That is exactly what this brand is asking of the people who buy it.',
        },
        {
          label: 'Tribal lady cooking',
          x: 40,
          y: 55,
          text: 'Inside the window a tribal woman of Madhya Pradesh is cooking something traditional. She is the centre of the drawing, not the architecture — the food is made by someone, not manufactured.',
        },
        {
          label: 'Heritage fort',
          x: 63,
          y: 40,
          text: 'Behind her is a heritage fort of the state. The cooking happens in front of the history rather than beneath it.',
        },
        {
          label: 'Map of the state',
          x: 68,
          y: 30,
          text: 'And behind that, the outline of Madhya Pradesh. Three things in one frame: a person, a place, and a state most people abroad could not point to.',
        },
      ],
    },

    /* 06 — LEARNING THE LANGUAGE ----------------------------------------- */
    { type: 'heading', marker: 'D', title: 'Learning the language', note: 'Four folk art forms' },
    /* One block, not two pairs: the heading promises four art forms and
       these are the four. Split across two `pair` blocks they implied two
       groupings that do not exist. `even` so no sheet is cropped. */
    {
      type: 'mosaic',
      layout: 'even',
      images: [
        { src: `${dir}/art-bhil.jpg`,
 blurDataURL: 'data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAMAAkDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABQP/xAAfEAACAgEEAwAAAAAAAAAAAAABAgADBBESIVFSkdH/xAAUAQEAAAAAAAAAAAAAAAAAAAAC/8QAFhEBAQEAAAAAAAAAAAAAAAAAAQAh/9oADAMBAAIRAxEAPwC+Tmg3qarGKKpBXnk6xHUeI9QoUJtf4O4luPcA7Jv/2Q==', alt: 'Reference sheet on Bhil art — dots and simple geometric human and animal forms', width: 1459, height: 1900 },
        { src: `${dir}/art-mandana.jpg`,
 blurDataURL: 'data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAMAAkDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABAIF/8QAHhAAAgICAgMAAAAAAAAAAAAAAQIAAwQREpETIlL/xAAVAQEBAAAAAAAAAAAAAAAAAAACA//EABURAQEAAAAAAAAAAAAAAAAAAAEA/9oADAMBAAIRAxEAPwC8zPdr3qrVkKsfZWI3F+Zvtu5nZ1YGW42dc99x3EQCrVQAv//Z', alt: 'Reference sheet on Mandana art — white chalk and rice paste motifs painted over red earth', ...PAGE },
        { src: `${dir}/art-bhilala.jpg`,
 blurDataURL: 'data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAMAAkDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABQT/xAAfEAABBAICAwAAAAAAAAAAAAABAAIDERIhBFETMpH/xAAUAQEAAAAAAAAAAAAAAAAAAAAB/8QAFREBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhEDEQA/AKiY553M8sgDHE+1XtKZt6b8CEh4oe9xMkm71YrZS+A7KIa//9k=', alt: 'Reference sheet on Bhilala art — a mix of Gond and Bhil styles with religious and ritual symbols', ...PAGE },
        { src: `${dir}/art-pithora.jpg`,
 blurDataURL: 'data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAMAAkDASIAAhEBAxEB/8QAFAABAAAAAAAAAAAAAAAAAAAABP/EAB8QAAEEAgIDAAAAAAAAAAAAAAEAAgMREiEEYZGh8f/EABQBAQAAAAAAAAAAAAAAAAAAAAH/xAAVEQEBAAAAAAAAAAAAAAAAAAABAP/aAAwDAQACEQMRAD8AbHOJXOZICRkS2vqZg3rwgxcVrhebxZJ1WvSZXZQMt//Z', alt: 'Reference sheet on Pithora painting — horses, animals and deities in bold colour on tribal home walls', ...PAGE },
      ],
      captions: [
        'Bhil — dots, geometric figures',
        'Mandana — walls and floors, white on red earth',
        'Bhilala — Gond and Bhil, ritual symbols',
        'Pithora — horses and deities, bold colour',
      ],
    },

    /* 07 — DRAWING IT BY HAND -------------------------------------------- */
    { type: 'heading', marker: 'E', title: 'Drawing it by hand', note: 'Grid paper first' },
    {
      type: 'triptych',
      images: [
        { src: `${dir}/sketch-tiger.jpg`,
 blurDataURL: 'data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAMAAkDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABAX/xAAiEAAABQMEAwAAAAAAAAAAAAAAAQIRIQMSYQQFEzFRkaH/xAAVAQEBAAAAAAAAAAAAAAAAAAABAv/EABYRAQEBAAAAAAAAAAAAAAAAAAABEf/aAAwDAQACEQMRAD8AUukat45bShZTf1HgUmx9AKKH1hqc3OQ6ws+wKt1//9k=', alt: 'Pencil pattern study on grid paper of a tiger surrounded by folk motifs', ...PAGE },
        { src: `${dir}/sketch-poha.jpg`,
 blurDataURL: 'data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAMAAkDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABAX/xAAdEAACAgEFAAAAAAAAAAAAAAABEQACEgMEJDEy/8QAFAEBAAAAAAAAAAAAAAAAAAAAAf/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AHg2tvjbKqzfca5O0RzLFn01HwL/2Q==', alt: 'Pencil pattern study on grid paper of a bowl of poha with sun and wheat motifs, labelled Indore', ...PAGE },
        { src: `${dir}/sketch-jalebi.jpg`,
 blurDataURL: 'data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAMAAkDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABAX/xAAeEAACAQMFAAAAAAAAAAAAAAABAgADESEEEhQxUf/EABQBAQAAAAAAAAAAAAAAAAAAAAH/xAAVEQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEQMRAD8ATWY8iykABhfMTtXyTajE6vs5YSjeFL//2Q==', alt: 'Pencil pattern study on grid paper of jalebi spirals with birds and leaf motifs', ...PAGE },
      ],
      captions: ['Tiger', 'Poha, Indore', 'Jalebi'],
    },
    {
      type: 'note',
      text: 'Every pattern was drawn on grid paper before it was drawn on a screen. The grid is the same one the motifs are built on, so the digitised version inherits the spacing rather than approximating it.',
    },
    {
      type: 'mosaic',
      layout: 'even',
      images: [
        {
          src: `${dir}/draw-mandala-studies.jpg`,
          blurDataURL: 'data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAMAAkDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABAAD/8QAHxAAAQQABwAAAAAAAAAAAAAAAgABAxESExRBUnGS/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwBxyiTHhGnHalZYcB8rGJ31J9Jdor//2Q==',
          alt: 'Sketchbook page of mandala rosettes drawn in red ink, testing radial symmetry',
          width: 1497,
          height: 2000,
        },
        {
          src: `${dir}/draw-circle-studies.jpg`,
          blurDataURL: 'data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAMAAkDASIAAhEBAxEB/8QAFAABAAAAAAAAAAAAAAAAAAAABP/EABkQAAMBAQEAAAAAAAAAAAAAAAECEQAhUf/EABQBAQAAAAAAAAAAAAAAAAAAAAH/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwB7uS470nzJpwUEYwnrXMuC/9k=',
          alt: 'Sketchbook page of circular pattern studies drawn in blue ballpoint',
          width: 1497,
          height: 2000,
        },
        {
          src: `${dir}/draw-pattern-grid.jpg`,
          blurDataURL: 'data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAMAAkDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABAMF/8QAHxABAAICAAcAAAAAAAAAAAAAAQIRAAMEExQhMVKR/8QAFAEBAAAAAAAAAAAAAAAAAAAAAf/EABURAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIRAxEAPwBO2T1FRQCRZdZflx9T5gNivFeXvIzQvCl//9k=',
          alt: 'Sketchbook page of folk motifs redrawn as flat black line patterns',
          width: 1497,
          height: 2000,
        },
        {
          src: `${dir}/draw-pattern-tiles.jpg`,
          blurDataURL: 'data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAMAAkDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABQME/8QAIBAAAgEDBAMAAAAAAAAAAAAAAQIAERIhAwQFQVFhcf/EABQBAQAAAAAAAAAAAAAAAAAAAAH/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCu2W9mBDi2mK/ZtsTxDePdtR3JPdMemMTgX//Z',
          alt: 'Sketchbook page of finished pattern tiles in black and white, ready to digitise',
          width: 1497,
          height: 2000,
        },
      ],
      captions: [
        'Rosettes, in red',
        'Circles, in ballpoint',
        'Motifs flattened to line',
        'Tiles, ready to digitise',
      ],
    },

    {
      type: 'pair',
      images: [
        { src: `${dir}/pattern-sheet-a.jpg`,
 blurDataURL: 'data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAMAAkDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAgP/xAAhEAACAQMDBQAAAAAAAAAAAAABAgADERIEIVEFE2GR8P/EABQBAQAAAAAAAAAAAAAAAAAAAAH/xAAVEQEBAAAAAAAAAAAAAAAAAAAAEf/aAAwDAQACEQMRAD8Ar1JgKSlSbFjfc8S+X14aqLV01TPfC7L4MPaHLe4Qv//Z', alt: 'Digitised pattern swatches in black and white, tiled at several scales', ...PAGE },
        { src: `${dir}/pattern-sheet-b.jpg`,
 blurDataURL: 'data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAMAAkDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABAID/8QAHxAAAgECBwAAAAAAAAAAAAAAAQIAAxIEESFBUVJh/8QAFAEBAAAAAAAAAAAAAAAAAAAAAv/EABYRAQEBAAAAAAAAAAAAAAAAAAEAEf/aAAwDAQACEQMRAD8AvEuRXcBmGTnf2MsPczaqC1cEu2rcxVghTZDl/9k=', alt: 'A full sheet of the digitised pattern tiled as a repeat, with border variants beneath it', ...PAGE },
      ],
      captions: ['Digitised swatches', 'Tiled as a repeat'],
    },

    /* 08 — CUTTING IT BY HAND · GREEN BAND ------------------------------- */
    {
      type: 'gallery',
      tone: 'green',
      title: 'Cutting it by hand',
      note: 'Lino and ink',
      text: 'The mark was cut into lino and printed by hand before it was trusted as a vector. Ink behaves differently to a screen — it fills, it skips, it presses unevenly. Every one of these pulls is a different result from the same block.',
      images: [
        { src: `${dir}/lino-blocks.jpg`,
 blurDataURL: 'data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAMAAkDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABQH/xAAfEAABBAEFAQAAAAAAAAAAAAABAAIDERIEISJScqH/xAAVAQEBAAAAAAAAAAAAAAAAAAACA//EABoRAAICAwAAAAAAAAAAAAAAAAABAgMREiH/2gAMAwEAAhEDEQA/AJrhI8MEQOTSb3qkzy6j4irJlf6KRzKjVyIpPZ5P/9k=', alt: 'Lino blocks of the jharokha inked in orange, green and black, with pulled prints beside them', ...PAGE },
        { src: `${dir}/lino-print-a.jpg`,
 blurDataURL: 'data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAMAAkDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABAEF/8QAHxAAAgIBBAMAAAAAAAAAAAAAAQIDEQAEEiEiUYGR/8QAFAEBAAAAAAAAAAAAAAAAAAAAAf/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AK00z6diSVqSl71xXnNL0PmAlhVVVD2DOCdwGPvAv//Z', alt: 'Hand-pulled block prints of the words TARKA TRAILS in heavy black ink', width: 1451, height: 1900 },
        { src: `${dir}/lino-print-b.jpg`,
 blurDataURL: 'data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAMAAwDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAECBP/EABwQAAICAwEBAAAAAAAAAAAAAAECAxEABDESIf/EABQBAQAAAAAAAAAAAAAAAAAAAAH/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDU0ZdUVZqlQkmmvp5jEQkZnCqwY/DfcE10i2ZXS7f6bOToEjX8+iQrEC8C/9k=', alt: 'A sheet of repeated TARKA TRAILS block prints at varying pressure and rotation', width: 1838, height: 1900 },
        {
          src: `${dir}/lino-carving.jpg`,
          blurDataURL: 'data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAMAAkDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABgIE/8QAIhAAAQIGAQUAAAAAAAAAAAAAAQACAwQREiExIkJRUpKx/8QAFQEBAQAAAAAAAAAAAAAAAAAAAgP/xAAXEQADAQAAAAAAAAAAAAAAAAAAAREx/9oADAMBAAIRAxEAPwC409K3FjYrATmtpxnWlvsgeDfVEW8ptwJ6j9Sep7qbVFh//9k=',
          alt: 'Sketchbook page of the jharokha cut into lino, block and pulls side by side',
          width: 1497,
          height: 2000,
        },
        {
          src: `${dir}/lino-type-a.jpg`,
          blurDataURL: 'data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAMAAkDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABAEF/8QAHhAAAgICAgMAAAAAAAAAAAAAAQIAAxIhERMiU5L/xAAUAQEAAAAAAAAAAAAAAAAAAAAB/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8ArWu9THELxbwuwNTS66/UnwIF6UGKnyDOG2BHZGBf/9k=',
          alt: 'Hand-pulled lino prints of the Tadka Trail wordmark, ink breaking on the letterforms',
          width: 1497,
          height: 2000,
        },
        {
          src: `${dir}/lino-type-b.jpg`,
          blurDataURL: 'data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAMAAwDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAECBP/EABwQAAICAwEBAAAAAAAAAAAAAAECAxEABBIhMf/EABQBAQAAAAAAAAAAAAAAAAAAAAH/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDU0ZcIqzcyIxJpr8J+HKSMOWcAMGawb+4lgSLaldL6f0+4aIK6/PRIViBeBf/Z',
          alt: 'A sheet of wordmark pulls at different pressures, no two the same',
          width: 1937,
          height: 2000,
        },
      ],
    },

    /* 09 — THE SYSTEM ---------------------------------------------------- */
    { type: 'heading', marker: 'F', title: 'The system', note: 'Kept deliberately small' },
    {
      type: 'mosaic',
      layout: 'even',
      images: [
        {
          src: `${dir}/system-sketches-a.jpg`,
          blurDataURL: 'data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAMAAkDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABAX/xAAdEAABBAIDAAAAAAAAAAAAAAABAAIDEQQiEzFh/8QAFAEBAAAAAAAAAAAAAAAAAAAAAf/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AKRyHPyXbag9X6l2ECKIczn2bJTbQX//2Q==',
          alt: 'Sketchbook page of hand-lettered Tadka Trail wordmark attempts',
          width: 1497,
          height: 2000,
        },
        {
          src: `${dir}/system-sketches-b.jpg`,
          blurDataURL: 'data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAMAAoDASIAAhEBAxEB/8QAFAABAAAAAAAAAAAAAAAAAAAABP/EAB0QAAEFAAMBAAAAAAAAAAAAAAEAAgMRIQQiMUH/xAAUAQEAAAAAAAAAAAAAAAAAAAAB/8QAFREBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhEDEQA/AHunqRzWk3ZvfElh6N34gRRg8hxs6mjAEUv/2Q==',
          alt: 'Wordmark drawn out on grid paper in Devanagari and Latin together',
          width: 1638,
          height: 2000,
        },
        {
          src: `${dir}/system-wordmark-green.jpg`,
          blurDataURL: 'data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAMAAwDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABAP/xAAdEAACAgIDAQAAAAAAAAAAAAABAgADERIEITGR/8QAFQEBAQAAAAAAAAAAAAAAAAAAAgP/xAAVEQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEQMRAD8AhybxVUrlNtmC+4xEKoAxCK5wR18juOu9QLeyEB//2Q==',
          alt: 'The stacked bilingual wordmark set in black on the brand green',
          width: 1989,
          height: 2000,
        },
        {
          src: `${dir}/system-palette.jpg`,
          blurDataURL: 'data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAMAAkDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAgT/xAAgEAACAgEDBQAAAAAAAAAAAAABAgADERITMQQhUaHB/8QAFQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAWEQEBAQAAAAAAAAAAAAAAAAABABH/2gAMAwEAAhEDEQA/AKOnQWHCkLoUKxHJOQfnuV7S+IKakrUFRjVz3i3Gkhkrt//Z',
          alt: 'Sketchbook page pinning the palette against a printed stamp reference',
          width: 1497,
          height: 2000,
        },
      ],
      captions: [
        'First attempts, by hand',
        'Both scripts, on grid',
        'Stacked and set',
        'Palette against a stamp',
      ],
    },
    {
      type: 'full',
      image: {
        src: `${dir}/wordmark.jpg`,
        blurDataURL: 'data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAMAAkDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABgT/xAAhEAEAAQMCBwAAAAAAAAAAAAABAAIDURRBBAUSISM0kf/EABUBAQEAAAAAAAAAAAAAAAAAAAEC/8QAFREBAQAAAAAAAAAAAAAAAAAAADH/2gAMAwEAAhEDEQA/AJ7ldZzZ6TxHFUi4cfIh0xiHD3rxvqBHc7xPJpj/2Q==',
        alt: 'The bilingual Tadka Trail wordmark, Devanagari above Latin, in orange and cream on charcoal',
        width: 1443,
        height: 1900,
      },
      caption: 'Wordmark — Devanagari and Latin',
    },

    /* 10 — THREE DAALS · SECOND EMOTIONAL CENTRE ------------------------- */
    { type: 'heading', marker: 'G', title: 'Three daals, three regions', note: 'The story cards' },
    {
      type: 'note',
      text: 'Each daal in the range is tied to a region of Madhya Pradesh, and each card carries that region\u2019s folk story alongside the recipe. The Hindi is not a translation printed underneath. It is half of the card.',
    },
    {
      type: 'story',
      tone: 'green',
      pull: 'From the farms of Barwani to your bowl.',
      dish: 'Moong Daal',
      region: 'Mandla & Gond Region',
      image: {
        src: `${dir}/card-moong.jpg`,
        blurDataURL: 'data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAKAAwDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAwEF/8QAHRAAAgIBBQAAAAAAAAAAAAAAAREAAhMSISIxQf/EABQBAQAAAAAAAAAAAAAAAAAAAAL/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDFyZDc6QFVJxHsOPkJANABy16gB//Z',
        alt: 'Moong Daal story card in deep green, with the recipe and its regional story set in English and Hindi',
        ...CARD,
      },
      english:
        'Moong Dal is comforting, hearty, protein-packed, flavorful and super tasty. Make this for a perfect, easy and wholesome vegetarian Indian meal. It is naturally gluten-free and can be made vegan if you use oil for tadka. This yellow mung daal is usually eaten with rice, pickle and papad.\n\nThis recipe starts by soaking the lentils briefly until you prep up the ingredients like onion, tomatoes and other spices. This step helps the lentils to cook faster and give a better texture to the finished dish.',
      hindi:
        'मूंग दाल आरामदायक, पौष्टिक, प्रोटीन से भरपूर, स्वादिष्ट और बेहद स्वादिष्ट होती है। इसे एक बेहतरीन, आसान और पौष्टिक भारतीय शाकाहारी भोजन के रूप में बनाएँ। यह पीली मूंग दाल आमतौर पर चावल, अचार और पापड़ के साथ खाई जाती है।\n\nइस रेसिपी की शुरुआत दाल को थोड़ी देर भिगोने से होती है जब तक आप प्याज, टमाटर और अन्य मसाले जैसी सामग्री तैयार नहीं कर लेते।',
    },
    {
      type: 'story',
      tone: 'maroon',
      pull: 'They say the deep red colour gave the thread for Maheshwar\u2019s famous saree borders.',
      dish: 'Masoor Daal',
      region: 'Maheshwar & Nimar',
      image: {
        src: `${dir}/card-masoor.jpg`,
        blurDataURL: 'data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAKAAwDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAgEF/8QAHhAAAQMEAwAAAAAAAAAAAAAAAQARIQISEyJRgZH/xAAVAQEBAAAAAAAAAAAAAAAAAAADBP/EABURAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIRAxEAPwDEyX36s1LCX7TJMQ0cKCkbwPEQjV1//9k=',
        alt: 'Masoor Daal story card in deep maroon, carrying the folk story of the Maheshwar weavers in English and Hindi',
        ...CARD,
      },
      english:
        'Masoor Daal is earthy, warming, and full of nutrition. Women weavers of Maheshwar cherish this dal during winter. It is known to warm the body and support health during cold months or times of recovery.\n\nFolk story: as the winter wind would rattle the looms, Maheshwar\u2019s weavers gathered for bowls of masoor daal and warmth. They say the deep red colour gave the thread for Maheshwar\u2019s famous saree borders.',
      hindi:
        'मसूर दाल मिट्टी जैसी, गर्माहट देने वाली और पोषण से भरपूर होती है। माहेश्वर की बुनकर महिलाएँ सर्दियों में इसे विशेष पसंद करती हैं — यह शरीर को गर्म रखती है।\n\nलोककथा: सर्द हवाओं के साथ माहेश्वर के करघों पर जब आवाज़ होती थी, तब बुनकर महिलाएँ मसूर दाल और गर्माहट के लिए इकट्ठा होती थीं। कहते हैं मसूर की गहरी लालिमा माहेश्वर की मशहूर साड़ियों के किनारों का रंग देती है।',
    },
    {
      type: 'story',
      tone: 'brown',
      pull: 'In old Bhopal, urad daal was cooked not for the king, but for the guests of God.',
      dish: 'Urad Daal',
      region: 'Bhopal & Nawabi Cuisine',
      image: {
        src: `${dir}/card-urad.jpg`,
        blurDataURL: 'data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAKAAwDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAgb/xAAdEAEAAgICAwAAAAAAAAAAAAABABECIgMxEkFR/8QAFQEBAQAAAAAAAAAAAAAAAAAAAgP/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCfc/J5NQrEO7ivrX18iyAc6AhQuFR//9k=',
        alt: 'Urad Daal story card in dark brown, carrying the Begum Sultan Jahan folk story in English and Hindi',
        ...CARD,
      },
      english:
        'Urad Daal is bold, rich, and deeply satisfying. Often called the royal daal of Madhya Pradesh, it is especially popular in Bhopal during festivals and community feasts. This hearty dal gets its depth from slow cooking and a grand tadka: desi ghee, black cardamom, onion, and a pinch of asafoetida.\n\nThey say in old Bhopal, urad daal was cooked not for the king, but for the guests of God. During Eid, Begum Sultan would serve it in silver bowls to wandering fakirs and travellers, believing every guest brought blessings to her court.',
      hindi:
        'उड़द दाल गाढ़ी, पौष्टिक और स्वादिष्ट होती है। इसे मध्य प्रदेश की शाही दाल कहा जाता है, जो खासकर भोपाल के त्योहारों और सामुदायिक भोजन में बनती है। धीमी आंच पर पकाई गई यह दाल घी, बड़ी इलायची, प्याज और हींग के तड़के से खासी स्वादिष्ट बनती है।\n\nलोककथा: कहते हैं पुराने भोपाल में उड़द दाल राजा के लिए नहीं, बल्कि खुदा के मेहमानों के लिए बनाई जाती थी। ईद के दौरान बेगम सुल्तान इसे चांदी की कटोरी में फकीरों और मुसाफ़िरों को परोसती थीं।',
    },

    /* 11 — STRUCTURE ----------------------------------------------------- */
    { type: 'heading', marker: 'H', title: 'Structure', note: 'Board, fold, card' },
    {
      type: 'mosaic',
      layout: 'even',
      images: [
        {
          src: `${dir}/structure-dieline-sketch.jpg`,
          blurDataURL: 'data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAMAAkDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABAH/xAAbEAACAwEBAQAAAAAAAAAAAAABAgADEQQSQf/EABQBAQAAAAAAAAAAAAAAAAAAAAH/xAAVEQEBAAAAAAAAAAAAAAAAAAAAEf/aAAwDAQACEQMRAD8ArVe29CwjTuZE7AcVrvb0h2LBLAF34MjoGR//2Q==',
          alt: 'Sketchbook page of net sketches with a folded paper model beside them',
          width: 1497,
          height: 2000,
        },
        {
          src: `${dir}/structure-dieline-flat.jpg`,
          blurDataURL: 'data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAMAAcDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAEE/8QAHBAAAgICAwAAAAAAAAAAAAAAAAECIRESIkFR/8QAFAEBAAAAAAAAAAAAAAAAAAAAAf/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/ANu0pSfOuqBIUkvVkAX/2Q==',
          alt: 'A printed dieline flat with the pattern band positioned across it',
          width: 1252,
          height: 2000,
        },
        {
          src: `${dir}/structure-maroon-flat.jpg`,
          blurDataURL: 'data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAMAAkDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABAP/xAAgEAABAwQCAwAAAAAAAAAAAAABAhESAAMEBRNRYXGR/8QAFQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAYEQACAwAAAAAAAAAAAAAAAAAAAQIRIf/aAAwDAQACEQMRAD8Atcz8gb1FkLEJhMZBiO/finQHZoqdXYXnDKK7nJySZwz/ACnxoLk1lH//2Q==',
          alt: 'The maroon pack printed flat before cutting and scoring',
          width: 1497,
          height: 2000,
        },
        {
          src: `${dir}/structure-mockup.jpg`,
          blurDataURL: 'data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAMAAkDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAQIF/8QAIhAAAgEDAgcAAAAAAAAAAAAAAQMCAAQhETEVIlJTobHR/8QAFQEBAQAAAAAAAAAAAAAAAAAAAgP/xAAWEQEBAQAAAAAAAAAAAAAAAAABACH/2gAMAwEAAhEDEQA/AFtgm5VGMwMHeMzr6rM4cjvnz8pv5sLbeJawjY85zkVGg6RUwzJqX//Z',
          alt: 'A white mockup with rope handle and orange band, built to test the grip',
          width: 1500,
          height: 2000,
        },
      ],
      captions: [
        'Nets, on paper',
        'The flat, positioned',
        'Printed before cutting',
        'Handle tested in white',
      ],
    },
    {
      type: 'full',
      image: {
        src: `${dir}/prototype-card.jpg`,
        blurDataURL: 'data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAMAAkDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABAP/xAAhEAACAQALAAAAAAAAAAAAAAAAARECAwQSEyFBUWGRwf/EABQBAQAAAAAAAAAAAAAAAAAAAAP/xAAVEQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEQMRAD8AUrQ1kqTXBeQMt1lzSPBmGt32FSP/2Q==',
        alt: 'Flat greyboard packaging prototype cut and scored by hand before printing',
        ...PAGE,
      },
      caption: 'Cut and scored by hand',
    },

    /* 12 — WHAT DIDN'T WORK · THE TRUST MOMENT --------------------------- */
    { type: 'heading', marker: 'I', title: 'What did not work', note: 'Kept on purpose' },
    {
      type: 'full',
      image: {
        src: `${dir}/failed-green.jpg`,
        blurDataURL: 'data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAMAAkDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABQP/xAAdEAEAAgICAwAAAAAAAAAAAAABAAISIQQRAwUy/8QAFQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAXEQADAQAAAAAAAAAAAAAAAAAAAREC/9oADAMBAAIRAxEAPwCnJs35tw8p9u8tG49lBrK+1KaxtYU6Ip2wIwpT/9k=',
        alt: 'A rejected green packaging layout, annotated in the sketchbook with the words experiments failed',
        ...PAGE,
      },
      caption: 'Experiments failed — the sketchbook page, unedited',
    },
    {
      type: 'mosaic',
      layout: 'even',
      images: [
        {
          src: `${dir}/reject-white-mockup.jpg`,
          blurDataURL: 'data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAMAAkDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAgME/8QAIxAAAgEDAQkAAAAAAAAAAAAAAQIDAAQREhQVMUFTVIGSof/EABQBAQAAAAAAAAAAAAAAAAAAAAL/xAAYEQADAQEAAAAAAAAAAAAAAAAAAhEBA//aAAwDAQACEQMRAD8Amt0RC7xkhTHqOeOM1g3k3fSexpmVg5jbDqRg6uY8U9ktugn2gnTEyQTJT//Z',
          alt: 'Two white card mockups standing on a desk, proportions wrong and unresolved',
          width: 1500,
          height: 2000,
        },
        {
          src: `${dir}/reject-peel-test.jpg`,
          blurDataURL: 'data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAMAAkDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAwEF/8QAIhABAAIBAQkBAAAAAAAAAAAAAQIDABESExQiUmNxgZHB/8QAFQEBAQAAAAAAAAAAAAAAAAAAAwT/xAAYEQADAQEAAAAAAAAAAAAAAAAAAQIhEf/aAAwDAQACEQMRAD8AxWxr1K9iZYsjQ9fmThO6fMGnlrqYqMiSp5x97PqfuBT3CqW+H//Z',
          alt: 'A peel strip tested on a black pack, the tear line landing in the wrong place',
          width: 1500,
          height: 2000,
        },
        {
          src: `${dir}/reject-black-pack.jpg`,
          blurDataURL: 'data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAJAAwDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABQEG/8QAHxAAAgEEAgMAAAAAAAAAAAAAAQIDAAQREgUyMXGB/8QAFAEBAAAAAAAAAAAAAAAAAAAAA//EABcRAAMBAAAAAAAAAAAAAAAAAAABAlH/2gAMAwEAAhEDEQA/AApZNZFErxllOGVI8fc1obTllNsmpQEdtiRk0ZN3PuqPFCqHc6f/2Q==',
          alt: 'A black packaging direction abandoned before the green and maroon were settled',
          width: 2000,
          height: 1500,
        },
      ],
      captions: [
        'Proportions, wrong',
        'The peel, in the wrong place',
        'The black direction, dropped',
      ],
    },
    /* The analysis this heading promises. These two paragraphs were the
       third and fourth of the closing reflection — they are the failures,
       and they were sitting past the end of the case study where nobody
       reaches them. Hemant's words, moved, not rewritten. */
    {
      type: 'prose',
      text:
        'I also found that I trust a mark differently once I have cut it into lino and printed it badly a few times. What survives ink is not the same as what survives a screen. I did that after the illustration was already drawn. Next time I would do it first.\n\nThe honest gap is that I designed this for international students missing home, and the only student I checked it against was myself. I know what I missed. I do not know what someone from Kerala or Assam would have missed, and I never asked. That is the part I would change.\n\nThe other risk I could not fully resolve is the line between drawing on a culture and flattening it into decoration. Four folk art forms, one state, one window — the further the work travels from the people it came from, the easier it is for the motifs to become a style. Getting the story cards specific to a region and a dish was the only defence I found against that, and it is the reason they matter more than the illustration does.',
    },

    /* 13 — ON THE TABLE · EVIDENCE ------------------------------------
       Given its own heading. This is the finished work, and it previously
       sat under 'What did not work' — five product photographs filed as
       failures. The bleed establishes it; the mosaic holds the rest as one
       shoot instead of five separate full-width claims. */
    { type: 'heading', marker: 'J', title: 'On the table', note: 'The finished range' },
    {
      type: 'bleed',
      image: {
        src: `${dir}/photo-open.jpg`,
        blurDataURL: 'data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAIAAwDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAME/8QAHxAAAgEDBQEAAAAAAAAAAAAAAgMBAAQRBQYSITGR/8QAFQEBAQAAAAAAAAAAAAAAAAAAAgP/xAAWEQADAAAAAAAAAAAAAAAAAAAAATH/2gAMAwEAAhEDEQA/AIu0l9uuFtBj1iqYEgDHGc/Zis1tta+ukC7IByz0wpGZ798pSpqicP/Z',
        alt: 'The Tadka Trail box open in daylight, lentils scattered across the surface around it',
        ...PHOTO,
      },
      caption: 'It arrives, and it opens',
    },
    {
      type: 'mosaic',
      layout: 'feature',
      /* The cards lead, because the reflection says they are what carries
         the brand — the feature cell should agree with the argument. */
      images: [
        {
          src: `${dir}/photo-cards.jpg`,
          blurDataURL: 'data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAIAAwDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAT/xAAeEAACAgICAwAAAAAAAAAAAAABAgMRABIEIRMxQf/EABQBAQAAAAAAAAAAAAAAAAAAAAP/xAAVEQEBAAAAAAAAAAAAAAAAAAAAEf/aAAwDAQACEQMRAD8AcmOYpPOWrwnZDEoVXBHo131k8j3rK0pdpVEhtQ2pPyzjGESP/9k=',
          alt: 'The full set of story cards laid out across a table with the packs',
          ...PHOTO,
        },
        {
          src: `${dir}/photo-pair.jpg`,
          blurDataURL: 'data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAIAAwDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAT/xAAfEAACAQQCAwAAAAAAAAAAAAABAgMABAUREmEhMVH/xAAVAQEBAAAAAAAAAAAAAAAAAAABAv/EABYRAQEBAAAAAAAAAAAAAAAAAAARIf/aAAwDAQACEQMRAD8Aoz0ctuFhtoikLAaKAksfh6qnHWWShs41VkG/PF/a9UpUzS//2Q==',
          alt: 'Two Tadka Trail packs, green and maroon, standing together in raking light',
          ...PHOTO,
        },
        {
          src: `${dir}/photo-side.jpg`,
          blurDataURL: 'data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAIAAwDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAT/xAAgEAABAwQCAwAAAAAAAAAAAAACAAEDBAURIRIUMYGx/8QAFQEBAQAAAAAAAAAAAAAAAAAAAgP/xAAVEQEBAAAAAAAAAAAAAAAAAAAAQf/aAAwDAQACEQMRAD8ATWOpCc+EJGzvohdt+nUk9rrSkz1Jj15xj4iKdJ//2Q==',
          alt: 'Side panel of the Moong Daal pack reading from the farms of Barwani to your bowl, in English and Hindi',
          ...PHOTO,
        },
        {
          src: `${dir}/photo-read.jpg`,
          blurDataURL: 'data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAIAAwDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAQG/8QAHxAAAgICAQUAAAAAAAAAAAAAAQIDEQAEBRITITGB/8QAFQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAXEQEAAwAAAAAAAAAAAAAAAAAAESFB/9oADAMBAAIRAxEAPwCTmTsrvSvGZFh6QVZQVF0PnjNFxEUexxkEmzD3HINMy2as17xjIwxb/9k=',
          alt: 'A story card held and read, its bilingual text visible',
          ...PHOTO,
        },
        {
          src: `${dir}/photo-detail.jpg`,
          blurDataURL: 'data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAIAAwDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAMF/8QAHRAAAgICAwEAAAAAAAAAAAAAAQMCEQAEEyFBUf/EABQBAQAAAAAAAAAAAAAAAAAAAAP/xAAWEQEBAQAAAAAAAAAAAAAAAAABACH/2gAMAwEAAhEDEQA/AJ6yGFMVuVwxu4yYLJ9PWbadfTYqJnqrZMCpSIqz9xjAHZnS/9k=',
          alt: 'Detail of the rope handle and printed pattern on the pack, with lentils scattered beneath',
          ...PHOTO,
        },
      ],
      captions: [
        'The cards come out',
        'Two regions, two grounds',
        'What it says on the side',
        'And someone reads one',
        'What is left on the table',
      ],
    },

    /* 14 — REFLECTION ---------------------------------------------------- */
    // Drafted in Hemant's voice from what the archive actually shows: the
    // four art forms studied before drawing, the lino pulls made after the
    // vector rather than before, and the absence of any user research.
    // Every claim here is checkable against the sketchbook. If a line is not
    // true, cut it — this section belongs to him.
    {
      type: 'prose',
      variant: 'reflection',
      text: 'I started this thinking cultural branding meant using cultural imagery. Draw the right motifs, use the right colours, and the work would feel like Madhya Pradesh. Most of the project went into learning that the motifs were the easy part.\n\nWhat actually carries the brand is not the illustration. It is the cards — a particular daal, from a particular region, with a story I had to go and find. They took the longest to make and they look the least designed of anything here. If I had to keep one part and throw away the rest, it would be those.',
    },
  ],

  seo: {
    description:
      'Tadka Trail — a cultural food brand for Madhya Pradesh, built on an illustrated jharokha, hand-drawn folk patterns and bilingual story cards that carry each daal\u2019s region and folk story.',
  },

  published: true,
};
