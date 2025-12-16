# Landing Page - "Las 3 Fórmulas Prohibidas para Liberar tu Flujo de Caja"

Una landing page completa y data-driven construida con Next.js 14+, TypeScript y Tailwind CSS para el curso de finanzas empresariales.

## 🚀 Características

- **Next.js 14+** con App Router
- **TypeScript** para type safety
- **Tailwind CSS** para styling
- **Arquitectura Data-Driven** completamente modular
- **Responsive Design** (375px, 768px, 1024px, 1280px)
- **A11y Compliance** con focus management y semántica correcta
- **SEO Optimizado** con metadata dinámica
- **Componentes Reutilizables** siguiendo atomic design

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── layout.tsx          # Layout principal con metadata SEO
│   ├── page.tsx            # Página principal que renderiza secciones
│   └── globals.css         # Design tokens y estilos globales
├── components/
│   ├── ui/                 # Componentes base reutilizables
│   │   ├── Container.tsx
│   │   ├── Section.tsx
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Badge.tsx
│   │   └── Accordion.tsx
│   └── sections/           # Secciones específicas de la landing
│       ├── SectionRenderer.tsx
│       ├── TopBarSection.tsx
│       ├── HeroVslSection.tsx
│       └── ... (todas las secciones)
├── content/                # Arquitectura data-driven
│   ├── types.ts            # TypeScript interfaces
│   ├── inputs.landing.ts   # Contenido raw de la landing
│   ├── presets.ts          # Configuraciones de preset
│   ├── copyModes.ts        # Modos de copy (urgente, beneficio, etc.)
│   ├── presetHooks.ts      # Lógica condicional
│   ├── validators.ts       # Validación de contenido
│   ├── factory.ts          # Factory para crear contenido
│   └── content.ts          # Punto de entrada principal
└── lib/
    └── utils.ts            # Utilidades (cn function)
```

## 🛠️ Instrucciones de Instalación y Ejecución

### Prerrequisitos
- Node.js 18+
- npm o yarn

### Instalación

1. **Clona o descarga el proyecto**
   ```bash
   # El proyecto ya está configurado en este directorio
   cd LandingPageV2.0
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   ```

3. **Ejecuta el servidor de desarrollo**
   ```bash
   npm run dev
   ```

4. **Abre tu navegador**
   ```
   http://localhost:3000
   ```

## 🎨 Arquitectura Data-Driven

### Modificación del Contenido

Todo el contenido vive en `src/content/inputs.landing.ts`. Para modificar:

1. **Cambiar texto/copy**: Edita `src/content/inputs.landing.ts`
2. **Agregar/quitar secciones**: Modifica los `presets` en `src/content/presets.ts`
3. **Validar cambios**: Los validators en `src/content/validators.ts` verifican la integridad

### Presets Disponibles

- **Full**: Todas las secciones activas (default)
- **Minimal**: Solo hero, pricing y footer
- **Sales**: Optimizado para conversión máxima

### Copy Modes

- **Default**: Copy original
- **Urgent**: Aumenta urgencia y escasez
- **Benefit**: Enfatiza beneficios vs problemas
- **Testimonial**: Incluye más pruebas sociales

## 📱 Responsive Breakpoints

- **375px**: Mobile pequeño (iPhone SE, etc.)
- **768px**: Tablet (iPad, etc.)
- **1024px**: Desktop pequeño
- **1280px**: Desktop grande

## ♿ Accesibilidad (A11y)

- ✅ Un solo H1 por página
- ✅ Navegación por teclado completa
- ✅ Focus visible en todos los elementos interactivos
- ✅ Contraste de colores WCAG AA
- ✅ Semántica HTML correcta
- ✅ Alt text en todas las imágenes
- ✅ ARIA labels donde necesario

## 🚀 Deployment

### Vercel (Recomendado)
```bash
npm run build
# Deploy automáticamente en Vercel
```

### Otros Platforms
```bash
npm run build
npm start
```

## 📊 Scripts Disponibles

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Build de producción
npm run start    # Servidor de producción
npm run lint     # Ejecutar ESLint
```

## 🔧 Personalización

### Cambiar Colores
Edita las variables CSS en `src/app/globals.css`:
```css
:root {
  --color-primary: #your-color;
  --color-bg-primary: #your-bg;
  /* ... */
}
```

### Agregar Nuevas Secciones
1. Crea el componente en `src/components/sections/`
2. Agrega el tipo en `src/content/types.ts`
3. Registra en `SectionRenderer.tsx`
4. Agrega contenido en `inputs.landing.ts`

### Modificar Layout
Los breakpoints están configurados en `tailwind.config.ts` y las clases responsive siguen el patrón de Tailwind.

## 📈 Optimización

- **Performance**: Componentes lazy-loaded cuando sea necesario
- **SEO**: Metadata dinámica y estructura semántica
- **Core Web Vitals**: Optimizado para métricas de Google
- **Bundle Size**: Tree-shaking automático con Next.js

## 🐛 Troubleshooting

### Errores Comunes

1. **Componente no renderiza**: Verifica que esté exportado en `SectionRenderer.tsx`
2. **Estilos no aplican**: Revisa que las clases Tailwind estén incluidas en `tailwind.config.ts`
3. **TypeScript errors**: Asegúrate de que los tipos en `types.ts` coincidan con el contenido

### Debug Mode
Para debugging, puedes modificar `src/content/content.ts` para usar diferentes presets:
```typescript
export const landingContent = contentFactory({}, 'minimal'); // Solo secciones esenciales
```

---

## 📞 Soporte

Esta landing page está construida siguiendo las mejores prácticas de desarrollo web moderno y está lista para producción inmediata.
