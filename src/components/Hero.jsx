import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { heroContent, personalInfo, socialLinks } from '../data/portfolioData';
import SkillUniverse from './SkillUniverse';

const GitHub = () => <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688 1.029-.7-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/></svg>;
const LinkedIn = () => <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.762 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.761-2.239-5-5-5zM8 19H5V8h3v11zM6.5 6.5A1.75 1.75 0 1 1 6.5 3a1.75 1.75 0 0 1 0 3.5zM19 19h-3v-5.604c0-3.368-4-3.113-4 0V19H9V8h3v1.765c1.396-2.586 7-2.777 7 2.476V19z"/></svg>;

const Hero = () => {
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 80, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 80, damping: 20 });

  useEffect(() => {
    const move = (e) => {
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
      setCursor({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('pointermove', move);
    return () => window.removeEventListener('pointermove', move);
  }, [mouseX, mouseY]);

  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-[#050505] text-white flex items-end">
      <motion.div style={{ x: smoothX, y: smoothY }} className="absolute inset-[-30px] hero-grid hero-grid-depth" />
      <motion.div style={{ x: smoothX, y: smoothY }} className="absolute inset-[-60px] hero-world-stars" />
      <motion.div className="hero-cursor-glow" animate={{ left: cursor.x, top: cursor.y }} transition={{ type: 'spring', stiffness: 80, damping: 30 }} />
      <motion.div style={{ x: smoothX, y: smoothY }} className="absolute w-[42rem] h-[42rem] rounded-full border border-red-500/10 -right-40 top-16" />
      <motion.div style={{ x: smoothX, y: smoothY }} className="absolute w-[26rem] h-[26rem] rounded-full border border-white/10 right-20 top-36" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_35%,rgba(255,42,42,.16),transparent_30%),linear-gradient(180deg,transparent_35%,#050505_100%)]" />

      <div className="absolute top-28 right-8 md:right-16 z-10 text-[10px] tracking-[.45em] uppercase text-white/35 [writing-mode:vertical-rl]">Python / AI / Data / Backend</div>

      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12 pb-16 md:pb-20">
        <div className="grid lg:grid-cols-[1fr_380px] gap-12 items-end">
          <div>
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }} className="flex items-center gap-3 mb-7">
              <span className="w-10 h-px bg-red-500" />
              <span className="uppercase tracking-[.35em] text-xs font-bold text-white/55">{heroContent.greeting}</span>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .9, delay: .1 }} className="font-black uppercase leading-[.83] tracking-[-.055em] text-[clamp(4rem,10vw,9.5rem)]">
              Ande<br /><span className="text-outline">Sandeep</span><br />Kumar<span className="text-red-500">.</span>
            </motion.h1>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .5 }} className="mt-8 flex flex-wrap items-center gap-3">
              <span className="px-4 py-2 rounded-full border border-red-500/40 bg-red-500/10 text-red-300 text-sm font-bold">Python Developer</span>
              <span className="text-white/45">AI</span><span className="text-white/20">/</span><span className="text-white/45">Data</span><span className="text-white/20">/</span><span className="text-white/45">Backend</span>
            </motion.div>
            <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .65 }} className="mt-6 max-w-2xl text-white/55 text-base md:text-lg leading-relaxed">
              {heroContent.subtitle} I build systems I can explain—from retrieval pipelines and APIs to SQL data workflows and deployment automation.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .8 }} className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="hero-btn hero-btn-primary">View Projects <span>↗</span></a>
              <a href={`mailto:${personalInfo.emails.primary}?subject=Portfolio%20Inquiry`} className="hero-btn hero-btn-ghost">Let's Talk <span>↗</span></a>
              <a href={socialLinks.github} target="_blank" rel="noreferrer" className="hero-icon-btn" aria-label="GitHub"><GitHub /></a>
              <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" className="hero-icon-btn" aria-label="LinkedIn"><LinkedIn /></a>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, scale: .92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: .35 }} className="relative h-[560px] hidden lg:block -mr-10">
            <SkillUniverse compact />
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-5 left-6 md:left-12 z-20 flex items-center gap-3 text-[10px] tracking-[.35em] uppercase text-white/30"><span className="w-12 h-px bg-white/20" />Scroll to explore</div>
    </section>
  );
};

export default Hero;
