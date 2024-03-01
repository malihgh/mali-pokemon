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
    fontFamily: {
      flexo: ['flexo', 'sans-serif'],
      flexoBold: ['flexo-bold', 'sans-serif']
    }
  },
  plugins: []
};
export default config;
