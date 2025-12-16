// Copy modes for different audience segments or testing variations

export const copyModes = {
  default: {
    id: 'default',
    name: 'Copy Original',
    description: 'Contenido original del cliente'
  },

  urgent: {
    id: 'urgent',
    name: 'Modo Urgente',
    description: 'Enfatiza la urgencia y escasez'
  },

  benefit: {
    id: 'benefit',
    name: 'Enfoque Beneficios',
    description: 'Enfatiza los beneficios en lugar de problemas'
  },

  testimonial: {
    id: 'testimonial',
    name: 'Con Pruebas Sociales',
    description: 'Incluye más elementos de prueba social'
  }
};

export type CopyMode = keyof typeof copyModes;





