"use client";

import { useMemo } from "react";

const WEEKDAY_OPEN_HOUR = 9;
const WEEKDAY_CLOSE_HOUR = 19;
const SATURDAY_OPEN_HOUR = 9;
const SATURDAY_CLOSE_HOUR = 13;

function getStatus(now: Date) {
  const day = now.getDay();
  const hour = now.getHours();

  if (day === 0) {
    return { open: false, label: "Chiuso oggi" };
  }

  if (day >= 1 && day <= 5) {
    const isOpen = hour >= WEEKDAY_OPEN_HOUR && hour < WEEKDAY_CLOSE_HOUR;
    return {
      open: isOpen,
      label: isOpen ? "Aperto ora" : `Chiude alle ${WEEKDAY_CLOSE_HOUR}:00`,
    };
  }

  const isOpen = hour >= SATURDAY_OPEN_HOUR && hour < SATURDAY_CLOSE_HOUR;
  return {
    open: isOpen,
    label: isOpen ? "Aperto ora" : `Chiude alle ${SATURDAY_CLOSE_HOUR}:00`,
  };
}

export default function BusinessStatus() {
  const status = useMemo(() => getStatus(new Date()), []);

  return (
    <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm text-slate-700">
      <span
        className={`h-2.5 w-2.5 rounded-full ${status.open ? "bg-emerald-500" : "bg-rose-500"}`}
        aria-hidden="true"
      />
      <span>{status.label}</span>
    </div>
  );
}
