module.exports = {
  theme: {
    colors: {
      primary: '#42A5F5',
      secondary: '#FFA3D8',
      grass: '#C9EF94',
      poison: '#38D31C',
      fire: '#FF6200',
      earth: '#DBE1E6',
      electric: '#478AFF',
      water: '#53C1DE'
    },
    fill: theme => ({
      white: '#FFFFFF',
      dark: '#1D1D1D',
      light: '#DBE1E6',
      ionicblue: '#478AFF',
    }),
    extend: {}
  },
  variants: {
    fill: ['hover', 'focus'],
    opacity: ['responsive', 'hover', 'focus', 'active']
  },
  plugins: []
}
