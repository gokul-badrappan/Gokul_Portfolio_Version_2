import { useEffect, useState } from "react";

declare const __COMMIT_SHA__: string;

function getMeasuredLoadMs(): number {
  const nav = performance.getEntriesByType("navigation")[0] as
    | PerformanceNavigationTiming
    | undefined;
  return nav && nav.duration > 0 ? nav.duration : 0;
}

/** Corner readouts. Every value shown here is real: Chennai local time, measured page load, viewport, build commit. */
export function HUD() {
  const [time, setTime] = useState<string>("--:--:--");
  const [vp, setVp] = useState({ w: 0, h: 0 });
  const [load, setLoad] = useState<string | null>(null);

  useEffect(() => {
    const updateLoad = () => {
      const ms = getMeasuredLoadMs();
      if (ms > 0) setLoad(`${(ms / 1000).toFixed(1)}s`);
    };
    if (document.readyState === "complete") updateLoad();
    else window.addEventListener("load", updateLoad, { once: true });
    return () => window.removeEventListener("load", updateLoad);
  }, []);

  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
      timeZone: "Asia/Kolkata",
    });
    const updateTime = () => setTime(fmt.format(new Date()));
    updateTime();
    const t = setInterval(updateTime, 1000);
    const onResize = () => setVp({ w: window.innerWidth, h: window.innerHeight });
    onResize();
    window.addEventListener("resize", onResize);
    return () => {
      clearInterval(t);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const base =
    "fixed z-30 hidden lg:block font-mono text-xs text-white/55 tracking-wider pointer-events-none select-none";

  return (
    <div aria-hidden>
      <div className={`${base} top-5 left-4`}>chennai {time} ist</div>
      <div className={`${base} top-5 right-4`}>build: {__COMMIT_SHA__.slice(0, 7)}</div>
      <div className={`${base} bottom-3 left-4`}>
        viewport: {vp.w}x{vp.h}
      </div>
      {load && <div className={`${base} bottom-3 right-4`}>load: {load}</div>}
    </div>
  );
}
