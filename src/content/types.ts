// Types for Landing Page Content Structure

export interface LandingSection {
  id: string;
  type: LandingSectionType;
  title?: string;
  subtitle?: string;
  content: any; // Section-specific content
  enabled: boolean;
  order: number;
}

export type LandingSectionType =
  | 'topbar'
  | 'header'
  | 'hero-vsl'
  | 'problems'
  | 'solution'
  | 'justification'
  | 'program-intro'
  | 'modules'
  | 'bonuses'
  | 'pricing'
  | 'guarantee-badges'
  | 'faq-objections'
  | 'contact'
  | 'final-cta'
  | 'footer';

export interface TopbarSection {
  countdown: string;
  backgroundColor?: string;
}

export interface HeaderSection {
  logo?: {
    src: string;
    alt: string;
  };
  navigation?: NavigationItem[];
  cta?: ButtonProps;
}

export interface NavigationItem {
  label: string;
  href: string;
  external?: boolean;
}

export interface HeroVslSection {
  claim: string;
  title: string;
  description: string;
  formation: string;
  cta: ButtonProps;
  video: {
    placeholder: string;
    embedUrl?: string;
  };
  backgroundImage?: string;
}

export interface ProblemsSection {
  title: string;
  problems: ProblemItem[];
  warning: string;
}

export interface ProblemItem {
  title: string;
  description: string;
  icon?: string;
}

export interface SolutionSection {
  title: string;
  subtitle: string;
  description: string;
  statusPoints: string[];
}

export interface JustificationSection {
  title: string;
  description: string;
}

export interface ProgramIntroSection {
  title: string;
  description: string;
  features: string[];
}

export interface ModulesSection {
  modules: Module[];
}

export interface Module {
  number: number;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  workbook?: string;
}

export interface BonusesSection {
  claim: string;
  bonuses: Bonus[];
}

export interface Bonus {
  title: string;
  description: string[];
  value: string;
}

export interface PricingSection {
  originalValue: string;
  currentPrice: string;
  paymentType: string;
  cta: ButtonProps;
  plans?: PricingPlan[]; // For multiple plans
}

export interface PricingPlan {
  name: string;
  price: string;
  features: string[];
  popular?: boolean;
}

export interface GuaranteeBadgesSection {
  badges: string[];
}

export interface FaqObjectionsSection {
  title: string;
  objections: Objection[];
  faq: FaqItem[];
}

export interface Objection {
  question: string;
  answer: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ContactSection {
  title?: string;
  email: {
    address: string;
    label: string;
  };
  social: {
    platform: string;
    handle: string;
    url: string;
  };
}

export interface FinalCtaSection {
  title: string;
  cta: ButtonProps;
}

export interface FooterSection {
  copyright: string;
  links?: NavigationItem[];
  socialLinks?: SocialLink[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon?: string;
}

export interface ButtonProps {
  text: string;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  external?: boolean;
  onClick?: string; // For tracking/analytics
}

export interface LandingContent {
  metadata: {
    title: string;
    description: string;
    keywords?: string[];
    ogImage?: string;
  };
  sections: LandingSection[];
}

export interface LandingInputs {
  // Raw content inputs that will be processed into LandingContent
  [key: string]: any;
}





