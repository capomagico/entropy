/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"JetBrains Mono"', 'monospace'],
        display: ['"Helvetica Neue"', 'Arial', 'sans-serif'],
      },
      colors: {
        'entropy-void': '#050505',
        'entropy-glass': '#1a1a1a',
        'entropy-border': '#333333',
        'entropy-acid': '#ccff00',
        'entropy-beam': '#00ffff',
      },
      borderRadius: {
        DEFAULT: '0px',
        none: '0px',
        sm: '0px',
        md: '0px',
        lg: '0px',
        xl: '0px',
        '2xl': '0px',
        full: '0px',
      },
    },
  },
  plugins: [],
}
