import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Box } from "lucide-react";
import { hero } from "@/data/portfolio";
import { ResumeButton } from "./ResumeButton";

export function useBlinkingTitle() {
  useEffect(() => {
    // Note: If you still want to pivot to Software Engineering, 
    // you might want to sneak "> software" into this array!
    const frames = [
      "> gokul",
      "> devops",
      "> cloud",
      "> sre",
      "> infrastructure",
    ];

    // Favicon injection
    let link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.head.appendChild(link);
    }
    link.type = "image/svg+xml";
    link.href = "/favicon.svg";

    let frameIndex = 0;
    let charIndex = 0;
    let isTyping = true;
    let pauseCount = 0;
    const PAUSE_FRAMES = 8; // Increased slightly so recruiters can actually read it

    const interval = setInterval(() => {
      const current = frames[frameIndex];

      if (isTyping) {
        // FIX: Only increment if we haven't reached the end of the word
        if (charIndex < current.length) {
          charIndex++;
        }
        
        document.title = `${current.slice(0, charIndex)}_`;

        // Once the word is fully typed, start counting the pause frames
        if (charIndex === current.length) {
          pauseCount++;
          if (pauseCount >= PAUSE_FRAMES) {
            pauseCount = 0;
            isTyping = false; // Trigger the erasing phase
          }
        }
      } else {
        // erasing backward
        charIndex--;
        document.title = charIndex > 0
          ? `${current.slice(0, charIndex)}_`
          : `_`;

        if (charIndex === 0) {
          // move to next word
          frameIndex = (frameIndex + 1) % frames.length;
          isTyping = true;
        }
      }
    }, 120);

    return () => clearInterval(interval);
  }, []);
}

const GLOW_STYLE = { color: "rgb(58,108,215)" };
const POD_FALLBACK = "S-SYSTEM";

function genPodSuffix(): string {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let s = "";
  for (let i = 0; i < 6; i++) s += chars[Math.floor(Math.random() * chars.length)];
  return s;
}

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

export function Hero() {

  useBlinkingTitle();

  const [podId, setPodId] = useState(POD_FALLBACK);

  useEffect(() => {
    setPodId(`S-${genPodSuffix()}`);
  }, []);

  const subtitle =
    hero.subtitleTags.length > 0 ? hero.subtitleTags.join(" · ") : null;

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="font-mono text-xs lowercase text-white/40 tracking-[0.3em] mb-6"
      >
        // {hero.name}
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.1 }}
        className="lowercase text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight max-w-4xl leading-[1.15]"
      >
        <HeadlineWithGlow text={hero.headline} glow={hero.glowingWord} />
      </motion.h1>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-6 max-w-md text-sm text-white/50 lowercase"
        >
          {subtitle}
        </motion.p>
      )}

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-10 flex flex-wrap items-center justify-center gap-3"
      >
        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03] font-mono text-[11px] text-white/60">
          <Box size={14} className="text-[rgb(58,108,215)] shrink-0" aria-hidden />
          <span className="tracking-widest">{podId}</span>
          <span
            className="h-1.5 w-1.5 rounded-full"
            style={{ background: "rgb(58,108,215)", boxShadow: "0 0 8px rgb(58,108,215)" }}
          />
        </span>
        <ResumeButton />
      </motion.div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 font-mono text-[10px] text-white/30 lowercase">
        scroll ↓
      </div>
    </section>
  );
}
