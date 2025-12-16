import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ContainerProps {
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  className?: string;
  as?: 'div' | 'section' | 'main' | 'article' | 'aside';
}

export const Container = ({
  children,
  size = 'lg',
  className,
  as: Component = 'div'
}: ContainerProps) => {
  const sizeClasses = {
    sm: 'max-w-2xl',      // 672px
    md: 'max-w-4xl',      // 896px
    lg: 'max-w-6xl',      // 1152px
    xl: 'max-w-7xl',      // 1280px
    full: 'max-w-full'    // 100%
  };

  return (
    <Component
      className={cn(
        'mx-auto px-4 sm:px-6 lg:px-8',
        sizeClasses[size],
        className
      )}
    >
      {children}
    </Component>
  );
};





