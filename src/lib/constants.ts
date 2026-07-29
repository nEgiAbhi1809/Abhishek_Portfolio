export const GITHUB_USERNAME = 'nEgiAbhi1809';
export const GITHUB_API_URL = 'https://api.github.com';

export const SECTION_IDS = {
  hero: 'hero',
  about: 'about',
  experience: 'experience',
  projects: 'projects',
  skills: 'skills',
  competitiveProgramming: 'competitive-programming',
  achievements: 'achievements',
  github: 'github',
  techStack: 'tech-stack',
  timeline: 'timeline',
  contact: 'contact',
} as const;

export const NAV_ITEMS = [
  { label: 'About', href: SECTION_IDS.about },
  { label: 'Experience', href: SECTION_IDS.experience },
  { label: 'Projects', href: SECTION_IDS.projects },
  { label: 'Skills', href: SECTION_IDS.skills },
  { label: 'CP', href: SECTION_IDS.competitiveProgramming },
  { label: 'Contact', href: SECTION_IDS.contact },
] as const;

export const ANIMATION_DURATION = 0.5;
export const STAGGER_DELAY = 0.08;
export const EASE_OUT_QUAD = [0.25, 0.46, 0.45, 0.94] as const;
