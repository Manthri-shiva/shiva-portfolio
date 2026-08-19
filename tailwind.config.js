/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: 'rgb(var(--ink) / <alpha-value>)',
        panel: 'rgb(var(--panel) / <alpha-value>)',
        line: 'rgb(var(--line) / <alpha-value>)',
        mist: 'rgb(var(--mist) / <alpha-value>)',
        fog: 'rgb(var(--fog) / <alpha-value>)',
        paper: 'rgb(var(--paper) / <alpha-value>)',
        signal: 'rgb(var(--signal) / <alpha-value>)',
        violet: '#7C5CFF',
        cyan: '#43E5FF',
        amber: '#FFB86B',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'signal-gradient':
          'linear-gradient(135deg, #7C5CFF 0%, #43E5FF 100%)',
      },
    },
  },
  plugins: [],
}