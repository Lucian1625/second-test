const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        'blue-gray': colors.blueGray,
        'cool-gray': colors.coolGray,
        'true-gray': colors.trueGray,
        'warm-gray': colors.warmGray,
        'orange': colors.orange,
        'amber': colors.amber,
        'lime': colors.lime,
        'emerald': colors.emerald,
        'teal': colors.teal,
        'cyan': colors.cyan,
        'light-blue': colors.lightBlue,
        'indigo': colors.indigo,
        'violet': colors.violet,
        'purple': colors.purple,
        'fuchsia': colors.fuchsia,
        'pink': colors.pink,
        'rose': colors.rose,
        'biru-tosca': '#00a4a9'
      }
    },
  },
  plugins: [],
}
