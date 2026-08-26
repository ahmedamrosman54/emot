import { lazy, Suspense } from 'react';
import { LanguageProvider } from '@/i18n/LanguageContext';
import { AuroraGrid } from '@/components/AuroraGrid';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';

const About = lazy(() => import('@/components/About').then(({ About }) => ({ default: About })));
const Services = lazy(() => import('@/components/Services').then(({ Services }) => ({ default: Services })));
const Portfolio = lazy(() => import('@/components/Portfolio').then(({ Portfolio }) => ({ default: Portfolio })));
const Pricing = lazy(() => import('@/components/Pricing').then(({ Pricing }) => ({ default: Pricing })));
const Testimonials = lazy(() => import('@/components/Testimonials').then(({ Testimonials }) => ({ default: Testimonials })));
const Contact = lazy(() => import('@/components/Contact').then(({ Contact }) => ({ default: Contact })));
const Footer = lazy(() => import('@/components/Footer').then(({ Footer }) => ({ default: Footer })));

function App() {
  return (
    <LanguageProvider>
      <div className="relative min-h-screen bg-space-400 text-slate-200">
        <AuroraGrid />
        <div className="relative z-10">
          <Navbar />
          <main>
            <Hero />
            <Suspense fallback={null}>
              <About />
              <Services />
              <Portfolio />
              <Pricing />
              <Testimonials />
              <Contact />
              <Footer />
            </Suspense>
          </main>
        </div>
      </div>
    </LanguageProvider>
  );
}

export default App;
