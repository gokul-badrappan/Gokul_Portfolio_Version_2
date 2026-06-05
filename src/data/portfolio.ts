import type { CardItem } from "@/components/CardGrid";

const unsplash = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=800&q=80`;

/** Fallbacks until abstract images are added under /public */
const IMAGE_FALLBACKS: Record<string, string> = {
  "/abstract-fiber-optics.jpg": unsplash("1635070041078-e363dbe005cb"),
  "/abstract-data-mesh.jpg": unsplash("1526374965328-7f61d4dc18c5"),
  "/abstract-topography.jpg": unsplash("1633265486064-086b219458ec"),
  "/abstract-glow-grid.jpg": unsplash("1639762681485-074b7f938ba0"),
  "/abstract-server-rack.jpg": unsplash("1558494949-ef010cbdcc31"),
  "/abstract-neural-net.jpg": unsplash("1542831371-29b0f74f9713"),
  "/abstract-nodes.jpg": unsplash("1620712943543-bcc4688e7485"),
  "/abstract-wireframe.jpg": unsplash("1517077304055-6e89abbf09b0"),
  "/abstract-education.jpg": unsplash("1607237138185-eedd9c632b0b"),
  "/abstract-schooling.jpg": unsplash("1503676260728-1c00da094a0b"),
  "/abstract-azure.jpg": unsplash("1639762681485-074b7f938ba0"),
  "/abstract-aws.jpg": unsplash("1451187580459-43490279c0fa"),
};

export function resolveImage(path: string): string {
  return IMAGE_FALLBACKS[path] ?? path;
}

export const hero = {
  name: "gokul badrappan",
  headline: "engineering cloud infrastructure. automating with ai.",
  glowingWord: "Cloud Infrastructure",
  subtitleTags: [] as string[],
};

export const resume = {
  path: "/resume.pdf",
  productionUrl: "https://www.gokulb.com/resume.pdf",
};

export function getResumeHref(): string {
  return import.meta.env.PROD ? resume.productionUrl : resume.path;
}

export const skillsMarqueeRows: string[][] = [
  ["Docker", "Kubernetes", "Terraform", "Ansible", "Helm", "Prometheus", "Grafana"],
  ["Azure DevOps", "Jenkins", "ArgoCD", "GitOps", "SonarQube", "Trivy", "Linux"],
  ["Python", "Bash", "PowerShell", "React", "Next.js", "Flask", "Spring Boot"],
];

export const projects: CardItem[] = [
  {
    id: "p1",
    title: "Secure CI/CD Pipeline for Microservices",
    subtitle: "gitops · devsecops · argocd",
    meta: "github",
    description:
      "GitOps-based pipeline for zero-downtime K8s deployments. Integrated SonarQube & Trivy gates. Reduced execution time by 60% via layer caching.",
    image: resolveImage("/abstract-fiber-optics.jpg"),
    tech: ["Jenkins", "Docker", "Kubernetes", "ArgoCD", "SonarQube"],
    github: "https://github.com/gokul-badrappan/secure-cicd",
  },
  {
    id: "p2",
    title: "Containerized Monitoring Stack",
    subtitle: "observability · sre",
    meta: "github",
    description:
      "Real-time observability platform monitoring CPU, memory, and microservice metrics. Configured Prometheus alerting rules simulating on-call incident detection.",
    image: resolveImage("/abstract-data-mesh.jpg"),
    tech: ["Prometheus", "Grafana", "Docker"],
    github: "https://github.com/gokul-badrappan/observability-stack",
  },
  {
    id: "p3",
    title: "BWM Decision Support System",
    subtitle: "python · algorithms",
    meta: "live",
    description:
      "Flask/Python UI-driven MCDM tool implementing the Best-Worst Method algorithm, actively adopted by over 50 academic researchers.",
    image: resolveImage("/abstract-topography.jpg"),
    tech: ["Flask", "Python", "Tailwind CSS"],
    demo: "https://bwm-v3.onrender.com/",
  },
  {
    id: "p4",
    title: "ORSI-KA Membership Portal",
    subtitle: "full-stack · next.js",
    meta: "live",
    description:
      "Engineered a full-stack membership portal reducing manual administrative workload by 70% and increasing event sign-up efficiency.",
    image: resolveImage("/abstract-glow-grid.jpg"),
    tech: ["Next.js", "Supabase", "Razorpay"],
    demo: "https://www.orsi-ka.in",
  },
];

export const experience: CardItem[] = [
  {
    id: "e1",
    title: "Junior DevOps Engineer",
    subtitle: "cognizant · jul 2025→present",
    meta: "cognizant",
    description:
      "Managed release orchestration for 7 enterprise application portfolios via Azure DevOps. Maintained 99.9% application availability and administered lifecycle for 50+ SSL/TLS certificates.",
    image: resolveImage("/abstract-server-rack.jpg"),
  },
  {
    id: "e2",
    title: "Web Dev & Research Intern",
    subtitle: "iisc bangalore · dec 2024→mar 2025",
    meta: "iisc",
    description:
      "Engineered full-stack ORSI portal (Next.js) and designed a Simulated Annealing-based algorithm for reducing operational cost in SRME.",
    image: resolveImage("/abstract-neural-net.jpg"),
    link: "https://new-bwm.vercel.app/",
  },
  {
    id: "e3",
    title: "community ops",
    subtitle: "techtribe · nov 2025→present",
    meta: "techtribe",
    description:
      "Led operations for an 1800+ member tech community; spearheaded hackathons and technical events designed to make engineering accessible.",
    image: resolveImage("/abstract-nodes.jpg"),
  },
];

const educationEntries: CardItem[] = [
  {
    id: "ed1",
    title: "B.E. Computer Science & Engineering",
    subtitle: "Thiagarajar College of Engineering · 2021→2025",
    description: "CGPA: 8.11/10.",
    image: resolveImage("/abstract-education.jpg"),
    link: "https://www.tce.edu",
  },
  {
    id: "ed2",
    title: "Early Schooling",
    subtitle: "kendriya vidyalaya · 2009→2021",
    description: "Completed primary and secondary education.",
    image: resolveImage("/abstract-schooling.jpg"),
  },
];

const certificationEntries: CardItem[] = [
  {
    id: "cert1",
    title: "Microsoft Azure Certifications",
    subtitle: "microsoft · 2025",
    description:
      "AZ-104, AZ-204, AZ-900 — Azure Administration, Cloud Development, and Infrastructure.",
    image: resolveImage("/abstract-azure.jpg"),
    meta: "azure",
  },
  {
    id: "cert2",
    title: "AWS Certified Cloud Practitioner",
    subtitle: "amazon web services · dec 2025",
    description:
      "Credential ID: 0e88c7b1-7cab-4c9d-9f4b-e9a0098b816f. AWS cloud concepts, services, security, and architecture.",
    image: resolveImage("/abstract-aws.jpg"),
    meta: "aws",
  },
];

export const education: CardItem[] = [...educationEntries, ...certificationEntries];

export const contact = {
  email: "gokulbadrappan@gmail.com",
  github: "https://github.com/gokul-badrappan",
  linkedin: "https://www.linkedin.com/in/gokulbadrappan",
  twitter: null as string | null,
  blurb: "",
  contactHeading: "get in touch",
  footer: "© 2026 • all systems nominal",
};

export const seo = {
  title: "",
  description: "DevOps Engineer & SRE Portfolio.",
  url: "https://www.gokulb.com",
  openGraph: {
    title: "",
    description: "DevOps Engineer & SRE Portfolio.",
  },
  keywords: ["Gokul Badrappan", "DevOps", "SRE", "Cloud Infrastructure", "Azure", "AWS", "CI/CD"],
};
