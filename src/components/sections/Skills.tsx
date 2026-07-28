import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code2, Server, Layout, Database, Container, Brain, BookOpen,
} from 'lucide-react';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { GlowCard } from '@/components/shared/GlowCard';
import { skillCategories } from '@/data/skills';
import { explainSkill } from '@/lib/gemini';
import { STAGGER_DELAY } from '@/lib/constants';

const iconMap: Record<string, React.ElementType> = {
  Code2, Server, Layout, Database, Container, Brain, BookOpen,
};

export function Skills() {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
  const [aiExplanation, setAiExplanation] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const handleSkillClick = async (skillName: string) => {
    if (selectedSkill === skillName) {
      setSelectedSkill(null);
      return;
    }
    setSelectedSkill(skillName);
    setLoading(true);
    const explanation = await explainSkill(skillName);
    setAiExplanation(explanation);
    setLoading(false);
  };

  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Skills"
          title="Tech Arsenal"
          subtitle="Technologies I use to build production systems. Click any skill to learn how I've used it."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {skillCategories.map((category, catIdx) => {
            const IconComponent = iconMap[category.icon] || Code2;
            return (
              <GlowCard key={category.name}>
                <motion.div
                  initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                  whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ delay: catIdx * STAGGER_DELAY }}
                  className="p-5"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <IconComponent className="h-5 w-5 text-[var(--color-accent)]" />
                    <h3 className="font-semibold text-[var(--color-text-primary)]">
                      {category.name}
                    </h3>
                  </div>

                  <div className="space-y-2">
                    {category.skills.map((skill) => (
                      <button
                        key={skill.name}
                        onClick={() => handleSkillClick(skill.name)}
                        className={`w-full flex items-center justify-between rounded-lg px-3 py-2 text-sm transition-all duration-200 text-left ${
                          selectedSkill === skill.name
                            ? 'bg-[var(--color-accent-subtle)] border border-[var(--color-accent)]/30 text-[var(--color-accent)]'
                            : 'hover:bg-[var(--color-bg-tertiary)] text-[var(--color-text-secondary)]'
                        }`}
                      >
                        <span>{skill.name}</span>
                        <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)] opacity-50" />
                      </button>
                    ))}
                  </div>
                </motion.div>
              </GlowCard>
            );
          })}
        </div>

        {/* AI Skill Explanation */}
        <AnimatePresence>
          {selectedSkill && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-8 mx-auto max-w-2xl"
            >
              <div className="rounded-xl border border-[var(--color-accent)]/20 bg-[var(--color-accent-subtle)] p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Brain className="h-4 w-4 text-[var(--color-accent)]" />
                  <h4 className="font-semibold text-[var(--color-text-primary)]">
                    My Experience with {selectedSkill}
                  </h4>
                </div>
                {loading ? (
                  <div className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)]">
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-[var(--color-accent)] border-t-transparent" />
                    Generating explanation...
                  </div>
                ) : (
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed whitespace-pre-line">
                    {aiExplanation}
                  </p>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
