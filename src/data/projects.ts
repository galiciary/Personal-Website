export type Project = {
  slug: string;
  title: string;
  // one line under the title, what it is in plain words
  kicker: string;
  // two or three sentences on what it does and what is interesting about it
  blurb: string;
  // the hard fact that makes a reviewer stop, numbers beat adjectives
  // todo: fill these in, detection counts, model metrics, rule coverage, users
  // leave as undefined and the card just omits the line
  metric?: string;
  tags: string[];
  // which gradient this card gets, see --card-n-* in global.css
  tone: 'c1' | 'c2' | 'c3' | 'c4';
  links: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    slug: 'galicious-secret-scanner',
    title: 'Galicious Secret Scanner',
    kicker: 'Finds credentials people left in their code',
    blurb:
      'Scans a local folder or a GitHub repo for exposed secrets, including ones deleted from the ' +
      'working tree but still recoverable from git history. Two engines feed one pipeline: a regex ' +
      'signature library for known formats, and a Shannon-entropy fallback for custom tokens no ' +
      'pattern recognises. Every finding is deduplicated, scored and redacted — no output, in any ' +
      'format, ever contains a full secret.',
    // metric: 'todo, e.g. "N vendor patterns, N test repos"',
    tags: ['Python', 'Security', 'CLI', 'pre-commit'],
    tone: 'c1',
    links: [
      { label: 'Source', href: 'https://github.com/galiciary/GaliciousSecretScanner' },
      { label: 'Demo video', href: 'https://youtu.be/wDCP1lN0BF0' },
    ],
  },
  {
    slug: 'check-republic',
    title: 'Check Republic',
    kicker: 'Automated document auditing for LSCS',
    blurb:
      'Screens student-organisation pre- and post-activity documents against the 51st CSO Manual. ' +
      'Deterministic rules catch formatting violations; an AI layer catches the contextual errors ' +
      'that need human-level reading. Built as a layered TypeScript service — routes, controllers, ' +
      'services, repositories — with a Jest suite, GitHub Actions CI, and a Docker image.',
    // metric: 'todo, e.g. "N rules, N document types"',
    tags: ['TypeScript', 'Express', 'Supabase', 'Gemini', 'Docker'],
    tone: 'c2',
    links: [{ label: 'Source', href: 'https://github.com/dlsu-lscs/check-republic' }],
  },
  {
    slug: 'pinoybot',
    title: 'PinoyBot',
    kicker: 'Text classification for Filipino and Taglish',
    blurb:
      'A classifier trained on a hand-annotated Filipino/Taglish dataset, with feature engineering ' +
      'written from scratch rather than pulled off the shelf. The repo carries the whole pipeline — ' +
      'dataset compilation, training, evaluation — plus a test suite that verifies the metrics ' +
      'themselves, not just the code paths.',
    // metric: 'todo, accuracy and f1 on the held-out set',
    tags: ['Python', 'Machine learning', 'NLP'],
    tone: 'c3',
    links: [{ label: 'Source', href: 'https://github.com/galiciary/pinoybot' }],
  },
  {
    slug: 'resq',
    title: 'ResQ',
    kicker: 'Coordination forum for disaster response',
    blurb:
      'A centralised forum for verifying updates and coordinating relief during typhoons, ' +
      'earthquakes and floods — the kind of channel that goes missing exactly when the Philippines ' +
      'needs it. Full MVC application with accounts, posting, profiles and uploads.',
    tags: ['Node.js', 'Express', 'Handlebars', 'MongoDB'],
    tone: 'c4',
    links: [{ label: 'Source', href: 'https://github.com/galiciary/-CCAPDEV-MCO' }],
  },
];
