import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  padding?: 'sm' | 'md' | 'lg' | 'none';
  shadow?: 'sm' | 'md' | 'lg' | 'xl' | 'none';
  border?: boolean;
  background?: 'surface' | 'secondary' | 'primary';
}

export const Card = ({
  children,
  className,
  hover = false,
  padding = 'md',
  shadow = 'md',
  border = true,
  background = 'surface'
}: CardProps) => {
  const backgroundClasses = {
    surface: 'bg-bg-surface',
    secondary: 'bg-bg-secondary',
    primary: 'bg-bg-primary'
  };

  const paddingClasses = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  };

  const shadowClasses = {
    none: '',
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl'
  };

  return (
    <div
      className={cn(
        'rounded-lg transition-all duration-300',
        backgroundClasses[background],
        paddingClasses[padding],
        shadowClasses[shadow],
        border && 'border border-border',
        hover && 'hover:shadow-xl hover:-translate-y-1 cursor-pointer',
        className
      )}
    >
      {children}
    </div>
  );
};





