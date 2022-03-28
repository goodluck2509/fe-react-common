const path = require("path"); // path có sẵn trong nodejs giống fs hay http
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = true;

module.exports = {
  // module.exports thực ra nó là export default của ES6 còn đây cú pháp của node 5
  mode: devMode ? "development" : "production", // development nó có sẵn devtool: "inline-source-map",
  entry: "./src/index.js",
  // file nguồn Webpack làm việc
  output: {
    filename: "bundle.js", // tên file xuất ra
    path: path.resolve(__dirname, "build"), // thư mục lưu
    clean: true,
  },

  module: {
    rules: [
      {
        use: "babel-loader",
        test: /\.js$/,
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin()],
};
