const HtmlWebpackPlugin = require("html-webpack-plugin"); // This is what is going to take some HTML file inside our project and inject a couple
// // of different script tags inside of it.

module.exports = {
  module: {
    rules: [
      {
        test: /\.m?js$/, // this says that whenever we import in a file that ends with mjs or js, we want it to be processed by Babel.
        exclude: /node_modules/, // do not try to run Babel on any file of our node_modules directory.
        use: {
          loader: "babel-loader", // The goal of a loader is to tell webpack to process some different files as we start to import them.
          options: {
            presets: [
              "@babel/preset-react" /* processes JSX */,
              "@babel/preset-env",
            ] /* converts ES6+ into ES5 */,
            plugins: [
              "@babel/plugin-transform-runtime",
            ] /* adds in a little additional code to enable different features for our project inside the browser such as async/await syntax */,
          },
        },
      },
    ],
    plugins: [
      new HtmlWebpackPlugin({
        template: "./public/index.html",
      }),
    ],
  },
};
