import { motion } from 'framer-motion';

const features = [
  {
    title: 'Create bold worlds',
    description: 'Prototype levels, characters, and gameplay loops fast.'
  },
  {
    title: 'Animate every moment',
    description: 'Bring menus and UI to life with smooth motion.'
  },
  {
    title: 'Ship with confidence',
    description: 'Deploy polished builds with modern tooling.'
  }
];

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-6 pb-16 pt-20">
        <motion.p
          className="text-sm uppercase tracking-[0.3em] text-indigo-300"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Hamido Game Studio
        </motion.p>
        <motion.h1
          className="text-4xl font-semibold leading-tight md:text-6xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Build immersive worlds with a modern React toolchain.
        </motion.h1>
        <motion.p
          className="max-w-2xl text-lg text-slate-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Start crafting your next adventure with Vite, TailwindCSS, and Framer Motion
          already wired up for you.
        </motion.p>
        <motion.div
          className="flex flex-wrap gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <button className="rounded-full bg-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition hover:bg-indigo-400">
            View roadmap
          </button>
          <button className="rounded-full border border-indigo-400/40 px-6 py-3 text-sm font-semibold text-indigo-100 transition hover:border-indigo-300 hover:text-white">
            Join the playtest
          </button>
        </motion.div>
      </header>

      <section className="mx-auto w-full max-w-5xl px-6 pb-20">
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 shadow-lg shadow-black/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <h2 className="text-xl font-semibold text-white">{feature.title}</h2>
              <p className="mt-2 text-sm text-slate-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
