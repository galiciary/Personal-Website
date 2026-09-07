export type Project = {
  slug: string;
  title: string; 
  // one line under the title 
  kicker: string;
  // two or three sentences. what it does and what's interesting about it
  blurb: string;
  /**
   * fill in with numbers
   * wll be omitted if left undefined
   */
  metric?: string;
  tags: string[];

  tone: 'azure' | 'cobalt' | 'navy' | 'midnight';
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
    // metric: 'TODO — e.g. "N vendor patterns · N test repos"',
    tags: ['Python', 'Security', 'CLI', 'pre-commit'],
    tone: 'red',
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
    // metric: 'TODO — e.g. "N rules · N document types"',
    tags: ['TypeScript', 'Express', 'Supabase', 'Gemini', 'Docker'],
    tone: 'blue',
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
    // metric: 'TODO — accuracy / F1 on the held-out set',
    tags: ['Python', 'Machine learning', 'NLP'],
    tone: 'green',
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
    tone: 'violet',
    links: [{ label: 'Source', href: 'https://github.com/galiciary/-CCAPDEV-MCO' }],
  },
];
