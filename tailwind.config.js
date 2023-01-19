/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./index.html",
      "./src/**/*.{vue,js,ts,jsx,tsx}",
   ],
   theme: {
    colors:
    {
      'merah' : '#b70000',
      'hitam' : '#030303',
      'hitam-muda' : '#0d0d0d',
      'putih' : '#FFFFFF',
      'abu' : '#5b5b5b',
      'abutua' : '#262626',
      'abutuabanget' : '#131313',
    },
    extend:
    {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
    },
  },
  plugins: [],
}
