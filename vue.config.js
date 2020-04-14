module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/supervue-utils/' : '/',
  outputDir: 'docs',
  assetsDir: 'static',
  productionSourceMap: false,
  configureWebpack: {
    performance: {
      hints: false
    }
  }
}
