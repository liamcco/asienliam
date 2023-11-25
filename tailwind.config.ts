import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      gridColumnStart: {
        '8': '8',
        '9': '9',
        '10': '10',
      },
      gridColumnEnd: {
        '8': '8',
        '9': '9',
        '10': '10',
      },
      gridRowStart: {
        '8': '8',
        '9': '9',
        '10': '10',
      },
      gridRowEnd: {
        '8': '8',
        '9': '9',
        '10': '10',
      },
    },
  },
  plugins: [],
}
export default config
