/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Syne', 'sans-serif'],
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: 'var(--primary)',
        'primary-hover': 'var(--primary-hover)',
        muted: 'var(--muted)',
        'muted-dark': 'var(--muted-dark)',
        accent: 'var(--accent)',
        card: 'var(--card)',
        'card-foreground': 'var(--card-foreground)',
        secondary: 'var(--secondary)',
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
      },
      backgroundImage: {
        'main-bg': "url('/img/backgrounds/1920x1080-main-bg.webp')",
      },
    },
  },
  plugins: [],
}
