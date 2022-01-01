const { merge } = require("webpack-merge"); // 'merge' is a function that we can use to merge together two different 'web config' objects.
// It's what is going to allow us to take all the config that we wrote out inside the common config file
// and merge it together with the configuration we wrote inside this development config file.
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");
const packageJson = require("../package.json");

const devConfig = {
  // This is our development specific configuration that we only want to provide to Webpack when we are running it in a development mode.
  mode: "development",
  devServer: {
    port: 8080,
    historyApiFallback: {
      // We'll understand this property a little later
      index: "index.html",
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "container", // This is never used for the host
      remotes: {
        marketing: "marketing@http://localhost:8081/remoteEntry.js", // key-value pairs where the keys are the names of the different modules that we want to import into our container.
      },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, devConfig); // By listing out devConfig in second means that
// devConfig is going to overwrite and kind of 'take priority' over any other similar options we might have assigned to common config.
