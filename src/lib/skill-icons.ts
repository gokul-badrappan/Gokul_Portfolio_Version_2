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
