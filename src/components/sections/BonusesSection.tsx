import { Card } from '@/components/ui/Card';
import { Section } from '@/components/ui/Section';

interface BonusesSectionProps {
  content: {
    claim: string;
    bonuses: Array<{
      title: string;
      description: string[];
      value: string;
    }>;
  };
}

export const BonusesSection = ({ content }: BonusesSectionProps) => {
  const { claim, bonuses } = content;

  return (
    <Section background="secondary" padding="lg">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
          Bonos Exclusivos
        </h2>
        <p className="text-xl text-primary font-semibold">
          {claim}
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {bonuses.map((bonus, index) => (
          <Card key={index} hover={true} className="text-center">
            {/* Icon */}
            <div className="w-16 h-16 mx-auto mb-6 bg-success/10 rounded-full flex items-center justify-center">
              <div className="text-3xl">🎁</div>
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-text-primary mb-4">
              {bonus.title}
            </h3>

            {/* Description */}
            <div className="space-y-2 mb-6">
              {bonus.description.map((desc, descIndex) => (
                <p key={descIndex} className="text-text-secondary text-sm leading-relaxed">
                  {desc}
                </p>
              ))}
            </div>

            {/* Value */}
            <div className="bg-success/10 border border-success/20 rounded-lg p-3">
              <p className="text-success font-bold">
                {bonus.value}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};





