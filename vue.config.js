module.exports = {
  devServer: {
    port: 3000
  },
  productionSourceMap: false,
  pwa: {
    workboxPluginMode: 'GenerateSW',
    workboxOptions: {
      cacheId: 'vuejs-webapp-sample',
      swDest: 'service-worker.js',
      clientsClaim: true,
      runtimeCaching: [
        {
          urlPattern: new RegExp('/api/*'),
          handler: 'NetworkFirst',
          options: {
            cacheName: 'api',
            expiration: {
              maxAgeSeconds: 60 * 60 * 24
            },
            fetchOptions: {
              mode: 'cors',
            },
            matchOptions: {
              ignoreSearch: true,
            },
          }
        }
      ]
    }
  }
}