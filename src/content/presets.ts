import { LandingSection, LandingSectionType } from './types';

// Preset configurations for different landing page variations
export const sectionPresets = {
  default: {
    enabled: true,
    order: 0
  },

  minimal: {
    enabled: false,
    order: 0
  }
};

export const contentPresets = {
  // Default preset with all sections enabled
  full: {
    id: 'full',
    name: 'Landing Completa',
    description: 'Todas las secciones activas',
    sections: [
      'topbar',
      'header',
      'hero-vsl',
      'problems',
      'solution',
      'justification',
      'program-intro',
      'modules',
      'bonuses',
      'pricing',
      'guarantee-badges',
      'faq-objections',
      'contact',
      'final-cta',
      'footer'
    ] as LandingSectionType[]
  },

  // Minimal preset for quick testing
  minimal: {
    id: 'minimal',
    name: 'Landing Mínima',
    description: 'Solo secciones esenciales',
    sections: [
      'hero-vsl',
      'pricing',
      'contact',
      'footer'
    ] as LandingSectionType[]
  },

  // Sales-focused preset
  sales: {
    id: 'sales',
    name: 'Enfoque Ventas',
    description: 'Optimizado para conversión',
    sections: [
      'topbar',
      'hero-vsl',
      'problems',
      'solution',
      'pricing',
      'guarantee-badges',
      'final-cta'
    ] as LandingSectionType[]
  }
};

export type ContentPreset = keyof typeof contentPresets;





