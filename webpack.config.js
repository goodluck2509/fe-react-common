const path = require("path");

const devMode = true;

module.exports = {
  mode: devMode ? "development" : "production",
  entry: [
    "./src/js/app.js", // file nguồn Webpack làm việc
  ],

  output: {
    filename: "app.min.js", // tên file xuất ra
    path: path.resolve(__dirname, "dist"), // thư mục lưu
    library: "mylib", // tên thư viện (tự đặt)
    libraryTarget: "var",
  },

  optimization: {
    // We no not want to minimize our code.
    //minimize: false
  },

  module: {
    rules: [
      {
        // Thiết lập build scss
        test: /\.(sa|sc)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            // Interprets CSS
            loader: "css-loader",
            options: {
              importLoaders: 2,
            },
          },
          {
            // minify CSS và thêm autoprefix
            loader: "postcss-loader",
            options: {
              ident: "postcss",

              // Đặt chế độ tối ưu
              plugins: devMode
                ? () => []
                : () => [
                    postcssPresetEnv({
                      browsers: [">1%"],
                    }),
                    require("cssnano")(),
                  ],
            },
          },
          {
            loader: "sass-loader",
          },
        ],
      },
      {
        // Thiết lập lưu các ảnh sử dụng bởi CSS
        // lưu dưới đường dẫn images cùng file site.css
        test: /\.(png|jpe?g|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              // Image sử dụng bởi CSS lưu tại
              publicPath: "../images",
              emitFile: false,
            },
          },
        ],
      },
    ],
  },

  plugins: [
    // Xuất kết quả với CSS - sau khi qua loader MiniCssExtractPlugin.loader
    new MiniCssExtractPlugin({
      filename: devMode ? "css/site.css" : "css/site.min.css",
    }),
    // Copy file với copy-webpack-plugin
    // syntax: `npm install copy-webpack-plugin`

    // new CopyPlugin([
    //   { from: 'node_modules/bootstrap/dist/js/bootstrap.js', to: 'js/bootstrap.js' },
    //   { from: 'node_modules/bootstrap/dist/js/bootstrap.min.js', to: 'js/bootstrap.min.js' },
    // ]),
  ],
};
// Các loader thực hiện từ dưới lên trên,
// như ở ví dụ trên đối với file CSS nó sẽ chuyển đổi dần qua các loader:
// sass-loader -> postcss-loader -> css-loader -> MiniCssExtractPlugin.loader
