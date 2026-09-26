import type { IconType } from "react-icons";
import {
  SiDocker,
  SiKubernetes,
  SiTerraform,
  SiAnsible,
  SiPrometheus,
  SiGrafana,
  SiJenkins,
  SiArgo,
  SiGit,
  SiGithubactions,
  SiSonarqubecloud,
  SiLinux,
  SiPython,
  SiGnubash,
} from "react-icons/si";
import { FaAws, FaJava, FaDatabase, FaLock, FaTicketAlt } from "react-icons/fa";
import { TbBrandPowershell } from "react-icons/tb";
import { VscAzure, VscAzureDevops } from "react-icons/vsc";

export type SkillEntry = { name: string; Icon: IconType; color: string };

const map: Record<string, SkillEntry> = {
  "azure devops": { name: "azure devops", Icon: VscAzureDevops, color: "#0078D4" },
  jenkins: { name: "jenkins", Icon: SiJenkins, color: "#D24939" },
  "github actions": { name: "github actions", Icon: SiGithubactions, color: "#2088FF" },
  argocd: { name: "argocd", Icon: SiArgo, color: "#EF7B4D" },
  sonarqube: { name: "sonarqube", Icon: SiSonarqubecloud, color: "#4E9BCD" },
  git: { name: "git", Icon: SiGit, color: "#F05032" },
  docker: { name: "docker", Icon: SiDocker, color: "#2496ED" },
  kubernetes: { name: "kubernetes", Icon: SiKubernetes, color: "#326CE5" },
  terraform: { name: "terraform", Icon: SiTerraform, color: "#7B42BC" },
  ansible: { name: "ansible", Icon: SiAnsible, color: "#EE0000" },
  azure: { name: "azure", Icon: VscAzure, color: "#0078D4" },
  aws: { name: "aws", Icon: FaAws, color: "#FF9900" },
  prometheus: { name: "prometheus", Icon: SiPrometheus, color: "#E6522C" },
  grafana: { name: "grafana", Icon: SiGrafana, color: "#F46800" },
  "azure monitor": { name: "azure monitor", Icon: VscAzure, color: "#0078D4" },
  servicenow: { name: "servicenow", Icon: FaTicketAlt, color: "#62D84E" },
  ssms: { name: "ssms", Icon: FaDatabase, color: "#CC2927" },
  linux: { name: "linux", Icon: SiLinux, color: "#FCC624" },
  bash: { name: "bash", Icon: SiGnubash, color: "#4EAA25" },
  powershell: { name: "powershell", Icon: TbBrandPowershell, color: "#5391FE" },
  "ssl/tls": { name: "ssl/tls", Icon: FaLock, color: "#3FB950" },
  python: { name: "python", Icon: SiPython, color: "#3776AB" },
  java: { name: "java", Icon: FaJava, color: "#E76F00" },
  sql: { name: "sql", Icon: FaDatabase, color: "#4479A1" },
};

export function resolveSkill(label: string): SkillEntry {
  const key = label.trim().toLowerCase();
  return map[key] ?? { name: key, Icon: SiGit, color: "rgb(58, 108, 215)" };
}
