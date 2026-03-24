interface TechBadgeProps {
  tech: string;
  prefix?: string;
  className?: string;
}

export default function TechBadge({
  tech,
  className = "",
}: TechBadgeProps) {
  return (
    <span
      className={`inline-block text-xs font-medium px-3 py-1.5 rounded-lg border border-border bg-surface text-muted hover:text-fg hover:border-border-hover transition-colors ${className}`}
    >
      {tech}
    </span>
  );
}
