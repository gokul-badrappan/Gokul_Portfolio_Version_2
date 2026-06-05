import type { SVGProps } from "react";
import type { IconType } from "react-icons";
import {
  SiDocker,
  SiKubernetes,
  SiTerraform,
  SiAnsible,
  SiHelm,
  SiPrometheus,
  SiGrafana,
  SiJenkins,
  SiArgo,
  SiGit,
  SiSonarqubecloud,
  SiTrivy,
  SiLinux,
  SiPython,
  SiGnubash,
  SiReact,
  SiNextdotjs,
  SiFlask,
  SiSpringboot,
} from "react-icons/si";
import { TbBrandPowershell } from "react-icons/tb";
import { VscAzure } from "react-icons/vsc";

// ── Custom SVG icons for AI / modern dev tools ──────────────────────────────

function ChatGPTIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 41 41" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M37.532 16.87a9.963 9.963 0 0 0-.856-8.184 10.078 10.078 0 0 0-10.855-4.835 9.964 9.964 0 0 0-6.211-3.403 10.079 10.079 0 0 0-10.765 4.982 9.964 9.964 0 0 0-6.67 4.834 10.079 10.079 0 0 0 1.24 11.817 9.965 9.965 0 0 0 .856 8.185 10.079 10.079 0 0 0 10.855 4.835 9.965 9.965 0 0 0 6.211 3.403 10.079 10.079 0 0 0 10.765-4.982 9.965 9.965 0 0 0 6.67-4.834 10.079 10.079 0 0 0-1.24-11.818zM22.498 37.886a7.474 7.474 0 0 1-4.799-1.735c.061-.033.168-.091.237-.134l7.964-4.6a1.294 1.294 0 0 0 .655-1.134V19.054l3.366 1.944a.12.12 0 0 1 .066.092v9.299a7.505 7.505 0 0 1-7.49 7.496zM6.392 31.006a7.471 7.471 0 0 1-.894-5.023c.06.036.162.099.237.141l7.964 4.6a1.297 1.297 0 0 0 1.308 0l9.724-5.614v3.888a.12.12 0 0 1-.048.103l-8.051 4.649a7.504 7.504 0 0 1-10.24-2.744zM4.297 13.62A7.469 7.469 0 0 1 8.2 10.333c0 .068-.004.19-.004.274v9.201a1.294 1.294 0 0 0 .654 1.132l9.723 5.614-3.366 1.944a.12.12 0 0 1-.114.012L7.044 23.86a7.504 7.504 0 0 1-2.747-10.24zm27.658 6.437l-9.724-5.615 3.367-1.943a.121.121 0 0 1 .114-.012l8.048 4.648a7.498 7.498 0 0 1-1.158 13.528v-9.476a1.293 1.293 0 0 0-.647-1.13zm3.35-5.043c-.059-.037-.162-.099-.236-.141l-7.965-4.6a1.298 1.298 0 0 0-1.308 0l-9.723 5.614v-3.888a.12.12 0 0 1 .048-.103l8.05-4.645a7.497 7.497 0 0 1 11.135 7.763zm-21.063 6.929l-3.367-1.944a.12.12 0 0 1-.065-.092v-9.299a7.497 7.497 0 0 1 12.293-5.756 6.94 6.94 0 0 0-.236.134l-7.965 4.6a1.294 1.294 0 0 0-.654 1.132l-.006 11.225zm1.829-3.943l4.33-2.501 4.332 2.5v4.999l-4.331 2.5-4.331-2.5V18z" />
    </svg>
  );
}

function ClaudeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M4.709 15.955l4.72-2.647.08-.23-.08-.128H9.2l-.79-.048-2.698-.073-2.339-.097-1.89-.17-.137.097.032.218.314.237 1.418.4 1.6.416zM10.234 15.203l-.032.121.048.097 2.404 3.32.8 1.272.766 1.077.57.693.411.048.12-.145-.016-.29-.314-.978-.4-1.028-1.3-3.304-.16-.315-.29-.145zM10.282 9.48l.338.024.314-.29.072-.507-.12-1.303-.146-1.11-.137-2.92-.024-.605-.266-.29-.29.12-.12.267.016.484.024 1.11.12 2.695.12 1.416.12.508zM5.154 9.045l.266.048.266-.17.048-.29-.048-.29-.508-.605-.677-.726-1.418-1.416-.677-.75-.75-.605-.508-.266-.29.17v.29l.145.266.87.87 1.028 1.028 1.3 1.3.508.508.145.29zM15.865 15.955l-4.72-2.647-.08-.23.08-.128h.23l.79-.048 2.698-.073 2.339-.097 1.89-.17.137.097-.032.218-.314.237-1.418.4-1.6.416zM13.718 9.48l-.338.024-.314-.29-.072-.507.12-1.303.146-1.11.137-2.92.024-.605.266-.29.29.12.12.267-.016.484-.024 1.11-.12 2.695-.12 1.416-.12.508zM18.846 9.045l-.266.048-.266-.17-.048-.29.048-.29.508-.605.677-.726 1.418-1.416.677-.75.75-.605.508-.266.29.17v.29l-.145.266-.87.87-1.028 1.028-1.3 1.3-.508.508-.145.29zM13.766 15.203l.032.121-.048.097-2.404 3.32-.8 1.272-.766 1.077-.57.693-.411.048-.12-.145.016-.29.314-.978.4-1.028 1.3-3.304.16-.315.29-.145zM12 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
    </svg>
  );
}

function GeminiIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M12 24A14.304 14.304 0 0 0 0 12 14.304 14.304 0 0 0 12 0a14.304 14.304 0 0 0 12 12 14.304 14.304 0 0 0-12 12z" />
    </svg>
  );
}

function CursorIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M11.925 24l-6.58-3.88L.001 12.04 5.345 3.88 11.925 0l6.58 3.88L23.85 12.04l-5.344 8.08L11.925 24zm0-2.08l5.14-3.04 4.18-6.84-4.18-6.84-5.14-3.04-5.14 3.04-4.18 6.84 4.18 6.84 5.14 3.04zm0-4.16l-3.09-1.82-2.51-4.1 2.51-4.1 3.09-1.82 3.09 1.82 2.51 4.1-2.51 4.1-3.09 1.82z" />
    </svg>
  );
}

export type SkillEntry = { name: string; Icon: IconType; color: string };

const map: Record<string, SkillEntry> = {
  docker: { name: "docker", Icon: SiDocker, color: "#2496ED" },
  kubernetes: { name: "kubernetes", Icon: SiKubernetes, color: "#326CE5" },
  terraform: { name: "terraform", Icon: SiTerraform, color: "#7B42BC" },
  ansible: { name: "ansible", Icon: SiAnsible, color: "#EE0000" },
  helm: { name: "helm", Icon: SiHelm, color: "#0F1689" },
  prometheus: { name: "prometheus", Icon: SiPrometheus, color: "#E6522C" },
  grafana: { name: "grafana", Icon: SiGrafana, color: "#F46800" },
  "azure devops": { name: "azure devops", Icon: VscAzure, color: "#0078D4" },
  jenkins: { name: "jenkins", Icon: SiJenkins, color: "#D24939" },
  argocd: { name: "argocd", Icon: SiArgo, color: "#EF7B4D" },
  gitops: { name: "gitops", Icon: SiGit, color: "#F05032" },
  sonarqube: { name: "sonarqube", Icon: SiSonarqubecloud, color: "#4E9BCD" },
  trivy: { name: "trivy", Icon: SiTrivy, color: "#1904DA" },
  linux: { name: "linux", Icon: SiLinux, color: "#FCC624" },
  python: { name: "python", Icon: SiPython, color: "#3776AB" },
  bash: { name: "bash", Icon: SiGnubash, color: "#4EAA25" },
  powershell: { name: "powershell", Icon: TbBrandPowershell, color: "#5391FE" },
  react: { name: "react", Icon: SiReact, color: "#61DAFB" },
  "next.js": { name: "next.js", Icon: SiNextdotjs, color: "#FFFFFF" },
  flask: { name: "flask", Icon: SiFlask, color: "#FFFFFF" },
  "spring boot": { name: "spring boot", Icon: SiSpringboot, color: "#6DB33F" },
  chatgpt: { name: "chatgpt", Icon: ChatGPTIcon as unknown as IconType, color: "#74AA9C" },
  claude: { name: "claude", Icon: ClaudeIcon as unknown as IconType, color: "#D97757" },
  gemini: { name: "gemini", Icon: GeminiIcon as unknown as IconType, color: "#4285F4" },
  cursor: { name: "cursor", Icon: CursorIcon as unknown as IconType, color: "#FFFFFF" },
};

export function resolveSkill(label: string): SkillEntry {
  const key = label.trim().toLowerCase();
  return (
    map[key] ?? {
      name: key,
      Icon: SiGit,
      color: "rgb(58, 108, 215)",
    }
  );
}

export function resolveSkillRows(rows: string[][]): SkillEntry[][] {
  return rows.map((row) => row.map(resolveSkill));
}
