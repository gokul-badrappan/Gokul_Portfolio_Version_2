import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = ["skills", "projects", "experience", "education", "infrastructure", "contact"];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {scrolled && (
        <motion.nav
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ type: "spring", stiffness: 220, damping: 26 }}
          className="fixed top-4 left-1/2 -translate-x-1/2 z-40"
        >
          <div className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1.5 rounded-full backdrop-blur-md bg-white/10 border border-white/15 shadow-[0_8px_30px_rgba(0,0,0,0.4)]">
            {links.map((l) => (
              <a
                key={l}
                href={`#${l}`}
                className="font-mono text-[11px] sm:text-xs lowercase px-2.5 sm:px-3 py-1.5 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors"
              >
                {l}
              </a>
            ))}
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
