import { siteConfig } from '../config/site';

const Footer = () => {
  return (
    <footer className="bg-slate-950 py-10 text-slate-300">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-lg font-semibold text-white">{siteConfig.studioName}</p>
          <p className="text-sm text-slate-400">
            {siteConfig.ownerName} · {siteConfig.tagline}
          </p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm">
          <a href="#about" className="transition hover:text-white">
            About
          </a>
          <a href="#portfolio" className="transition hover:text-white">
            Portfolio
          </a>
          <a href="#contact" className="transition hover:text-white">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
