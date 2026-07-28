import { useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Experience } from '@/components/sections/Experience';
import { Projects } from '@/components/sections/Projects';
import { Skills } from '@/components/sections/Skills';
import { CompetitiveProgramming } from '@/components/sections/CompetitiveProgramming';
import { Timeline } from '@/components/sections/Timeline';
import { Contact } from '@/components/sections/Contact';
import { AIChatBot } from '@/components/ai/AIChatBot';
import { GlobalBackground } from '@/components/shared/GlobalBackground';

function App() {
  const [chatOpen, setChatOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="relative min-h-screen bg-[var(--color-bg-primary)] text-[var(--color-text-primary)]">
      <GlobalBackground />
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-[var(--color-accent)] origin-left z-[60]"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <Navbar onChatOpen={() => setChatOpen(true)} />

      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <CompetitiveProgramming />
        <Timeline />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* AI Chat */}
      <AIChatBot isOpen={chatOpen} onClose={() => setChatOpen(false)} />
    </div>
  );
}

export default App;
