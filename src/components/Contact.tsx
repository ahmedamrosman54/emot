import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import {
  Send,
  Mail,
  Phone,
  MessageCircle,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const WHATSAPP_URL = "https://wa.me/201012266400";
const PHONE = "01012266400";
const EMAIL = "ahmoziaham@gmail.com";
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export function Contact() {
  const { t } = useLanguage();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    honeypot: "",
  });
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});

  const validate = () => {
    const e: { name?: string; email?: string; message?: string } = {};
    if (!form.name.trim()) e.name = "Required";
    if (!form.email.trim()) e.email = "Required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Invalid email";
    if (!form.message.trim()) e.message = "Required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form.honeypot) return;
    if (!validate()) return;

    setStatus("sending");
    try {
      if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
        throw new Error("EmailJS is not configured");
      }

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          reply_to: form.email,
          message: form.message,
          to_email: EMAIL,
        },
        { publicKey: EMAILJS_PUBLIC_KEY },
      );

      setStatus("success");
      setForm({ name: "", email: "", message: "", honeypot: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="inline-block rounded-full border border-cyber/30 bg-cyber/5 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-cyber sm:text-sm">
            {t.contact.badge}
          </span>
          <h2 className="mt-4 font-mono text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            {t.contact.title}
          </h2>
          <p className="mt-3 text-lg text-slate-400">{t.contact.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-4"
          >
            {/* WhatsApp */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-2xl glass-card p-5 transition-all hover:border-mint/40 hover:shadow-[0_0_20px_rgba(58,255,158,0.15)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-mint/20 bg-mint/5 text-mint transition-all group-hover:animate-pulse-glow">
                <MessageCircle className="h-6 w-6" />
              </div>
              <div>
                <div className="text-xs text-slate-500">
                  {t.contact.whatsapp}
                </div>
                <div className="font-mono text-base font-bold text-white">
                  {PHONE}
                </div>
              </div>
            </a>

            {/* Phone */}
            <a
              href={`tel:+2${PHONE}`}
              className="group flex items-center gap-4 rounded-2xl glass-card p-5 transition-all hover:border-cyber/40 hover:shadow-[0_0_20px_rgba(0,212,255,0.15)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyber/20 bg-cyber/5 text-cyber">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <div className="text-xs text-slate-500">{t.contact.phone}</div>
                <div className="font-mono text-base font-bold text-white">
                  {PHONE}
                </div>
              </div>
            </a>

            {/* Email */}
            <a
              href={`mailto:${EMAIL}`}
              className="group flex items-center gap-4 rounded-2xl glass-card p-5 transition-all hover:border-crimson/40 hover:shadow-[0_0_20px_rgba(255,59,92,0.15)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-crimson/20 bg-crimson/5 text-crimson">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <div className="text-xs text-slate-500">
                  {t.contact.emailLabel}
                </div>
                <div className="font-mono text-base font-bold text-white">
                  {EMAIL}
                </div>
              </div>
            </a>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl glass-card p-6 sm:p-8"
          >
            {/* Honeypot */}
            <input
              type="text"
              name="company"
              value={form.honeypot}
              onChange={(e) => setForm({ ...form, honeypot: e.target.value })}
              className="absolute -left-[9999px] opacity-0"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
            />

            <div className="space-y-5">
              {/* Name */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  {t.contact.name}
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder={t.contact.namePlaceholder}
                  className={`w-full rounded-xl border bg-space-300/50 px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition-colors focus:border-cyber/60 ${
                    errors.name ? "border-crimson/50" : "border-white/10"
                  }`}
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-crimson">{errors.name}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  {t.contact.email}
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder={EMAIL}
                  className={`w-full rounded-xl border bg-space-300/50 px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition-colors focus:border-cyber/60 ${
                    errors.email ? "border-crimson/50" : "border-white/10"
                  }`}
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-crimson">{errors.email}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  {t.contact.message}
                </label>
                <textarea
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  placeholder={t.contact.messagePlaceholder}
                  rows={4}
                  className={`w-full resize-none rounded-xl border bg-space-300/50 px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition-colors focus:border-cyber/60 ${
                    errors.message ? "border-crimson/50" : "border-white/10"
                  }`}
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-crimson">{errors.message}</p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "sending"}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyber to-mint py-3.5 text-sm font-bold text-space-400 shadow-[0_0_20px_rgba(0,212,255,0.3)] transition-all hover:shadow-[0_0_40px_rgba(0,212,255,0.5)] disabled:opacity-50"
              >
                {status === "sending" ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="h-4 w-4 rounded-full border-2 border-space-400 border-t-transparent"
                    />
                    {t.contact.sending}
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    {t.contact.send}
                  </>
                )}
              </button>

              {/* Status messages */}
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 rounded-xl border border-mint/30 bg-mint/10 p-3 text-sm text-mint"
                >
                  <CheckCircle className="h-5 w-5 flex-shrink-0" />
                  {t.contact.success}
                </motion.div>
              )}
              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 rounded-xl border border-crimson/30 bg-crimson/10 p-3 text-sm text-crimson"
                >
                  <AlertCircle className="h-5 w-5 flex-shrink-0" />
                  {t.contact.error}
                </motion.div>
              )}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
