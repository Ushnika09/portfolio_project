/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        slideIn: 'slideIn 1s ease-out',
    },
    keyframes: {
        slideIn: {
            '0%': { transform: 'translateY(-50px)', opacity: 0 },
            '100%': { transform: 'translateY(0)', opacity: 1 },
        },
    },
    },
  },
  plugins: [],
}


        

