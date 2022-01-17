const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");
const packageJson = require("../package.json");

const domain = process.env.PRODUCTION_DOMAIN;

const prodConfig = {
  mode: "production", // this causes Webpack to run slightly differently. It's going to make sure that all JavaScript
  // files that are built get somewhat optimized. It's going to minify all them and do some other small optimizations.
  // It takes longer to run Webpack in production mode.
  output: {
    filename: "[name].[contenthash].js", // this ensures that whenever we build some files for production, all
    //different files that are built are going to use this as template to figure out how to name them.
    publicPath: "/container/latest/",
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        marketing: `marketing@${domain}/marketing/latest/remoteEntry.js`,
      },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
