import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Section } from '@/components/ui/Section';

interface HeroVslSectionProps {
  title?: string;
  content: {
    claim: string;
    description: string;
    formation: string;
    cta: {
      text: string;
      href?: string;
    };
    video: {
      placeholder: string;
      embedUrl?: string;
    };
    backgroundImage?: string;
  };
}

export const HeroVslSection = ({ title, content }: HeroVslSectionProps) => {
  const { claim, description, formation, cta, video } = content;

  return (
    <Section
      id="hero"
      background="primary"
      padding="xl"
      className="pt-24 pb-16"
    >
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div className="text-center lg:text-left space-y-6">
          {/* Formation Badge */}
          <Badge variant="primary" size="lg" className="justify-center lg:justify-start">
            {formation}
          </Badge>

          {/* Claim */}
          <div className="space-y-2">
            <p className="text-lg text-text-muted uppercase tracking-wide">
              {claim}
            </p>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-text-primary leading-tight">
            {title}
          </h1>

          {/* Description */}
          <p className="text-xl text-text-secondary leading-relaxed max-w-2xl">
            {description}
          </p>

          {/* CTA */}
          <div className="pt-4">
            <Button
              href={cta.href || '#pricing'}
              variant="primary"
              size="xl"
              className="shadow-2xl"
            >
              {cta.text}
            </Button>
          </div>
        </div>

        {/* Video */}
        <div className="relative">
          <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={video.placeholder}
              alt="Video explicativo del programa"
              className="w-full h-full object-cover"
            />
            {/* Play button overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                className="bg-primary/90 hover:bg-primary text-white rounded-full p-6 shadow-lg transform hover:scale-110 transition-all duration-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/50"
                aria-label="Reproducir video"
              >
                <svg
                  className="w-8 h-8 ml-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};





