/** The four-step process and the ways of working shown on /capabilities. */

export interface ProcessStep {
  step: string;
  title: string;
  body: string;
}

export const process: ProcessStep[] = [
  {
    step: '01',
    title: 'Research',
    body: 'What the brand sells, who it is for, what else sits beside it on the shelf, and, where it matters, the culture it draws on.',
  },
  {
    step: '02',
    title: 'Explore',
    body: 'Several directions sketched and tested in rough, on paper and on screen, then narrowed to one worth developing.',
  },
  {
    step: '03',
    title: 'Develop',
    body: 'The mark, type, colour and grid worked out together, then tried on the applications that matter most: the pack, the print, the screen.',
  },
  {
    step: '04',
    title: 'Hand over',
    body: 'Guidelines and working files organised so the next person can apply the identity without guessing.',
  },
];

export interface Engagement {
  title: string;
  detail: string;
  body: string;
}

export const engagements: Engagement[] = [
  {
    title: 'Freelance projects',
    detail: 'For brands and studios',
    body: 'A defined scope with a start and an end: an identity, a packaging range, a campaign, or support on one part of a larger project.',
  },
  {
    title: 'Full-time roles',
    detail: 'For hiring teams',
    body: 'Open to in-house and studio roles in graphic design, brand identity, packaging or art direction.',
  },
];
