import { motion } from "framer-motion";
import { skillGroups } from "@/data/portfolio";
import { resolveSkill } from "@/lib/skill-icons";
import { SectionHeader } from "./SectionHeader";

export function Skills() {
  return (
    <section id="skills" className="py-32 px-6">
      <SectionHeader index="03" label="stack" title="technical skills" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {skillGroups.map((group, gi) => (
          <motion.div
            key={group.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: gi * 0.06, type: "spring", stiffness: 260, damping: 24 }}
            className={`rounded-2xl border border-white/10 bg-card px-6 py-5 ${
              gi === skillGroups.length - 1 && skillGroups.length % 2 === 1 ? "md:col-span-2" : ""
            }`}
          >
            <p className="font-mono text-[11px] text-white/60 lowercase tracking-[0.2em] mb-4">
              {`// ${group.label}`}
            </p>
            <ul className="flex flex-wrap gap-2.5">
              {group.items.map((label) => {
                const s = resolveSkill(label);
                return (
                  <li
                    key={label}
                    className="skill-chip inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-white/10 bg-black/25"
                    style={{ ["--brand" as string]: s.color }}
                  >
                    <s.Icon className="h-4 w-4 text-slate-400 transition-colors" aria-hidden />
                    <span className="font-mono text-xs lowercase text-white/85">{s.name}</span>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
