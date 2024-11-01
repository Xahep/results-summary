/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Labels de la derecha
        'light-red': 'hsl(0, 100%, 67%)',
        'orangey-yellow': 'hsl(39, 100%, 56%)',
        'green-teal': 'hsl(166, 100%, 37%)',
        'cobalt-blue': 'hsl(234, 85%, 45%)',
        // Fondo (degradado)
        'slate-blue': 'hsl(252, 100%, 67%)',
        'royal-blue': 'hsl(241, 81%, 54%)',
        // Circulo (degradado)
        'violet-blue': 'hsl(256, 72%, 46%, 1)',
        'persian-blue': 'hsl(241, 72%, 46%, 0)',
        // Texto (definir por el camino...)
        'white': 'hsl(0, 0%, 100%)',
        // Fondo?
        'pale-blue': 'hsl(221, 100%, 96%)',
        'light-lavender': 'hsl(241, 100%, 89%)',
        // Botones y números
        'gray-blue': 'hsl(224, 30%, 27%)',
      },
      fontFamily: {
        hanken: ['Hanken Grotesk', 'sans-serif'],
      },
    },
  },
plugins: [],
}

