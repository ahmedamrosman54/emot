import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const PROJECT_IMAGES = [
  "https://images.pexels.com/photos/27141316/pexels-photo-27141316.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/32026177/pexels-photo-32026177.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/33158875/pexels-photo-33158875.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/27141307/pexels-photo-27141307.jpeg?auto=compress&cs=tinysrgb&w=800",
];

const PROJECT_LINKS = [
  "https://grocery-delivery-gs.vercel.app/",
  "https://realestatewebsite-blue.vercel.app/",
  "https://hb-gs.vercel.app/",
  "https://prescripto.vercel.app/",
];

export function Portfolio() {
  const { t } = useLanguage();

  const projects = [
    {
      title: t.portfolio.project1Title,
      category: t.portfolio.project1Category,
      link: PROJECT_LINKS[0],
      color: "cyber",
    },
    {
      title: t.portfolio.project2Title,
      category: t.portfolio.project2Category,
      link: PROJECT_LINKS[1],
      color: "mint",
    },
    {
      title: t.portfolio.project3Title,
      category: t.portfolio.project3Category,
      link: PROJECT_LINKS[2],
      color: "crimson",
    },
    {
      title: t.portfolio.project4Title,
      category: t.portfolio.project4Category,
      link: PROJECT_LINKS[3],
      color: "cyber",
    },
  ];

  const colorMap = {
    cyber: "border-cyber/40 shadow-[0_0_20px_rgba(0,212,255,0.15)]",
    mint: "border-mint/40 shadow-[0_0_20px_rgba(58,255,158,0.15)]",
    crimson: "border-crimson/40 shadow-[0_0_20px_rgba(255,59,92,0.15)]",
  };

  const textColorMap = {
    cyber: "text-cyber",
    mint: "text-mint",
    crimson: "text-crimson",
  };

  return (
    <section id="portfolio" className="relative py-24 sm:py-32">
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
            {t.portfolio.badge}
          </span>
          <h2 className="mt-4 font-mono text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            {t.portfolio.title}
          </h2>
          <p className="mt-3 text-lg text-slate-400">{t.portfolio.subtitle}</p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              custom={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
                type: "spring",
                bounce: 0.3,
              }}
              className={`group relative aspect-[4/3] overflow-hidden rounded-2xl border bg-space-200 ${colorMap[project.color as keyof typeof colorMap]}`}
            >
              {/* Image */}
              <img
                src={PROJECT_IMAGES[i]}
                alt={project.title}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover opacity-40 transition-all duration-500 group-hover:scale-110 group-hover:opacity-60"
              />

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-space-400 via-space-400/60 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <span
                  className={`text-xs font-bold uppercase tracking-wider ${textColorMap[project.color as keyof typeof textColorMap]}`}
                >
                  {project.category}
                </span>
                <h3 className="mt-1 font-mono text-xl font-bold text-white">
                  {project.title}
                </h3>

                {/* Mobile: always visible button */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 flex items-center justify-center gap-2 rounded-lg border border-cyber/40 bg-cyber/10 px-4 py-2.5 text-sm font-bold text-cyber backdrop-blur-sm transition-colors hover:bg-cyber/20 lg:hidden"
                >
                  {t.portfolio.viewProject}
                  <ArrowUpRight className="h-4 w-4" />
                </a>

                {/* Desktop: hover-reveal button */}
                <div className="mt-4 hidden lg:block">
                  <div className="translate-y-[150%] opacity-0 transition-all duration-400 ease-out group-hover:translate-y-0 group-hover:opacity-100">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 rounded-lg border border-cyber/40 bg-cyber/10 px-4 py-2.5 text-sm font-bold text-cyber backdrop-blur-sm transition-colors hover:bg-cyber/20"
                    >
                      {t.portfolio.viewProject}
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
