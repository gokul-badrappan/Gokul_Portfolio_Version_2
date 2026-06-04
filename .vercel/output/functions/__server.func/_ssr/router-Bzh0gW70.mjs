import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
const appCss = "/assets/styles-efIr4z1Q.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  reactExports.useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$1 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Lovable App" },
      { name: "description", content: "Lovable Generated Project" },
      { name: "author", content: "Lovable" },
      { property: "og:title", content: "Lovable App" },
      { property: "og:description", content: "Lovable Generated Project" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" }
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$1.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) });
}
const unsplash = (id) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=800&q=80`;
const IMAGE_FALLBACKS = {
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
  "/abstract-aws.jpg": unsplash("1451187580459-43490279c0fa")
};
function resolveImage(path) {
  return IMAGE_FALLBACKS[path] ?? path;
}
const hero = {
  name: "gokul badrappan",
  headline: "engineering cloud infrastructure. automating with ai.",
  glowingWord: "Cloud Infrastructure",
  subtitleTags: []
};
const resume = {
  productionUrl: "https://www.gokulb.com/resume.pdf"
};
function getResumeHref() {
  return resume.productionUrl;
}
const skillsMarqueeRows = [
  ["Docker", "Kubernetes", "Terraform", "Ansible", "Helm", "Prometheus", "Grafana"],
  ["Azure DevOps", "Jenkins", "ArgoCD", "GitOps", "SonarQube", "Trivy", "Linux"],
  ["Python", "Bash", "PowerShell", "React", "Next.js", "Flask", "Spring Boot"]
];
const projects = [
  {
    id: "p1",
    title: "Secure CI/CD Pipeline for Microservices",
    subtitle: "gitops · devsecops · argocd",
    meta: "github",
    description: "GitOps-based pipeline for zero-downtime K8s deployments. Integrated SonarQube & Trivy gates. Reduced execution time by 60% via layer caching.",
    image: resolveImage("/abstract-fiber-optics.jpg"),
    tech: ["Jenkins", "Docker", "Kubernetes", "ArgoCD", "SonarQube"],
    github: "https://github.com/gokul-badrappan/secure-cicd"
  },
  {
    id: "p2",
    title: "Containerized Monitoring Stack",
    subtitle: "observability · sre",
    meta: "github",
    description: "Real-time observability platform monitoring CPU, memory, and microservice metrics. Configured Prometheus alerting rules simulating on-call incident detection.",
    image: resolveImage("/abstract-data-mesh.jpg"),
    tech: ["Prometheus", "Grafana", "Docker"],
    github: "https://github.com/gokul-badrappan/observability-stack"
  },
  {
    id: "p3",
    title: "BWM Decision Support System",
    subtitle: "python · algorithms",
    meta: "live",
    description: "Flask/Python UI-driven MCDM tool implementing the Best-Worst Method algorithm, actively adopted by over 50 academic researchers.",
    image: resolveImage("/abstract-topography.jpg"),
    tech: ["Flask", "Python", "Tailwind CSS"],
    demo: "https://bwm-v3.onrender.com/"
  },
  {
    id: "p4",
    title: "ORSI-KA Membership Portal",
    subtitle: "full-stack · next.js",
    meta: "live",
    description: "Engineered a full-stack membership portal reducing manual administrative workload by 70% and increasing event sign-up efficiency.",
    image: resolveImage("/abstract-glow-grid.jpg"),
    tech: ["Next.js", "Supabase", "Razorpay"],
    demo: "https://www.orsi-ka.in"
  }
];
const experience = [
  {
    id: "e1",
    title: "Junior DevOps Engineer",
    subtitle: "cognizant · jul 2025→present",
    meta: "cognizant",
    description: "Managed release orchestration for 7 enterprise application portfolios via Azure DevOps. Maintained 99.9% application availability and administered lifecycle for 50+ SSL/TLS certificates.",
    image: resolveImage("/abstract-server-rack.jpg"),
    link: "https://www.cognizant.com"
  },
  {
    id: "e2",
    title: "Web Dev & Research Intern",
    subtitle: "iisc bangalore · dec 2024→mar 2025",
    meta: "iisc",
    description: "Engineered full-stack ORSI portal (Next.js) and designed a Simulated Annealing-based Decision Support System (Python) that reduced scheduling costs by 67-74%.",
    image: resolveImage("/abstract-neural-net.jpg"),
    link: "https://mgmt.iisc.ac.in/"
  },
  {
    id: "e3",
    title: "Director of Operations",
    subtitle: "techtribe · nov 2025→present",
    meta: "techtribe",
    description: "Led operations for an 1800+ member tech community; spearheaded hackathons and technical events designed to make engineering accessible.",
    image: resolveImage("/abstract-nodes.jpg")
  },
  {
    id: "e4",
    title: "Chief Executive Officer",
    subtitle: "e-cell tce · aug 2024→jul 2025",
    meta: "ecell",
    description: "Coordinated 5 operational verticals and 1000+ student volunteers across 5 large-scale events.",
    image: resolveImage("/abstract-wireframe.jpg"),
    link: "https://www.instagram.com/ecelltce/"
  }
];
const educationEntries = [
  {
    id: "ed1",
    title: "B.E. Computer Science & Engineering",
    subtitle: "thiagarajar college of engineering · 2021→2025",
    description: "CGPA: 8.11/10. Chair of IEEE Computer Society TCE.",
    image: resolveImage("/abstract-education.jpg"),
    link: "https://www.tce.edu"
  },
  {
    id: "ed2",
    title: "Early Schooling",
    subtitle: "kendriya vidyalaya · 2009→2021",
    description: "Completed primary and secondary education.",
    image: resolveImage("/abstract-schooling.jpg")
  }
];
const certificationEntries = [
  {
    id: "cert1",
    title: "Microsoft Azure Certifications",
    subtitle: "microsoft · 2025",
    description: "AZ-104, AZ-204, AZ-900 — Azure Administration, Cloud Development, and Infrastructure.",
    image: resolveImage("/abstract-azure.jpg"),
    meta: "azure"
  },
  {
    id: "cert2",
    title: "AWS Certified Cloud Practitioner",
    subtitle: "amazon web services · dec 2025",
    description: "Credential ID: 0e88c7b1-7cab-4c9d-9f4b-e9a0098b816f. AWS cloud concepts, services, security, and architecture.",
    image: resolveImage("/abstract-aws.jpg"),
    meta: "aws"
  }
];
const education = [...educationEntries, ...certificationEntries];
const contact = {
  email: "gokulbadrappan@gmail.com",
  github: "https://github.com/gokul-badrappan",
  linkedin: "https://www.linkedin.com/in/gokulbadrappan",
  blurb: "",
  contactHeading: "open a socket",
  footer: "© 2026 • all systems nominal"
};
const seo = {
  title: "gokul badrappan // live infrastructure",
  description: "DevOps Engineer & SRE Portfolio.",
  url: "https://www.gokulb.com",
  openGraph: {
    title: "gokul badrappan // live infrastructure",
    description: "DevOps Engineer & SRE Portfolio."
  },
  keywords: ["Gokul Badrappan", "DevOps", "SRE", "Cloud Infrastructure", "Azure", "AWS", "CI/CD"]
};
const $$splitComponentImporter = () => import("./index-DspqD7XK.mjs");
const Route = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: seo.title
    }, {
      name: "description",
      content: seo.description
    }, {
      name: "keywords",
      content: seo.keywords.join(", ")
    }, {
      property: "og:title",
      content: seo.openGraph.title
    }, {
      property: "og:description",
      content: seo.openGraph.description
    }, {
      property: "og:url",
      content: seo.url
    }],
    links: [{
      rel: "preconnect",
      href: "https://fonts.googleapis.com"
    }, {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "anonymous"
    }, {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&family=JetBrains+Mono:wght@400;500&display=swap"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$1
});
const rootRouteChildren = {
  IndexRoute
};
const routeTree = Route$1._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  education as a,
  contact as c,
  experience as e,
  getResumeHref as g,
  hero as h,
  projects as p,
  router as r,
  skillsMarqueeRows as s
};
