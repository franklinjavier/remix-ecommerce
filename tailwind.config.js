/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/line-clamp')],
  future: {
    unstable_tailwind: true,
  },
}
