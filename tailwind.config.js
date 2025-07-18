module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Helvetica Neue',
          'Helvetica',
          'Arial',
          'sans-serif',
        ],
        serif: [
          'serif',
        ],
      },
    },
  },
  content: [
    './app.vue',
    './pages/**/*.{vue,js,ts}',
    './components/**/*.{vue,js,ts}',
    './sections/**/*.{vue,js,ts}',
    './plugins/**/*.{js,ts}',
  ],
} 