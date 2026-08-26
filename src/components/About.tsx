import { motion } from "framer-motion";
import { Cloud, Database, Zap, Workflow, Code2 } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.1,
      type: "spring" as const,
      bounce: 0.3,
    },
  }),
};

export function About() {
  const { t } = useLanguage();

  const cards = [
    {
      icon: Cloud,
      title: t.about.card1Title,
      desc: t.about.card1Desc,
      color: "cyber",
    },
    {
      icon: Database,
      title: t.about.card2Title,
      desc: t.about.card2Desc,
      color: "mint",
    },
    {
      icon: Zap,
      title: t.about.card3Title,
      desc: t.about.card3Desc,
      color: "crimson",
    },
    {
      icon: Workflow,
      title: t.about.card4Title,
      desc: t.about.card4Desc,
      color: "cyber",
    },
  ];

  const stats = [
    { value: "2.5", label: t.about.experience },
    { value: "50+", label: t.about.projects },
    { value: "40+", label: t.about.clients },
    { value: "99.9%", label: t.about.uptime },
  ];

  return (
    <section id="about" className="relative py-24 sm:py-32">
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
            {t.about.badge}
          </span>
          <h2 className="mt-4 font-mono text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            {t.about.title}
          </h2>
          <p className="mt-3 text-lg text-slate-400">{t.about.subtitle}</p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {/* Bio card - spans 2 cols on lg */}
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="glass-card clip-corner group relative overflow-hidden p-6 lg:col-span-2 lg:row-span-2"
          >
            <div className="absolute inset-0 bg-grid opacity-20" />
            <div className="relative z-10 flex h-full flex-col">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyber/10 neon-border-cyber">
                  <Code2 className="h-6 w-6 text-cyber" />
                </div>
                <span className="font-mono text-sm font-bold text-cyber">
                  emot
                </span>
              </div>
              <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
                {t.about.bio1}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate-400">
                {t.about.bio2}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate-400">
                {t.about.bio3}
              </p>

              {/* Matrix nodes decoration */}
              <div className="mt-auto pt-6">
                <div className="flex flex-wrap gap-2">
                  {[
                    "React",
                    "TypeScript",
                    "Supabase",
                    "PostgreSQL",
                    "Node.js",
                    "Cloud",
                    "Docker",
                    "ES6",
                    "Tailwind CSS",
                    "Angular.js",
                    "MongoDB",
                    "NestJS",
                    "Express.js",
                    "Python",
                    "AI",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-xs text-slate-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Skill cards */}
          {cards.map((card, i) => {
            const Icon = card.icon;
            const colorClass =
              card.color === "cyber"
                ? "text-cyber border-cyber/20 bg-cyber/5"
                : card.color === "mint"
                  ? "text-mint border-mint/20 bg-mint/5"
                  : "text-crimson border-crimson/20 bg-crimson/5";
            return (
              <motion.div
                key={i}
                custom={i + 1}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="glass-card clip-corner group relative h-fit self-start overflow-hidden p-5 transition-transform hover:scale-[1.02]"
              >
                <div
                  className={`mb-3 flex h-10 w-10 items-center justify-center rounded-lg border ${colorClass}`}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-mono text-lg font-bold text-white">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400 sm:text-base">
                  {card.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 grid grid-cols-2 gap-4 rounded-2xl glass-card p-6 sm:grid-cols-4"
        >
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="font-mono text-2xl font-bold text-gradient-neon sm:text-3xl">
                {stat.value}
              </div>
              <div className="mt-1 text-xs text-slate-500 sm:text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
