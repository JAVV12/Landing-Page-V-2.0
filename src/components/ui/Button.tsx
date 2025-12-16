import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  href?: string;
  external?: boolean;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  'aria-label'?: string;
}

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  external = false,
  onClick,
  className,
  disabled = false,
  type = 'button',
  'aria-label': ariaLabel,
  ...props
}: ButtonProps) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';

  const variantClasses = {
    primary: 'bg-primary text-white hover:bg-primary-hover shadow-md hover:shadow-lg transform hover:-translate-y-0.5',
    secondary: 'bg-bg-surface text-text-primary border border-border hover:bg-bg-secondary',
    outline: 'border border-primary text-primary hover:bg-primary hover:text-white',
    ghost: 'text-text-primary hover:bg-bg-secondary hover:text-text-secondary'
  };

  const sizeClasses = {
    sm: 'px-3 py-2 text-sm rounded-md',
    md: 'px-4 py-2 sm:px-5 sm:py-3 text-sm sm:text-base rounded-lg',
    lg: 'px-5 py-3 sm:px-6 sm:py-4 text-base sm:text-lg rounded-lg',
    xl: 'px-6 py-4 sm:px-8 sm:py-5 text-lg sm:text-xl md:text-2xl rounded-xl'
  };

  const buttonClasses = cn(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  if (href) {
    return (
      <a
        href={href}
        className={buttonClasses}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        aria-label={ariaLabel}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      {...props}
    >
      {children}
    </button>
  );
};





