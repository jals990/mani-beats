module.exports = {
  images: {
    domains: ['api.deezer.com'],
  },
 }

const withImages = require('next-images')
module.exports = withImages({
 esModule: true
})