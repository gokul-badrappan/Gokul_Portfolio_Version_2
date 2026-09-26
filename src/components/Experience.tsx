import { motion } from "framer-motion";
import type { CardItem } from "@/types/portfolio";
import { SectionHeader } from "./SectionHeader";

interface Props {
  items: CardItem[];
}

const pill =
  "inline-block font-mono text-xs lowercase px-3 py-1.5 rounded-full border border-[rgb(58,108,215)]/40 text-white/80 hover:text-white hover:glow-border transition";

export function Experience({ items }: Props) {
  return (
    <section id="experience" className="py-32 px-6">
      <SectionHeader index="01" label="trajectory" title="experience" />

      <ol className="relative flex flex-col gap-6 border-l border-white/15 ml-2 pl-6 sm:pl-8">
        {items.map((item, i) => (
          <motion.li
            key={item.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, type: "spring", stiffness: 260, damping: 24 }}
            className="relative"
          >
            <span
              aria-hidden
              className={`absolute -left-[31px] sm:-left-[39px] top-6 h-3 w-3 rounded-full border-2 border-[rgb(58,108,215)] ${
                i === 0 ? "bg-[rgb(58,108,215)] shadow-[0_0_10px_rgb(58,108,215)]" : "bg-background"
              }`}
            />
            <article className="rounded-2xl border border-white/10 bg-card px-6 py-5 hover:shadow-[0_0_0_1px_rgba(58,108,215,0.5),0_0_28px_rgba(58,108,215,0.25)] transition-shadow duration-300">
              <h3 className="lowercase text-lg sm:text-xl font-light text-white">{item.title}</h3>
              <p className="font-mono text-[11px] text-white/65 lowercase mt-1">{item.subtitle}</p>

              {item.highlights?.length ? (
                <ul className="mt-4 space-y-2">
                  {item.highlights.map((h) => (
                    <li
                      key={h}
                      className="text-sm text-white/80 leading-relaxed pl-4 relative before:content-['›'] before:absolute before:left-0 before:text-[rgb(58,108,215)]"
                    >
                      {h}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-3 text-sm text-white/80 leading-relaxed">{item.description}</p>
              )}

              {item.tech && item.tech.length > 0 && (
                <p className="mt-4 font-mono text-[11px] text-white/60 lowercase">
                  {item.tech.join(" · ")}
                </p>
              )}

              {(item.demo || item.link) && (
                <div className="mt-4 flex flex-wrap gap-3">
                  {item.demo && (
                    <a href={item.demo} target="_blank" rel="noopener noreferrer" className={pill}>
                      {item.demoLabel ?? "live demo"} →
                    </a>
                  )}
                  {item.link && (
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className={pill}>
                      {item.linkLabel ?? "learn more"} →
                    </a>
                  )}
                </div>
              )}
            </article>
          </motion.li>
        ))}
      </ol>
    </section>
  );
}
