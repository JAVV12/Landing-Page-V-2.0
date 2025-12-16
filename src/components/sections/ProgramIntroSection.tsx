import { Section } from '@/components/ui/Section';

interface ProgramIntroSectionProps {
  title?: string;
  content: {
    description: string;
    features: string[];
  };
}

export const ProgramIntroSection = ({ title, content }: ProgramIntroSectionProps) => {
  const { description, features } = content;

  return (
    <Section background="secondary" padding="lg">
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-6">
          {title}
        </h2>

        <p className="text-lg text-text-secondary mb-8 leading-relaxed">
          {description}
        </p>

        <div className="space-y-4">
          {features.map((feature, index) => (
            <p key={index} className="text-xl text-primary font-semibold">
              {feature}
            </p>
          ))}
        </div>
      </div>
    </Section>
  );
};





