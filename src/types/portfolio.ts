export interface CaseStudy {
  problem: string;
  /** Each row is a left-to-right flow of components. */
  architecture: string[][];
  /** How the system was tested or verified. */
  verified: string;
  results: string[];
}

export interface CardItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  meta?: string;
  link?: string;
  linkLabel?: string;
  github?: string;
  demo?: string;
  demoLabel?: string;
  tech?: string[];
  highlights?: string[];
  metrics?: string[];
  caseStudy?: CaseStudy;
}

export interface Certification {
  id: string;
  vendor: string;
  code: string;
  name: string;
  year: string;
  /** Credly / Microsoft Learn / AWS verification URL. Leave empty to hide the link. */
  verify: string;
}

export interface SkillGroup {
  label: string;
  items: string[];
}
