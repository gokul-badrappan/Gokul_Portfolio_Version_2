import { motion } from "framer-motion";
import type { CardItem } from "@/components/CardGrid";

interface Props {
  items: CardItem[];
}

export function Experience({ items }: Props) {
  return (
    <section id="experience" className="py-32 px-6">
      <div className="mb-12">
        <p className="font-mono text-xs text-white/40 lowercase tracking-[0.3em]">// 03 · trajectory</p>
        <h2 className="lowercase text-3xl sm:text-5xl font-light mt-2">experience</h2>
      </div>

      <div className="flex flex-col gap-6">
        {items.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, type: "spring", stiffness: 260, damping: 24 }}
            className="rounded-2xl border border-white/10 bg-card px-6 py-5 hover:shadow-[0_0_0_1px_rgba(58,108,215,0.5),0_0_28px_rgba(58,108,215,0.25)] transition-shadow duration-300"
          >
            {/* Job title */}
            <h3 className="lowercase text-lg sm:text-xl font-light text-white">{item.title}</h3>

            {/* Date range / subtitle */}
            <p className="font-mono text-[11px] text-white/50 lowercase mt-1">{item.subtitle}</p>

            {/* Technical summary */}
            <p className="mt-3 text-sm text-white/70 leading-relaxed">{item.description}</p>

            {/* Optional tech tags */}
            {item.tech && item.tech.length > 0 && (
              <p className="mt-3 font-mono text-[10px] text-white/40 lowercase">
                {item.tech.join(" · ")}
              </p>
            )}

            {/* Optional link */}
            {item.link && item.link !== "#" && (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 font-mono text-xs lowercase px-3 py-1.5 rounded-full border border-[rgb(58,108,215)]/40 text-white/70 hover:text-white hover:glow-border transition"
              >
                learn more →
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
