const WorkboxWebpackPlugin = require("workbox-webpack-plugin");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "production",
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new WorkboxWebpackPlugin.GenerateSW({
      swDest: "./sw.bundle.js",
      mode: "production",
      runtimeCaching: [
        {
          urlPattern: ({ url }) => url.href.startsWith("https://restaurant-api.dicoding.dev"),
          handler: "StaleWhileRevalidate",
          options: {
            cacheName: "restaurant-api",
          },
        },
      ],
    }),
  ],
});
