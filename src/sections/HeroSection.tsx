import { motion } from 'framer-motion';
import { siteConfig } from '../config/site';

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen scroll-mt-20 items-center justify-center overflow-hidden bg-slate-950 text-white"
      style={{ backgroundImage: `url(${siteConfig.heroImage})`, backgroundSize: 'cover' }}
    >
      <div className="absolute inset-0 bg-slate-950/80" />
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/40 via-slate-950/20 to-cyan-400/20" />
      <div className="absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-indigo-500/30 blur-3xl" />
      <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-cyan-400/30 blur-3xl" />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-24 text-center md:text-left">
        <motion.p
          className="text-sm font-semibold uppercase tracking-[0.4em] text-indigo-200"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {siteConfig.studioName}
        </motion.p>
        <motion.h1
          className="text-4xl font-semibold leading-tight md:text-6xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          {siteConfig.heroTitle}
        </motion.h1>
        <motion.p
          className="max-w-2xl text-lg text-slate-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {siteConfig.heroSubtitle}
        </motion.p>
        <motion.div
          className="flex flex-wrap items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <a
            href="#portfolio"
            className="rounded-full bg-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/40 transition hover:bg-indigo-400"
          >
            View Portfolio
          </a>
          <a
            href="#contact"
            className="rounded-full border border-indigo-300/50 px-6 py-3 text-sm font-semibold text-indigo-100 transition hover:border-indigo-200 hover:text-white"
          >
            Contact
          </a>
        </motion.div>
        <motion.div
          className="flex flex-col gap-2 text-sm text-slate-300 md:flex-row md:items-center md:gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <span className="font-semibold text-white">{siteConfig.ownerName}</span>
          <span className="hidden h-1 w-1 rounded-full bg-slate-400 md:inline-block" />
          <span>{siteConfig.tagline}</span>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
