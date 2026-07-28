import { motion, Variants } from 'framer-motion';
import { FileText, Mail, Download } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/shared/Icons';
import { personalInfo } from '@/data/personal';
import { GradientText } from '@/components/shared/GradientText';
import { TypingEffect } from '@/components/shared/TypingEffect';
import { MagneticButton } from '@/components/shared/MagneticButton';
import { scrollToSection } from '@/lib/utils';
import { STAGGER_DELAY } from '@/lib/constants';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: STAGGER_DELAY * 2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto max-w-5xl px-4 text-center"
      >
        {/* Status badge */}
        <motion.div variants={itemVariants} className="mb-8 flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-bg-secondary)]/80 px-4 py-2 text-sm backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="text-[var(--color-text-secondary)]">
              Open to opportunities
            </span>
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-[var(--color-text-primary)] leading-[1.1]"
        >
          Building Scalable{' '}
          <GradientText>Backend Systems</GradientText>
          <br />
          <span className="text-[var(--color-text-secondary)]">&</span>{' '}
          Production Software
        </motion.h1>

        {/* Typing subtitle */}
        <motion.div
          variants={itemVariants}
          className="mt-6 text-lg sm:text-xl md:text-2xl font-mono text-[var(--color-text-secondary)]"
        >
          <TypingEffect
            texts={personalInfo.subtitle}
            typingSpeed={60}
            deletingSpeed={30}
            pauseDuration={2500}
          />
        </motion.div>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="mx-auto mt-8 max-w-2xl text-base sm:text-lg text-[var(--color-text-muted)] leading-relaxed"
        >
          {personalInfo.shortBio}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <MagneticButton>
            <motion.a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center gap-2 rounded-xl bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[var(--color-accent)]/25 transition-all hover:shadow-xl hover:shadow-[var(--color-accent)]/30 animate-glow"
            >
              <FileText className="h-4 w-4" />
              View Resume
            </motion.a>
          </MagneticButton>
          <MagneticButton>
            <motion.a
              href={personalInfo.resumeDownloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] px-6 py-3 text-sm font-semibold text-[var(--color-text-primary)] transition-all hover:border-[var(--color-accent)]/50 hover:bg-[var(--color-bg-tertiary)]"
            >
              <Download className="h-4 w-4" />
              Download
            </motion.a>
          </MagneticButton>
          <MagneticButton>
            <motion.a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] px-6 py-3 text-sm font-semibold text-[var(--color-text-primary)] transition-all hover:border-[var(--color-accent)]/50 hover:bg-[var(--color-bg-tertiary)]"
            >
              <GithubIcon className="h-4 w-4" />
              GitHub
            </motion.a>
          </MagneticButton>
          <MagneticButton>
            <motion.a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] px-6 py-3 text-sm font-semibold text-[var(--color-text-primary)] transition-all hover:border-[var(--color-accent)]/50 hover:bg-[var(--color-bg-tertiary)]"
            >
              <LinkedinIcon className="h-4 w-4" />
              LinkedIn
            </motion.a>
          </MagneticButton>
          <MagneticButton>
            <motion.button
              onClick={() => scrollToSection('contact')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] px-6 py-3 text-sm font-semibold text-[var(--color-text-primary)] transition-all hover:border-[var(--color-accent)]/50 hover:bg-[var(--color-bg-tertiary)]"
            >
              <Mail className="h-4 w-4" />
              Contact
            </motion.button>
          </MagneticButton>
        </motion.div>
      </motion.div>

    </section>
  );
}
