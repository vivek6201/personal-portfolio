const { hostname } = require('os')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    remotePatterns:[
      {
        protocol:"https",
        hostname:'upload.wikimedia.org',
      },
      {
        protocol:"https",
        hostname:"cdn.sanity.io",
      }
    ]
  }
}

module.exports = nextConfig
