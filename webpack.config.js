const path = require("path"); // path có sẵn trong nodejs giống fs hay http

const HtmlWebpackPlugin = require("html-webpack-plugin");
const devMode = true;

module.exports = {
  // module.exports thực ra nó là export default của ES6 còn đây cú pháp của node 5
  mode: devMode ? "development" : "production", // development nó có sẵn devtool: "inline-source-map",
  entry: { main: "./src/index.js", home: "./src/home.js" },
  // file nguồn Webpack làm việc
  output: {
    filename: "[name].js", // tên file xuất ra
    path: path.resolve(__dirname, "dist"), // thư mục lưu
    clean: true,
  },
  // devServer: {
  //   static: path.resolve(__dirname, "dist"),
  //   open: true, // có thể code ở package: "dev": "webpack server --open"
  //   port: 5500,
  // },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack quy",
      filename: "index.html",
    }),
  ],
  // optimization: {
  //   splitChunks: {
  //     chunks: "all",
  //   },
  // },
};
