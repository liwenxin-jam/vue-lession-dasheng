const webpack = require('webpack');
const path = require("path");
const resolve = dir => path.join(__dirname, dir);

module.exports = {
  lintOnSave: false, // 可恶的eslint,千万不要开启
  // 跨域配置
  devServer: {
    port: 3000,
    open: false, // 自动开启浏览器
    compress: true, // 开启压缩
    overlay: {
      warnings: true,
      errors: true
    }
  }
};