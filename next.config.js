const path = require('path')

// Resolve @jbrowse/react-app2 subpath imports that aren't in package exports
const jbrowseEsm = path.join(
  __dirname,
  'node_modules',
  '@jbrowse',
  'react-app2',
  'esm',
)

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: '/demos/app-nextjs',
  turbopack: {
    resolveAlias: {
      '@jbrowse/react-app2/esm': jbrowseEsm,
    },
  },
  webpack: (config) => {
    config.resolve.alias['@jbrowse/react-app2/esm'] = jbrowseEsm
    return config
  },
}

module.exports = nextConfig
