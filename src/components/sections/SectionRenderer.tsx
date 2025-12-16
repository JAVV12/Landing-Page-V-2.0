// Simplified section renderer without complex type dependencies
import { TopBarSection } from './TopBarSection';
import { HeroVslSection } from './HeroVslSection';
import { ProblemsSection } from './ProblemsSection';
import { PricingSection } from './PricingSection';
import { ContactSection } from './ContactSection';

interface SectionRendererProps {
  section: {
    id: string;
    type: string;
    title?: string;
    content: any;
    enabled: boolean;
    order: number;
  };
}

export const SectionRenderer = ({ section }: SectionRendererProps) => {
  if (!section.enabled) {
    return null;
  }

  const renderSection = () => {
    switch (section.type) {
      case 'topbar':
        return <TopBarSection content={section.content} />;
      case 'hero-vsl':
        return <HeroVslSection content={section.content} title={section.title} />;
      case 'problems':
        return <ProblemsSection content={section.content} title={section.title} />;
      case 'pricing':
        return <PricingSection content={section.content} />;
      case 'contact':
        return <ContactSection content={section.content} />;
      default:
        console.warn(`Unknown section type: ${section.type}`);
        return null;
    }
  };

  return renderSection();
};
