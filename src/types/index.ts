// ============================================================
// Portfolio Type Definitions
// ============================================================

export interface PersonalInfo {
  name: string;
  title: string;
  subtitle: string[];
  email: string;
  phone: string;
  location: string;
  bio: string;
  shortBio: string;
  github: string;
  linkedin: string;
  leetcode: string;
  codeforces: string;
  codechef?: string;
  resumeUrl: string;
  resumeDownloadUrl: string;
  avatarInitials: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  duration: string;
  location: string;
  startDate: string;
  endDate: string;
  logo?: string;
  responsibilities: {
    title: string;
    description: string;
    tech: string[];
    impact: string;
  }[];
  techStack: string[];
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  problem: string;
  context?: string;
  solution: string;
  features: string[];
  challenges: string[];
  impact: string;
  techStack: string[];
  github: string;
  demo?: string;
  image?: string;
  category: 'ai' | 'fullstack' | 'backend' | 'frontend';
  featured: boolean;
  architecture?: string;
}

export interface SkillCategory {
  name: string;
  icon: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  level: 'expert' | 'advanced' | 'intermediate' | 'learning';
  icon?: string;
  description?: string;
}

export interface Achievement {
  id: string;
  title: string;
  platform: string;
  metric: string;
  description: string;
  icon: string;
  link?: string;
  highlight: boolean;
}

export interface CPPlatform {
  name: string;
  username: string;
  rating: number;
  maxRating: number;
  title: string;
  rank: string;
  totalParticipants: number;
  problemsSolved: number;
  link: string;
  color: string;
  icon: string;
}

export interface TimelineEvent {
  id: string;
  date: string;
  title: string;
  description: string;
  type: 'education' | 'experience' | 'achievement' | 'project' | 'milestone';
  icon: string;
  tags?: string[];
}

export interface GitHubRepo {
  name: string;
  description: string;
  language: string;
  stars: number;
  forks: number;
  url: string;
  homepage?: string;
  topics: string[];
  updatedAt: string;
}

export interface GitHubStats {
  publicRepos: number;
  followers: number;
  following: number;
  totalStars: number;
  topLanguages: { name: string; percentage: number; color: string }[];
  repos: GitHubRepo[];
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export interface NavItem {
  label: string;
  href: string;
  icon?: string;
}
