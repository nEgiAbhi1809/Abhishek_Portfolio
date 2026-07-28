import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { GlowCard } from '@/components/shared/GlowCard';
import { TechBadge } from '@/components/shared/TechBadge';
import { experience } from '@/data/experience';
import { STAGGER_DELAY } from '@/lib/constants';

export function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32 bg-[var(--color-bg-secondary)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Experience"
          title="Where I've Built"
          subtitle="Production engineering at scale — from AI agents to observability pipelines."
        />

        {experience.map((exp) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Company Header */}
            <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[var(--color-text-primary)]">
                  {exp.company}
                </h3>
                <p className="text-[var(--color-accent)] font-medium mt-1">{exp.role}</p>
                <p className="text-sm text-[var(--color-text-muted)] mt-0.5">
                  {exp.duration} • {exp.location}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {exp.techStack.slice(0, 5).map((tech) => (
                  <TechBadge key={tech} name={tech} />
                ))}
              </div>
            </div>

            {/* Responsibilities Grid */}
            <div className="grid gap-4 sm:grid-cols-2">
              {exp.responsibilities.map((resp, i) => (
                <GlowCard key={resp.title} className="p-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20, filter: 'blur(10px)' }}
                    whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ delay: i * STAGGER_DELAY + 0.2 }}
                  >
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <h4 className="text-lg font-semibold text-[var(--color-text-primary)]">
                        {resp.title}
                      </h4>
                      <ExternalLink className="h-4 w-4 shrink-0 text-[var(--color-text-muted)]" />
                    </div>

                    <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4">
                      {resp.description}
                    </p>

                    {/* Impact */}
                    <div className="rounded-lg bg-[var(--color-accent-subtle)] border border-[var(--color-accent)]/20 px-3 py-2 mb-3">
                      <p className="text-xs font-medium text-[var(--color-accent)]">
                        📊 {resp.impact}
                      </p>
                    </div>

                    {/* Tech */}
                    <div className="flex flex-wrap gap-1.5">
                      {resp.tech.map((t) => (
                        <TechBadge key={t} name={t} />
                      ))}
                    </div>
                  </motion.div>
                </GlowCard>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
