import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { hero, proofMetrics } from "@/data/portfolio";
import { ResumeButton } from "./ResumeButton";

const GLOW_STYLE = { color: "rgb(58,108,215)" };

function HeadlineWithGlow({ text, glow }: { text: string; glow: string }) {
  const idx = text.toLowerCase().indexOf(glow.toLowerCase());
  if (idx === -1) return <>{text}</>;
  return (
    <>
      {text.slice(0, idx)}
      <span className="text-glow" style={GLOW_STYLE}>
        {text.slice(idx, idx + glow.length)}
      </span>
      {text.slice(idx + glow.length)}
    </>
  );
}

function StatusReadout() {
  return (
    <div
      className="w-full max-w-2xl rounded-xl border border-white/10 bg-black/40 text-left overflow-x-auto"
      role="table"
      aria-label="Key results"
    >
      <div className="px-4 py-2 border-b border-white/10 font-mono text-[11px] text-white/60">
        <span className="text-[rgb(58,108,215)]">$</span> gokul --status
      </div>
      <div className="px-4 py-3 font-mono text-xs sm:text-sm">
        {proofMetrics.map((m) => (
          <div
            key={m.key}
            role="row"
            className="grid grid-cols-[6.5rem_4rem_1fr] sm:grid-cols-[8rem_5rem_1fr] gap-x-3 py-1"
          >
            <span role="cell" className="text-white/60">
              {m.key}
            </span>
            <span role="cell" className="text-white text-glow">
              {m.value}
            </span>
            <span role="cell" className="text-white/70 lowercase">
              {m.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16 text-center">
      <motion.p
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="font-mono text-xs lowercase text-white/60 tracking-[0.3em] mb-6"
      >
        {`// ${hero.name}`}
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.1 }}
        className="lowercase text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight max-w-4xl leading-[1.15]"
      >
        <HeadlineWithGlow text={hero.headline} glow={hero.glowingWord} />
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="mt-6 flex flex-col items-center gap-2"
      >
        <p className="font-mono text-sm text-white/80 lowercase">{hero.role}</p>
        <p className="font-mono text-xs text-white/60 lowercase">{hero.subtitleTags.join(" · ")}</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.45 }}
        className="mt-8 flex flex-wrap items-center justify-center gap-3"
      >
        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03] font-mono text-[11px] text-white/80 lowercase">
          <span className="h-1.5 w-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgb(34,197,94)]" />
          {hero.availability}
        </span>
        <a
          href="#hire"
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full font-mono text-[11px] lowercase text-white border border-[rgb(58,108,215)]/60 bg-[rgb(58,108,215)]/15 glow-border hover:glow-border-strong transition-all"
        >
          <Briefcase size={12} aria-hidden />
          <span className="tracking-widest">hire me</span>
        </a>
        <ResumeButton />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-12 w-full flex justify-center"
      >
        <StatusReadout />
      </motion.div>
    </section>
  );
}
