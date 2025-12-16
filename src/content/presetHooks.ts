import { LandingSection, LandingInputs } from './types';

// Preset hooks that dynamically modify sections based on content
export const presetHooks = {
  // Remove modules section if no modules are provided
  removeEmptyModules: (sections: LandingSection[], inputs: LandingInputs): LandingSection[] => {
    if (!inputs.modules || inputs.modules.length === 0) {
      return sections.filter(section => section.type !== 'modules');
    }
    return sections;
  },

  // Remove bonuses section if no bonuses are provided
  removeEmptyBonuses: (sections: LandingSection[], inputs: LandingInputs): LandingSection[] => {
    if (!inputs.bonuses || !inputs.bonuses.items || inputs.bonuses.items.length === 0) {
      return sections.filter(section => section.type !== 'bonuses');
    }
    return sections;
  },

  // Adapt pricing section based on number of plans
  adaptPricingLayout: (sections: LandingSection[], inputs: LandingInputs): LandingSection[] => {
    const pricingSection = sections.find(section => section.type === 'pricing');
    if (pricingSection && inputs.pricing) {
      // If there are multiple plans, modify the layout
      if (inputs.pricing.plans && inputs.pricing.plans.length > 1) {
        pricingSection.content = {
          ...pricingSection.content,
          layout: 'multi-column'
        };
      } else {
        pricingSection.content = {
          ...pricingSection.content,
          layout: 'single-column'
        };
      }
    }
    return sections;
  },

  // Remove FAQ objections section if no objections are provided
  removeEmptyObjections: (sections: LandingSection[], inputs: LandingInputs): LandingSection[] => {
    if (!inputs.faqObjections ||
        (!inputs.faqObjections.objections || inputs.faqObjections.objections.length === 0) &&
        (!inputs.faqObjections.faq || inputs.faqObjections.faq.length === 0)) {
      return sections.filter(section => section.type !== 'faq-objections');
    }
    return sections;
  },

  // Insert stats/metrics section if stats are provided
  insertStatsSection: (sections: LandingSection[], inputs: LandingInputs): LandingSection[] => {
    if (inputs.stats && inputs.stats.length > 0) {
      const statsSection: LandingSection = {
        id: 'stats',
        type: 'stats' as any,
        title: 'Resultados Comprobados',
        content: {
          stats: inputs.stats
        },
        enabled: true,
        order: 4 // After hero, before problems
      };

      // Insert after hero section
      const heroIndex = sections.findIndex(section => section.type === 'hero-vsl');
      if (heroIndex !== -1) {
        sections.splice(heroIndex + 1, 0, statsSection);
      }
    }
    return sections;
  },

  // Apply urgency mode modifications
  applyUrgencyMode: (sections: LandingSection[], inputs: LandingInputs): LandingSection[] => {
    // Enhance countdown visibility
    const topbarSection = sections.find(section => section.type === 'topbar');
    if (topbarSection) {
      topbarSection.content = {
        ...topbarSection.content,
        urgent: true,
        backgroundColor: '#dc2626' // Red background for urgency
      };
    }

    // Add scarcity elements to pricing
    const pricingSection = sections.find(section => section.type === 'pricing');
    if (pricingSection) {
      pricingSection.content = {
        ...pricingSection.content,
        scarcity: '¡Últimas horas para este precio!'
      };
    }

    return sections;
  },

  // Apply benefit-focused modifications
  applyBenefitMode: (sections: LandingSection[], inputs: LandingInputs): LandingSection[] => {
    // Reduce problem section emphasis
    const problemsSection = sections.find(section => section.type === 'problems');
    if (problemsSection) {
      problemsSection.content = {
        ...problemsSection.content,
        minimized: true
      };
    }

    // Enhance solution and benefits sections
    const solutionSection = sections.find(section => section.type === 'solution');
    if (solutionSection) {
      solutionSection.content = {
        ...solutionSection.content,
        emphasized: true
      };
    }

    return sections;
  }
};

// Apply all preset hooks in sequence
export const applyPresetHooks = (
  sections: LandingSection[],
  inputs: LandingInputs,
  activeHooks: (keyof typeof presetHooks)[] = ['removeEmptyModules', 'removeEmptyBonuses', 'adaptPricingLayout', 'removeEmptyObjections']
): LandingSection[] => {
  let processedSections = [...sections];

  activeHooks.forEach(hookName => {
    const hook = presetHooks[hookName];
    if (hook) {
      processedSections = hook(processedSections, inputs);
    }
  });

  return processedSections;
};





