import type { Config } from 'tailwindcss';

const colors = require('tailwindcss/colors');

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/core/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  purge: {
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    options: {
      safelist: [
        'bg-normal',
        'bg-fire',
        'bg-water',
        'bg-electric',
        'bg-grass',
        'bg-ice',
        'bg-fighting',
        'bg-poison',
        'bg-ground',
        'bg-flying',
        'bg-psychic',
        'bg-bug',
        'bg-rock',
        'bg-ghost',
        'bg-dragon',
        'bg-dark',
        'bg-steel',
        'bg-fairy',
        'bg-blue',
        'text-success'
      ]
    }
  },
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
    colors: {
      ...colors,
      normal: '#A8A77A',
      fire: '#EE8130',
      water: '#6390F0',
      electric: '#F7D02C',
      grass: '#7AC74C',
      ice: '#96D9D6',
      fighting: '#C22E28',
      poison: '#A33EA1',
      ground: '#E2BF65',
      flying: '#A98FF3',
      psychic: '#F95587',
      bug: '#A6B91A',
      rock: '#B6A136',
      ghost: '#735797',
      dragon: '#6F35FC',
      dark: '#705746',
      steel: '#B7B7CE',
      fairy: '#D685AD',
      error: '#E3350D',
      success: '#54b564',
      blue: '#30a7d7',
      night: '#000'
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
