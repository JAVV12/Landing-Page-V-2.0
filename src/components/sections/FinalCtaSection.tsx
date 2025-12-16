import { Button } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';

interface FinalCtaSectionProps {
  title?: string;
  content: {
    cta: {
      text: string;
      href?: string;
    };
  };
}

export const FinalCtaSection = ({ title, content }: FinalCtaSectionProps) => {
  const { cta } = content;

  return (
    <Section background="primary" padding="xl">
      <div className="text-center max-w-4xl mx-auto">
        {title && (
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-8">
            {title}
          </h2>
        )}

        <Button
          href={cta.href || '#pricing'}
          variant="primary"
          size="xl"
          className="shadow-2xl transform hover:scale-105"
        >
          {cta.text}
        </Button>
      </div>
    </Section>
  );
};





