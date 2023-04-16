/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors : {
        primary : '#4F4F4F',
        skyblue : '#2F80ED',
        lightBrown : '#828282',
        cream : '#E0E0E0',
        screen : '#262626'
      },
      fontFamily : {
        'lato' : 'Lato'
      },
      animation : {
        'slide-top' : 'slide-top .5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;',
        'slide-right' : 'slide-right .2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;',
        'slide-left' : 'slide-left .2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;',
        'slide-corner' : 'corner-up 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;',
        'fading' : 'fading .7s cubic-bezier(0.390, 0.575, 0.565, 1.000) 1s both;'
      },
      keyframes : {
        'corner-up' : {
          '0%' : {transform: 'scale(0)', 'transform-origin': '100% 100%'},
          '100%' : { transform: 'scale(1)', 'transform-origin': '100% 100%'}
        },
        'slide-top' : {
          '0%' : {transform:' translateY(50px)', opacity: 0},
          '100%' : {transform: 'translateY(0)', opacity: 1}
        },
        'slide-right' : {
          '0%' : {transform:' translateX(-50px)', opacity: 0},
          '100%' : {transform: 'translateY(0)', opacity: 1}
        },
        'slide-left' : {
          '0%' : {transform:' translateX(50px)', opacity: 0},
          '100%' : {transform: 'translateY(0)', opacity: 1}
        },
        'fading' : {
          '0%' : { opacity: 1},
          '100%' : { opacity: 0}
        }
      }

    },
  },
  plugins: [],
}
