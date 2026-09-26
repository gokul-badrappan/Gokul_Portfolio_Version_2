import { motion } from "framer-motion";
import { contact, services } from "@/data/portfolio";
import { SectionHeader } from "./SectionHeader";

export function ForHire() {
  const bookingHref =
    contact.booking ?? `mailto:${contact.email}?subject=DevOps%20project%20inquiry`;

  return (
    <section id="hire" className="py-32 px-6">
      <SectionHeader index="06" label="for hire" title="work with me">
        <p className="mt-4 font-mono text-xs text-white/75 lowercase inline-flex items-center gap-2">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          accepting select freelance projects · ist (utc+5:30) · async-first
        </p>
      </SectionHeader>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {services.map((s, i) => (
          <motion.div
            key={s.code}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, type: "spring", stiffness: 260, damping: 24 }}
            className="rounded-2xl border border-white/10 bg-card px-6 py-5 hover:shadow-[0_0_0_1px_rgba(58,108,215,0.6),0_0_32px_rgba(58,108,215,0.35)] transition-shadow duration-300"
          >
            <p className="font-mono text-[11px] text-[rgb(58,108,215)] lowercase">{s.code}</p>
            <h3 className="lowercase text-lg font-light text-white mt-1">{s.title}</h3>
            <p className="mt-2 text-sm text-white/75 leading-snug">{s.outcome}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.02] p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <p className="text-sm text-white/80 max-w-md">
          Tell me what you're running and where it hurts. I'll reply with whether I can help and a
          rough scope.
        </p>
        <a
          href={bookingHref}
          target={contact.booking ? "_blank" : undefined}
          rel={contact.booking ? "noopener noreferrer" : undefined}
          className="shrink-0 self-start sm:self-auto font-mono text-sm lowercase px-5 py-3 rounded-full border border-[rgb(58,108,215)]/60 bg-[rgb(58,108,215)]/15 text-white glow-border hover:glow-border-strong transition-all"
        >
          {contact.booking ? "book a 20-min call →" : "start a project →"}
        </a>
      </div>
    </section>
  );
}
