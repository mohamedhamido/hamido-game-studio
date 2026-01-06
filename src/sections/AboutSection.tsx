import { motion } from 'framer-motion';
import { contactInfo } from '../config/contact';
import { siteConfig } from '../config/site';

const AboutSection = () => {
  return (
    <section id="about" className="scroll-mt-20 bg-slate-950 py-20 text-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6">
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-300">
            About
          </p>
          <h2 className="mt-4 text-3xl font-semibold md:text-4xl">Meet {siteConfig.ownerName}</h2>
          <p className="mt-4 text-lg text-slate-300">
            {siteConfig.ownerName} is a game developer from {contactInfo.location}. He focuses on Unreal Engine
            projects with polished gameplay loops, responsive controls, and optimized performance for mobile and PC.
          </p>
        </motion.div>
        <motion.div
          className="rounded-3xl border border-white/10 bg-slate-900/60 p-8 shadow-xl shadow-black/30"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-indigo-300">Studio</p>
              <p className="mt-2 text-xl font-semibold text-white">{siteConfig.studioName}</p>
              <p className="mt-2 text-sm text-slate-300">{siteConfig.tagline}</p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-indigo-300">Specialties</p>
              <ul className="mt-2 space-y-2 text-sm text-slate-300">
                <li>Unreal Engine development</li>
                <li>Gameplay systems &amp; tuning</li>
                <li>Performance-focused polish</li>
              </ul>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-indigo-300">Availability</p>
              <p className="mt-2 text-sm text-slate-300">
                Open for collaborations, indie publishing, and vertical slice production.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
