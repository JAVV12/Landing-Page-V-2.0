import { Section } from '@/components/ui/Section';

interface SolutionSectionProps {
  title?: string;
  subtitle?: string;
  content: {
    description: string;
    statusPoints: string[];
  };
}

export const SolutionSection = ({ title, subtitle, content }: SolutionSectionProps) => {
  const { description, statusPoints } = content;

  return (
    <Section background="muted" padding="lg">
      <div className="text-center max-w-4xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
          {title}
        </h2>

        {/* Subtitle */}
        {subtitle && (
          <p className="text-xl text-primary font-semibold mb-6">
            {subtitle}
          </p>
        )}

        {/* Description */}
        <p className="text-lg text-text-secondary mb-12 leading-relaxed">
          {description}
        </p>

        {/* Status Points */}
        <div className="space-y-6">
          {statusPoints.map((point, index) => (
            <div
              key={index}
              className="bg-bg-surface rounded-lg p-6 shadow-md border border-border"
            >
              <p className="text-lg text-text-primary font-medium">
                {point}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};





