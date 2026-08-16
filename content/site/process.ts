/** The four-step process shown on /capabilities. */

export interface ProcessStep {
  step: string;
  title: string;
  body: string;
}

export const process: ProcessStep[] = [
  {
    step: '01',
    title: 'Understand',
    body: 'What the brand actually sells, who it is for, and what everyone else in the category has already claimed.',
  },
  {
    step: '02',
    title: 'Decide',
    body: 'Territories on paper, narrowed to one. Grid, type and palette agreed before anything gets designed.',
  },
  {
    step: '03',
    title: 'Build',
    body: 'The mark, then the system, then the applications that matter most: packaging, print, screen.',
  },
  {
    step: '04',
    title: 'Hand over',
    body: 'Guidelines, working files, and everything specified well enough to be produced without me.',
  },
];

export interface Engagement {
  title: string;
  detail: string;
  body: string;
}

export const engagements: Engagement[] = [
  {
    title: 'Project',
    detail: 'One brief, one deliverable',
    body: 'A defined scope with a start and an end: an identity, a packaging range, a campaign. Fixed fee, agreed up front.',
  },
  {
    title: 'Ongoing',
    detail: 'Monthly',
    body: 'Design capacity for teams that ship constantly. A set number of days a month, yours to direct.',
  },
  {
    title: 'Full-time',
    detail: 'Open to roles',
    body: 'Open to in-house and studio roles where the work is identity, packaging or art direction.',
  },
];
