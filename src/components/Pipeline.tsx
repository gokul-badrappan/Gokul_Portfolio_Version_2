import { useEffect, useRef, useState, type RefObject } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { GitBranch, Hammer, Container, UploadCloud, Ship } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const THEME_BLUE = "rgb(58, 108, 215)";

const stages = [
  { id: "git", label: "git", Icon: GitBranch, yOffset: 0 },
  { id: "build", label: "build", Icon: Hammer, yOffset: -28 },
  { id: "docker", label: "docker", Icon: Container, yOffset: 16 },
  { id: "deploy", label: "deploy", Icon: UploadCloud, yOffset: -16 },
  { id: "k8s", label: "k8s", Icon: Ship, yOffset: 22 },
];

const SVG_HEIGHT = 280;

function PathPacket({
  pathRef,
  pathLen,
}: {
  pathRef: RefObject<SVGPathElement | null>;
  pathLen: number;
}) {
  const progress = useMotionValue(0);

  useEffect(() => {
    if (pathLen <= 0) return;
    const controls = animate(progress, 1, {
      duration: 6,
      repeat: Infinity,
      ease: "linear",
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

  return <motion.circle r={5} fill={THEME_BLUE} cx={cx} cy={cy} filter="url(#packetGlow)" />;
}

// Mobile vertical pipeline with animated dot
const MOBILE_NODE_HEIGHT = 80;
const MOBILE_NODE_GAP = 16;
const MOBILE_SVG_WIDTH = 40;

function MobilePathPacket({
  pathRef,
  pathLen,
}: {
  pathRef: RefObject<SVGPathElement | null>;
  pathLen: number;
}) {
  const progress = useMotionValue(0);

  useEffect(() => {
    if (pathLen <= 0) return;
    const controls = animate(progress, 1, {
      duration: 6,
      repeat: Infinity,
      ease: "linear",
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

  return <motion.circle r={5} fill={THEME_BLUE} cx={cx} cy={cy} filter="url(#mobilePacketGlow)" />;
}

function MobilePipeline() {
  const pathRef = useRef<SVGPathElement>(null);
  const [pathLen, setPathLen] = useState(0);

  const totalHeight =
    stages.length * MOBILE_NODE_HEIGHT + (stages.length - 1) * MOBILE_NODE_GAP;
  const svgHeight = totalHeight;
  const midX = MOBILE_SVG_WIDTH / 2;

  // Build a vertical path connecting node centers
  const nodeYs = stages.map(
    (_, i) => i * (MOBILE_NODE_HEIGHT + MOBILE_NODE_GAP) + MOBILE_NODE_HEIGHT / 2
  );

  let pathD = `M ${midX} ${nodeYs[0]}`;
  for (let i = 0; i < nodeYs.length - 1; i++) {
    const y0 = nodeYs[i];
    const y1 = nodeYs[i + 1];
    const cy = (y0 + y1) / 2;
    pathD += ` C ${midX} ${cy}, ${midX} ${cy}, ${midX} ${y1}`;
  }

  useEffect(() => {
    if (pathRef.current && pathD) {
      setPathLen(pathRef.current.getTotalLength());
    }
  }, [pathD]);

  return (
    <div className="md:hidden relative flex flex-row gap-4">
      {/* Vertical SVG line with animated dot */}
      <div
        className="relative flex-shrink-0"
        style={{ width: MOBILE_SVG_WIDTH, height: svgHeight }}
      >
        <svg
          width={MOBILE_SVG_WIDTH}
          height={svgHeight}
          viewBox={`0 0 ${MOBILE_SVG_WIDTH} ${svgHeight}`}
          className="absolute inset-0 pointer-events-none"
          aria-hidden
        >
          <defs>
            <filter id="mobilePacketGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
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
          <MobilePathPacket pathRef={pathRef} pathLen={pathLen} />
        </svg>
      </div>

      {/* Stage cards */}
      <div className="flex flex-col gap-4 flex-1">
        {stages.map((s, i) => (
          <motion.div
            key={s.id}
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="w-full h-20 rounded-xl border border-white/15 bg-card flex items-center justify-center gap-3 glow-border"
          >
            <s.Icon size={20} className="text-white/80" />
            <div className="font-mono text-xs lowercase text-white/70">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export function Pipeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const [dims, setDims] = useState({ w: 0, h: SVG_HEIGHT });
  const [pathD, setPathD] = useState("");
  const [pathLen, setPathLen] = useState(0);
  const isMobile = useIsMobile();

  useEffect(() => {
    const compute = () => {
      const el = containerRef.current;
      if (!el) return;
      const w = el.getBoundingClientRect().width;
      const h = SVG_HEIGHT;
      const padX = Math.max(56, w * 0.08);
      const midY = h / 2;
      const pts = stages.map((s, i) => ({
        x: padX + ((w - padX * 2) * i) / (stages.length - 1),
        y: midY + s.yOffset,
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

  useEffect(() => {
    if (pathRef.current && pathD) {
      setPathLen(pathRef.current.getTotalLength());
    }
  }, [pathD, dims.w]);

  const nodePositions = stages.map((s, i) => {
    const padX = Math.max(56, dims.w * 0.08);
    const x = padX + ((dims.w - padX * 2) * i) / (stages.length - 1);
    const y = dims.h / 2 + s.yOffset;
    return { x, y };
  });

  return (
    <section id="infrastructure" className="py-32 px-6">
      <div className="mb-12">
        <p className="font-mono text-xs text-white/40 lowercase tracking-[0.3em]">
          {/* 05 · infrastructure */}
          {"// 05 · infrastructure"}
        </p>
        <h2 className="lowercase text-3xl sm:text-5xl font-light mt-2">ci/cd & systems</h2>
      </div>

      <div className="relative rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-10">
        {/* Desktop horizontal pipeline */}
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
              <defs>
                <filter id="packetGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
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
              <PathPacket pathRef={pathRef} pathLen={pathLen} />
            </svg>
          )}

          {nodePositions.map((p, i) => {
            const s = stages[i];
            return (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="absolute z-10 w-24 h-24 rounded-xl border border-white/15 bg-card flex flex-col items-center justify-center gap-1 glow-border"
                style={{ left: p.x - 48, top: p.y - 48 }}
              >
                <div className="text-white/80">
                  <s.Icon size={22} />
                </div>
                <div className="font-mono text-xs lowercase text-white/70">{s.label}</div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile vertical pipeline with animated dot */}
        <MobilePipeline />

        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[11px] text-white/40 lowercase">
          <span className="inline-flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            status: healthy
          </span>
          <span>● region: eu-west-1</span>
          <span>● replicas: 6/6</span>
          <span>● last deploy: 2m ago</span>
        </div>
      </div>
    </section>
  );
}
