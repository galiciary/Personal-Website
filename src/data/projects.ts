export type Project = {
  slug: string;
  title: string;
  // one line under the title, what it is in plain words
  kicker: string;
  // two or three sentences on what it does and what is interesting about it
  blurb: string;
  // what you personally did, for team projects. omit on solo work
  role?: string;
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
    slug: 'dss-dashboard',
    title: 'DSS Dashboard',
    kicker: 'Membership and event analytics for DLSU DSS',
    blurb:
      'An internal Streamlit dashboard the DLSU Data Science Society uses to track membership, ' +
      'event attendance and satisfaction. Raw form exports land as messy spreadsheets; a cleaning ' +
      'layer normalises them before anything is charted, and the overview page turns the result ' +
      'into headline counts, engagement rate, satisfaction and attendance trends, and event rankings.',
    role: 'My part: the data cleaning pipeline, the Dashboard Overview page, and the documentation.',
    tags: ['Python', 'Streamlit', 'pandas', 'Supabase', 'Altair'],
    tone: 'c2',
    links: [{ label: 'Source', href: 'https://github.com/UrMomLastNite/dss-dashboard' }],
  },
  {
    slug: 'full-capacity',
    title: 'Full Capacity',
    kicker: 'An interactive exhibit on the evolution of storage',
    blurb:
      'Five chapters walking from punch cards and magnetic drums through disks, optical media and ' +
      'NAND to DNA and cloud storage. Rather than illustrating the ideas, the site simulates them: ' +
      'a punch-card encoder, a seeking hard disk, an optical pit-and-land encoder, floating-gate and ' +
      'wear-levelling animations, IOPS gauges and a price-crossover race. Around thirty interactive ' +
      'components, built as React islands inside an Astro and MDX site.',
    role: 'TODO: your part on this one.',
    tags: ['Astro', 'React', 'MDX', 'Data viz', 'GitHub Pages'],
    tone: 'c3',
    links: [
      // todo: add the github pages url once confirmed
      {
        label: 'Source',
        href: 'https://github.com/skyparado/WebsiteArchive_Evolution_of_Computer_Data_Storage',
      },
    ],
  },
  {
    slug: 'resq',
    title: 'ResQ',
    kicker: 'Coordination forum for disaster response',
    blurb:
      'A centralised forum for verifying updates and coordinating relief during typhoons, ' +
      'earthquakes and floods — the kind of channel that goes missing exactly when the Philippines ' +
      'needs it. Full MVC application with accounts, posting, profiles and uploads.',
    role: 'Four-person group project for CCAPDEV.',
    tags: ['Node.js', 'Express', 'Handlebars', 'MongoDB'],
    tone: 'c4',
    // todo: add the deployment url
    links: [{ label: 'Source', href: 'https://github.com/galiciary/-CCAPDEV-MCO' }],
  },
];
