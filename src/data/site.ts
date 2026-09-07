/**
 * 
 */

export const site = {
  name: 'Lance',
  fullName: 'Lance Krystofer A. Galicia',
  tagline: 'CS Student - Cybersecurity & Software', // one liner; make it punchier
  intro:
    'CS student at De La Salle University Manila interested in ' +
    'cybersecurity, software development, and networking.',
  location: 'Manila, Philippines',
  email: 'lance_galicia@dlsu.edu.ph',
} as const;

export const nav = [
  { label: 'Work', href: '#work' },
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
