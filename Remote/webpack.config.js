const path = require("path");
const mode =
  process.env.NODE_ENV === "production" ? "production" : "development";

const HtmlWebpackPlugin = require("html-webpack-plugin");
// import ModuleFederationPlugin from webpack
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
// import dependencies from package.json, which includes react and react-dom
const { dependencies } = require("./package.json");

module.exports = {
  mode: mode,
  entry: path.resolve(__dirname, "src"),
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "swc-loader",
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "HeaderApp", // This application named 'HeaderApp'
      filename: "remoteEntry.js", // output a js file
      exposes: {
        // which exposes
        "./HeaderApp": "./src/components/pages/HeaderApp",
      },
      shared: {
        // and shared
        ...dependencies, // some other dependencies
        react: {
          eager: true,
          // react
          //singleton: true,
          //requiredVersion: dependencies["react"],
        },
        /*
        "react-dom": {
          // react-dom
          singleton: true,
          requiredVersion: dependencies["react-dom"],
        },
        */
      },
    }),
  ],
  target: "web",
};
