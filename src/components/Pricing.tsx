import { motion } from 'framer-motion';
import { Check, Star, HardDrive, Plus } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

const WHATSAPP_URL = 'https://wa.me/201012266400';

export function Pricing() {
  const { t } = useLanguage();

  const packages = [
    {
      name: t.pricing.package1Name,
      price: t.pricing.package1Price,
      features: t.pricing.package1Features,
      popular: false,
      color: 'cyber',
    },
    {
      name: t.pricing.package2Name,
      price: t.pricing.package2Price,
      features: t.pricing.package2Features,
      popular: true,
      color: 'cyber',
    },
    {
      name: t.pricing.package3Name,
      price: t.pricing.package3Price,
      features: t.pricing.package3Features,
      popular: false,
      color: 'mint',
    },
  ];

  const addons = [
    { text: t.pricing.addon1, price: '', icon: HardDrive, color: 'mint' },
    { text: t.pricing.addon2, price: t.pricing.addon2Price, icon: Plus, color: 'cyber' },
    { text: t.pricing.addon3, price: t.pricing.addon3Price, icon: Plus, color: 'crimson' },
  ];

  return (
    <section id="pricing" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="inline-block rounded-full border border-cyber/30 bg-cyber/5 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-cyber sm:text-sm">
            {t.pricing.badge}
          </span>
          <h2 className="mt-4 font-mono text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            {t.pricing.title}
          </h2>
          <p className="mt-3 text-lg text-slate-400">{t.pricing.subtitle}</p>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {packages.map((pkg, i) => (
            <motion.div
              key={i}
              custom={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1, type: 'spring', bounce: 0.3 }}
              className={`relative flex flex-col overflow-hidden rounded-2xl p-8 ${
                pkg.popular
                  ? 'glass-card border-2 border-cyber/50 shadow-[0_0_40px_rgba(0,212,255,0.2)] md:scale-105'
                  : 'glass-card'
              }`}
            >
              {/* Popular badge */}
              {pkg.popular && (
                <div className="absolute -top-px left-1/2 -translate-x-1/2 rounded-b-xl bg-gradient-to-r from-cyber to-mint px-4 py-1.5 text-xs font-bold text-space-400">
                  <span className="flex items-center gap-1">
                    <Star className="h-3 w-3 fill-current" />
                    {t.pricing.popular}
                  </span>
                </div>
              )}

              {/* Glow effect for popular */}
              {pkg.popular && (
                <div className="absolute inset-0 -z-10 rounded-2xl bg-cyber/5 blur-2xl" />
              )}

              {/* Package name */}
              <h3 className="mt-4 font-mono text-xl font-bold text-white">{pkg.name}</h3>

              {/* Price */}
              <div className="mt-4 flex items-baseline gap-1">
                <span className="font-mono text-5xl font-bold text-gradient-neon">{pkg.price}</span>
                <span className="text-sm text-slate-500">{t.pricing.perProject}</span>
              </div>

              {/* Features */}
              <ul className="mt-6 flex-1 space-y-3">
                {pkg.features.map((feature, fi) => (
                  <li key={fi} className="flex items-start gap-2.5 text-sm text-slate-300">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-mint" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-8 block rounded-full py-3 text-center text-sm font-bold transition-all ${
                  pkg.popular
                    ? 'bg-gradient-to-r from-cyber to-mint text-space-400 shadow-[0_0_20px_rgba(0,212,255,0.3)] hover:shadow-[0_0_40px_rgba(0,212,255,0.5)]'
                    : 'border border-cyber/30 bg-cyber/5 text-cyber hover:bg-cyber/10 hover:border-cyber/60'
                }`}
              >
                {t.pricing.cta}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Add-ons bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8"
        >
          <h3 className="mb-4 text-center font-mono text-lg font-bold text-white">
            {t.pricing.addonsTitle}
          </h3>
          <div className="grid grid-cols-1 gap-4 rounded-2xl glass-card p-6 sm:grid-cols-3">
            {addons.map((addon, i) => {
              const Icon = addon.icon;
              const colorClass =
                addon.color === 'mint'
                  ? 'text-mint border-mint/20 bg-mint/5'
                  : addon.color === 'cyber'
                  ? 'text-cyber border-cyber/20 bg-cyber/5'
                  : 'text-crimson border-crimson/20 bg-crimson/5';
              return (
                <div key={i} className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/5 p-4">
                  <div className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg border ${colorClass}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm text-slate-300">{addon.text}</p>
                    {addon.price && (
                      <p className="mt-0.5 font-mono text-lg font-bold text-white">{addon.price}</p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
