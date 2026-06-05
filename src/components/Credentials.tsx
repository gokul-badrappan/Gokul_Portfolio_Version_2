import { motion } from "framer-motion";

// ─── Education data ────────────────────────────────────────────────────────────
const education = {
  degree: "B.E. Computer Science & Engineering",
  institution: "Thiagarajar College of Engineering",
  period: "2021 → 2025",
  cgpa: "8.11 / 10",
  highlight: "Chair, IEEE Computer Society TCE",
  link: "https://www.tce.edu",
};

// ─── Certifications data ───────────────────────────────────────────────────────
const certifications = [
  {
    id: "az-104",
    vendor: "microsoft azure",
    code: "AZ-104",
    name: "Azure Administrator Associate",
    year: "2025",
  },
  {
    id: "az-204",
    vendor: "microsoft azure",
    code: "AZ-204",
    name: "Azure Developer Associate",
    year: "2025",
  },
  {
    id: "az-900",
    vendor: "microsoft azure",
    code: "AZ-900",
    name: "Azure Fundamentals",
    year: "2025",
  },
  {
    id: "aws-clf",
    vendor: "amazon web services",
    code: "CLF-C02",
    name: "AWS Certified Cloud Practitioner",
    year: "dec 2025",
    credentialId: "0e88c7b1-7cab-4c9d-9f4b-e9a0098b816f",
  },
];

export function Credentials() {
  return (
    <section id="education" className="py-32 px-6">
      {/* Section header */}
      <div className="mb-12">
        <p className="font-mono text-xs text-white/40 lowercase tracking-[0.3em]">
          // 04 · credentials
        </p>
        <h2 className="lowercase text-3xl sm:text-5xl font-light mt-2">degrees & certifications</h2>
      </div>

      {/* Two-column grid on md+, stacked on mobile */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* ── Card 1: Education ─────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 260, damping: 24 }}
          className="rounded-2xl border border-white/10 bg-card px-6 py-6 hover:shadow-[0_0_0_1px_rgba(58,108,215,0.5),0_0_28px_rgba(58,108,215,0.25)] transition-shadow duration-300 flex flex-col"
        >
          {/* Sub-section label */}
          <p className="font-mono text-[10px] text-white/40 lowercase tracking-[0.25em] mb-4">
            // education
          </p>

          <h3 className="text-xl sm:text-2xl font-light text-white leading-snug">
            {education.degree}
          </h3>

          <p className="font-mono text-[11px] text-white/50 mt-2">{education.institution}</p>
          <p className="font-mono text-[11px] text-white/40 lowercase mt-0.5">{education.period}</p>

          <div className="mt-4 flex flex-col gap-1.5">
            <p className="font-mono text-xs text-white/60">
              <span className="text-white/30">CGPA</span>
              {"  "}
              {education.cgpa}
            </p>
            <p className="font-mono text-xs text-white/60">
              <span className="text-white/30">role</span>
              {"  "}
              {education.highlight}
            </p>
          </div>

          <div className="mt-auto pt-5">
            <a
              href={education.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-mono text-xs lowercase px-3 py-1.5 rounded-full border border-[rgb(58,108,215)]/40 text-white/70 hover:text-white hover:shadow-[0_0_0_1px_rgba(58,108,215,0.6)] transition"
            >
              visit tce →
            </a>
          </div>
        </motion.div>

        {/* ── Card 2: Certifications ────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08, type: "spring", stiffness: 260, damping: 24 }}
          className="rounded-2xl border border-white/10 bg-card px-6 py-6 hover:shadow-[0_0_0_1px_rgba(58,108,215,0.5),0_0_28px_rgba(58,108,215,0.25)] transition-shadow duration-300 flex flex-col"
        >
          {/* Sub-section label */}
          <p className="font-mono text-[10px] text-white/40 lowercase tracking-[0.25em] mb-4">
            // certifications
          </p>

          <ul className="flex flex-col gap-4">
            {certifications.map((cert) => (
              <li key={cert.id} className="font-mono text-xs leading-relaxed">
                {/* Vendor + year */}
                <span className="text-white/30 lowercase">{cert.vendor}</span>
                <span className="text-white/20 mx-2">·</span>
                <span className="text-white/30 lowercase">{cert.year}</span>

                {/* Code + name */}
                <div className="mt-0.5">
                  <span className="text-[rgb(58,108,215)] font-medium">{cert.code}</span>
                  <span className="text-white/20 mx-2">—</span>
                  <span className="text-white/70 lowercase">{cert.name}</span>
                </div>

                {/* Optional credential ID */}
                {cert.credentialId && (
                  <div className="mt-0.5 text-[10px] text-white/25 lowercase truncate">
                    id: {cert.credentialId}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
