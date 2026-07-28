import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Briefcase, Code2 } from 'lucide-react';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { AnimatedCounter } from '@/components/shared/AnimatedCounter';
import { GlowCard } from '@/components/shared/GlowCard';
import { personalInfo } from '@/data/personal';
import { STAGGER_DELAY } from '@/lib/constants';

const stats = [
  { label: 'Razorpay Internship', value: 6, suffix: ' months', icon: Briefcase },
  { label: 'Problems Solved', value: 1000, suffix: '+', icon: Code2 },
  { label: 'CGPA', value: 8.39, suffix: '', icon: GraduationCap, decimals: 2 },
  { label: 'Juniors Mentored', value: 10, suffix: '+', icon: MapPin },
];

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="About Me"
          title="Engineer. Builder. Problem Solver."
          subtitle="Combining backend engineering excellence with AI innovation and competitive programming rigor."
        />

        <div className="grid gap-12 lg:grid-cols-5">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 space-y-6"
          >
            {personalInfo.bio.split('\n\n').map((paragraph, i) => (
              <p
                key={i}
                className="text-base sm:text-lg leading-relaxed text-[var(--color-text-secondary)]"
              >
                {paragraph}
              </p>
            ))}

            {/* Education */}
            <div className="flex items-start gap-3 rounded-xl border border-[var(--color-border-subtle)] bg-[var(--color-bg-secondary)] p-4">
              <GraduationCap className="mt-0.5 h-5 w-5 text-[var(--color-accent)] shrink-0" />
              <div>
                <p className="font-medium text-[var(--color-text-primary)]">
                  Indian Institute Of Information Technology, Ranchi
                </p>
                <p className="text-sm text-[var(--color-text-secondary)]">
                  B.Tech in Computer Science & Engineering • 2022–2026 • CGPA 8.39
                </p>
              </div>
            </div>
          </motion.div>

          {/* Stats grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 grid grid-cols-2 gap-4"
          >
            {stats.map((stat, i) => (
              <GlowCard key={stat.label} className="p-5">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * STAGGER_DELAY + 0.3 }}
                >
                  <stat.icon className="h-5 w-5 text-[var(--color-accent)] mb-3" />
                  <div className="text-2xl sm:text-3xl font-bold text-[var(--color-text-primary)]">
                    <AnimatedCounter
                      end={stat.value}
                      suffix={stat.suffix}
                      decimals={stat.decimals}
                    />
                  </div>
                  <p className="mt-1 text-xs sm:text-sm text-[var(--color-text-muted)]">
                    {stat.label}
                  </p>
                </motion.div>
              </GlowCard>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
