import { useEffect, useRef, useState, type RefObject } from "react";
import { motion, useMotionValue, useTransform, animate, useReducedMotion } from "framer-motion";
import { GitBranch, ShieldCheck, Hammer, UploadCloud, Globe } from "lucide-react";
import { site } from "@/data/portfolio";
import { SectionHeader } from "./SectionHeader";

declare const __COMMIT_SHA__: string;
declare const __BUILD_TIME__: string;

const THEME_BLUE = "rgb(58, 108, 215)";

/** The real delivery path of this website. Keep in sync with .github/workflows/ci.yml. */
const stages = [
  { id: "commit", label: "git push", detail: "main branch", Icon: GitBranch, yOffset: 0 },
  {
    id: "ci",
    label: "ci",
    detail: "github actions: typecheck + build",
    Icon: ShieldCheck,
    yOffset: -28,
  },
  { id: "build", label: "build", detail: "vite + nitro", Icon: Hammer, yOffset: 16 },
  { id: "deploy", label: "deploy", detail: "vercel", Icon: UploadCloud, yOffset: -16 },
  { id: "live", label: "live", detail: "gokulb.com", Icon: Globe, yOffset: 22 },
];

const SVG_HEIGHT = 280;
const MOBILE_NODE_HEIGHT = 80;
const MOBILE_NODE_GAP = 16;
const MOBILE_SVG_WIDTH = 40;

function timeAgo(iso: string): string {
  const diff = Date.now() - new Date(iso).getTime();
  const mins = Math.round(diff / 60000);
  if (mins < 1) return "just now";
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.round(mins / 60);
  if (hrs < 48) return `${hrs}h ago`;
  return `${Math.round(hrs / 24)}d ago`;
}

function Packet({
  pathRef,
  pathLen,
  filterId,
}: {
  pathRef: RefObject<SVGPathElement | null>;
  pathLen: number;
  filterId: string;
}) {
  const progress = useMotionValue(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (pathLen <= 0 || reduce) return;
    const controls = animate(progress, 1, { duration: 6, repeat: Infinity, ease: "linear" });
    return () => controls.stop();
  }, [progress, pathLen, reduce]);

  const point = (t: number) => {
    const path = pathRef.current;
    if (!path || pathLen <= 0) return { x: 0, y: 0 };
    return path.getPointAtLength(t * pathLen);
  };
  const cx = useTransform(progress, (t) => point(t).x);
  const cy = useTransform(progress, (t) => point(t).y);

  if (pathLen <= 0 || reduce) return null;
  return <motion.circle r={5} fill={THEME_BLUE} cx={cx} cy={cy} filter={`url(#${filterId})`} />;
}

function GlowFilter({ id }: { id: string }) {
  return (
    <defs>
      <filter id={id} x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="3" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
  );
}

function MobilePipeline() {
  const pathRef = useRef<SVGPathElement>(null);
  const [pathLen, setPathLen] = useState(0);
  const totalHeight = stages.length * MOBILE_NODE_HEIGHT + (stages.length - 1) * MOBILE_NODE_GAP;
  const midX = MOBILE_SVG_WIDTH / 2;
  const nodeYs = stages.map(
    (_, i) => i * (MOBILE_NODE_HEIGHT + MOBILE_NODE_GAP) + MOBILE_NODE_HEIGHT / 2,
  );

  let pathD = `M ${midX} ${nodeYs[0]}`;
  for (let i = 0; i < nodeYs.length - 1; i++) {
    const cy = (nodeYs[i] + nodeYs[i + 1]) / 2;
    pathD += ` C ${midX} ${cy}, ${midX} ${cy}, ${midX} ${nodeYs[i + 1]}`;
  }

  useEffect(() => {
    if (pathRef.current) setPathLen(pathRef.current.getTotalLength());
  }, [pathD]);

  return (
    <div className="md:hidden relative flex flex-row gap-4">
      <div
        className="relative flex-shrink-0"
        style={{ width: MOBILE_SVG_WIDTH, height: totalHeight }}
      >
        <svg
          width={MOBILE_SVG_WIDTH}
          height={totalHeight}
          viewBox={`0 0 ${MOBILE_SVG_WIDTH} ${totalHeight}`}
          className="absolute inset-0 pointer-events-none"
          aria-hidden
        >
          <GlowFilter id="mobilePacketGlow" />
          <path
            ref={pathRef}
            d={pathD}
            fill="none"
            stroke={THEME_BLUE}
            strokeOpacity="0.45"
            strokeWidth="1.5"
            strokeDasharray="4 6"
            strokeLinecap="round"
          />
          <Packet pathRef={pathRef} pathLen={pathLen} filterId="mobilePacketGlow" />
        </svg>
      </div>
      <ol className="flex flex-col gap-4 flex-1">
        {stages.map((s) => (
          <li
            key={s.id}
            className="w-full h-20 rounded-xl border border-white/15 bg-card flex items-center gap-3 px-4 glow-border"
          >
            <s.Icon size={20} className="text-white/85 shrink-0" aria-hidden />
            <div>
              <div className="font-mono text-xs lowercase text-white/90">{s.label}</div>
              <div className="font-mono text-[11px] lowercase text-white/60">{s.detail}</div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export function SiteInfra() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const [dims, setDims] = useState({ w: 0, h: SVG_HEIGHT });
  const [pathD, setPathD] = useState("");
  const [pathLen, setPathLen] = useState(0);
  const [builtAgo, setBuiltAgo] = useState<string | null>(null);

  useEffect(() => setBuiltAgo(timeAgo(__BUILD_TIME__)), []);

  useEffect(() => {
    const compute = () => {
      const el = containerRef.current;
      if (!el) return;
      const w = el.getBoundingClientRect().width;
      const padX = Math.max(64, w * 0.08);
      const midY = SVG_HEIGHT / 2;
      const pts = stages.map((s, i) => ({
        x: padX + ((w - padX * 2) * i) / (stages.length - 1),
        y: midY + s.yOffset,
      }));
      let d = `M ${pts[0].x} ${pts[0].y}`;
      for (let i = 0; i < pts.length - 1; i++) {
        const cx = (pts[i].x + pts[i + 1].x) / 2;
        d += ` C ${cx} ${pts[i].y}, ${cx} ${pts[i + 1].y}, ${pts[i + 1].x} ${pts[i + 1].y}`;
      }
      setDims({ w, h: SVG_HEIGHT });
      setPathD(d);
    };
    compute();
    const ro = new ResizeObserver(compute);
    if (containerRef.current) ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    if (pathRef.current && pathD) setPathLen(pathRef.current.getTotalLength());
  }, [pathD, dims.w]);

  const padX = Math.max(64, dims.w * 0.08);
  const nodePositions = stages.map((s, i) => ({
    x: padX + ((dims.w - padX * 2) * i) / (stages.length - 1),
    y: dims.h / 2 + s.yOffset,
  }));

  return (
    <section id="infrastructure" className="py-32 px-6">
      <SectionHeader index="05" label="infrastructure" title="how this site ships">
        <p className="mt-4 max-w-xl text-sm text-white/75 leading-relaxed">
          Every push to main runs through CI before it reaches production. The status below is live
          from the actual pipeline, not a mock-up.
        </p>
      </SectionHeader>

      <div className="relative rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-10">
        <div
          ref={containerRef}
          className="hidden md:block relative w-full"
          style={{ height: dims.h }}
        >
          {dims.w > 0 && pathD && (
            <svg
              width={dims.w}
              height={dims.h}
              viewBox={`0 0 ${dims.w} ${dims.h}`}
              className="absolute inset-0 w-full h-full pointer-events-none"
              aria-hidden
            >
              <GlowFilter id="packetGlow" />
              <path
                ref={pathRef}
                d={pathD}
                fill="none"
                stroke={THEME_BLUE}
                strokeOpacity="0.45"
                strokeWidth="1.5"
                strokeDasharray="4 6"
                strokeLinecap="round"
              />
              <Packet pathRef={pathRef} pathLen={pathLen} filterId="packetGlow" />
            </svg>
          )}
          <ol>
            {nodePositions.map((p, i) => {
              const s = stages[i];
              return (
                <li
                  key={s.id}
                  className="absolute z-10 w-28 h-28 rounded-xl border border-white/15 bg-card flex flex-col items-center justify-center gap-1 px-2 text-center glow-border"
                  style={{ left: p.x - 56, top: p.y - 56 }}
                >
                  <s.Icon size={22} className="text-white/85" aria-hidden />
                  <div className="font-mono text-xs lowercase text-white/90">{s.label}</div>
                  <div className="font-mono text-[10px] leading-tight lowercase text-white/60">
                    {s.detail}
                  </div>
                </li>
              );
            })}
          </ol>
        </div>

        <MobilePipeline />

        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-[11px] text-white/70 lowercase">
          <a href={site.ciUrl} target="_blank" rel="noopener noreferrer" className="inline-flex">
            <img src={site.ciBadge} alt="CI status for this website" height={20} className="h-5" />
          </a>
          {builtAgo && <span>● last build: {builtAgo}</span>}
          <span>● commit: {__COMMIT_SHA__.slice(0, 7)}</span>
          <a
            href={site.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 decoration-[rgb(58,108,215)]/60 hover:text-white"
          >
            view source →
          </a>
        </div>
      </div>
    </section>
  );
}
