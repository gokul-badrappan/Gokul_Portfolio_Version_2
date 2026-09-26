import { motion } from "framer-motion";
import { certifications, education, leadership, publication } from "@/data/portfolio";
import { SectionHeader } from "./SectionHeader";

const card =
  "rounded-2xl border border-white/10 bg-card px-6 py-6 hover:shadow-[0_0_0_1px_rgba(58,108,215,0.5),0_0_28px_rgba(58,108,215,0.25)] transition-shadow duration-300 flex flex-col";

const sub = "font-mono text-[11px] text-white/60 lowercase tracking-[0.25em] mb-4";

function Reveal({
  delay = 0,
  className,
  children,
}: {
  delay?: number;
  className: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, type: "spring", stiffness: 260, damping: 24 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Credentials() {
  return (
    <section id="credentials" className="py-32 px-6">
      <SectionHeader index="04" label="credentials" title="degrees, certs & leadership" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Reveal className={card}>
          <p className={sub}>// education</p>
          <h3 className="text-xl sm:text-2xl font-light text-white leading-snug">
            {education.degree}
          </h3>
          <p className="font-mono text-[11px] text-white/70 mt-2">{education.institution}</p>
          <p className="font-mono text-[11px] text-white/60 lowercase mt-0.5">{education.period}</p>
          <p className="mt-4 font-mono text-xs text-white/80">
            <span className="text-white/60">cgpa</span>
            {"  "}
            {education.cgpa}
          </p>
          <div className="mt-auto pt-5">
            <a
              href={education.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-mono text-xs lowercase px-3 py-1.5 rounded-full border border-[rgb(58,108,215)]/40 text-white/80 hover:text-white hover:shadow-[0_0_0_1px_rgba(58,108,215,0.6)] transition"
            >
              visit tce →
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.08} className={card}>
          <p className={sub}>// certifications</p>
          <ul className="flex flex-col gap-4">
            {certifications.map((cert) => (
              <li key={cert.id} className="font-mono text-xs leading-relaxed">
                <span className="text-white/60 lowercase">{cert.vendor}</span>
                <span className="text-white/40 mx-2">·</span>
                <span className="text-white/60 lowercase">{cert.year}</span>
                <div className="mt-0.5 flex flex-wrap items-baseline gap-x-2">
                  <span className="text-[rgb(58,108,215)] font-medium">{cert.code}</span>
                  <span className="text-white/40">—</span>
                  <span className="text-white/85 lowercase">{cert.name}</span>
                  {cert.verify && (
                    <a
                      href={cert.verify}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] lowercase text-white/70 underline underline-offset-4 decoration-[rgb(58,108,215)]/60 hover:text-white"
                    >
                      verify
                    </a>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.16} className={`${card} md:col-span-2`}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className={sub}>// leadership</p>
              <ul className="space-y-2">
                {leadership.map((l) => (
                  <li
                    key={l}
                    className="text-sm text-white/85 pl-4 relative before:content-['›'] before:absolute before:left-0 before:text-[rgb(58,108,215)]"
                  >
                    {l}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className={sub}>// publication</p>
              <p className="text-base font-light text-white">{publication.title}</p>
              <p className="mt-1 font-mono text-[11px] text-white/65 lowercase">
                {publication.venue}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
