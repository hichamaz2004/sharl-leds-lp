/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        shark: {
          bg: '#06071B',
          card: '#0D0F2B',
          blue: '#1A1FFF',
          purple: '#6C00FF',
          yellow: '#F5A623',
          orange: '#FF6B00',
        },
      },
      fontFamily: {
        cairo: ['Tajawal', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      backgroundSize: {
        '400': '400% 400%',
      },
    },
  },
  plugins: [],
};
