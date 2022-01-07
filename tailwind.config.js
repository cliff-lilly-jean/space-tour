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
   letterSpacing: {
    "h5-tracking": "4.72px"
   },
   screens: {
    'mdLg': '1140px'
   },
   boxShadow: {
    'exploreShadow': '0px 0px 0px 12px rgba(0,0,0,.4)',
   }
  },
 },
 plugins: [],
};