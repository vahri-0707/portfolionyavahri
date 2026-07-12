"use client";

import { useEffect, useState } from "react";

// Indonesia Western Time = Asia/Jakarta (UTC+7)
const TZ = "Asia/Jakarta";

function getNow() {
  const now = new Date();
  const time = now.toLocaleTimeString("en-GB", {
    timeZone: TZ,
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
  const month = now.toLocaleDateString("en-US", {
    timeZone: TZ,
    month: "short",
  }).toUpperCase();
  const day = now.toLocaleDateString("en-US", {
    timeZone: TZ,
    day: "2-digit",
  });
  return { time, month, day };
}

export function ClockWidget() {
  const [clock, setClock] = useState(getNow);

  useEffect(() => {
    // Sync to the next whole minute, then tick every 60s
    const tick = () => setClock(getNow());
    const msToNextMinute = (60 - new Date().getSeconds()) * 1000;
    const timeout = setTimeout(() => {
      tick();
      const interval = setInterval(tick, 60_000);
      return () => clearInterval(interval);
    }, msToNextMinute);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="mt-auto flex items-center gap-3">
      <div className="flex flex-1 items-center justify-between h-[56px] bg-[#121212] rounded-[1.25rem] px-5">
        <span className="text-[18px] font-bold text-slate-100 tracking-tight tabular-nums">
          {clock.time}
        </span>
        <span className="text-[11px] text-[#555] font-bold tracking-wide">IND</span>
      </div>
      <div className="flex flex-col items-center justify-center w-[56px] h-[56px] bg-[#121212] rounded-[1.25rem] shrink-0">
        <span className="text-[10px] text-rose-400 font-bold uppercase tracking-widest leading-none mt-0.5">
          {clock.month}
        </span>
        <span className="text-[15px] font-bold text-slate-100 leading-none mt-1">
          {clock.day}
        </span>
      </div>
    </div>
  );
}
