import { Mail, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/shared/Icons';
import { personalInfo } from '@/data/personal';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-border-subtle)] bg-[var(--color-bg-secondary)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="text-[var(--color-text-primary)] font-semibold text-lg">
              {personalInfo.name}
            </span>
            <span className="text-sm text-[var(--color-text-secondary)]">
              Software Engineer & AI Engineer
            </span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg p-2 text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-tertiary)] transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="h-5 w-5" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg p-2 text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-tertiary)] transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="h-5 w-5" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="rounded-lg p-2 text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-tertiary)] transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>

          {/* Right */}
          <div className="flex flex-col items-center md:items-end gap-1">
            <span className="text-sm text-[var(--color-text-secondary)] flex items-center gap-1">
              Built with <Heart className="h-3.5 w-3.5 text-red-500 fill-red-500" /> using React + Gemini AI
            </span>
            <span className="text-xs text-[var(--color-text-muted)]">
              © {currentYear} {personalInfo.name}. All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
