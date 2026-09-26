import { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { CardItem } from "@/types/portfolio";
import { SectionHeader } from "./SectionHeader";

interface Props {
  items: CardItem[];
}

const BLUE = "rgb(58,108,215)";

function ModalLinks({ item }: { item: CardItem }) {
  const links = [
    item.demo && { label: "live demo →", href: item.demo },
    item.github && { label: "view code on github →", href: item.github },
    item.link && { label: "learn more →", href: item.link },
  ].filter(Boolean) as { label: string; href: string }[];

  if (links.length === 0) return null;

  return (
    <div className="mt-6 flex flex-wrap gap-3">
      {links.map((l) => (
        <a
          key={l.href}
          href={l.href}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-xs lowercase px-3 py-1.5 rounded-full border border-[rgb(58,108,215)]/40 text-white/85 hover:text-white hover:glow-border transition"
        >
          {l.label}
        </a>
      ))}
    </div>
  );
}

function StackLine({ tech }: { tech: string[] }) {
  return (
    <div className="bg-black/40 border border-white/10 rounded p-3">
      <p className="font-mono text-xs text-white/80 lowercase">
        <span className="text-white/60">&gt;_</span> stack: [{tech.join(", ")}]
      </p>
    </div>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-[11px] text-white/60 lowercase tracking-[0.2em] mb-2">
      {`// ${children}`}
    </p>
  );
}

function ArchitectureFlow({ rows }: { rows: string[][] }) {
  return (
    <div className="space-y-3 rounded-lg border border-white/10 bg-black/30 p-4">
      {rows.map((row, r) => (
        <div key={r} className="flex flex-wrap items-center gap-x-2 gap-y-2">
          {row.map((node, i) => (
            <span key={node} className="inline-flex items-center gap-2">
              <span className="font-mono text-[11px] lowercase px-2 py-1 rounded border border-[rgb(58,108,215)]/40 bg-[rgb(58,108,215)]/10 text-white/90">
                {node}
              </span>
              {i < row.length - 1 && (
                <span aria-hidden className="font-mono text-xs" style={{ color: BLUE }}>
                  →
                </span>
              )}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}

function CaseStudyModal({ item, onClose }: { item: CardItem; onClose: () => void }) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const cs = item.caseStudy;

  useEffect(() => {
    // Focus the dialog itself (not the close button) so it opens scrolled to the top.
    dialogRef.current?.focus({ preventScroll: true });
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/75 backdrop-blur-sm p-4"
    >
      <motion.div
        ref={dialogRef}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-labelledby={`${item.id}-title`}
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.97, opacity: 0, y: 10 }}
        transition={{ type: "spring", stiffness: 260, damping: 26 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl max-h-[88vh] overflow-y-auto overscroll-contain rounded-2xl outline-none border border-white/15 bg-card glow-border-strong"
      >
        <div className="p-6 sm:p-8">
          <p className="font-mono text-[11px] text-white/60 lowercase">{item.subtitle}</p>
          <h3 id={`${item.id}-title`} className="lowercase text-2xl sm:text-3xl font-light mt-1">
            {item.title}
          </h3>

          {cs ? (
            <div className="mt-6 space-y-6">
              <div>
                <Label>problem</Label>
                <p className="text-sm text-white/85 leading-relaxed">{cs.problem}</p>
              </div>
              <div>
                <Label>architecture</Label>
                <ArchitectureFlow rows={cs.architecture} />
              </div>
              <div className="rounded-lg border-l-2 border-green-500/70 bg-green-500/[0.06] px-4 py-3">
                <Label>how i verified it</Label>
                <p className="text-sm text-white/85 leading-relaxed">{cs.verified}</p>
              </div>
              <div>
                <Label>results</Label>
                <ul className="space-y-1.5">
                  {cs.results.map((r) => (
                    <li
                      key={r}
                      className="text-sm text-white/85 leading-relaxed pl-4 relative before:content-['›'] before:absolute before:left-0 before:text-[rgb(58,108,215)]"
                    >
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ) : (
            <p className="mt-4 text-sm text-white/80 leading-relaxed">{item.description}</p>
          )}

          {item.tech && item.tech.length > 0 && (
            <div className="mt-6">
              <StackLine tech={item.tech} />
            </div>
          )}

          <ModalLinks item={item} />

          <button
            onClick={onClose}
            className="mt-8 font-mono text-xs lowercase px-4 py-2.5 rounded-full border border-white/20 text-white/80 hover:text-white hover:border-white/40 transition"
          >
            close ×
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Projects({ items }: Props) {
  const [active, setActive] = useState<CardItem | null>(null);
  const close = useCallback(() => setActive(null), []);

  return (
    <section id="projects" className="py-32 px-6">
      <SectionHeader index="02" label="portfolio" title="featured projects" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {items.map((it, i) => (
          <motion.button
            key={it.id}
            onClick={() => setActive(it)}
            aria-haspopup="dialog"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, type: "spring", stiffness: 260, damping: 24 }}
            whileHover={{ y: -4 }}
            className="group text-left rounded-2xl border border-white/10 bg-card px-6 py-5 flex flex-col hover:shadow-[0_0_0_1px_rgba(58,108,215,0.6),0_0_32px_rgba(58,108,215,0.35)] transition-shadow duration-300"
          >
            <p className="font-mono text-[11px] text-white/60 lowercase">{it.subtitle}</p>
            <h3 className="lowercase text-lg sm:text-xl font-light text-white mt-1">{it.title}</h3>
            <p className="mt-2 text-sm text-white/75 leading-snug">{it.description}</p>

            {it.metrics && it.metrics.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {it.metrics.map((m) => (
                  <span
                    key={m}
                    className="font-mono text-[11px] lowercase px-2 py-0.5 rounded-full border border-[rgb(58,108,215)]/40 text-white/85"
                  >
                    {m}
                  </span>
                ))}
              </div>
            )}

            {it.tech && it.tech.length > 0 && (
              <div className="mt-4">
                <StackLine tech={it.tech} />
              </div>
            )}

            <p className="mt-4 font-mono text-[11px] text-white/70 lowercase group-hover:text-white transition-colors">
              {it.caseStudy ? "open case study ↗" : "view details ↗"}
            </p>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {active && <CaseStudyModal item={active} onClose={close} />}
      </AnimatePresence>
    </section>
  );
}
