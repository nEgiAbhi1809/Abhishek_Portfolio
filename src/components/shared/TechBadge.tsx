import { cn } from '@/lib/utils';

interface TechBadgeProps {
  name: string;
  className?: string;
  onClick?: () => void;
  size?: 'sm' | 'md';
}

export function TechBadge({ name, className, onClick, size = 'sm' }: TechBadgeProps) {
  return (
    <span
      onClick={onClick}
      className={cn(
        'inline-flex items-center rounded-full border border-[var(--color-border-subtle)] bg-[var(--color-bg-tertiary)] font-mono text-[var(--color-text-secondary)] transition-all duration-200',
        size === 'sm' ? 'px-2.5 py-0.5 text-xs' : 'px-3 py-1 text-sm',
        onClick && 'cursor-pointer hover:border-[var(--color-accent)]/50 hover:text-[var(--color-accent)] hover:bg-[var(--color-accent-subtle)]',
        className
      )}
    >
      {name}
    </span>
  );
}
