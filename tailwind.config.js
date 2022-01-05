module.exports = {
 content: [
  "./src/**/*.{js,jsx,ts,tsx}",
 ],
 theme: {
  extend: {
   colors: {
    'primary': '#0B0D17',
    'secondary': '#D0D6F9',
    'accent': '#fff'
   },
   fontFamily: {
    bellefair: ['Bellefair', "serif"],
    barlow: ['Barlow Condensed'],
   },
   fontSize: {
    h1: '150px',
    h2: '100px',
    h3: '56px',
    h4: '32px',
    h5: '28px'
   },
   spacing: {
    'h5-spacing': '4.75px'
   }
  },
 },
 plugins: [],
};