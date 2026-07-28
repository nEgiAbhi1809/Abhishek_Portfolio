import { motion } from 'framer-motion';
import { Star, GitFork, ExternalLink } from 'lucide-react';
import { GithubIcon } from '@/components/shared/Icons';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { GlowCard } from '@/components/shared/GlowCard';
import { AnimatedCounter } from '@/components/shared/AnimatedCounter';
import { useGitHub } from '@/hooks/useGitHub';
import { personalInfo } from '@/data/personal';
import { STAGGER_DELAY } from '@/lib/constants';

export function GitHubSection() {
  const { stats, loading } = useGitHub();

  return (
    <section id="github" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="GitHub"
          title="Open Source & Code"
          subtitle="My contributions, repositories, and coding activity."
        />

        {loading ? (
          <div className="flex justify-center py-20">
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-[var(--color-accent)] border-t-transparent" />
          </div>
        ) : stats ? (
          <>
            {/* Stats Overview */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
              {[
                { label: 'Repositories', value: stats.publicRepos, icon: GithubIcon },
                { label: 'Stars', value: stats.totalStars, icon: Star },
                { label: 'Followers', value: stats.followers, icon: GithubIcon },
                { label: 'Following', value: stats.following, icon: GithubIcon },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * STAGGER_DELAY }}
                  className="text-center rounded-xl border border-[var(--color-border-subtle)] bg-[var(--color-bg-secondary)] p-4"
                >
                  <stat.icon className="h-5 w-5 mx-auto text-[var(--color-text-muted)] mb-2" />
                  <div className="text-2xl font-bold text-[var(--color-text-primary)]">
                    <AnimatedCounter end={stat.value} />
                  </div>
                  <p className="text-xs text-[var(--color-text-muted)] mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Language Distribution */}
            {stats.topLanguages.length > 0 && (
              <div className="mb-12">
                <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-4 text-center">
                  Language Distribution
                </h3>
                <div className="mx-auto max-w-xl">
                  {/* Bar */}
                  <div className="h-3 rounded-full bg-[var(--color-bg-tertiary)] overflow-hidden flex mb-4">
                    {stats.topLanguages.map((lang) => (
                      <motion.div
                        key={lang.name}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${lang.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="h-full"
                        style={{ backgroundColor: lang.color }}
                        title={`${lang.name}: ${lang.percentage}%`}
                      />
                    ))}
                  </div>
                  {/* Legend */}
                  <div className="flex flex-wrap justify-center gap-4">
                    {stats.topLanguages.map((lang) => (
                      <span
                        key={lang.name}
                        className="flex items-center gap-1.5 text-xs text-[var(--color-text-secondary)]"
                      >
                        <span
                          className="h-2.5 w-2.5 rounded-full"
                          style={{ backgroundColor: lang.color }}
                        />
                        {lang.name} ({lang.percentage}%)
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Repositories */}
            {stats.repos.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-6 text-center">
                  Recent Repositories
                </h3>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {stats.repos.map((repo, i) => (
                    <GlowCard key={repo.name}>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * STAGGER_DELAY }}
                        className="p-5"
                      >
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="font-semibold text-[var(--color-text-primary)] text-sm truncate">
                            {repo.name}
                          </h4>
                          <a
                            href={repo.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors shrink-0 ml-2"
                            aria-label={`View ${repo.name} on GitHub`}
                          >
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </div>
                        <p className="text-xs text-[var(--color-text-muted)] line-clamp-2 mb-3">
                          {repo.description}
                        </p>
                        <div className="flex items-center gap-3 text-xs text-[var(--color-text-muted)]">
                          {repo.language && repo.language !== 'Other' && (
                            <span className="flex items-center gap-1">
                              <span className="h-2 w-2 rounded-full bg-amber-400" />
                              {repo.language}
                            </span>
                          )}
                          {repo.stars > 0 && (
                            <span className="flex items-center gap-1">
                              <Star className="h-3 w-3" />
                              {repo.stars}
                            </span>
                          )}
                          {repo.forks > 0 && (
                            <span className="flex items-center gap-1">
                              <GitFork className="h-3 w-3" />
                              {repo.forks}
                            </span>
                          )}
                        </div>
                      </motion.div>
                    </GlowCard>
                  ))}
                </div>
              </div>
            )}

            {/* View all link */}
            <div className="mt-8 text-center">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] transition-colors"
              >
                View Full GitHub Profile <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </>
        ) : null}
      </div>
    </section>
  );
}
