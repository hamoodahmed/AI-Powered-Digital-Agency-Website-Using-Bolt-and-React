import { type ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hoverGlow?: boolean;
}

export function Card({ children, className = '', hoverGlow = true }: CardProps) {
  return (
    <div
      className={[
        'rounded-2xl border border-gray-800 bg-gray-900/60 backdrop-blur-sm',
        'transition-all duration-300 ease-out',
        hoverGlow
          ? 'hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1'
          : '',
        className,
      ].join(' ')}
    >
      {children}
    </div>
  );
}
