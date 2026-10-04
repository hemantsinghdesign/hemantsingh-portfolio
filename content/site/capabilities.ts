/** Capabilities shown on the home page and the /capabilities route.
 *
 * Each one names the case studies where it can be seen, so a visitor can go
 * from a claim to the evidence in one click. `short` is the home page line;
 * `body` and `items` are the fuller /capabilities version. Keep the two from
 * repeating each other, and keep both from repeating the About page.
 */

export interface Capability {
  marker: string;
  title: string;
  short: string;
  body: string;
  items: string[];
  /** Project slugs that demonstrate this capability. */
  work: string[];
}

export const capabilities: Capability[] = [
  {
    marker: 'A',
    title: 'Brand identity',
    short: 'Marks, wordmarks, colour and type, with guidelines to apply them.',
    body: 'A mark and wordmark, the colour and type around them, and the rules for using them across packaging, print and screen. On SORA that meant a sunrise mark drawn to hold up at hang-tag size; on Tadka Trail, a wordmark set in Devanagari and Latin.',
    items: ['Logo and wordmark', 'Colour and type', 'Icon sets', 'Brand guidelines'],
    work: ['sora-matcha', 'tadka-trail'],
  },
  {
    marker: 'B',
    title: 'Packaging',
    short: 'Pack ranges, from layout and structure to printed prototype.',
    body: 'Range design, pack layout and structure. For Tadka Trail I drew the nets by hand, printed the flats and cut and scored the boxes myself; SORA works through one layout across tins, a pouch, cups and a gift kit.',
    items: ['Range and pack layout', 'Structure and dielines', 'Gifting and kits', 'Printed prototypes'],
    work: ['tadka-trail', 'sora-matcha'],
  },
  {
    marker: 'C',
    title: 'Art direction',
    short: 'Photography direction and campaigns that keep a brand recognisable.',
    body: 'How a brand is photographed and how it speaks at poster scale. SORA has written photography rules and a black-and-white typographic campaign designed to sit alongside very quiet packaging.',
    items: ['Photography direction', 'Campaign and poster', 'Brand imagery', 'Launch material'],
    work: ['sora-matcha'],
  },
  {
    marker: 'D',
    title: 'Illustration & touchpoints',
    short: 'Illustration systems and the printed pieces a brand is met through.',
    body: 'Illustration and pattern systems, and the cards, letters, kits and merchandise that carry them. The HSBC concept extends the bank’s identity with Warli-inspired drawing across a welcome letter, cards and a student kit; Tadka Trail carries its story on bilingual cards.',
    items: ['Illustration and pattern', 'Welcome and gift kits', 'Stationery and print', 'Bilingual layout'],
    work: ['hsbc-onboarding', 'tadka-trail'],
  },
];
