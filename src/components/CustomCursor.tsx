import { useEffect, useRef } from "react";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const pointerQuery = window.matchMedia("(pointer: fine)");
    if (!pointerQuery.matches) return;

    const handleMouseMove = (event: MouseEvent) => {
      cursorRef.current?.style.setProperty(
        "transform",
        `translate3d(${event.clientX - 18}px, ${event.clientY - 18}px, 0)`,
      );
      dotRef.current?.style.setProperty(
        "transform",
        `translate3d(${event.clientX - 3}px, ${event.clientY - 3}px, 0)`,
      );

      const target = event.target;
      const isInteractive =
        target instanceof Element &&
        Boolean(
          target.closest("a, button, input, textarea, select, [role='button']"),
        );
      cursorRef.current?.classList.toggle("custom-cursor-hover", isInteractive);
    };

    const handleMouseLeave = () => {
      cursorRef.current?.classList.add("custom-cursor-hidden");
      dotRef.current?.classList.add("custom-cursor-hidden");
    };

    const handleMouseEnter = () => {
      cursorRef.current?.classList.remove("custom-cursor-hidden");
      dotRef.current?.classList.remove("custom-cursor-hidden");
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="custom-cursor" aria-hidden="true" />
      <div ref={dotRef} className="custom-cursor-dot" aria-hidden="true" />
    </>
  );
}
