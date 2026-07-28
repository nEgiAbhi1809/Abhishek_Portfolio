import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, FileText, Copy, Check, Send } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/shared/Icons';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { GlowCard } from '@/components/shared/GlowCard';
import { personalInfo } from '@/data/personal';

export function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const contactLinks = [
    {
      icon: Mail,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      color: 'text-red-400',
    },
    {
      icon: GithubIcon,
      label: 'GitHub',
      value: 'nEgiAbhi1809',
      href: personalInfo.github,
      color: 'text-[var(--color-text-primary)]',
    },
    {
      icon: LinkedinIcon,
      label: 'LinkedIn',
      value: 'negi-abhi1809',
      href: personalInfo.linkedin,
      color: 'text-blue-400',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: personalInfo.location,
      color: 'text-emerald-400',
    },
  ];

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Contact"
          title="Let's Build Together"
          subtitle="Interested in working together? Let's connect."
        />

        <div className="mx-auto max-w-2xl">
          <GlowCard className="p-8">
            {/* Contact Links */}
            <div className="space-y-4 mb-8">
              {contactLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  {link.href ? (
                    <a
                      href={link.href}
                      target={link.href.startsWith('mailto') ? undefined : '_blank'}
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 rounded-xl p-4 hover:bg-[var(--color-bg-tertiary)] transition-colors group"
                    >
                      <div className={`shrink-0 ${link.color}`}>
                        <link.icon className="h-5 w-5" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs text-[var(--color-text-muted)]">{link.label}</p>
                        <p className="text-sm font-medium text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)] transition-colors truncate">
                          {link.value}
                        </p>
                      </div>
                      <Send className="h-4 w-4 text-[var(--color-text-muted)] ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 rounded-xl p-4">
                      <div className={`shrink-0 ${link.color}`}>
                        <link.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-xs text-[var(--color-text-muted)]">{link.label}</p>
                        <p className="text-sm font-medium text-[var(--color-text-primary)]">
                          {link.value}
                        </p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <motion.button
                onClick={handleCopyEmail}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-tertiary)] px-4 py-3 text-sm font-medium text-[var(--color-text-primary)] hover:bg-[var(--color-accent-subtle)] hover:border-[var(--color-accent)]/30 transition-all"
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4 text-emerald-400" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4" />
                    Copy Email
                  </>
                )}
              </motion.button>

              <motion.a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--color-accent)] px-4 py-3 text-sm font-medium text-white shadow-lg shadow-[var(--color-accent)]/25 hover:shadow-xl transition-all"
              >
                <FileText className="h-4 w-4" />
                Download Resume
              </motion.a>
            </div>
          </GlowCard>
        </div>
      </div>
    </section>
  );
}
