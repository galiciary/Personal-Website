/**
 * 
 */

export const site = {
  name: 'Lance Galicia',
  fullName: 'Lance Krystofer A. Galicia',
  tagline: 'Building software. Securing systems. Solving problems.', // one liner; make it punchier
  intro:
    '3rd year Computer Science student at De La Salle University interested in ' +
    'cybersecurity, software development, computer networks, and finance.',
  // path to your photo under public/, leave empty to show the placeholder frame
  portrait: '/images/lance.jpg',
  resume: '/Lance-Galicia-Resume.pdf',
  location: 'Manila, Philippines',
  email: 'lance_galicia@dlsu.edu.ph',
  discord: 'motop4pi',
  // this site's own repository, linked from the footer
  repo: 'https://github.com/galiciary/galiciary.github.io',
} as const;

export const nav = [
  { label: 'Home', href: '#top' },
  { label: 'Projects', href: '#work' },
  { label: 'Timeline', href: '#timeline' },
  { label: 'About', href: '#about' },
] as const;

export type SocialLink = {
  label: string;
  href: string;
  // shown instead of the url in the contact list, for links that read badly
  display?: string;
  
  icon: 'github' | 'linkedin' | 'mail' | 'discord' | 'instagram';
};

export const socials: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/galiciary', icon: 'github' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/lancegalicia/', icon: 'linkedin' },
  {
    label: 'Discord',
    href: 'https://discord.com/users/821402496509280297',
    display: 'motop4pi',
    icon: 'discord',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/galiciary/',
    display: '@galiciary',
    icon: 'instagram',
  },
];
