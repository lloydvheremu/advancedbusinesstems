interface SectionHeaderProps {
  label: string;
  title: string;
  className?: string;
}

export function SectionHeader({ label, title, className = '' }: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${className}`}>
      <span className="text-neon-cyan text-xs font-body font-medium uppercase tracking-[0.15em] block mb-4">
        {label}
      </span>
      <h2 className="font-display text-4xl md:text-5xl font-semibold text-txt-primary tracking-tight">
        {title}
      </h2>
    </div>
  );
}
