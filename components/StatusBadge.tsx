"use client";

import { ProjectStatus } from "@/lib/projects";
import { useT } from "@/context/LanguageContext";

interface StatusBadgeProps {
  status: ProjectStatus;
  className?: string;
}

const statusStyle: Record<
  ProjectStatus,
  { color: string; bg: string; dot: string }
> = {
  active: {
    color: "#34d399",
    bg: "rgba(52, 211, 153, 0.1)",
    dot: "#34d399",
  },
  shipped: {
    color: "#63b3ff",
    bg: "rgba(99, 179, 255, 0.1)",
    dot: "#63b3ff",
  },
  legacy: {
    color: "#f59e0b",
    bg: "rgba(245, 158, 11, 0.1)",
    dot: "#f59e0b",
  },
  paused: {
    color: "#9ca3af",
    bg: "rgba(156, 163, 175, 0.1)",
    dot: "#9ca3af",
  },
  comingSoon: {
    color: "#ff0000",
    bg: "rgba(255, 0, 0, 0.08)",
    dot: "#ff0000",
  },
};

export default function StatusBadge({ status, className = "" }: StatusBadgeProps) {
  const t = useT();
  const style = statusStyle[status];
  const label = t.projectStatus[status];
  return (
    <span
      className={`inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full ${className}`}
      style={{ color: style.color, backgroundColor: style.bg }}
    >
      <span
        className="w-1.5 h-1.5 rounded-full"
        style={{ backgroundColor: style.dot }}
      />
      {label}
    </span>
  );
}
