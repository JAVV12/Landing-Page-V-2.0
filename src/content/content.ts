import { LandingContent } from './types';
import { landingInputs } from './inputs.landing';
import { createLandingContent } from './factory';

// Main content factory function
export const contentFactory = (
  customInputs?: Partial<typeof landingInputs>,
  preset?: 'full' | 'minimal' | 'sales',
  copyMode?: 'default' | 'urgent' | 'benefit' | 'testimonial'
): LandingContent => {
  // Merge custom inputs with default inputs
  const mergedInputs = {
    ...landingInputs,
    ...customInputs
  };

  // Create content using factory
  return createLandingContent(
    mergedInputs,
    preset || 'full',
    copyMode || 'default'
  );
};

// Export default content
export const landingContent = contentFactory();

// Export types and utilities
export * from './types';
export * from './presets';
export * from './copyModes';
export * from './factory';





