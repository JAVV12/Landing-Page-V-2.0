import { Section } from '@/components/ui/Section';

interface JustificationSectionProps {
  title?: string;
  content: {
    description: string;
  };
}

export const JustificationSection = ({ title, content }: JustificationSectionProps) => {
  const { description } = content;

  return (
    <Section background="default" padding="lg">
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-8">
          {title}
        </h2>

        <p className="text-lg text-text-secondary leading-relaxed">
          {description}
        </p>
      </div>
    </Section>
  );
};





