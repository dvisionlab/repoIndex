module.exports = {
  configureWebpack: {
    devServer: {
      open: true
    }
  },
  outputDir: "./docs/",
  publicPath: process.env.NODE_ENV === "production" ? "/docs/" : "/"
};
