/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mydark: '#000000',
        mywhite: '#FBFBFB',
        mygray: '#AEAEAE',
        mygreenop: '#8EFF8B',
        mygreendark: 'rgba(142, 255, 139, 0.5)'
      },

      fontFamily: {
        custom: ['Fira Code', 'monospace']
      }
    },
  },
  plugins: [],
}

