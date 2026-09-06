/**
 * Lots of placeholders: will still edit
 */

export const site = {
  name: 'Lance',
  fullName: 'Lance Krystofer A. Galicia',
  // one liner
  tagline: 'CS student',
  // put longer bio in about page
  intro:
    '3rd year Computer Science student at De la Salle University Manila', // add more here
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
  /** inline SVG path data, 24x24 viewBox */
  icon: 'github' | 'linkedin' | 'mail';
};

export const socials: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/', icon: 'github' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/', icon: 'linkedin' },
  { label: 'Email', href: `mailto:${site.email}`, icon: 'mail' },
];
