import { useEffect, useRef, useState } from "react";
import { getResumeHref } from "@/data/portfolio";

const links = ["experience", "projects", "skills", "credentials", "hire", "contact"];

export function Navbar() {
  const [active, setActive] = useState<string>("");
  const scrollerRef = useRef<HTMLDivElement>(null);
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

  // Highlight the section currently crossing the middle band of the viewport.
  useEffect(() => {
    const inView = new Set<string>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) =>
          e.isIntersecting ? inView.add(e.target.id) : inView.delete(e.target.id),
        );
        setActive(links.find((id) => inView.has(id)) ?? "");
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    links.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // On narrow screens the pill scrolls sideways; keep the active link visible.
  useEffect(() => {
    const scroller = scrollerRef.current;
    const link = active ? linkRefs.current[active] : null;
    if (!scroller || !link) return;
    scroller.scrollTo({
      left: link.offsetLeft - scroller.clientWidth / 2 + link.clientWidth / 2,
      behavior: "smooth",
    });
  }, [active]);

  return (
    <nav aria-label="Primary" className="fixed top-4 left-1/2 -translate-x-1/2 z-40">
      <div
        ref={scrollerRef}
        className="relative flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1.5 rounded-full backdrop-blur-md bg-white/10 border border-white/15 shadow-[0_8px_30px_rgba(0,0,0,0.4)] overflow-x-auto scrollbar-none max-w-[92vw]"
      >
        {links.map((l) => (
          <a
            key={l}
            ref={(el) => {
              linkRefs.current[l] = el;
            }}
            href={`#${l}`}
            aria-current={active === l ? "true" : undefined}
            className={`font-mono text-[11px] sm:text-xs lowercase px-2.5 sm:px-3 py-1.5 rounded-full transition-colors shrink-0 ${
              active === l
                ? "text-white bg-[rgb(58,108,215)]/30"
                : "text-white/75 hover:text-white hover:bg-white/10"
            }`}
          >
            {l}
          </a>
        ))}
        <a
          href={getResumeHref()}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-[11px] sm:text-xs lowercase px-2.5 sm:px-3 py-1.5 rounded-full text-white border border-[rgb(58,108,215)]/50 hover:bg-[rgb(58,108,215)]/20 transition-colors shrink-0"
        >
          resume ↓
        </a>
      </div>
    </nav>
  );
}
