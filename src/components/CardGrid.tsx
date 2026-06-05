import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface CardItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  meta?: string;
  link?: string;
  github?: string;
  demo?: string;
  tech?: string[];
}

interface Props {
  id: string;
  label: string;
  title: string;
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

export function CardGrid({ id, label, title, items }: Props) {
  const [active, setActive] = useState<CardItem | null>(null);

  return (
    <section id={id} className="py-32 px-6">
      <div className="mb-12">
        <p className="font-mono text-xs text-white/40 lowercase tracking-[0.3em]">// {label}</p>
        <h2 className="lowercase text-3xl sm:text-5xl font-light mt-2">{title}</h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
        {items.map((it) => (
          <motion.button
            key={it.id}
            onClick={() => setActive(it)}
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="group aspect-square relative rounded-2xl overflow-hidden border border-white/10 bg-card transition-shadow duration-300 hover:shadow-[0_0_0_1px_rgba(58,108,215,0.6),0_0_32px_rgba(58,108,215,0.35)]"
          >
            <div
              className="absolute inset-0 flex items-center justify-center text-4xl sm:text-5xl"
              style={{
                background: `linear-gradient(135deg, rgba(58,108,215,0.15), rgba(0,0,0,0.2)), url(${it.image}) center/cover no-repeat`,
              }}
            >
              {!it.image && <span>{it.title[0]}</span>}
            </div>
            <div className="absolute bottom-2 left-2 font-mono text-[10px] text-white/50 lowercase opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity">
              {it.meta ?? "tap to view ↗"}
            </div>
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
              <div
                className="h-48 w-full"
                style={{
                  background: `linear-gradient(135deg, rgba(58,108,215,0.25), rgba(0,0,0,0.4)), url(${active.image}) center/cover no-repeat`,
                }}
              />
              <div className="p-6">
                <p className="font-mono text-[11px] text-white/40 lowercase">{active.subtitle}</p>
                <h3 className="lowercase text-2xl font-light mt-1">{active.title}</h3>
                <p className="mt-4 text-sm text-white/70 leading-relaxed">{active.description}</p>
                {active.tech && active.tech.length > 0 && (
                  <p className="mt-3 font-mono text-xs text-white/40 lowercase">
                    {active.tech.join(" · ")}
                  </p>
                )}
                <ModalLinks item={active} />
                <button
                  onClick={() => setActive(null)}
                  className="mt-6 font-mono text-xs lowercase px-4 py-2.5 rounded-full border border-white/15 text-white/70 hover:text-white hover:border-white/30 transition"
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
