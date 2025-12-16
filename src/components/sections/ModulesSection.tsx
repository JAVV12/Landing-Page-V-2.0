import { Card } from '@/components/ui/Card';
import { Section } from '@/components/ui/Section';

interface ModulesSectionProps {
  content: {
    modules: Array<{
      number: number;
      title: string;
      subtitle: string;
      description: string;
      features: string[];
      workbook?: string;
    }>;
  };
}

export const ModulesSection = ({ content }: ModulesSectionProps) => {
  const { modules } = content;

  return (
    <Section background="default" padding="lg">
      <div className="space-y-16">
        {modules.map((module, index) => (
          <div
            key={module.number}
            className={`grid lg:grid-cols-2 gap-12 items-center ${
              index % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}
          >
            {/* Content */}
            <div className="space-y-6">
              {/* Module Number */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {module.number}
                </div>
                <div className="h-px bg-border flex-1"></div>
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl font-bold text-text-primary">
                {module.title}
              </h3>

              {/* Subtitle */}
              <p className="text-lg text-primary font-semibold">
                {module.subtitle}
              </p>

              {/* Description */}
              <p className="text-text-secondary leading-relaxed">
                {module.description}
              </p>

              {/* Features */}
              <ul className="space-y-3">
                {module.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-text-secondary">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Workbook */}
              {module.workbook && (
                <div className="bg-bg-secondary rounded-lg p-4 border border-border">
                  <p className="text-primary font-semibold">
                    📚 {module.workbook}
                  </p>
                </div>
              )}
            </div>

            {/* Visual */}
            <div className="relative">
              <Card className="aspect-square flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-4xl font-bold text-primary">
                      {module.number}
                    </span>
                  </div>
                  <p className="text-text-muted">Módulo {module.number}</p>
                </div>
              </Card>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};





