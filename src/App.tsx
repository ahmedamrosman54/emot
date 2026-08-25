import { LanguageProvider } from '@/i18n/LanguageContext';
import { AuroraGrid } from '@/components/AuroraGrid';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Services } from '@/components/Services';
import { Portfolio } from '@/components/Portfolio';
import { Pricing } from '@/components/Pricing';
import { Testimonials } from '@/components/Testimonials';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

function App() {
  return (
    <LanguageProvider>
      <div className="relative min-h-screen bg-space-400 text-slate-200">
        <AuroraGrid />
        <div className="relative z-10">
          <Navbar />
          <main>
            <Hero />
            <About />
            <Services />
            <Portfolio />
            <Pricing />
            <Testimonials />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </LanguageProvider>
  );
}

export default App;
