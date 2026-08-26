import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { Starfield } from "./Starfield";

const WHATSAPP_URL = "https://wa.me/201012266400";

export function Hero() {
  const { t } = useLanguage();
  const buttonRef = useRef<HTMLAnchorElement>(null);

  const stats = [
    { value: "50+", label: t.hero.stat1Label },
    { value: "100%", label: t.hero.stat2Label },
    { value: "5+", label: t.hero.stat3Label },
  ];

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Starfield background */}
      <div className="absolute inset-0">
        <Starfield />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-4 pt-20 text-center sm:px-6 lg:px-8">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyber/30 bg-cyber/5 px-4 py-1.5 text-xs font-medium text-cyber backdrop-blur-sm sm:text-sm"
        >
          <Sparkles className="h-4 w-4 animate-pulse-glow" />
          {t.hero.badge}
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-mono text-4xl font-bold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl"
        >
          {t.hero.titleLine1}{" "}
          <span className="text-gradient-triple">{t.hero.titleHighlight}</span>
          <br />
          {t.hero.titleLine2}
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 max-w-2xl text-base text-slate-400 sm:text-lg"
        >
          {t.hero.description}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <a
            ref={buttonRef}
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-mint to-cyber px-8 py-4 text-base font-bold text-space-400 shadow-[0_0_30px_rgba(58,255,158,0.3)] transition-all hover:shadow-[0_0_50px_rgba(58,255,158,0.6)] animate-pulse-border"
          >
            <span className="relative z-10">{t.hero.ctaPrimary}</span>
            <ArrowRight className="relative z-10 h-5 w-5 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
          </a>
          <a
            href="#portfolio"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-cyber/30 bg-white/5 px-8 py-4 text-base font-bold text-white backdrop-blur-sm transition-all hover:border-cyber/60 hover:bg-cyber/10"
          >
            {t.hero.ctaSecondary}
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-3 gap-4 sm:gap-12"
        >
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="font-mono text-3xl font-bold text-gradient-neon sm:text-4xl">
                {stat.value}
              </div>
              <div className="mt-1 text-xs text-slate-500 sm:text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-cyber/30 p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="h-2 w-1 rounded-full bg-cyber"
          />
        </div>
      </motion.div>
    </section>
  );
}
