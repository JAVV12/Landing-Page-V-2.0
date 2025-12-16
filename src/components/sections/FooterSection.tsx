import { Section } from '@/components/ui/Section';

interface FooterSectionProps {
  content: {
    copyright: string;
    links?: Array<{
      label: string;
      href: string;
      external?: boolean;
    }>;
    socialLinks?: Array<{
      platform: string;
      url: string;
      icon?: string;
    }>;
  };
}

export const FooterSection = ({ content }: FooterSectionProps) => {
  const { copyright, links, socialLinks } = content;

  return (
    <Section background="secondary" padding="md" as="footer">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Copyright */}
        <p className="text-text-muted text-sm">
          {copyright}
        </p>

        {/* Links */}
        {links && links.length > 0 && (
          <nav className="flex gap-6">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                className="text-text-muted hover:text-primary transition-colors text-sm"
              >
                {link.label}
              </a>
            ))}
          </nav>
        )}

        {/* Social Links */}
        {socialLinks && socialLinks.length > 0 && (
          <div className="flex gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-primary transition-colors"
                aria-label={social.platform}
              >
                {social.icon || social.platform}
              </a>
            ))}
          </div>
        )}
      </div>
    </Section>
  );
};





