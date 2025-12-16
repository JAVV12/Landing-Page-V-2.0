import { LandingInputs, LandingSection } from './types';

// Validation rules for landing page content
export const validators = {
  // Validate required fields
  validateRequired: (inputs: LandingInputs): string[] => {
    const errors: string[] = [];

    if (!inputs.metadata?.title) {
      errors.push('Título de metadata es requerido');
    }

    if (!inputs.hero?.title) {
      errors.push('Título del hero es requerido');
    }

    if (!inputs.hero?.cta?.text) {
      errors.push('Texto del CTA principal es requerido');
    }

    if (!inputs.pricing?.currentPrice) {
      errors.push('Precio actual es requerido');
    }

    return errors;
  },

  // Validate content structure
  validateStructure: (inputs: LandingInputs): string[] => {
    const errors: string[] = [];

    // Validate hero section
    if (inputs.hero) {
      if (!inputs.hero.claim && !inputs.hero.title) {
        errors.push('Hero necesita claim o título');
      }
      if (!inputs.hero.description) {
        errors.push('Descripción del hero es requerida');
      }
    }

    // Validate modules
    if (inputs.modules && Array.isArray(inputs.modules)) {
      inputs.modules.forEach((module, index) => {
        if (!module.title) {
          errors.push(`Módulo ${index + 1}: título es requerido`);
        }
        if (!module.description) {
          errors.push(`Módulo ${index + 1}: descripción es requerida`);
        }
      });
    }

    // Validate pricing
    if (inputs.pricing) {
      if (!inputs.pricing.cta?.text) {
        errors.push('CTA de pricing es requerido');
      }
    }

    return errors;
  },

  // Validate URLs
  validateUrls: (inputs: LandingInputs): string[] => {
    const errors: string[] = [];
    const urlRegex = /^https?:\/\/.+/;

    // Validate video placeholder
    if (inputs.hero?.video?.placeholder && !urlRegex.test(inputs.hero.video.placeholder)) {
      errors.push('URL del placeholder del video no es válida');
    }

    // Validate CTA hrefs
    if (inputs.hero?.cta?.href && !inputs.hero.cta.href.startsWith('#') && !urlRegex.test(inputs.hero.cta.href)) {
      errors.push('URL del CTA del hero no es válida');
    }

    if (inputs.pricing?.cta?.href && !inputs.pricing.cta.href.startsWith('#') && !urlRegex.test(inputs.pricing.cta.href)) {
      errors.push('URL del CTA de pricing no es válida');
    }

    // Validate contact links
    if (inputs.contact?.social?.url && !urlRegex.test(inputs.contact.social.url)) {
      errors.push('URL del social media no es válida');
    }

    return errors;
  },

  // Validate content length
  validateLength: (inputs: LandingInputs): string[] => {
    const errors: string[] = [];

    // Title length validation
    if (inputs.hero?.title && inputs.hero.title.length > 150) {
      errors.push('Título del hero es muy largo (máximo 150 caracteres)');
    }

    if (inputs.metadata?.title && inputs.metadata.title.length > 60) {
      errors.push('Título de metadata es muy largo (máximo 60 caracteres)');
    }

    if (inputs.metadata?.description && inputs.metadata.description.length > 160) {
      errors.push('Descripción de metadata es muy larga (máxima 160 caracteres)');
    }

    // Module validation
    if (inputs.modules && Array.isArray(inputs.modules)) {
      inputs.modules.forEach((module, index) => {
        if (module.title && module.title.length > 100) {
          errors.push(`Título del módulo ${index + 1} es muy largo`);
        }
        if (module.features && module.features.length > 10) {
          errors.push(`Módulo ${index + 1} tiene demasiadas características (máximo 10)`);
        }
      });
    }

    return errors;
  },

  // Validate section ordering
  validateSectionOrder: (sections: LandingSection[]): string[] => {
    const errors: string[] = [];

    // Required sections should be present
    const requiredSections = ['hero-vsl', 'pricing'];
    const sectionTypes = sections.map(s => s.type);

    requiredSections.forEach(requiredType => {
      if (!sectionTypes.includes(requiredType as any)) {
        errors.push(`Sección requerida faltante: ${requiredType}`);
      }
    });

    // Logical ordering validation
    const heroIndex = sections.findIndex(s => s.type === 'hero-vsl');
    const pricingIndex = sections.findIndex(s => s.type === 'pricing');

    if (heroIndex > pricingIndex && pricingIndex !== -1) {
      errors.push('La sección de pricing debería aparecer después del hero');
    }

    return errors;
  }
};

// Run all validations
export const validateLandingInputs = (inputs: LandingInputs, sections: LandingSection[]): string[] => {
  const allErrors: string[] = [];

  allErrors.push(...validators.validateRequired(inputs));
  allErrors.push(...validators.validateStructure(inputs));
  allErrors.push(...validators.validateUrls(inputs));
  allErrors.push(...validators.validateLength(inputs));
  allErrors.push(...validators.validateSectionOrder(sections));

  return allErrors;
};

// Validate single section
export const validateSection = (section: LandingSection): string[] => {
  const errors: string[] = [];

  if (!section.id) {
    errors.push(`Sección ${section.type}: ID es requerido`);
  }

  if (!section.type) {
    errors.push('Tipo de sección es requerido');
  }

  if (typeof section.enabled !== 'boolean') {
    errors.push(`Sección ${section.type}: estado enabled debe ser boolean`);
  }

  if (typeof section.order !== 'number') {
    errors.push(`Sección ${section.type}: order debe ser number`);
  }

  return errors;
};





