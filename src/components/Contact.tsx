import { contact } from "@/data/portfolio";
import { ResumeButton } from "./ResumeButton";
import { SectionHeader } from "./SectionHeader";

export function Contact() {
  const socials = [
    { label: "github", href: contact.github },
    { label: "linkedin", href: contact.linkedin },
    ...(contact.twitter ? [{ label: "x", href: contact.twitter }] : []),
  ];

  return (
    <section id="contact" className="py-32 px-6">
      <SectionHeader index="07" label="connect" title={contact.contactHeading} />

      <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 sm:p-8 md:p-12 flex flex-col items-start gap-6">
        {contact.blurb && <p className="text-white/80 max-w-md">{contact.blurb}</p>}
        <div className="flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${contact.email}`}
            className="font-mono text-sm sm:text-base lowercase px-3 py-2 sm:px-5 sm:py-3 rounded-full border border-[rgb(58,108,215)]/40 text-white glow-border hover:glow-border-strong transition-all"
          >
            {contact.email} →
          </a>
          <ResumeButton />
        </div>
        <div className="flex gap-4 font-mono text-xs text-white/70 lowercase">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>

      <p className="mt-16 text-center font-mono text-[11px] text-white/60 tracking-[0.3em] lowercase">
        {contact.footer}
      </p>
    </section>
  );
}
