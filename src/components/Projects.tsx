import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { CardItem } from "@/components/CardGrid";

interface Props {
  items: CardItem[];
}

function ModalLinks({ item }: { item: CardItem }) {
  const links = [
    item.demo && { label: "live demo →", href: item.demo },
    item.github && { label: "github →", href: item.github },
    item.link && item.link !== "#" && { label: "learn more →", href: item.link },
  ].filter(Boolean) as { label: string; href: string }[];

  if (links.length === 0) return null;

  return (
    <div className="mt-4 flex flex-wrap gap-3">
      {links.map((l) => (
        <a
          key={l.href}
          href={l.href}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-xs lowercase px-3 py-1.5 rounded-full border border-[rgb(58,108,215)]/40 text-white/80 hover:text-white hover:glow-border transition"
        >
          {l.label}
        </a>
      ))}
    </div>
  );
}

export function Projects({ items }: Props) {
  const [active, setActive] = useState<CardItem | null>(null);

  return (
    <section id="projects" className="py-32 px-6">
      <div className="mb-12">
        <p className="font-mono text-xs text-white/40 lowercase tracking-[0.3em]">// projects</p>
        <h2 className="lowercase text-3xl sm:text-5xl font-light mt-2">deployments</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {items.map((it, i) => (
          <motion.button
            key={it.id}
            onClick={() => setActive(it)}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, type: "spring", stiffness: 260, damping: 24 }}
            whileHover={{ y: -4 }}
            className="group text-left rounded-2xl border border-white/10 bg-card px-6 py-5 hover:shadow-[0_0_0_1px_rgba(58,108,215,0.6),0_0_32px_rgba(58,108,215,0.35)] transition-shadow duration-300"
          >
            {/* Subtitle / category */}
            <p className="font-mono text-[11px] text-white/40 lowercase">{it.subtitle}</p>

            {/* Project title */}
            <h3 className="lowercase text-lg sm:text-xl font-light text-white mt-1">{it.title}</h3>

            {/* One-line description */}
            <p className="mt-2 text-sm text-white/60 leading-snug line-clamp-2">{it.description}</p>

            {/* Terminal-style tech stack */}
            {it.tech && it.tech.length > 0 && (
              <div className="mt-4 bg-black/40 border border-white/10 rounded p-3">
                <p className="font-mono text-xs text-white/70 lowercase">
                  <span className="text-white/40">&gt;_</span> stack: [{it.tech.join(", ")}]
                </p>
              </div>
            )}

            {/* Hover hint */}
            <p className="mt-3 font-mono text-[10px] text-white/30 lowercase opacity-0 group-hover:opacity-100 transition-opacity">
              {it.meta ?? "open ↗"}
            </p>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 10 }}
              transition={{ type: "spring", stiffness: 260, damping: 24 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg rounded-2xl border border-white/15 bg-card glow-border-strong overflow-hidden"
            >
              <div className="p-6">
                <p className="font-mono text-[11px] text-white/40 lowercase">{active.subtitle}</p>
                <h3 className="lowercase text-2xl font-light mt-1">{active.title}</h3>
                <p className="mt-4 text-sm text-white/70 leading-relaxed">{active.description}</p>

                {/* Terminal-style tech stack in modal */}
                {active.tech && active.tech.length > 0 && (
                  <div className="mt-4 bg-black/40 border border-white/10 rounded p-3">
                    <p className="font-mono text-xs text-white/70 lowercase">
                      <span className="text-white/40">&gt;_</span> stack: [{active.tech.join(", ")}]
                    </p>
                  </div>
                )}

                <ModalLinks item={active} />
                <button
                  onClick={() => setActive(null)}
                  className="mt-6 font-mono text-xs lowercase px-3 py-1.5 rounded-full border border-white/15 text-white/70 hover:text-white hover:border-white/30 transition"
                >
                  close ×
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
