import { type ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

export function Badge({ children, className = '' }: BadgeProps) {
  return (
    <span
      className={[
        'inline-flex items-center gap-2 rounded-full border border-blue-500/20',
        'bg-blue-500/10 px-4 py-1.5 text-xs font-medium tracking-wide text-blue-300',
        'backdrop-blur-sm',
        className,
      ].join(' ')}
    >
      {children}
    </span>
  );
}
