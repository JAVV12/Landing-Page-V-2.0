import { Badge } from '@/components/ui/Badge';
import { Section } from '@/components/ui/Section';

interface GuaranteeBadgesSectionProps {
  content: {
    badges: string[];
  };
}

export const GuaranteeBadgesSection = ({ content }: GuaranteeBadgesSectionProps) => {
  const { badges } = content;

  return (
    <Section background="default" padding="md">
      <div className="flex flex-wrap justify-center gap-4">
        {badges.map((badge, index) => (
          <Badge key={index} variant="primary" size="lg">
            {badge}
          </Badge>
        ))}
      </div>
    </Section>
  );
};





