# Outline Detallado - Landing Page "Las 3 Fórmulas Prohibidas"

## Fase 1 - Análisis y Planificación Completa

### 🎯 Design Tokens Pack

#### Paleta de Colores (Basada en PDF de diseño)
- **Background Colors:**
  - `--color-bg-primary: #0a0a0a` - Negro profundo para autoridad
  - `--color-bg-secondary: #1a1a1a` - Gris oscuro para secciones
  - `--color-bg-surface: #ffffff` - Blanco para cards
  - `--color-bg-muted: #f8f9fa` - Gris claro para fondos suaves

- **Text Colors:**
  - `--color-text-primary: #ffffff` - Blanco para texto principal
  - `--color-text-secondary: #e5e7eb` - Gris claro para texto secundario
  - `--color-text-muted: #9ca3af` - Gris medio para texto muted
  - `--color-text-accent: #3b82f6` - Azul para acentos

- **Brand Colors:**
  - `--color-primary: #2563eb` - Azul principal para CTAs
  - `--color-primary-hover: #1d4ed8` - Azul más oscuro para hover
  - `--color-success: #059669` - Verde para éxito/ganancias
  - `--color-warning: #d97706` - Amarillo para advertencias
  - `--color-error: #dc2626` - Rojo para errores/urgencia

- **Utility Colors:**
  - `--color-border: #374151` - Gris para bordes
  - `--color-border-light: #4b5563` - Gris claro para bordes suaves

#### Espaciado Scale
- `--space-1: 0.25rem` (4px) - Micro espacios
- `--space-2: 0.5rem` (8px) - Pequeños elementos
- `--space-3: 0.75rem` (12px) - Componentes internos
- `--space-4: 1rem` (16px) - Texto y botones
- `--space-6: 1.5rem` (24px) - Secciones pequeñas
- `--space-8: 2rem` (32px) - Componentes grandes
- `--space-10: 2.5rem` (40px) - Secciones medianas
- `--space-12: 3rem` (48px) - Contenedores
- `--space-16: 4rem` (64px) - Secciones grandes
- `--space-20: 5rem` (80px) - Hero sections
- `--space-24: 6rem` (96px) - Separaciones grandes
- `--space-32: 8rem` (128px) - Separaciones extra grandes

#### Border Radius
- `--radius-sm: 0.25rem` (4px) - Elementos pequeños
- `--radius-md: 0.5rem` (8px) - Cards y botones
- `--radius-lg: 0.75rem` (12px) - Contenedores
- `--radius-xl: 1rem` (16px) - Secciones
- `--radius-2xl: 1.5rem` (24px) - Elementos destacados

#### Shadows
- `--shadow-sm` - Sombras sutiles para elementos pequeños
- `--shadow-md` - Sombras medias para cards
- `--shadow-lg` - Sombras grandes para overlays
- `--shadow-xl` - Sombras extra grandes para modales

#### Tipografía
- **Font Family:** Inter (system-ui fallback)
- **Sizes:** xs (12px) to 7xl (72px)
- **Weights:** normal (400), medium (500), semibold (600), bold (700), extrabold (800)

---

## 📋 Outline por Secciones

### 1. TopBarSection
**Objetivo:** Crear urgencia y escasez para aumentar conversión inmediata

**Componentes internos:**
- Countdown timer con animación
- Texto de oferta limitada
- Background rojo/naranja para destacar

**Layout:** Fixed top bar, ancho completo
**Spacing:** py-2 (8px vertical), px-4 (16px horizontal)
**Responsive:**
- Mobile: Texto reducido, countdown pequeño
- Tablet: Texto completo, countdown mediano
- Desktop: Texto completo, countdown grande

**Estados:**
- Hover: Ninguno (fixed element)
- Focus: Outline visible para navegación por teclado
- Active: Ninguno

---

### 2. HeaderSection
**Objetivo:** Navegación básica y branding (si aplica)

**Componentes internos:**
- Logo placeholder (si existe)
- Navigation menu (opcional)
- CTA button (opcional)

**Layout:** Flex between, max-width container
**Spacing:** py-4 (16px vertical), px-4 horizontal
**Responsive:** Sticky navigation on scroll

---

### 3. HeroVslSection
**Objetivo:** Capturar atención inmediata con claim principal y CTA

**Componentes internos:**
- Claim principal (H1)
- Título beneficio
- Descripción concisa
- Badge "Formación 100% online"
- CTA button primario
- Video placeholder con overlay

**Layout:**
- Desktop: Grid 2 columnas (texto 60%, video 40%)
- Mobile: Stack vertical
**Spacing:**
- pt-20 pb-16 (hero grande)
- gap-8 entre elementos
- px-4 horizontal

**Responsive:**
- 375px: Stack completo, video primero
- 768px: 2 columnas, video a la derecha
- 1024px: Espaciado aumentado
- 1280px: Max-width container

**Estados:**
- CTA hover: Background darker
- CTA focus: Outline visible
- Video hover: Overlay con play button

---

### 4. ProblemsSection
**Objetivo:** Identificar con el dolor del usuario para crear necesidad

**Componentes internos:**
- Título de sección
- Grid de 4 problemas con iconos
- Warning/advertencia al final

**Layout:** Grid responsive (1 col mobile, 2 col tablet, 4 col desktop)
**Spacing:** py-16, gap-8 entre cards
**Responsive:** Cards con hover lift effect

---

### 5. SolutionSection
**Objetivo:** Presentar la solución y transformación prometida

**Componentes internos:**
- Título "Cómo romper el estancamiento"
- Descripción de la solución
- Lista de 4 puntos de nuevo estatus

**Layout:** Container centrado, max-width texto
**Spacing:** py-16, elementos espaciados
**Responsive:** Texto responsive

---

### 6. JustificationSection
**Objetivo:** Justificar por qué esta es la única vía hacia los millones

**Componentes internos:**
- Título de justificación
- Párrafo explicativo

**Layout:** Container centrado
**Spacing:** py-12
**Responsive:** Texto justificado

---

### 7. ProgramIntroSection
**Objetivo:** Introducir el programa específico

**Componentes internos:**
- Título del programa
- Descripción
- Lista de características principales

**Layout:** Container centrado
**Spacing:** py-16

---

### 8. ModulesSection
**Objetivo:** Detallar los 3 módulos del programa

**Componentes internos:**
- Grid de 3 módulos
- Cada módulo: número, título, subtítulo, descripción, lista de features

**Layout:** Grid 1 col mobile, 3 col desktop
**Spacing:** py-16, gap-8
**Responsive:** Cards con hover effects

---

### 9. BonusesSection
**Objetivo:** Aumentar valor percibido con bonuses

**Componentes internos:**
- Claim de valor
- Grid de 3 bonuses con títulos, descripciones y valores

**Layout:** Container, grid responsive
**Spacing:** py-16
**Responsive:** Cards destacadas

---

### 10. PricingSection
**Objetivo:** Presentar la oferta y cerrar la venta

**Componentes internos:**
- Valor original tachado
- Precio actual destacado
- Tipo de pago
- CTA de compra

**Layout:** Container centrado, destacado
**Spacing:** py-20, padding extra
**Responsive:** Elementos centrados

**Estados:**
- CTA hover: Transform scale
- CTA focus: Outline visible

---

### 11. GuaranteeBadgesSection
**Objetivo:** Reducir objeciones con garantías

**Componentes internos:**
- Grid de badges: "Formación online", "Acceso inmediato", "Garantía 7 días"

**Layout:** Flex wrap, centrado
**Spacing:** py-12, gap-4
**Responsive:** Badges responsive

---

### 12. FaqObjectionsSection
**Objetivo:** Responder objeciones comunes y dudas

**Componentes internos:**
- Título sección
- Accordion con objeciones y respuestas
- FAQ adicional

**Layout:** Container, max-width
**Spacing:** py-16
**Responsive:** Accordion mobile-friendly

**Estados:**
- Accordion hover: Background change
- Accordion open: Icon rotate
- Focus: Outline visible

---

### 13. ContactSection
**Objetivo:** Proporcionar formas de contacto

**Componentes internos:**
- Email link
- Social media link (Instagram)

**Layout:** Container centrado
**Spacing:** py-12

---

### 14. FinalCtaSection
**Objetivo:** Último push para conversión

**Componentes internos:**
- Título final motivacional
- CTA button grande

**Layout:** Container centrado, destacado
**Spacing:** py-20

---

### 15. FooterSection
**Objetivo:** Información legal y navegación final

**Componentes internos:**
- Copyright
- Links legales
- Enlaces sociales

**Layout:** Container, flex between
**Spacing:** py-8

---

## 🌳 Árbol de Componentes

```
LandingPage
├── TopBarSection
│   └── CountdownTimer
├── HeaderSection
│   ├── Logo
│   ├── Navigation
│   └── Button (CTA)
├── HeroVslSection
│   ├── Claim
│   ├── Title
│   ├── Description
│   ├── Badge
│   ├── Button (CTA)
│   └── VideoPlaceholder
├── ProblemsSection
│   ├── SectionTitle
│   └── ProblemCard[] (4 items)
│       ├── Icon
│       ├── Title
│       └── Description
├── SolutionSection
│   ├── Title
│   ├── Subtitle
│   ├── Description
│   └── StatusPoint[] (4 items)
├── JustificationSection
│   ├── Title
│   └── Description
├── ProgramIntroSection
│   ├── Title
│   ├── Description
│   └── Feature[] (3 items)
├── ModulesSection
│   └── ModuleCard[] (3 items)
│       ├── ModuleNumber
│       ├── Title
│       ├── Subtitle
│       ├── Description
│       └── FeatureList
├── BonusesSection
│   ├── Claim
│   └── BonusCard[] (3 items)
│       ├── Title
│       ├── Description[]
│       └── Value
├── PricingSection
│   ├── OriginalValue
│   ├── CurrentPrice
│   ├── PaymentType
│   └── Button (CTA)
├── GuaranteeBadgesSection
│   └── Badge[] (3 items)
├── FaqObjectionsSection
│   ├── Title
│   └── Accordion
│       └── AccordionItem[] (objeciones + faq)
├── ContactSection
│   ├── EmailLink
│   └── SocialLink
├── FinalCtaSection
│   ├── Title
│   └── Button (CTA)
└── FooterSection
    ├── Copyright
    ├── LegalLinks
    └── SocialLinks

UI Components (Reutilizables)
├── Container
├── Section
├── Button
├── Card
├── Badge
├── Accordion
├── Icon
└── Typography
```

---

## 📱 Responsive Breakpoints

- **375px (Mobile S):** 1 columna, stack vertical, padding reducido
- **768px (Tablet):** 2 columnas donde aplica, componentes medianos
- **1024px (Desktop S):** Layout completo, espaciado normal
- **1280px (Desktop L):** Max-width containers, espaciado aumentado

## ♿ A11y Features

- Un solo H1 por página (en hero)
- Semántica correcta (main, section, article, etc.)
- Focus visible en todos los elementos interactivos
- Alt text en todas las imágenes
- ARIA labels donde necesario
- Navegación por teclado completa
- Contraste de colores WCAG AA compliant

## 🎯 Próximos Pasos - Fase 2

1. Implementar componentes UI base
2. Crear secciones individuales
3. Integrar arquitectura data-driven
4. Implementar responsive design
5. Añadir A11y features
6. Configurar SEO
7. Testing y optimización





