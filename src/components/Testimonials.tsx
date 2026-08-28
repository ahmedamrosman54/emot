import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

export function Testimonials() {
  const { t, lang } = useLanguage();
  const [current, setCurrent] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const items = t.testimonials.items;
  const maxIndex = Math.max(0, items.length - itemsPerView);
  const hasSlider = items.length > itemsPerView;

  useEffect(() => {
    const updateItemsPerView = () => {
      setItemsPerView(
        window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1,
      );
    };

    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  useEffect(() => {
    setCurrent((prev) => Math.min(prev, maxIndex));
  }, [maxIndex]);

  const next = () => {
    if (hasSlider) setCurrent((prev) => Math.min(prev + 1, maxIndex));
  };
  const prev = () => {
    if (hasSlider) setCurrent((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  useEffect(() => {
    if (!hasSlider) return;

    const interval = setInterval(() => {
      if (!isDragging) {
        setCurrent((prev) => Math.min(prev + 1, maxIndex));
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [hasSlider, isDragging, maxIndex]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    startX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    setIsDragging(false);
    const endX = e.changedTouches[0].clientX;
    const diff = startX.current - endX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) next();
      else prev();
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    startX.current = e.clientX;
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setIsDragging(false);
    const endX = e.clientX;
    const diff = startX.current - endX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) next();
      else prev();
    }
  };

  return (
    <section id="testimonials" className="relative py-24 sm:py-32">
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
            {t.testimonials.badge}
          </span>
          <h2 className="mt-4 font-mono text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            {t.testimonials.title}
          </h2>
          <p className="mt-3 text-lg text-slate-400">
            {t.testimonials.subtitle}
          </p>
        </motion.div>

        {/* Slider */}
        <div className="relative overflow-hidden">
          <div
            ref={containerRef}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            className="cursor-grab active:cursor-grabbing"
          >
            <motion.div
              key={current}
              initial={{ opacity: 0.4, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {items.slice(current, current + itemsPerView).map((item, i) => (
                <div key={`${current}-${i}`} className="self-start">
                  <div className="glass-card clip-corner relative h-fit w-full overflow-hidden rounded-2xl p-6">
                    {/* Quote icon */}
                    <Quote className="absolute -end-2 -top-2 h-20 w-20 text-cyber/5" />

                    {/* Stars */}
                    <div className="mb-4 flex gap-1">
                      {Array.from({ length: item.rating }).map((_, si) => (
                        <Star
                          key={si}
                          className="h-4 w-4 fill-mint text-mint"
                          style={{
                            filter:
                              "drop-shadow(0 0 4px rgba(58, 255, 158, 0.6))",
                          }}
                        />
                      ))}
                    </div>

                    {/* Text */}
                    <p className="text-sm leading-relaxed text-slate-300">
                      "{item.text}"
                    </p>

                    {/* Author */}
                    <div className="mt-6 flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-cyber/20 to-mint/20 font-mono text-base font-bold text-cyber">
                        {item.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-mono text-sm font-bold text-white">
                          {item.name}
                        </div>
                        <div className="text-xs text-slate-500">
                          {item.role}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Controls */}
          {hasSlider && (
            <div className="mt-8 flex items-center justify-center gap-4">
              <button
                onClick={prev}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-cyber/30 bg-cyber/5 text-cyber transition-all hover:bg-cyber/10 hover:border-cyber/60"
                aria-label={t.aria.previous}
              >
                {lang === "ar" ? (
                  <ChevronRight className="h-5 w-5" />
                ) : (
                  <ChevronLeft className="h-5 w-5" />
                )}
              </button>

              {/* Dots */}
              <div className="flex gap-2">
                {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`h-2 rounded-full transition-all ${
                      current === i ? "w-8 bg-cyber" : "w-2 bg-slate-600"
                    }`}
                    aria-label={`${t.aria.goToSlide} ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-cyber/30 bg-cyber/5 text-cyber transition-all hover:bg-cyber/10 hover:border-cyber/60"
                aria-label={t.aria.next}
              >
                {lang === "ar" ? (
                  <ChevronLeft className="h-5 w-5" />
                ) : (
                  <ChevronRight className="h-5 w-5" />
                )}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
