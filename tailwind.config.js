/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: 'hsl(243, 96%, 9%)',
        secondary : 'hsl(243, 27%, 20%)',
        button: 'hsl(233, 67%, 56%)',
        card: 'hsl(243, 23%, 24%)'
      },
      fonts: {
         DMSans: ['DMSans-Italic']
      }
    },
  },
  plugins: [
    daisyui
  ],
}

