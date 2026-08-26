import {
  Phone,
  MessageCircle,
  Mail,
  Github,
  Linkedin,
  ArrowUp,
} from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const WHATSAPP_URL = "https://wa.me/201012266400";
const PHONE = "01012266400";
const EMAIL = "ahmoziaham@gmail.com";
const GITHUB_URL = "https://github.com/ahmedamrosman54";
const LINKEDIN_URL = "https://linkedin.com/in/ahmed-amr-emot";

export function Footer() {
  const { t } = useLanguage();

  const quickLinks = [
    { label: t.nav.home, href: "#home" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.portfolio, href: "#portfolio" },
    { label: t.nav.pricing, href: "#pricing" },
    { label: t.nav.contact, href: "#contact" },
  ];

  const services = [
    { label: t.services.card1Title, href: "#services" },
    { label: t.services.card2Title, href: "#services" },
    { label: t.services.card3Title, href: "#services" },
    { label: t.services.card4Title, href: "#services" },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-cyber/10 pt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="grid grid-cols-1 gap-8 pb-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#home" className="font-mono text-2xl font-bold">
              <span className="text-white">e</span>
              <span className="text-gradient-neon">mot</span>
            </a>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              {t.footer.tagline}
            </p>
            <p className="mt-4 text-xs text-slate-500">
              Ahmed Amr — {t.nav.about}
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-mono text-sm font-bold uppercase tracking-wider text-white">
              {t.footer.quickLinks}
            </h3>
            <ul className="mt-4 space-y-2">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-cyber"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-mono text-sm font-bold uppercase tracking-wider text-white">
              {t.footer.services}
            </h3>
            <ul className="mt-4 space-y-2">
              {services.map((service, i) => (
                <li key={i}>
                  <a
                    href={service.href}
                    className="text-sm text-slate-400 transition-colors hover:text-mint"
                  >
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-mono text-sm font-bold uppercase tracking-wider text-white">
              {t.footer.contact}
            </h3>
            <div className="mt-4 space-y-3">
              {/* WhatsApp */}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2.5 text-sm text-slate-400 transition-colors hover:text-mint"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-mint/20 bg-mint/5 text-mint transition-all group-hover:animate-pulse-glow">
                  <MessageCircle className="h-4 w-4" />
                </span>
                <span>{PHONE}</span>
              </a>

              {/* Phone */}
              <a
                href={`tel:+2${PHONE}`}
                className="group flex items-center gap-2.5 text-sm text-slate-400 transition-colors hover:text-cyber"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-cyber/20 bg-cyber/5 text-cyber">
                  <Phone className="h-4 w-4" />
                </span>
                <span>{PHONE}</span>
              </a>

              {/* Email */}
              <a
                href={`mailto:${EMAIL}`}
                className="group flex items-center gap-2.5 text-sm text-slate-400 transition-colors hover:text-crimson"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-crimson/20 bg-crimson/5 text-crimson">
                  <Mail className="h-4 w-4" />
                </span>
                <span className="truncate">{EMAIL}</span>
              </a>

              {/* Social */}
              <div className="flex gap-2 pt-2">
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-400 transition-all hover:border-cyber/40 hover:text-cyber"
                  aria-label={t.footer.github}
                >
                  <Github className="h-4 w-4" />
                </a>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-400 transition-all hover:border-cyber/40 hover:text-cyber"
                  aria-label={t.footer.linkedin}
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/5 py-6 sm:flex-row">
          <p className="text-xs text-slate-500">
            © 2026 emot — {t.footer.rights}
          </p>
          <a
            href="#home"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-cyber/30 bg-cyber/5 text-cyber transition-all hover:bg-cyber/10 hover:border-cyber/60"
            aria-label="Back to top"
          >
            <ArrowUp className="h-4 w-4" />
          </a>
        </div>
      </div>

      {/* Glow line at top */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyber/30 to-transparent" />
    </footer>
  );
}
