import { Accordion } from '@/components/ui/Accordion';
import { Section } from '@/components/ui/Section';

interface FaqObjectionsSectionProps {
  title?: string;
  content: {
    objections: Array<{
      question: string;
      answer: string;
    }>;
    faq: Array<{
      question: string;
      answer: string;
    }>;
  };
}

export const FaqObjectionsSection = ({ title, content }: FaqObjectionsSectionProps) => {
  const { objections, faq } = content;

  // Combine objections and FAQ
  const allItems = [
    ...objections.map(obj => ({ title: obj.question, content: obj.answer })),
    ...faq.map(item => ({ title: item.question, content: item.answer }))
  ];

  return (
    <Section background="muted" padding="lg">
      <div className="max-w-4xl mx-auto">
        {title && (
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary">
              {title}
            </h2>
          </div>
        )}

        <Accordion items={allItems} />
      </div>
    </Section>
  );
};





