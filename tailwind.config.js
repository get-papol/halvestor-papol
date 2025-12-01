/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Keep your existing scales but set the brand to Halvestor
        primary: {
          DEFAULT: '#3b84f6', // Halvestor main (was Blue)
          50: '#F0F6FF',
          100: '#DCEEFF',
          200: '#BBDFFF',
          300: '#8FC7FF',
          400: '#64AFFF',
          500: '#3b84f6',
          600: '#2f6ed5',
          700: '#2459b4',
          800: '#1b4293',
          900: '#133071',
        },
        // Secondary darker tone for accents
        secondary: {
          DEFAULT: '#1172af', // Halvestor secondary
          50: '#E8F5FB',
          100: '#D6EEF8',
          200: '#BDE0F1',
          300: '#8FC3E6',
          400: '#58A1D8',
          500: '#1172af',
          600: '#0e5f96',
          700: '#0b4b77',
          800: '#083757',
          900: '#05263b',
        },
        // Accent kept as before (you can change if needed)
        accent: {
          DEFAULT: '#10B981',
          50: '#ECFDF5',
          100: '#D1FAE5',
          200: '#A7F3D0',
          300: '#6EE7B7',
          400: '#34D399',
          500: '#10B981',
          600: '#059669',
          700: '#047857',
          800: '#065F46',
          900: '#064E3B',
        },

        // matt surface background color
        matt: '#e1dfdb',
      },

      // optional semantic aliases for easier class usage
      backgroundColor: (theme) => ({
        ...theme('colors'),
        'matt-surface': '#e1dfdb',
      }),

      // shadows for the matt look
      boxShadow: {
        'matt-lg': '0 8px 20px rgba(19,24,28,0.08)',
        'matt-inner': 'inset 0 1px 0 rgba(255,255,255,0.6)',
      },

      fontFamily: {
        sans: ['Inter', 'Arial', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
