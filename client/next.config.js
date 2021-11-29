/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
}

const withImages = require('next-images')
module.exports = withImages()

module.exports = {
  images: {
    domains: ['st3.depositphotos.com'],
  }
}
