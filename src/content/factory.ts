import { LandingContent, LandingSection, LandingInputs, LandingSectionType } from './types';
import { contentPresets, ContentPreset } from './presets';
import { CopyMode } from './copyModes';
import { applyPresetHooks } from './presetHooks';
import { validateLandingInputs } from './validators';

// Factory function to create landing page content
export const createLandingContent = (
  inputs: LandingInputs,
  preset: ContentPreset = 'full',
  copyMode: CopyMode = 'default',
  activeHooks: string[] = ['removeEmptyModules', 'removeEmptyBonuses', 'adaptPricingLayout', 'removeEmptyObjections']
): LandingContent => {
  // Get preset configuration
  const presetConfig = contentPresets[preset];

  // Create base sections from inputs
  const baseSections = createSectionsFromInputs(inputs, presetConfig.sections);

  // Apply preset hooks
  let processedSections = applyPresetHooks(
    baseSections,
    inputs,
    activeHooks as any
  );

  // Apply copy mode modifications
  processedSections = applyCopyModeModifications(processedSections, inputs, copyMode);

  // Sort sections by order
  processedSections.sort((a, b) => a.order - b.order);

  // Validate the final content
  const validationErrors = validateLandingInputs(inputs, processedSections);
  if (validationErrors.length > 0) {
    console.warn('Validation errors found:', validationErrors);
    // In production, you might want to throw an error or handle this differently
  }

  return {
    metadata: {
      title: inputs.metadata?.title || 'Landing Page',
      description: inputs.metadata?.description || '',
      keywords: inputs.metadata?.keywords || [],
      ogImage: inputs.metadata?.ogImage
    },
    sections: processedSections
  };
};

// Create sections from inputs based on preset
function createSectionsFromInputs(inputs: LandingInputs, enabledSections: LandingSectionType[]): LandingSection[] {
  const sections: LandingSection[] = [];

  // Define section creation functions
  const sectionCreators = {
    topbar: createTopbarSection,
    header: createHeaderSection,
    'hero-vsl': createHeroVslSection,
    problems: createProblemsSection,
    solution: createSolutionSection,
    justification: createJustificationSection,
    'program-intro': createProgramIntroSection,
    modules: createModulesSection,
    bonuses: createBonusesSection,
    pricing: createPricingSection,
    'guarantee-badges': createGuaranteeBadgesSection,
    'faq-objections': createFaqObjectionsSection,
    contact: createContactSection,
    'final-cta': createFinalCtaSection,
    footer: createFooterSection
  };

  // Create enabled sections
  enabledSections.forEach((sectionType, index) => {
    const creator = sectionCreators[sectionType];
    if (creator) {
      const section = creator(inputs, index);
      if (section) {
        sections.push(section);
      }
    }
  });

  return sections;
}

// Section creation functions
function createTopbarSection(inputs: LandingInputs, order: number): LandingSection | null {
  if (!inputs.topbar) return null;

  return {
    id: 'topbar',
    type: 'topbar',
    content: {
      countdown: inputs.topbar.countdown,
      backgroundColor: inputs.topbar.backgroundColor
    },
    enabled: true,
    order
  };
}

function createHeaderSection(inputs: LandingInputs, order: number): LandingSection | null {
  return {
    id: 'header',
    type: 'header',
    content: {
      logo: inputs.header?.logo,
      navigation: inputs.header?.navigation,
      cta: inputs.header?.cta
    },
    enabled: true,
    order
  };
}

function createHeroVslSection(inputs: LandingInputs, order: number): LandingSection | null {
  if (!inputs.hero) return null;

  return {
    id: 'hero-vsl',
    type: 'hero-vsl',
    title: inputs.hero.title,
    content: {
      claim: inputs.hero.claim,
      description: inputs.hero.description,
      formation: inputs.hero.formation,
      cta: inputs.hero.cta,
      video: inputs.hero.video,
      backgroundImage: inputs.hero.backgroundImage
    },
    enabled: true,
    order
  };
}

function createProblemsSection(inputs: LandingInputs, order: number): LandingSection | null {
  if (!inputs.problems) return null;

  return {
    id: 'problems',
    type: 'problems',
    title: inputs.problems.title,
    content: {
      problems: inputs.problems.items,
      warning: inputs.problems.warning
    },
    enabled: true,
    order
  };
}

function createSolutionSection(inputs: LandingInputs, order: number): LandingSection | null {
  if (!inputs.solution) return null;

  return {
    id: 'solution',
    type: 'solution',
    title: inputs.solution.title,
    subtitle: inputs.solution.subtitle,
    content: {
      description: inputs.solution.description,
      statusPoints: inputs.solution.statusPoints
    },
    enabled: true,
    order
  };
}

function createJustificationSection(inputs: LandingInputs, order: number): LandingSection | null {
  if (!inputs.justification) return null;

  return {
    id: 'justification',
    type: 'justification',
    title: inputs.justification.title,
    content: {
      description: inputs.justification.description
    },
    enabled: true,
    order
  };
}

function createProgramIntroSection(inputs: LandingInputs, order: number): LandingSection | null {
  if (!inputs.programIntro) return null;

  return {
    id: 'program-intro',
    type: 'program-intro',
    title: inputs.programIntro.title,
    content: {
      description: inputs.programIntro.description,
      features: inputs.programIntro.features
    },
    enabled: true,
    order
  };
}

function createModulesSection(inputs: LandingInputs, order: number): LandingSection | null {
  if (!inputs.modules || inputs.modules.length === 0) return null;

  return {
    id: 'modules',
    type: 'modules',
    content: {
      modules: inputs.modules
    },
    enabled: true,
    order
  };
}

function createBonusesSection(inputs: LandingInputs, order: number): LandingSection | null {
  if (!inputs.bonuses || !inputs.bonuses.items || inputs.bonuses.items.length === 0) return null;

  return {
    id: 'bonuses',
    type: 'bonuses',
    content: {
      claim: inputs.bonuses.claim,
      bonuses: inputs.bonuses.items
    },
    enabled: true,
    order
  };
}

function createPricingSection(inputs: LandingInputs, order: number): LandingSection | null {
  if (!inputs.pricing) return null;

  return {
    id: 'pricing',
    type: 'pricing',
    content: {
      originalValue: inputs.pricing.originalValue,
      currentPrice: inputs.pricing.currentPrice,
      paymentType: inputs.pricing.paymentType,
      cta: inputs.pricing.cta,
      plans: inputs.pricing.plans
    },
    enabled: true,
    order
  };
}

function createGuaranteeBadgesSection(inputs: LandingInputs, order: number): LandingSection | null {
  if (!inputs.guaranteeBadges || inputs.guaranteeBadges.length === 0) return null;

  return {
    id: 'guarantee-badges',
    type: 'guarantee-badges',
    content: {
      badges: inputs.guaranteeBadges
    },
    enabled: true,
    order
  };
}

function createFaqObjectionsSection(inputs: LandingInputs, order: number): LandingSection | null {
  if (!inputs.faqObjections ||
      ((!inputs.faqObjections.objections || inputs.faqObjections.objections.length === 0) &&
       (!inputs.faqObjections.faq || inputs.faqObjections.faq.length === 0))) return null;

  return {
    id: 'faq-objections',
    type: 'faq-objections',
    title: inputs.faqObjections.title,
    content: {
      objections: inputs.faqObjections.objections || [],
      faq: inputs.faqObjections.faq || []
    },
    enabled: true,
    order
  };
}

function createContactSection(inputs: LandingInputs, order: number): LandingSection | null {
  if (!inputs.contact) return null;

  return {
    id: 'contact',
    type: 'contact',
    content: {
      email: inputs.contact.email,
      social: inputs.contact.social
    },
    enabled: true,
    order
  };
}

function createFinalCtaSection(inputs: LandingInputs, order: number): LandingSection | null {
  if (!inputs.finalCta) return null;

  return {
    id: 'final-cta',
    type: 'final-cta',
    title: inputs.finalCta.title,
    content: {
      cta: inputs.finalCta.cta
    },
    enabled: true,
    order
  };
}

function createFooterSection(inputs: LandingInputs, order: number): LandingSection | null {
  if (!inputs.footer) return null;

  return {
    id: 'footer',
    type: 'footer',
    content: {
      copyright: inputs.footer.copyright,
      links: inputs.footer.links,
      socialLinks: inputs.footer.socialLinks
    },
    enabled: true,
    order
  };
}

// Apply copy mode modifications
function applyCopyModeModifications(
  sections: LandingSection[],
  inputs: LandingInputs,
  copyMode: CopyMode
): LandingSection[] {
  // For now, return sections as-is. This can be extended with specific copy mode logic
  return sections;
}





