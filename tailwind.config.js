/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        customPurple: '#3D146D', // Name it as you wish
        navNames:"#270B45",
        courses:"#F8EAC3"
      },
      keyframes: {
        slideFadeIn: {
          '0%': { opacity: 0, transform: 'translateY(-20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        slideFadeIn: 'slideFadeIn 1s ease-out',
      },
      screens:{
        "xs":"375px"
      }
    },
  },
  plugins: [],
}
