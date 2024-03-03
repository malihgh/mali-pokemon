import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/core/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      }
    },
    screens: {
      phone: { max: '740px' },
      tablet: { max: '1100px', min: '741px' }
    },
    animation: {
      bounce: 'bounce 0.3s 0.5'
    },
    keyframes: {
      bounce: {
        '0%, 100%': {
          transform: 'translateY(-3%)',
          'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1);'
        },

        '50%': {
          transform: 'translateY(0)',
          'animation-timing-function': 'cubic-bezier(0,0,0.2,1);'
        }
      }
    },
    fontFamily: {
      flexo: ['flexo', 'sans-serif'],
      flexoBold: ['flexo-bold', 'sans-serif']
    }
  },
  plugins: []
};
export default config;
