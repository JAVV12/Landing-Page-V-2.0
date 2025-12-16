import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { Container } from './Container';

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  containerSize?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  background?: 'default' | 'muted' | 'primary' | 'secondary';
  padding?: 'sm' | 'md' | 'lg' | 'xl';
  as?: 'section' | 'div' | 'main' | 'article' | 'aside' | 'footer' | 'header';
}

export const Section = ({
  children,
  id,
  className,
  containerSize = 'lg',
  background = 'default',
  padding = 'lg',
  as: Component = 'section'
}: SectionProps) => {
  const backgroundClasses = {
    default: 'bg-bg-primary',
    muted: 'bg-bg-muted',
    primary: 'bg-bg-secondary',
    secondary: 'bg-bg-surface'
  };

  const paddingClasses = {
    sm: 'py-8',
    md: 'py-12',
    lg: 'py-16',
    xl: 'py-20'
  };

  return (
    <Component
      id={id}
      className={cn(
        backgroundClasses[background],
        paddingClasses[padding],
        className
      )}
    >
      <Container size={containerSize}>
        {children}
      </Container>
    </Component>
  );
};
