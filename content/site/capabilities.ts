/** Capabilities shown on the home page and the /capabilities route. */

export interface Capability {
  marker: string;
  title: string;
  body: string;
  items: string[];
}

export const capabilities: Capability[] = [
  {
    marker: 'A',
    title: 'Brand identity',
    body: 'Marks, wordmarks, colour and type, plus the rules that hold them together — delivered as a system your team can run without me.',
    items: ['Logo and wordmark', 'Colour and type systems', 'Icon sets', 'Brand guidelines'],
  },
  {
    marker: 'B',
    title: 'Packaging',
    body: 'Tins, pouches, boxes, labels. Layouts that survive a whole product range and get specified properly to the printer.',
    items: ['Packaging systems', 'Label and pack layout', 'Gifting and kits', 'Print specification'],
  },
  {
    marker: 'C',
    title: 'Art direction',
    body: 'Photography and campaign direction, so everything a brand puts out afterwards still reads as the same brand.',
    items: ['Photography direction', 'Campaign layout', 'Poster and print', 'Launch collateral'],
  },
  {
    marker: 'D',
    title: 'Editorial & digital',
    body: 'Decks, publications, social systems and web layout — grid-first, built from the same rules as everything else.',
    items: ['Publication design', 'Presentation systems', 'Social templates', 'Web layout'],
  },
];
