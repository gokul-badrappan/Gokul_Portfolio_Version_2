import type { CardItem, Certification, SkillGroup } from "@/types/portfolio";

// ─── Identity ────────────────────────────────────────────────────────────────

export const hero = {
  name: "gokul badrappan",
  role: "devops engineer · chennai, india",
  headline: "i ship releases safely and keep production up.",
  glowingWord: "keep production up",
  availability: "open to freelance devops work",
};

export const overview =
  "DevOps engineer with 1.5 years of enterprise release orchestration, infrastructure automation, and platform observability on Azure. I own CI/CD delivery across 7 application portfolios and 4 environment tiers, and build GitOps, DevSecOps, and monitoring setups on the side. Azure and AWS certified.";

/** Rendered as a `gokul --status` terminal readout in the hero. Describes the work, not numbers. */
export const statusLines = [
  { key: "currently", value: "devops engineer on enterprise azure releases" },
  { key: "focus", value: "ci/cd, gitops, observability, tls certificate lifecycle" },
  { key: "building", value: "ai inference gateway on aws (terraform, ecs fargate)" },
  { key: "stack", value: "azure · aws · kubernetes · terraform · prometheus" },
  { key: "open to", value: "devops / sre roles and freelance projects" },
];

export const resume = {
  path: "/resume.pdf",
  productionUrl: "https://www.gokulb.com/resume.pdf",
};

export function getResumeHref(): string {
  return import.meta.env.PROD ? resume.productionUrl : resume.path;
}

// ─── Projects ────────────────────────────────────────────────────────────────

export const projects: CardItem[] = [
  {
    id: "p1",
    title: "AI Inference Gateway",
    subtitle: "sre · aws · terraform · cost control",
    meta: "case study",
    description:
      "Model-serving gateway on ECS Fargate with per-request cost attribution in INR and a spend circuit breaker that sheds load at HTTP 429 before the upstream call.",
    metrics: ["21 terraform resources", "429 load shedding", "recovery tested"],
    tech: ["AWS ECS Fargate", "Terraform", "FastAPI", "Docker", "Prometheus", "Grafana"],
    github: "https://github.com/gokul-badrappan/ai-inference-gateway",
    caseStudy: {
      problem:
        "Calling an LLM API directly returns a response and token counts, but gives an operator no cost attribution, no service metrics, and no way to stop a runaway bill before it happens.",
      architecture: [
        ["client", "alb", "ecs fargate (fastapi gateway)", "spend circuit breaker", "llm api"],
        ["gateway /metrics", "prometheus", "grafana"],
        ["terraform", "vpc · iam · ssm · ecr · cloudwatch"],
      ],
      verified:
        "Killed the running ECS task on purpose and timed how long ECS took to reschedule it and the ALB took to re-register the new target.",
      results: [
        "21 AWS resources provisioned and managed entirely in Terraform",
        "Per-request cost attribution in INR with token accounting",
        "Rolling-window spend circuit breaker returns HTTP 429 before the upstream call once the budget is exhausted",
        "Latency, token, and cost metrics exported to Prometheus and visualised in Grafana",
      ],
    },
  },
  {
    id: "p2",
    title: "Secure CI/CD Pipeline for Spring Boot Microservices",
    subtitle: "gitops · devsecops · argocd",
    meta: "case study",
    description:
      "GitOps pipeline for zero-downtime Kubernetes deployments with SonarQube and Trivy quality and security gates.",
    metrics: ["60% faster builds", "2 security gates", "zero-downtime deploys"],
    tech: ["Jenkins", "Docker", "Kubernetes", "ArgoCD", "SonarQube", "Trivy"],
    // TODO: publish the repo, then uncomment. The old link (secure-cicd) returned 404.
    // github: "https://github.com/gokul-badrappan/<repo>",
    caseStudy: {
      problem:
        "Microservice releases needed to be fast and repeatable without letting low-quality code or vulnerable images reach the cluster.",
      architecture: [
        ["git push", "jenkins build", "sonarqube gate", "docker build", "trivy scan"],
        ["manifest update (git)", "argocd sync", "kubernetes"],
      ],
      verified:
        "A failed SonarQube quality gate or a Trivy finding stops the pipeline before the image is promoted to the cluster.",
      results: [
        "Zero-downtime rolling deployments driven from Git by ArgoCD",
        "Docker layer caching cut pipeline execution time by 60%",
        "Code quality and image security checked on every build",
      ],
    },
  },
];

// ─── Experience ──────────────────────────────────────────────────────────────

export const experience: CardItem[] = [
  {
    id: "e1",
    title: "DevOps Engineer",
    subtitle: "cognizant · mar 2025 → present",
    meta: "cognizant",
    description:
      "Release orchestration, operations, and certificate lifecycle for enterprise applications on Azure.",
    highlights: [
      "Managed release orchestration for 7 enterprise application portfolios via Azure DevOps pipelines across 4 environment tiers (dev, test, staging, prod), speeding up deployment cycles by 30%",
      "Sustained 99.9% availability on supported applications while resolving 70+ weekly ServiceNow change and incident requests and SSMS SQL deployments",
      "Administered 50+ SSL/TLS certificates (DigiCert, internal CA) across 250+ domains, eliminating expiry-driven outages",
      "Built automation scripts for recurring operational workflows, cutting per-task time by over 60% (5+ minutes to under 2)",
      "Authored SOPs and monthly BAU reports used by 10+ cross-functional stakeholders, standardising 24/7 incident response",
    ],
    tech: ["Azure DevOps", "ServiceNow", "SSMS", "PowerShell", "DigiCert"],
  },
  {
    id: "e2",
    title: "Web Development & Research Intern",
    subtitle: "iisc bangalore · dec 2024 → mar 2025",
    meta: "iisc",
    description:
      "Built production tools for researchers and modelled cost-optimisation algorithms.",
    highlights: [
      "Built the ORSI Karnataka membership portal (Next.js, Supabase, Wix, Razorpay), cutting manual admin work by 70% and improving sign-up throughput by 40%",
      "Built a Flask/Python Best-Worst Method decision tool adopted by 50+ researchers",
      "Modelled a simulated-annealing scheduling algorithm (67–74% projected cost reduction) and a TSP routing model (32.7% less modelled daily travel)",
    ],
    tech: ["Next.js", "Supabase", "Flask", "Python"],
    demo: "https://www.orsi-ka.in",
    demoLabel: "orsi portal",
    link: "https://bwm-v3.onrender.com/",
    linkLabel: "bwm tool",
  },
  {
    id: "e3",
    title: "Community Operations Lead",
    subtitle: "techtribe · nov 2025 → present",
    meta: "techtribe",
    description:
      "Led operations for an 1800+ member tech community; ran hackathons and workshops end to end.",
  },
];

// ─── Skills ──────────────────────────────────────────────────────────────────

export const skillGroups: SkillGroup[] = [
  {
    label: "devops & ci/cd",
    items: ["Azure DevOps", "Jenkins", "GitHub Actions", "ArgoCD", "SonarQube", "Git"],
  },
  { label: "containers & iac", items: ["Docker", "Kubernetes", "Terraform", "Ansible"] },
  {
    label: "cloud & observability",
    items: ["Azure", "AWS", "Prometheus", "Grafana", "Azure Monitor"],
  },
  {
    label: "ops & security",
    items: ["ServiceNow", "SSMS", "Linux", "Bash", "PowerShell", "SSL/TLS"],
  },
  { label: "languages", items: ["Python", "Java", "SQL"] },
];

// ─── Credentials ─────────────────────────────────────────────────────────────

export const education = {
  degree: "B.E. Computer Science & Engineering",
  institution: "Thiagarajar College of Engineering, Madurai",
  period: "nov 2021 → may 2025",
  cgpa: "8.11 / 10",
  link: "https://www.tce.edu",
};

export const certifications: Certification[] = [
  {
    id: "az-104",
    vendor: "microsoft azure",
    code: "AZ-104",
    name: "Azure Administrator Associate",
    year: "2025",
    verify: "",
  },
  {
    id: "az-900",
    vendor: "microsoft azure",
    code: "AZ-900",
    name: "Azure Fundamentals",
    year: "2025",
    verify: "",
  },
  {
    id: "ai-900",
    vendor: "microsoft azure",
    code: "AI-900",
    name: "Azure AI Fundamentals",
    year: "2025",
    verify: "",
  },
  {
    id: "aws-clf",
    vendor: "amazon web services",
    code: "CLF-C02",
    name: "AWS Certified Cloud Practitioner",
    year: "dec 2025",
    verify: "",
  },
  {
    id: "cca-f",
    vendor: "anthropic",
    code: "CCA-F",
    name: "Claude Certified Architect, Foundations",
    year: "2026",
    verify: "",
  },
];

export const leadership = [
  "Chair, IEEE Student Branch, TCE",
  "CEO, Entrepreneurship Cell, TCE",
  "University Rank 1, IEEE Hackathon",
];

export const publication = {
  title: "Blockchain-integrated IoV",
  venue: "book chapter · Research Advances in Network Technologies (CRC Press, 2026)",
};

// ─── For hire ────────────────────────────────────────────────────────────────

export const services = [
  {
    code: "ci/cd",
    title: "pipeline setup & hardening",
    outcome:
      "GitHub Actions, Azure DevOps, or Jenkins pipelines with SonarQube and Trivy gates. Faster builds, safer releases.",
  },
  {
    code: "k8s",
    title: "containerise & deploy",
    outcome: "Dockerise your app and ship it to Kubernetes (AKS/EKS) with GitOps via ArgoCD.",
  },
  {
    code: "obs",
    title: "monitoring & alerting",
    outcome: "Prometheus and Grafana dashboards with alerts that fire on real problems, not noise.",
  },
  {
    code: "iac",
    title: "cloud infra as code",
    outcome:
      "Terraform for Azure or AWS, plus SSL/TLS certificate tracking so nothing expires silently.",
  },
];

// ─── Contact & SEO ───────────────────────────────────────────────────────────

export const contact = {
  email: "gokulbadrappan@gmail.com",
  github: "https://github.com/gokul-badrappan",
  linkedin: "https://www.linkedin.com/in/gokulbadrappan",
  twitter: null as string | null,
  /** Cal.com / Calendly link. When null, the hire CTA falls back to email. */
  booking: null as string | null,
  blurb:
    "Hiring for a DevOps or SRE role, or need help with a pipeline? Email is the fastest way to reach me.",
  contactHeading: "get in touch",
  footer: "© 2026 gokul badrappan",
};

export const site = {
  repo: "https://github.com/gokul-badrappan/Gokul_Portfolio_Version_2",
  ciBadge:
    "https://github.com/gokul-badrappan/Gokul_Portfolio_Version_2/actions/workflows/ci.yml/badge.svg",
  ciUrl: "https://github.com/gokul-badrappan/Gokul_Portfolio_Version_2/actions/workflows/ci.yml",
};

export const seo = {
  title: "Gokul Badrappan | DevOps & Site Reliability Engineer",
  description:
    "DevOps engineer building CI/CD pipelines, Kubernetes deployments, and observability on Azure and AWS. AZ-104 certified. Open to freelance work.",
  url: "https://www.gokulb.com",
  image: "https://www.gokulb.com/og-image.png",
  openGraph: {
    title: "Gokul Badrappan | DevOps & SRE",
    description:
      "CI/CD, Kubernetes, Terraform, and observability on Azure and AWS. Open to freelance projects.",
  },
  keywords: [
    "Gokul Badrappan",
    "DevOps Engineer",
    "Site Reliability Engineer",
    "SRE",
    "Azure",
    "AWS",
    "Kubernetes",
    "Terraform",
    "CI/CD",
    "Freelance DevOps",
  ],
};
