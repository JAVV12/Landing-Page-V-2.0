/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Paleta principal especificada por el usuario
        primary: '#c81d1a',     // Rojo para botones (especificado)
        secondary: '#ffffff',   // Blanco secundario (especificado)
        dark: '#000000',        // Negro primario (especificado)

        // Escala de grises basada en negro y blanco
        gray: {
          50: '#fafafa',    // Casi blanco
          100: '#f5f5f5',   // Blanco sucio
          200: '#e5e5e5',   // Gris muy claro
          300: '#d4d4d4',   // Gris claro
          400: '#a3a3a3',   // Gris medio-claro
          500: '#737373',   // Gris medio
          600: '#525252',   // Gris medio-oscuro
          700: '#404040',   // Gris oscuro
          800: '#262626',   // Gris muy oscuro
          900: '#171717',   // Casi negro
        },

        // Colores de acento complementarios
        accent: {
          light: '#ff4d4d',   // Rojo más claro para hover
          dark: '#a01715',    // Rojo más oscuro
          glow: 'rgba(200, 29, 26, 0.6)', // Efecto glow rojo
        },

        // Fondos basados en la paleta principal
        bg: {
          primary: '#000000',      // Negro principal
          secondary: '#ffffff',    // Blanco
          accent: '#c81d1a',       // Rojo vibrante
          muted: '#f5f5f5',        // Gris muy claro
          dark: '#171717',         // Gris casi negro
          light: '#fafafa',        // Blanco casi puro
        },

        // Texto con alto contraste
        text: {
          primary: '#ffffff',      // Blanco sobre negro
          secondary: '#e5e5e5',    // Gris claro sobre negro
          muted: '#a3a3a3',        // Gris medio
          accent: '#c81d1a',       // Rojo para destacar
          dark: '#000000',         // Negro sobre blanco
          light: '#404040',        // Gris oscuro sobre blanco
        },

        // Estados interactivos
        hover: {
          primary: '#a01715',      // Rojo más oscuro
          secondary: '#f5f5f5',    // Blanco más gris
          accent: '#ff4d4d',       // Rojo más claro
        },

        // Efectos de sombra
        shadow: {
          primary: 'rgba(200, 29, 26, 0.3)',
          accent: 'rgba(200, 29, 26, 0.5)',
          dark: 'rgba(0, 0, 0, 0.3)',
        },
      },

      // Animaciones dopaminicas
      animation: {
        'pulse-dopamine': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-dopamine': 'bounce 1s infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },

      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(200, 29, 26, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(200, 29, 26, 0.8), 0 0 30px rgba(251, 191, 36, 0.5)' },
        },
      },

      // Sombras dopaminicas
      boxShadow: {
        'dopamine': '0 0 20px rgba(200, 29, 26, 0.3)',
        'dopamine-lg': '0 0 40px rgba(200, 29, 26, 0.5), 0 0 60px rgba(251, 191, 36, 0.3)',
        'energy': '0 0 15px rgba(251, 191, 36, 0.4)',
      },

      // Gradientes dopaminicos
      backgroundImage: {
        'gradient-dopamine': 'linear-gradient(135deg, #c81d1a 0%, #fbbf24 100%)',
        'gradient-energy': 'linear-gradient(135deg, #f97316 0%, #ec4899 100%)',
        'gradient-royal': 'linear-gradient(135deg, #a855f7 0%, #3b82f6 100%)',
      },
    },
  },
  plugins: [],
}
