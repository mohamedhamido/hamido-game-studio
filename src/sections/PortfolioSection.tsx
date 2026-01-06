import { motion } from 'framer-motion';
import { projects } from '../config/projects';

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="scroll-mt-20 bg-slate-950 py-20 text-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-300">Portfolio</p>
          <h2 className="mt-4 text-3xl font-semibold md:text-4xl">Featured Games</h2>
          <p className="mt-4 text-lg text-slate-300">
            Explore the latest builds and prototypes from Hamido Game Studio.
          </p>
        </div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              className="grid gap-6 rounded-3xl border border-white/10 bg-slate-900/60 p-6 shadow-xl shadow-black/30 lg:grid-cols-[1.1fr_1fr]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="flex flex-col gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-indigo-300">{project.platform}</p>
                  <h3 className="mt-2 text-2xl font-semibold text-white">{project.title}</h3>
                  <p className="mt-2 text-sm text-indigo-100">{project.shortTagline}</p>
                </div>
                <p className="text-sm text-slate-300">{project.description}</p>
                <ul className="space-y-2 text-sm text-slate-300">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-400" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={project.downloadUrl}
                    className="rounded-full bg-indigo-500 px-5 py-2.5 text-xs font-semibold uppercase tracking-wide text-white transition hover:bg-indigo-400"
                  >
                    Download
                  </a>
                  <span className="rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-wide text-slate-300">
                    {project.platform}
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="overflow-hidden rounded-2xl border border-white/10">
                  <img
                    src={project.coverImage}
                    alt={`${project.title} cover`}
                    className="h-56 w-full object-cover md:h-64"
                  />
                </div>
                <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-950">
                  <div className="aspect-video">
                    <iframe
                      className="h-full w-full"
                      src={project.videoEmbedUrl}
                      title={`${project.title} video`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
