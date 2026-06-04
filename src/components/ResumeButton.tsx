import { FileText } from "lucide-react";
import { getResumeHref } from "@/data/portfolio";

interface ResumeButtonProps {
  label?: string;
  href?: string;
}

export function ResumeButton({ label = "view resume", href }: ResumeButtonProps) {
  return (
    <a
      href={href ?? getResumeHref()}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full font-mono text-[11px] lowercase text-white/80 border border-white/15 bg-white/[0.04] backdrop-blur-md transition-all hover:border-[rgb(58,108,215)]/60 hover:text-white hover:glow-border"
    >
      <FileText size={12} aria-hidden />
      <span className="tracking-widest">{label}</span>
    </a>
  );
}
