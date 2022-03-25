# Steps to start a new package
- Clone code `git clone https://github.com/goodluck2509/fe-react-common.git`
- Run `npm install`
- Create a new folder for the package. Example: 'ajax'
- Start coding.

# Steps to test your package
  * Step 1: `yarn start`
  * Step 2: `npm run build`
  * Step 3: import script need test in file `/demo/index.html`
  * Step 4: run domain test
  * Step 5: code javascript test script in file `/demo/test.js`

# Steps to deploy your package
- update version in package.json
- `npm run build`
- Push code to gitlab
- Waiting for GitLap deploy your package. Then you can use it in your project
# Descriptions
- Loader với Webpack
- Loader là cách chỉ ra cho Webpack xử lý loại file củ thể, cấu hình cần tối thiểu chỉ ra

`test` chỉ ra loại file cần chuyển đổi
`use` các loader sử dụng cho file đó
const path = require('path');

module.exports = {
  module: {
    rules: [
      { test: /\.txt$/,
        use: [
                {loader: "loader1"},
                {loader: "loader2"}
             ]
      }
    ]
  }
};