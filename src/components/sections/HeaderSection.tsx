import { Button } from '@/components/ui/Button';

interface HeaderSectionProps {
  content: {
    logo?: {
      src: string;
      alt: string;
    };
    navigation?: Array<{
      label: string;
      href: string;
      external?: boolean;
    }>;
    cta?: {
      text: string;
      href?: string;
      variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    };
  };
}

export const HeaderSection = ({ content }: HeaderSectionProps) => {
  const { logo, navigation, cta } = content;

  return (
    <header className="sticky top-0 z-40 bg-bg-primary/95 backdrop-blur-sm border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            {logo ? (
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-8 w-auto"
              />
            ) : (
              <div className="text-xl font-bold text-text-primary">
                Logo
              </div>
            )}
          </div>

          {/* Navigation */}
          {navigation && navigation.length > 0 && (
            <nav className="hidden md:flex space-x-8">
              {navigation.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  className="text-text-secondary hover:text-primary transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          )}

          {/* CTA */}
          {cta && (
            <div className="flex-shrink-0">
              <Button
                href={cta.href}
                variant={cta.variant || 'primary'}
                size="sm"
              >
                {cta.text}
              </Button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};





