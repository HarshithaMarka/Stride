/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lexend: ['Lexend', 'sans-serif'],
        'lexend-deca': ['Lexend Deca', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#f0f4ff',
          100: '#dbe4fe',
          200: '#bccffd',
          300: '#8eaffc',
          400: '#5b85f9',
          500: '#3b62f4',
          600: '#2841e8',
          700: '#2334d5',
          800: '#222cad',
          900: '#222987',
        },
        secondary: {
          50: '#f3f7fc',
          100: '#e5eff9',
          200: '#c6dff3',
          300: '#93c5e9',
          400: '#58a6dc',
          500: '#3489cb',
          600: '#266eac',
          700: '#225a8c',
          800: '#214b74',
          900: '#204061',
        },
        accent: {
          50: '#edfdf7',
          100: '#d3f9ed',
          200: '#aaf1dd',
          300: '#72e4ca',
          400: '#39cfb3',
          500: '#19b399',
          600: '#11907d',
          700: '#127365',
          800: '#135b51',
          900: '#134b43',
        },
      },
      animation: {
        'gradient-x': 'gradient-x 5s ease infinite',
        'gradient-y': 'gradient-y 5s ease infinite',
        'gradient-xy': 'gradient-xy 5s ease infinite',
        'blob': 'blob 7s infinite',
        'fadeIn': 'fadeIn 1s ease-in forwards',
      },
      keyframes: {
        'gradient-y': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'center top'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'center center'
          }
        },
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
        'gradient-xy': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
        'blob': {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)'
          },
          '33%': {
            transform: 'translate(30px, -50px) scale(1.1)'
          },
          '66%': {
            transform: 'translate(-20px, 20px) scale(0.9)'
          },
          '100%': {
            transform: 'translate(0px, 0px) scale(1)'
          }
        },
        'fadeIn': {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        }
      }
    },
  },
  plugins: [],
}