import { motion } from 'framer-motion';
import {
  GraduationCap, Briefcase, Trophy, Code2, Zap, Medal,
  Users, Image, Shield, Bot, BarChart3, Award, TrendingUp, CheckCircle,
} from 'lucide-react';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { timelineEvents } from '@/data/timeline';
import { STAGGER_DELAY } from '@/lib/constants';

const iconMap: Record<string, React.ElementType> = {
  GraduationCap, Briefcase, Trophy, Code2, Zap, Medal,
  Users, Image, Shield, Bot, BarChart3, Award, TrendingUp, CheckCircle,
};

const typeColors: Record<string, string> = {
  education: 'bg-blue-500',
  experience: 'bg-emerald-500',
  achievement: 'bg-amber-500',
  project: 'bg-purple-500',
  milestone: 'bg-[var(--color-accent)]',
};

export function Timeline() {
  return (
    <section id="timeline" className="relative py-24 sm:py-32 bg-[var(--color-bg-secondary)]">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Journey"
          title="My Timeline"
          subtitle="From IIIT Ranchi to Razorpay — a trajectory of consistent growth."
        />

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-[var(--color-border)]" />

          {timelineEvents.map((event, i) => {
            const IconComp = iconMap[event.icon] || Code2;
            const isLeft = i % 2 === 0;

            return (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * STAGGER_DELAY * 0.5, duration: 0.5 }}
                className={`relative flex items-start gap-4 mb-8 sm:mb-10 ${
                  isLeft
                    ? 'sm:flex-row sm:pr-[calc(50%+2rem)]'
                    : 'sm:flex-row-reverse sm:pl-[calc(50%+2rem)]'
                } flex-row pl-12 sm:pl-0`}
              >
                {/* Dot on timeline */}
                <div
                  className={`absolute left-2.5 sm:left-1/2 sm:-translate-x-1/2 h-3 w-3 rounded-full border-2 border-[var(--color-bg-primary)] ${typeColors[event.type]} z-10`}
                />

                {/* Card */}
                <div className="w-full rounded-xl border border-[var(--color-border-subtle)] bg-[var(--color-bg-primary)] p-4 hover:border-[var(--color-accent)]/30 transition-colors">
                  <div className="flex items-start gap-3">
                    <div className={`shrink-0 rounded-lg p-2 ${typeColors[event.type]}/10`}>
                      <IconComp className="h-4 w-4 text-[var(--color-text-secondary)]" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-mono text-[var(--color-accent)] mb-1">
                        {event.date}
                      </p>
                      <h4 className="text-sm font-semibold text-[var(--color-text-primary)]">
                        {event.title}
                      </h4>
                      <p className="text-xs text-[var(--color-text-muted)] mt-1 leading-relaxed">
                        {event.description}
                      </p>
                      {event.tags && (
                        <div className="mt-2 flex flex-wrap gap-1">
                          {event.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full bg-[var(--color-bg-tertiary)] px-2 py-0.5 text-[10px] text-[var(--color-text-muted)]"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
