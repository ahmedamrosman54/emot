import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Palette, Database, MonitorSmartphone, LayoutDashboard, Clock } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

interface ServiceCardProps {
  icon: typeof Palette;
  title: string;
  desc: string;
  index: number;
  color: 'cyber' | 'mint' | 'crimson';
}

function ServiceCard({ icon: Icon, title, desc, index, color }: ServiceCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;
    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => setTilt({ x: 0, y: 0 });

  const colorClasses = {
    cyber: { text: 'text-cyber', border: 'border-cyber/20', bg: 'bg-cyber/5', glow: 'rgba(0, 212, 255, 0.15)' },
    mint: { text: 'text-mint', border: 'border-mint/20', bg: 'bg-mint/5', glow: 'rgba(58, 255, 158, 0.15)' },
    crimson: { text: 'text-crimson', border: 'border-crimson/20', bg: 'bg-crimson/5', glow: 'rgba(255, 59, 92, 0.15)' },
  };
  const c = colorClasses[color];

  return (
    <motion.div
      custom={index}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1, type: 'spring', bounce: 0.3 }}
      className="perspective-1000"
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="preserve-3d group relative h-full overflow-hidden rounded-2xl glass-card p-6 transition-transform duration-200 ease-out"
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          boxShadow: `0 0 30px ${c.glow}`,
        }}
      >
        {/* Corner accent */}
        <div
          className="absolute -end-12 -top-12 h-24 w-24 rounded-full blur-2xl opacity-40 transition-opacity group-hover:opacity-70"
          style={{ background: c.glow }}
        />

        <div className={`preserve-3d mb-5 flex h-14 w-14 items-center justify-center rounded-xl border ${c.border} ${c.bg}`} style={{ transform: 'translateZ(40px)' }}>
          <Icon className={`h-7 w-7 ${c.text}`} />
        </div>
        <h3 className="preserve-3d font-mono text-lg font-bold text-white" style={{ transform: 'translateZ(30px)' }}>
          {title}
        </h3>
        <p className="preserve-3d mt-3 text-sm leading-relaxed text-slate-400" style={{ transform: 'translateZ(20px)' }}>
          {desc}
        </p>

        {/* Bottom gradient line */}
        <div className={`absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-transparent ${c.border.replace('border-', 'via-')} to-transparent opacity-0 transition-opacity group-hover:opacity-100`} />
      </div>
    </motion.div>
  );
}

export function Services() {
  const { t } = useLanguage();

  const services = [
    { icon: Palette, title: t.services.card1Title, desc: t.services.card1Desc, color: 'cyber' as const },
    { icon: Database, title: t.services.card2Title, desc: t.services.card2Desc, color: 'mint' as const },
    { icon: MonitorSmartphone, title: t.services.card3Title, desc: t.services.card3Desc, color: 'crimson' as const },
    { icon: LayoutDashboard, title: t.services.card4Title, desc: t.services.card4Desc, color: 'cyber' as const },
  ];

  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="mb-16 flex flex-col items-center text-center"
        >
          <div className="flex items-center gap-3">
            <span className="inline-block rounded-full border border-cyber/30 bg-cyber/5 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-cyber sm:text-sm">
              {t.services.badge}
            </span>
            {/* 24/7 badge */}
            <span className="inline-flex items-center gap-1.5 rounded-full border border-mint/40 bg-mint/10 px-4 py-1.5 text-xs font-bold text-mint animate-pulse-glow sm:text-sm">
              <Clock className="h-3.5 w-3.5" />
              {t.services.supportBadge}
            </span>
          </div>
          <h2 className="mt-4 font-mono text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            {t.services.title}
          </h2>
          <p className="mt-3 text-lg text-slate-400">{t.services.subtitle}</p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <ServiceCard key={i} {...service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
