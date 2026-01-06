import { motion } from 'framer-motion';
import { contactInfo, socialLinks } from '../config/contact';

const ContactSection = () => {
  return (
    <section id="contact" className="scroll-mt-20 bg-slate-950 py-20 text-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6">
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-300">Contact</p>
          <h2 className="mt-4 text-3xl font-semibold md:text-4xl">Let&apos;s build something together</h2>
          <p className="mt-4 text-lg text-slate-300">
            Reach out for collaborations, publishing, or custom game development requests.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-slate-900/60 p-8 shadow-xl shadow-black/30"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="flex flex-wrap gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.type}
                href={link.url}
                className="rounded-full border border-indigo-400/40 px-4 py-2 text-sm font-semibold text-indigo-100 transition hover:border-indigo-300 hover:text-white"
                target="_blank"
                rel="noreferrer"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="space-y-2 text-sm text-slate-300">
            <p>
              <span className="font-semibold text-white">Location:</span> {contactInfo.location}
            </p>
            {contactInfo.email && (
              <p>
                <span className="font-semibold text-white">Email:</span> {contactInfo.email}
              </p>
            )}
            {contactInfo.phone && (
              <p>
                <span className="font-semibold text-white">Phone:</span> {contactInfo.phone}
              </p>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
