import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Section } from '@/components/ui/Section';

interface PricingSectionProps {
  content: {
    originalValue: string;
    currentPrice: string;
    paymentType: string;
    cta: {
      text: string;
      href?: string;
    };
    plans?: Array<{
      name: string;
      price: string;
      features: string[];
      popular?: boolean;
    }>;
    layout?: 'single-column' | 'multi-column';
    scarcity?: string;
  };
}

export const PricingSection = ({ content }: PricingSectionProps) => {
  const { originalValue, currentPrice, paymentType, cta, plans, layout = 'single-column', scarcity } = content;

  return (
    <Section background="primary" padding="xl" id="pricing">
      <div className="text-center max-w-4xl mx-auto">
        {/* Scarcity message */}
        {scarcity && (
          <div className="bg-error/10 border border-error/20 rounded-lg p-4 mb-8 inline-block">
            <p className="text-error font-bold">
              ⚠️ {scarcity}
            </p>
          </div>
        )}

        {/* Pricing */}
        <div className="space-y-4 mb-8">
          <p className="text-text-muted line-through text-lg">
            {originalValue}
          </p>
          <p className="text-4xl sm:text-6xl font-extrabold text-primary">
            {currentPrice}
          </p>
          <p className="text-xl text-text-secondary">
            {paymentType}
          </p>
        </div>

        {/* CTA */}
        <div className="mb-8">
          <Button
            href={cta.href || '#checkout'}
            variant="primary"
            size="xl"
            className="shadow-2xl transform hover:scale-105"
          >
            {cta.text}
          </Button>
        </div>

        {/* Multiple plans layout */}
        {layout === 'multi-column' && plans && plans.length > 1 && (
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative ${plan.popular ? 'ring-2 ring-primary shadow-xl' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Más Popular
                    </span>
                  </div>
                )}

                <div className="text-center">
                  <h3 className="text-xl font-bold text-text-primary mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-2xl font-bold text-primary mb-4">
                    {plan.price}
                  </p>

                  <ul className="space-y-2 text-left">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-success rounded-full"></div>
                        <span className="text-text-secondary text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </Section>
  );
};





