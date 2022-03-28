const path = require("path"); // path có sẵn trong nodejs giống fs hay http
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const glob = require('glob');

const devMode = true;

module.exports = {
  // module.exports thực ra nó là export default của ES6 còn đây cú pháp của node 5
  mode: devMode ? "development" : "production", // development nó có sẵn devtool: "inline-source-map",
  entry: glob.sync("./src/**/*.{js,json,jsx}").reduce(function (obj, el) {
    const pathFile = path.parse(el);
    if (path.parse(el).name.indexOf("_") !== 0)
      obj[`${pathFile.dir.replace("./src", "")}/${path.parse(el).name}`] = el;
    return obj;
  }, {}),

  // [{ name: "./src/index.js" }, { home: "./src/index.js" }],
  // file nguồn Webpack làm việc
  output: {
    filename: "[name].js", // tên file xuất ra
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
