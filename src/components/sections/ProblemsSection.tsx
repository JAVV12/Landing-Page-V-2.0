import { Card } from '@/components/ui/Card';
import { Section } from '@/components/ui/Section';

interface ProblemsSectionProps {
  title?: string;
  content: {
    problems: Array<{
      title: string;
      description: string;
      icon?: string;
    }>;
    warning: string;
  };
}

export const ProblemsSection = ({ title, content }: ProblemsSectionProps) => {
  const { problems, warning } = content;

  return (
    <Section background="default" padding="lg">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
          {title}
        </h2>
      </div>

      {/* Problems Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {problems.map((problem, index) => (
          <Card key={index} hover={true} className="text-center">
            {/* Icon placeholder */}
            <div className="w-16 h-16 mx-auto mb-4 bg-error/10 rounded-full flex items-center justify-center">
              <div className="w-8 h-8 bg-error rounded-full"></div>
            </div>

            <h3 className="text-xl font-semibold text-text-primary mb-3">
              {problem.title}
            </h3>

            <p className="text-text-secondary leading-relaxed">
              {problem.description}
            </p>
          </Card>
        ))}
      </div>

      {/* Warning */}
      <div className="bg-error/10 border border-error/20 rounded-lg p-6 text-center">
        <p className="text-error font-semibold text-lg">
          {warning}
        </p>
      </div>
    </Section>
  );
};





