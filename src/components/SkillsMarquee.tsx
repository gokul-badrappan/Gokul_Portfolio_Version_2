import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { skillsMarqueeRows } from "@/data/portfolio";
import { resolveSkillRows } from "@/lib/skill-icons.tsx";

gsap.registerPlugin(ScrollTrigger);

const rows = resolveSkillRows(skillsMarqueeRows);

export function SkillsMarquee() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      rowRefs.current.forEach((row, i) => {
        if (!row) return;
        const dir = i % 2 === 0 ? -1 : 1;
        const distance = row.scrollWidth / 2;
        gsap.fromTo(
          row,
          { x: dir === -1 ? 0 : -distance },
          {
            x: dir === -1 ? -distance : 0,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          },
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-32 overflow-x-hidden">
      <div className="px-6 mb-12">
        <p className="font-mono text-xs text-white/40 lowercase tracking-[0.3em]">// 01 · stack</p>
        <h2 className="lowercase text-3xl sm:text-5xl font-light mt-2">technical skills</h2>
      </div>

      <div className="space-y-8">
        {rows.map((items, i) => (
          <div key={i}>
            <div
              ref={(el) => { rowRefs.current[i] = el; }}
              className="flex gap-10 sm:gap-14 whitespace-nowrap will-change-transform items-center"
            >
              {[...items, ...items].map((s, idx) => (
                <div
                  key={`${s.name}-${idx}`}
                  className="group flex flex-col items-center gap-2 shrink-0 p-4"
                  title={s.name}
                >
                  <s.Icon
                    className="h-10 w-10 sm:h-12 sm:w-12 text-slate-500 transition-all duration-300 group-hover:scale-110"
                    style={{
                      ["--brand" as string]: s.color,
                    }}
                  />
                  <span className="font-mono text-[10px] lowercase text-white/30 group-hover:text-white/70 transition">{s.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        #skills .group:hover svg {
          color: var(--brand);
          filter: drop-shadow(0 0 8px var(--brand)) drop-shadow(0 0 16px color-mix(in oklab, var(--brand) 50%, transparent));
        }
      `}</style>
    </section>
  );
}
