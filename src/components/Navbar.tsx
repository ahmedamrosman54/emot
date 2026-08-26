import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const WHATSAPP_URL = "https://wa.me/201012266400";

export function Navbar() {
  const { t, lang, toggleLang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavigation = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const href = event.currentTarget.getAttribute("href");
    if (!href?.startsWith("#")) return;

    const target = document.querySelector<HTMLElement>(href);
    if (!target) return;

    event.preventDefault();
    const navbarHeight =
      event.currentTarget.closest("nav")?.getBoundingClientRect().height ?? 0;
    const targetTop =
      target.getBoundingClientRect().top + window.scrollY - navbarHeight;

    window.history.pushState(null, "", href);
    window.scrollTo({ top: Math.max(0, targetTop), behavior: "smooth" });
    setMobileOpen(false);
  };

  const navItems = [
    { key: "home", href: "#home" },
    { key: "about", href: "#about" },
    { key: "services", href: "#services" },
    { key: "portfolio", href: "#portfolio" },
    { key: "pricing", href: "#pricing" },
    { key: "testimonials", href: "#testimonials" },
    { key: "contact", href: "#contact" },
  ] as const;

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      dir={t.dir}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-lg shadow-cyber/5" : "bg-transparent"
      }`}
      style={{
        borderBottom: scrolled
          ? "1px solid rgba(0, 212, 255, 0.15)"
          : "1px solid transparent",
      }}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a
          href="#home"
          onClick={handleNavigation}
          className="flex items-center gap-2"
        >
          <span className="font-mono text-2xl font-bold tracking-tight">
            <span className="text-white">e</span>
            <span className="text-gradient-neon">mot</span>
          </span>
          <span className="hidden text-xs text-slate-500 sm:inline">| dev</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden min-w-0 items-center gap-1 xl:flex">
          {navItems.map((item, i) => (
            <motion.a
              key={item.key}
              href={item.href}
              onClick={handleNavigation}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 * i + 0.2, duration: 0.3 }}
              className="relative rounded-lg px-3 py-2 text-sm font-medium text-slate-300 transition-colors hover:text-cyber"
            >
              {t.nav[item.key]}
            </motion.a>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Language toggle */}
          <button
            onClick={toggleLang}
            className="group flex items-center gap-1.5 rounded-full border border-mint/30 bg-mint/5 px-3 py-1.5 text-sm font-bold text-mint transition-all hover:border-mint/60 hover:bg-mint/10 hover:shadow-[0_0_15px_rgba(58,255,158,0.3)]"
            aria-label="Toggle language"
          >
            <Globe className="h-4 w-4" />
            <span className="font-mono">{lang === "en" ? "ع" : "EN"}</span>
          </button>

          {/* CTA */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-gradient-to-r from-cyber to-mint px-5 py-2 text-sm font-bold text-space-400 shadow-[0_0_20px_rgba(0,212,255,0.3)] transition-all hover:shadow-[0_0_30px_rgba(0,212,255,0.5)] xl:block"
          >
            {t.nav.cta}
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-lg p-2 text-slate-300 transition-colors hover:text-cyber xl:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden glass xl:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.key}
                  href={item.href}
                  onClick={handleNavigation}
                  initial={{ opacity: 0, x: lang === "ar" ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                  className="rounded-lg px-4 py-3 text-sm font-medium text-slate-300 transition-colors hover:bg-cyber/10 hover:text-cyber"
                >
                  {t.nav[item.key]}
                </motion.a>
              ))}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="mt-2 rounded-full bg-gradient-to-r from-cyber to-mint px-5 py-2.5 text-center text-sm font-bold text-space-400"
              >
                {t.nav.cta}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
