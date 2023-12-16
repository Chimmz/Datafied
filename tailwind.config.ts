import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    screens: {
      // => @media (min-width: 640px) { ... }
      phone: '640px',
      // => @media (min-width: 768px) { ... }
      tablet: '768px',
      // => @media (min-width: 1024px) { ... }
      laptop: '1024px',
      // => @media (min-width: 1280px) { ... }
      desktop: '1280px',
      // => @media (min-width: 1536px) { ... }
      bigDesktop: '1536px'
    },
    fontFamily: {
      raleway: ['var(--font-raleway)', 'sans-serif'],
      rubik: ['var(--font-rubik)', 'sans-serif'],
      openSans: ['var(--font-openSans)', 'sans-serif']
    },
    extend: {
      container: {
        center: true
      },
      colors: {
        pry: '#E95E10',
        pryDark: '#D04E04',
        sec: '#185983',
        textColor: '#5f5f5f'
      }
    }
  },
  prefix: 'tw-',
  plugins: []
};

export default config;
