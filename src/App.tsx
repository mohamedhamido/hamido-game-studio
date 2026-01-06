import AboutSection from './sections/AboutSection';
import ContactSection from './sections/ContactSection';
import Footer from './sections/Footer';
import HeroSection from './sections/HeroSection';
import PortfolioSection from './sections/PortfolioSection';
import { siteConfig } from './config/site';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="fixed top-0 z-50 w-full bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <img src={siteConfig.logoImage} alt={`${siteConfig.studioName} logo`} className="h-8 w-8" />
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-200">
              {siteConfig.studioName}
            </span>
          </div>
          <nav className="flex flex-wrap items-center gap-4 text-xs text-slate-200 md:gap-6 md:text-sm">
            <a href="#hero" className="transition hover:text-white">
              Home
            </a>
            <a href="#about" className="transition hover:text-white">
              About
            </a>
            <a href="#portfolio" className="transition hover:text-white">
              Portfolio
            </a>
            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main className="pt-16">
        <HeroSection />
        <AboutSection />
        <PortfolioSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;
