/**
 * 
 */

export const site = {
  name: 'Lance Galicia',
  fullName: 'Lance Krystofer A. Galicia',
  tagline: 'Building software. Securing systems. Solving problems.', // one liner; make it punchier
  intro:
    '3rd year Computer Science student at De La Salle University interested in ' +
    'cybersecurity, software development, networking, and finance.',
  // path to your photo under public/, leave empty to show the placeholder frame
  portrait: '/images/lance.jpg',
  location: 'Manila, Philippines',
  email: 'lance_galicia@dlsu.edu.ph',
} as const;

export const nav = [
  { label: 'Projects', href: '#work' },
  { label: 'Timeline', href: '#timeline' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
] as const;

export type SocialLink = {
  label: string;
  href: string;
  
  icon: 'github' | 'linkedin' | 'mail';
};

export const socials: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/galiciary', icon: 'github' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/lancegalicia/', icon: 'linkedin' },
];
