/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: '/demos/app-nextjs',
  webpack(config, { isServer }) {
    if (!isServer) {
      // avoids the LocalFile usage in generic-filehandle, after
      // generic-filehandle v2.0.6 was converted to esm
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      }
    }

    return config
  },
}

module.exports = nextConfig
