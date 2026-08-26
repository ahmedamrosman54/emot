import { lazy, Suspense, useEffect } from "react";
import { LanguageProvider } from "@/i18n/LanguageContext";
import { AuroraGrid } from "@/components/AuroraGrid";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";

const About = lazy(() =>
  import("@/components/About").then(({ About }) => ({ default: About })),
);
const Services = lazy(() =>
  import("@/components/Services").then(({ Services }) => ({
    default: Services,
  })),
);
const Portfolio = lazy(() =>
  import("@/components/Portfolio").then(({ Portfolio }) => ({
    default: Portfolio,
  })),
);
const Pricing = lazy(() =>
  import("@/components/Pricing").then(({ Pricing }) => ({ default: Pricing })),
);
const Testimonials = lazy(() =>
  import("@/components/Testimonials").then(({ Testimonials }) => ({
    default: Testimonials,
  })),
);
const Contact = lazy(() =>
  import("@/components/Contact").then(({ Contact }) => ({ default: Contact })),
);
const Footer = lazy(() =>
  import("@/components/Footer").then(({ Footer }) => ({ default: Footer })),
);

function App() {
  useEffect(() => {
    let currentVersion: string | undefined;

    const checkForUpdate = async () => {
      try {
        const response = await fetch(`/version.json?${Date.now()}`, {
          cache: "no-store",
        });
        if (!response.ok) return;

        const { version } = (await response.json()) as { version?: string };
        if (!currentVersion) {
          currentVersion = version;
        } else if (version && version !== currentVersion) {
          window.location.reload();
        }
      } catch {
        // Ignore temporary network errors and retry on the next interval.
      }
    };

    checkForUpdate();
    const intervalId = window.setInterval(checkForUpdate, 10_000);
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") checkForUpdate();
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      window.clearInterval(intervalId);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

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
