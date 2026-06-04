import { useEffect, useState } from "react";

function formatLoadSeconds(ms: number): string {
  return `${(ms / 1000).toFixed(1)}s`;
}

function getMeasuredLoadMs(): number {
  const nav = performance.getEntriesByType("navigation")[0] as
    | PerformanceNavigationTiming
    | undefined;
  if (nav && nav.duration > 0) return nav.duration;

  const { timing } = performance;
  if (timing?.loadEventEnd && timing.navigationStart) {
    const legacy = timing.loadEventEnd - timing.navigationStart;
    if (legacy > 0) return legacy;
  }
  return 0;
}

function getFallbackLoadMs(): number {
  return (0.4 + Math.random() * 0.8) * 1000;
}

function resolveLoadTime(): string {
  const measured = getMeasuredLoadMs();
  const ms = measured > 0 ? measured : getFallbackLoadMs();
  return formatLoadSeconds(ms);
}

export function HUD() {
  const [time, setTime] = useState<string>("--:--:--");
  const [tz, setTz] = useState<string>("");
  const [vp, setVp] = useState({ w: 0, h: 0 });
  const [ping, setPing] = useState(24);
  const [load, setLoad] = useState<string>("—");

  useEffect(() => {
    const updateLoad = () => setLoad(resolveLoadTime());

    if (document.readyState === "complete") {
      updateLoad();
    } else {
      window.addEventListener("load", updateLoad, { once: true });
    }

    return () => window.removeEventListener("load", updateLoad);
  }, []);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-GB", { hour12: false })
      );
    };
    updateTime();
    try {
      const z = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
      const abbr =
        new Intl.DateTimeFormat("en-US", { timeZoneName: "short" })
          .formatToParts(new Date())
          .find((p) => p.type === "timeZoneName")?.value || z;
      setTz(abbr);
    } catch {
      setTz("");
    }

    const t = setInterval(updateTime, 1000);
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

  const base =
    "fixed z-50 font-mono text-[10px] sm:text-xs text-white/40 tracking-wider pointer-events-none select-none";

  return (
    <>
      <div className={`${base} top-3 left-3`}>{tz ? `${tz} ` : ""}{time}</div>
      <div className={`${base} top-3 right-3`}>ping: {ping}ms</div>
      <div className={`${base} bottom-3 left-3`}>
        viewport: {vp.w}x{vp.h}
      </div>
      <div className={`${base} bottom-3 right-3`}>load: {load}</div>
    </>
  );
}
