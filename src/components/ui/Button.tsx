import { type ButtonHTMLAttributes, type ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: [
    'bg-gradient-to-r from-blue-500 to-violet-500 text-white',
    'hover:from-blue-400 hover:to-violet-400 hover:shadow-lg hover:shadow-blue-500/30',
    'shadow-md shadow-blue-500/20',
  ].join(' '),
  secondary: [
    'bg-gray-900 text-gray-100 border border-gray-700',
    'hover:border-blue-500/50 hover:bg-gray-800 hover:text-white',
    'hover:shadow-md hover:shadow-blue-500/10',
  ].join(' '),
  ghost: [
    'bg-transparent text-gray-300 border border-gray-700',
    'hover:text-white hover:border-gray-500',
  ].join(' '),
};

export function Button({
  variant = 'primary',
  children,
  className = '',
  onClick,
  type = 'button',
  ...rest
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={[
        'inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3',
        'text-sm font-semibold tracking-wide transition-all duration-300 ease-out',
        'focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:ring-offset-2 focus:ring-offset-base',
        'active:scale-[0.98]',
        variantClasses[variant],
        className,
      ].join(' ')}
      {...rest}
    >
      {children}
    </button>
  );
}
