import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { p as projects, e as experience, a as education, h as hero, c as contact, g as getResumeHref, s as skillsMarqueeRows } from "./router-Bzh0gW70.mjs";
import { g as gsapWithCSS, S as ScrollTrigger } from "../_libs/gsap.mjs";
import { S as SiSpringboot, a as SiFlask, b as SiNextdotjs, c as SiReact, T as TbBrandPowershell, d as SiGnubash, e as SiPython, f as SiLinux, g as SiTrivy, h as SiSonarqubecloud, i as SiGit, j as SiArgo, k as SiJenkins, V as VscAzure, l as SiGrafana, m as SiPrometheus, n as SiHelm, o as SiAnsible, p as SiTerraform, q as SiKubernetes, r as SiDocker } from "../_libs/react-icons.mjs";
import { A as AnimatePresence, m as motion, u as useMotionValue, a as animate, b as useTransform } from "../_libs/framer-motion.mjs";
import { B as Box, G as GitBranch, H as Hammer, C as Container, a as CloudUpload, S as Ship, F as FileText } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/tanstack__react-router.mjs";
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
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function formatLoadSeconds(ms) {
  return `${(ms / 1e3).toFixed(1)}s`;
}
function getMeasuredLoadMs() {
  const nav = performance.getEntriesByType("navigation")[0];
  if (nav && nav.duration > 0) return nav.duration;
  const { timing } = performance;
  if (timing?.loadEventEnd && timing.navigationStart) {
    const legacy = timing.loadEventEnd - timing.navigationStart;
    if (legacy > 0) return legacy;
  }
  return 0;
}
function getFallbackLoadMs() {
  return (0.4 + Math.random() * 0.8) * 1e3;
}
function resolveLoadTime() {
  const measured = getMeasuredLoadMs();
  const ms = measured > 0 ? measured : getFallbackLoadMs();
  return formatLoadSeconds(ms);
}
function HUD() {
  const [time, setTime] = reactExports.useState("--:--:--");
  const [tz, setTz] = reactExports.useState("");
  const [vp, setVp] = reactExports.useState({ w: 0, h: 0 });
  const [ping, setPing] = reactExports.useState(24);
  const [load, setLoad] = reactExports.useState("—");
  reactExports.useEffect(() => {
    const updateLoad = () => setLoad(resolveLoadTime());
    if (document.readyState === "complete") {
      updateLoad();
    } else {
      window.addEventListener("load", updateLoad, { once: true });
    }
    return () => window.removeEventListener("load", updateLoad);
  }, []);
  reactExports.useEffect(() => {
    const updateTime = () => {
      const now = /* @__PURE__ */ new Date();
      setTime(
        now.toLocaleTimeString("en-GB", { hour12: false })
      );
    };
    updateTime();
    try {
      const z = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
      const abbr = new Intl.DateTimeFormat("en-US", { timeZoneName: "short" }).formatToParts(/* @__PURE__ */ new Date()).find((p2) => p2.type === "timeZoneName")?.value || z;
      setTz(abbr);
    } catch {
      setTz("");
    }
    const t = setInterval(updateTime, 1e3);
    const p = setInterval(() => setPing(20 + Math.floor(Math.random() * 12)), 2500);
    const onResize = () => setVp({ w: window.innerWidth, h: window.innerHeight });
    onResize();
    window.addEventListener("resize", onResize);
    return () => {
      clearInterval(t);
      clearInterval(p);
      window.removeEventListener("resize", onResize);
    };
  }, []);
  const base = "fixed z-50 font-mono text-[10px] sm:text-xs text-white/40 tracking-wider pointer-events-none select-none";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `${base} top-3 left-3`, children: [
      tz ? `${tz} ` : "",
      time
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `${base} top-3 right-3`, children: [
      "ping: ",
      ping,
      "ms"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `${base} bottom-3 left-3`, children: [
      "viewport: ",
      vp.w,
      "x",
      vp.h
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `${base} bottom-3 right-3`, children: [
      "load: ",
      load
    ] })
  ] });
}
const links = ["skills", "projects", "experience", "education", "infrastructure", "contact"];
function Navbar() {
  const [scrolled, setScrolled] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: scrolled && /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.nav,
    {
      initial: { y: -80, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      exit: { y: -80, opacity: 0 },
      transition: { type: "spring", stiffness: 220, damping: 26 },
      className: "fixed top-4 left-1/2 -translate-x-1/2 z-40",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1.5 rounded-full backdrop-blur-md bg-white/10 border border-white/15 shadow-[0_8px_30px_rgba(0,0,0,0.4)]", children: links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: `#${l}`,
          className: "font-mono text-[11px] sm:text-xs lowercase px-2.5 sm:px-3 py-1.5 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors",
          children: l
        },
        l
      )) })
    }
  ) });
}
function ResumeButton({ label = "view resume", href }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "a",
    {
      href: href ?? getResumeHref(),
      target: "_blank",
      rel: "noopener noreferrer",
      className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full font-mono text-[11px] lowercase text-white/80 border border-white/15 bg-white/[0.04] backdrop-blur-md transition-all hover:border-[rgb(58,108,215)]/60 hover:text-white hover:glow-border",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { size: 12, "aria-hidden": true }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tracking-widest", children: label })
      ]
    }
  );
}
const GLOW_STYLE = { color: "rgb(58,108,215)" };
const POD_FALLBACK = "S-SYSTEM";
function genPodSuffix() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let s = "";
  for (let i = 0; i < 6; i++) s += chars[Math.floor(Math.random() * chars.length)];
  return s;
}
function HeadlineWithGlow({ text, glow }) {
  const idx = text.toLowerCase().indexOf(glow.toLowerCase());
  if (idx === -1) return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: text });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    text.slice(0, idx),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-glow", style: GLOW_STYLE, children: text.slice(idx, idx + glow.length) }),
    text.slice(idx + glow.length)
  ] });
}
function Hero() {
  const [podId, setPodId] = reactExports.useState(POD_FALLBACK);
  reactExports.useEffect(() => {
    setPodId(`S-${genPodSuffix()}`);
  }, []);
  const subtitle = hero.subtitleTags.length > 0 ? hero.subtitleTags.join(" · ") : null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative min-h-screen flex flex-col items-center justify-center px-6 text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 18 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8 },
        className: "font-mono text-xs lowercase text-white/40 tracking-[0.3em] mb-6",
        children: [
          "// ",
          hero.name
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.h1,
      {
        initial: { opacity: 0, y: 24 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.9, delay: 0.1 },
        className: "lowercase text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight max-w-4xl leading-[1.15]",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadlineWithGlow, { text: hero.headline, glow: hero.glowingWord })
      }
    ),
    subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.p,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 1, delay: 0.4 },
        className: "mt-6 max-w-md text-sm text-white/50 lowercase",
        children: subtitle
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 8 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8, delay: 0.6 },
        className: "mt-10 flex flex-wrap items-center justify-center gap-3",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03] font-mono text-[11px] text-white/60", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { size: 14, className: "text-[rgb(58,108,215)] shrink-0", "aria-hidden": true }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tracking-widest", children: podId }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "h-1.5 w-1.5 rounded-full",
                style: { background: "rgb(58,108,215)", boxShadow: "0 0 8px rgb(58,108,215)" }
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ResumeButton, {})
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-10 left-1/2 -translate-x-1/2 font-mono text-[10px] text-white/30 lowercase", children: "scroll ↓" })
  ] });
}
const map = {
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
  "spring boot": { name: "spring boot", Icon: SiSpringboot, color: "#6DB33F" }
};
function resolveSkill(label) {
  const key = label.trim().toLowerCase();
  return map[key] ?? {
    name: key,
    Icon: SiGit,
    color: "rgb(58, 108, 215)"
  };
}
function resolveSkillRows(rows2) {
  return rows2.map((row) => row.map(resolveSkill));
}
gsapWithCSS.registerPlugin(ScrollTrigger);
const rows = resolveSkillRows(skillsMarqueeRows);
function SkillsMarquee() {
  const sectionRef = reactExports.useRef(null);
  const rowRefs = reactExports.useRef([]);
  reactExports.useEffect(() => {
    const ctx = gsapWithCSS.context(() => {
      rowRefs.current.forEach((row, i) => {
        if (!row) return;
        const dir = i % 2 === 0 ? -1 : 1;
        const distance = row.scrollWidth / 2;
        gsapWithCSS.fromTo(
          row,
          { x: dir === -1 ? 0 : -distance },
          {
            x: dir === -1 ? -distance : 0,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: true
            }
          }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "skills", ref: sectionRef, className: "py-32 overflow-x-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 mb-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-xs text-white/40 lowercase tracking-[0.3em]", children: "// 01 · skills" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "lowercase text-3xl sm:text-5xl font-light mt-2", children: "stack & tooling" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-8", children: rows.map((items, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        ref: (el) => {
          rowRefs.current[i] = el;
        },
        className: "flex gap-10 sm:gap-14 whitespace-nowrap will-change-transform items-center",
        children: [...items, ...items].map((s, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "group flex flex-col items-center gap-2 shrink-0 p-4",
            title: s.name,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                s.Icon,
                {
                  className: "h-10 w-10 sm:h-12 sm:w-12 text-slate-500 transition-all duration-300 group-hover:scale-110",
                  style: {
                    ["--brand"]: s.color
                  }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] lowercase text-white/30 group-hover:text-white/70 transition", children: s.name })
            ]
          },
          `${s.name}-${idx}`
        ))
      }
    ) }, i)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `
        #skills .group:hover svg {
          color: var(--brand);
          filter: drop-shadow(0 0 8px var(--brand)) drop-shadow(0 0 16px color-mix(in oklab, var(--brand) 50%, transparent));
        }
      ` })
  ] });
}
function ModalLinks({ item }) {
  const links2 = [
    item.demo && { label: "live demo →", href: item.demo },
    item.github && { label: "github →", href: item.github },
    item.link && item.link !== "#" && { label: "learn more →", href: item.link }
  ].filter(Boolean);
  if (links2.length === 0) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 flex flex-wrap gap-3", children: links2.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "a",
    {
      href: l.href,
      target: "_blank",
      rel: "noopener noreferrer",
      className: "font-mono text-xs lowercase px-3 py-1.5 rounded-full border border-[rgb(58,108,215)]/40 text-white/80 hover:text-white hover:glow-border transition",
      children: l.label
    },
    l.href
  )) });
}
function CardGrid({ id, label, title, items }) {
  const [active, setActive] = reactExports.useState(null);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id, className: "py-32 px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-mono text-xs text-white/40 lowercase tracking-[0.3em]", children: [
        "// ",
        label
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "lowercase text-3xl sm:text-5xl font-light mt-2", children: title })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6", children: items.map((it) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.button,
      {
        onClick: () => setActive(it),
        whileHover: { y: -4 },
        transition: { type: "spring", stiffness: 300, damping: 20 },
        className: "group aspect-square relative rounded-2xl overflow-hidden border border-white/10 bg-card transition-shadow duration-300 hover:shadow-[0_0_0_1px_rgba(58,108,215,0.6),0_0_32px_rgba(58,108,215,0.35)]",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0 flex items-center justify-center text-4xl sm:text-5xl",
              style: {
                background: `linear-gradient(135deg, rgba(58,108,215,0.15), rgba(0,0,0,0.2)), url(${it.image}) center/cover no-repeat`
              },
              children: !it.image && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: it.title[0] })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-2 left-2 font-mono text-[10px] text-white/50 lowercase opacity-0 group-hover:opacity-100 transition-opacity", children: it.meta ?? "open ↗" })
        ]
      },
      it.id
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: active && /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        onClick: () => setActive(null),
        className: "fixed inset-0 z-[60] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { scale: 0.92, opacity: 0, y: 20 },
            animate: { scale: 1, opacity: 1, y: 0 },
            exit: { scale: 0.95, opacity: 0, y: 10 },
            transition: { type: "spring", stiffness: 260, damping: 24 },
            onClick: (e) => e.stopPropagation(),
            className: "relative w-full max-w-lg rounded-2xl border border-white/15 bg-card glow-border-strong overflow-hidden",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "h-48 w-full",
                  style: {
                    background: `linear-gradient(135deg, rgba(58,108,215,0.25), rgba(0,0,0,0.4)), url(${active.image}) center/cover no-repeat`
                  }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[11px] text-white/40 lowercase", children: active.subtitle }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "lowercase text-2xl font-light mt-1", children: active.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm text-white/70 leading-relaxed", children: active.description }),
                active.tech && active.tech.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 font-mono text-[10px] text-white/40 lowercase", children: active.tech.join(" · ") }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(ModalLinks, { item: active }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: () => setActive(null),
                    className: "mt-6 font-mono text-xs lowercase px-3 py-1.5 rounded-full border border-white/15 text-white/70 hover:text-white hover:border-white/30 transition",
                    children: "close ×"
                  }
                )
              ] })
            ]
          }
        )
      }
    ) })
  ] });
}
const THEME_BLUE = "rgb(58, 108, 215)";
const stages = [
  { id: "git", label: "git", Icon: GitBranch, yOffset: 0 },
  { id: "build", label: "build", Icon: Hammer, yOffset: -28 },
  { id: "docker", label: "docker", Icon: Container, yOffset: 16 },
  { id: "deploy", label: "deploy", Icon: CloudUpload, yOffset: -16 },
  { id: "k8s", label: "k8s", Icon: Ship, yOffset: 22 }
];
const SVG_HEIGHT = 280;
function PathPacket({
  pathRef,
  pathLen
}) {
  const progress = useMotionValue(0);
  reactExports.useEffect(() => {
    if (pathLen <= 0) return;
    const controls = animate(progress, 1, {
      duration: 6,
      repeat: Infinity,
      ease: "linear"
    });
    return () => controls.stop();
  }, [progress, pathLen]);
  const cx = useTransform(progress, (t) => {
    const path = pathRef.current;
    if (!path || pathLen <= 0) return 0;
    return path.getPointAtLength(t * pathLen).x;
  });
  const cy = useTransform(progress, (t) => {
    const path = pathRef.current;
    if (!path || pathLen <= 0) return 0;
    return path.getPointAtLength(t * pathLen).y;
  });
  if (pathLen <= 0) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.circle,
    {
      r: 5,
      fill: THEME_BLUE,
      cx,
      cy,
      filter: "url(#packetGlow)"
    }
  );
}
function Pipeline() {
  const containerRef = reactExports.useRef(null);
  const pathRef = reactExports.useRef(null);
  const [dims, setDims] = reactExports.useState({ w: 0, h: SVG_HEIGHT });
  const [pathD, setPathD] = reactExports.useState("");
  const [pathLen, setPathLen] = reactExports.useState(0);
  reactExports.useEffect(() => {
    const compute = () => {
      const el = containerRef.current;
      if (!el) return;
      const w = el.getBoundingClientRect().width;
      const h = SVG_HEIGHT;
      const padX = Math.max(56, w * 0.08);
      const midY = h / 2;
      const pts = stages.map((s, i) => ({
        x: padX + (w - padX * 2) * i / (stages.length - 1),
        y: midY + s.yOffset
      }));
      let d = `M ${pts[0].x} ${pts[0].y}`;
      for (let i = 0; i < pts.length - 1; i++) {
        const p0 = pts[i];
        const p1 = pts[i + 1];
        const cx = (p0.x + p1.x) / 2;
        d += ` C ${cx} ${p0.y}, ${cx} ${p1.y}, ${p1.x} ${p1.y}`;
      }
      setDims({ w, h });
      setPathD(d);
    };
    compute();
    const ro = new ResizeObserver(compute);
    if (containerRef.current) ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, []);
  reactExports.useEffect(() => {
    if (pathRef.current && pathD) {
      setPathLen(pathRef.current.getTotalLength());
    }
  }, [pathD, dims.w]);
  const nodePositions = stages.map((s, i) => {
    const padX = Math.max(56, dims.w * 0.08);
    const x = padX + (dims.w - padX * 2) * i / (stages.length - 1);
    const y = dims.h / 2 + s.yOffset;
    return { x, y };
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "infrastructure", className: "py-32 px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-xs text-white/40 lowercase tracking-[0.3em]", children: "// 05 · infrastructure" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "lowercase text-3xl sm:text-5xl font-light mt-2", children: "devsecops pipeline" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: containerRef, className: "hidden md:block relative w-full", style: { height: dims.h }, children: [
        dims.w > 0 && pathD && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "svg",
          {
            width: dims.w,
            height: dims.h,
            viewBox: `0 0 ${dims.w} ${dims.h}`,
            className: "absolute inset-0 w-full h-full pointer-events-none",
            "aria-hidden": true,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("filter", { id: "packetGlow", x: "-50%", y: "-50%", width: "200%", height: "200%", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("feGaussianBlur", { stdDeviation: "3", result: "blur" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("feMerge", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("feMergeNode", { in: "blur" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("feMergeNode", { in: "SourceGraphic" })
                ] })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "path",
                {
                  ref: pathRef,
                  d: pathD,
                  fill: "none",
                  stroke: THEME_BLUE,
                  strokeOpacity: "0.45",
                  strokeWidth: "1.5",
                  strokeDasharray: "4 6",
                  strokeLinecap: "round"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(PathPacket, { pathRef, pathLen })
            ]
          }
        ),
        nodePositions.map((p, i) => {
          const s = stages[i];
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 10 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { delay: i * 0.1 },
              className: "absolute z-10 w-24 h-24 rounded-xl border border-white/15 bg-card flex flex-col items-center justify-center gap-1 glow-border",
              style: { left: p.x - 48, top: p.y - 48 },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white/80", children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.Icon, { size: 22 }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-xs lowercase text-white/70", children: s.label })
              ]
            },
            s.id
          );
        })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:hidden flex flex-col gap-4", children: stages.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 10 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: i * 0.08 },
          className: "w-full h-20 rounded-xl border border-white/15 bg-card flex items-center justify-center gap-3 glow-border",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(s.Icon, { size: 20, className: "text-white/80" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-xs lowercase text-white/70", children: s.label })
          ]
        },
        s.id
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[11px] text-white/40 lowercase", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 bg-green-500 rounded-full animate-pulse" }),
          "status: healthy"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "● region: eu-west-1" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "● replicas: 6/6" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "● last deploy: 2m ago" })
      ] })
    ] })
  ] });
}
function Contact() {
  const socials = [
    { label: "github", href: contact.github },
    { label: "linkedin", href: contact.linkedin },
    ...[]
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "contact", className: "py-32 px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-xs text-white/40 lowercase tracking-[0.3em]", children: "// 06 · contact" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "lowercase text-3xl sm:text-5xl font-light mt-2", children: contact.contactHeading })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-white/10 bg-white/[0.02] p-8 sm:p-12 flex flex-col items-start gap-6", children: [
      contact.blurb,
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: `mailto:${contact.email}`,
            className: "font-mono text-lg lowercase px-5 py-3 rounded-full border border-[rgb(58,108,215)]/40 text-white glow-border hover:glow-border-strong transition-all",
            children: [
              contact.email,
              " →"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ResumeButton, {})
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-4 font-mono text-xs text-white/50 lowercase", children: socials.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: s.href,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "hover:text-white transition",
          children: s.label
        },
        s.label
      )) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-16 text-center font-mono text-[11px] text-white/50 tracking-[0.3em] lowercase", children: contact.footer })
  ] });
}
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "relative", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(HUD, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SkillsMarquee, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CardGrid, { id: "projects", label: "02 · deployments", title: "deployments", items: projects }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CardGrid, { id: "experience", label: "03 · experience", title: "trajectory", items: experience }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CardGrid, { id: "education", label: "04 · credentials", title: "credentials", items: education }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Pipeline, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Contact, {})
  ] });
}
export {
  Index as component
};
