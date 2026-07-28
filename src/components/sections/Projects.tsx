import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ChevronDown, ChevronUp, Brain } from 'lucide-react';
import { GithubIcon } from '@/components/shared/Icons';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { GlowCard } from '@/components/shared/GlowCard';
import { TechBadge } from '@/components/shared/TechBadge';
import { projects } from '@/data/projects';
import { explainProject } from '@/lib/gemini';
import { STAGGER_DELAY } from '@/lib/constants';

export function Projects() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [aiExplanation, setAiExplanation] = useState<Record<string, string>>({});
  const [loadingAI, setLoadingAI] = useState<string | null>(null);

  const [aiExplanationVisible, setAiExplanationVisible] = useState<Record<string, boolean>>({});

  const handleExplainWithAI = async (project: typeof projects[0]) => {
    // If it's already visible, hide it
    if (aiExplanationVisible[project.id]) {
      setAiExplanationVisible((prev) => ({ ...prev, [project.id]: false }));
      return;
    }

    // If we already have the explanation fetched but it's hidden, just show it
    if (aiExplanation[project.id]) {
      setAiExplanationVisible((prev) => ({ ...prev, [project.id]: true }));
      return;
    }

    // Otherwise, fetch it
    setLoadingAI(project.id);
    const explanation = await explainProject(project);
    setAiExplanation((prev) => ({ ...prev, [project.id]: explanation }));
    setAiExplanationVisible((prev) => ({ ...prev, [project.id]: true }));
    setLoadingAI(null);
  };

  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Projects"
          title="What I've Built"
          subtitle="From AI-powered platforms to production-grade security systems."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start">
          {projects.map((project, i) => (
            <GlowCard
              key={project.id}
              className={project.featured ? 'md:col-span-1' : ''}
              glowColor={
                project.category === 'ai'
                  ? 'rgba(139, 92, 246, 0.15)'
                  : 'rgba(99, 102, 241, 0.12)'
              }
            >
              <motion.div
                initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: i * STAGGER_DELAY, duration: 0.5 }}
                className="p-6"
              >
                {/* Category badge */}
                <div className="mb-4 flex items-center justify-between">
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium ${
                      project.category === 'ai'
                        ? 'bg-purple-500/10 text-purple-400 border border-purple-500/20'
                        : project.category === 'backend'
                        ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                        : 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                    }`}
                  >
                    {project.category === 'ai' && <Brain className="h-3 w-3" />}
                    {project.category.toUpperCase()}
                  </span>
                  <div className="flex gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors"
                        aria-label={`${project.title} GitHub`}
                      >
                        <GithubIcon className="h-4 w-4" />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors"
                        aria-label={`${project.title} demo`}
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-1">
                  {project.title}
                </h3>
                <p className="text-sm font-medium text-[var(--color-accent)] mb-3">
                  {project.tagline}
                </p>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <TechBadge key={tech} name={tech} />
                  ))}
                </div>

                {/* Impact */}
                {project.impact && (
                  <div className="mt-4 rounded-lg bg-[var(--color-accent-subtle)] border border-[var(--color-accent)]/20 px-3 py-2">
                    <p className="text-xs font-medium text-[var(--color-accent)]">
                      📊 {project.impact}
                    </p>
                  </div>
                )}

                {/* Expand / AI Explain buttons */}
                <div className="mt-4 flex gap-2">
                  <button
                    onClick={() =>
                      setExpandedId(expandedId === project.id ? null : project.id)
                    }
                    className="inline-flex items-center gap-1 text-xs text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors"
                  >
                    {expandedId === project.id ? (
                      <>
                        Less <ChevronUp className="h-3 w-3" />
                      </>
                    ) : (
                      <>
                        More details <ChevronDown className="h-3 w-3" />
                      </>
                    )}
                  </button>
                  <button
                    onClick={() => handleExplainWithAI(project)}
                    disabled={loadingAI === project.id}
                    className="inline-flex items-center gap-1 text-xs text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] transition-colors disabled:opacity-50"
                  >
                    <Brain className="h-3 w-3" />
                    {loadingAI === project.id
                      ? 'Thinking...'
                      : aiExplanationVisible[project.id]
                      ? 'Hide AI Explanation'
                      : aiExplanation[project.id]
                      ? 'Show AI Explanation'
                      : 'Explain with AI'}
                  </button>
                </div>

                {/* Expanded content */}
                <AnimatePresence>
                  {expandedId === project.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-4 space-y-3 border-t border-[var(--color-border-subtle)] pt-4">
                        {project.context && (
                          <div>
                            <p className="text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-wider mb-1">
                              Context: What is Slash?
                            </p>
                            <p className="text-sm text-[var(--color-text-secondary)] bg-[var(--color-bg-secondary)] rounded p-3 border border-[var(--color-border-subtle)]">
                              {project.context}
                            </p>
                          </div>
                        )}
                        {project.problem && (
                          <div>
                            <p className="text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-wider mb-1">
                              Problem
                            </p>
                            <p className="text-sm text-[var(--color-text-secondary)]">
                              {project.problem}
                            </p>
                          </div>
                        )}
                        {project.solution && (
                          <div>
                            <p className="text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-wider mb-1">
                              Solution
                            </p>
                            <p className="text-sm text-[var(--color-text-secondary)]">
                              {project.solution}
                            </p>
                          </div>
                        )}
                        {project.features.length > 0 && (
                          <div>
                            <p className="text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-wider mb-1">
                              Key Features
                            </p>
                            <ul className="space-y-1">
                              {project.features.map((f, idx) => (
                                <li
                                  key={idx}
                                  className="flex items-start gap-2 text-sm text-[var(--color-text-secondary)]"
                                >
                                  <span className="mt-1.5 h-1 w-1 rounded-full bg-[var(--color-accent)] shrink-0" />
                                  {f}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        {project.architecture && (
                          <div>
                            <p className="text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-wider mb-1">
                              Architecture
                            </p>
                            <p className="text-sm font-mono text-[var(--color-accent)] bg-[var(--color-bg-tertiary)] rounded-lg p-3">
                              {project.architecture}
                            </p>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* AI Explanation */}
                <AnimatePresence>
                  {aiExplanationVisible[project.id] && aiExplanation[project.id] && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-4 rounded-lg border border-purple-500/20 bg-purple-500/5 p-4">
                        <p className="text-xs font-semibold text-purple-400 mb-2 flex items-center gap-1">
                          <Brain className="h-3 w-3" /> AI Architecture Explanation
                        </p>
                        <p className="text-sm text-[var(--color-text-secondary)] whitespace-pre-line leading-relaxed">
                          {aiExplanation[project.id]}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}
