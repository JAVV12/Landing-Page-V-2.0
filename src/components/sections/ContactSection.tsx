import { Section } from '@/components/ui/Section';

interface ContactSectionProps {
  content: {
    email: {
      address: string;
      label: string;
    };
    social: {
      platform: string;
      handle: string;
      url: string;
      label: string;
    };
  };
}

export const ContactSection = ({ content }: ContactSectionProps) => {
  const { email, social } = content;

  return (
    <Section background="default" padding="md">
      <div className="text-center">
        <p className="text-text-secondary mb-4">
          ¿Necesitas Ayuda?
        </p>

        <div className="space-y-2">
          <a
            href={`mailto:${email.address}`}
            className="block text-primary hover:text-primary-hover transition-colors font-medium"
          >
            {email.label}
          </a>

          <a
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-primary hover:text-primary-hover transition-colors font-medium"
          >
            {social.label}
          </a>
        </div>
      </div>
    </Section>
  );
};





