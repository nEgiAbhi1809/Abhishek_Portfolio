import { motion } from 'framer-motion';
import { Trophy, Zap, Award, Star, ExternalLink } from 'lucide-react';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { GlowCard } from '@/components/shared/GlowCard';
import { AnimatedCounter } from '@/components/shared/AnimatedCounter';
import { cpPlatforms, achievements } from '@/data/achievements';
import { STAGGER_DELAY } from '@/lib/constants';

const iconMap: Record<string, React.ElementType> = {
  Trophy, Zap, Award, Star,
};

export function CompetitiveProgramming() {
  return (
    <section id="competitive-programming" className="relative py-24 sm:py-32 bg-[var(--color-bg-secondary)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Competitive Programming"
          title="1000+ Problems. Top 1%."
          subtitle="Algorithmic rigor that translates directly into efficient AI systems and scalable architectures."
        />

        {/* Total Problems Counter */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <div className="inline-flex flex-col items-center rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-primary)] p-8">
            <span className="text-5xl sm:text-6xl font-black text-[var(--color-text-primary)]">
              <AnimatedCounter end={1000} suffix="+" duration={2500} />
            </span>
            <span className="mt-2 text-sm text-[var(--color-text-muted)] font-medium uppercase tracking-wider">
              Problems Solved Across Platforms
            </span>
          </div>
        </motion.div>

        {/* Platform Cards */}
        <div className="grid gap-6 sm:grid-cols-3 mb-12">
          {cpPlatforms.map((platform, i) => (
            <GlowCard key={platform.name} glowColor={`${platform.color}20`}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * STAGGER_DELAY }}
                className="p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-[var(--color-text-primary)]">
                    {platform.name}
                  </h3>
                  <a
                    href={platform.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors"
                    aria-label={`${platform.name} profile`}
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>

                {/* Title badge */}
                <div
                  className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-sm font-bold mb-4"
                  style={{
                    backgroundColor: `${platform.color}15`,
                    color: platform.color,
                    border: `1px solid ${platform.color}30`,
                  }}
                >
                  {platform.title}
                </div>

                {/* Stats */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[var(--color-text-muted)]">Max Rating</span>
                    <span className="font-mono font-bold text-[var(--color-text-primary)]">
                      <AnimatedCounter end={platform.maxRating} />
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[var(--color-text-muted)]">Rank</span>
                    <span className="text-sm font-medium text-[var(--color-text-secondary)]">
                      {platform.rank}
                    </span>
                  </div>

                  {/* Percentile bar */}
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-[var(--color-text-muted)]">Percentile</span>
                      <span className="text-xs font-mono" style={{ color: platform.color }}>
                        Top{' '}
                        {((platform.name === 'CodeChef'
                          ? 196
                          : platform.name === 'LeetCode'
                          ? 928
                          : 2000) /
                          platform.totalParticipants *
                          100
                        ).toFixed(1)}
                        %
                      </span>
                    </div>
                    <div className="h-2 rounded-full bg-[var(--color-bg-tertiary)] overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{
                          width: `${
                            100 -
                            (platform.name === 'CodeChef'
                              ? 196
                              : platform.name === 'LeetCode'
                              ? 928
                              : 2000) /
                              platform.totalParticipants *
                              100
                          }%`,
                        }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: i * 0.2 }}
                        className="h-full rounded-full"
                        style={{ backgroundColor: platform.color }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </GlowCard>
          ))}
        </div>

        {/* Achievements */}
        <div id="achievements">
          <h3 className="text-2xl font-bold text-[var(--color-text-primary)] text-center mb-8">
            Achievements & Awards
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {achievements.map((achievement, i) => {
              const IconComp = iconMap[achievement.icon] || Award;
              return (
                <motion.div
                  key={achievement.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * STAGGER_DELAY }}
                  className={`flex items-start gap-4 rounded-xl border p-4 transition-colors ${
                    achievement.highlight
                      ? 'border-[var(--color-accent)]/20 bg-[var(--color-accent-subtle)]'
                      : 'border-[var(--color-border-subtle)] bg-[var(--color-bg-primary)]'
                  }`}
                >
                  <div
                    className={`shrink-0 rounded-lg p-2 ${
                      achievement.highlight
                        ? 'bg-[var(--color-accent)]/10 text-[var(--color-accent)]'
                        : 'bg-[var(--color-bg-tertiary)] text-[var(--color-text-muted)]'
                    }`}
                  >
                    <IconComp className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-semibold text-[var(--color-text-primary)] text-sm">
                      {achievement.title}
                    </h4>
                    <p className="text-xs text-[var(--color-accent)] font-mono mt-0.5">
                      {achievement.metric}
                    </p>
                    <p className="text-xs text-[var(--color-text-muted)] mt-1 line-clamp-2">
                      {achievement.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
