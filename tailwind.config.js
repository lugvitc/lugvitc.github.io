/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poiret': '"Poiret One", cursive',
      },
      colors: {
        headerFooterBlack: '#212529',

        // checkout https://www.nordtheme.com/docs/colors-and-palettes for more details
        // Polar Night: dark bg colours
        nord0: '#2E3440',
        nord1: '#3B4252',
        nord2: '#434C5E',
        nord3: '#4C566A',

        // Snow Storm: whites
        nord4: '#D8DEE9', // off-white
        nord5: '#E5E9F0', // white
        nord6: '#ECEFF4', // bright white

        // Frost: blues
        nord7: '#8FBCBB', // light greenish-blue
        nord8: '#88C0D0', // light blue
        nord9: '#81A1C1', // pastel blue
        nord10: '#5E81AC', // darkish blue

        // try to find some 'darker' versions of them (for changing colours on hovering)
        // Aurora: standard terminal colours
        nord11: '#BF616A', // red
        nord12: '#D08770', // orange
        nord13: '#EBCB8B', // yellow
        nord14: '#A3BE8C', // green
        nord15: '#B48EAD' // purple
      }
    },
  },
  plugins: [],
}

