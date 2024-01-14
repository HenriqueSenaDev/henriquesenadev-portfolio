import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        light: '0px 3.197px 3.197px 0px rgba(0, 0, 0, 0.25)',
      },
      colors: {
        'light-gray': 'rgba(201,201,201,0.3)',
        'matte-black': '#101010',
      },
    },
  },
  plugins: [],
};
export default config;
