module.exports = {
  plugins: {
    // 这个工具可以实现自动添加CSS3前缀
    // "autoprefixer": {
    //   overrideBrowserslist: ['last 5 version', '>1%', 'ie >=8']
    // },
    'postcss-pxtorem': {
      rootValue ({ file }) {
        // 将 vant 组件 rem 设置成 37.5  自己写的样式设置为 75 这样就不需要考虑二倍图 除二了
        return file.indexOf('vant') !== -1 ? 37.5 : 75
      },
      minPixelValue: 1, // 需要转换的最小值，一般1px像素不转换，以上才转换
      unitPrecision: 6, // 转换成rem单位的小数点后的保留位数
      selectorBlackList: ['.van'], // 匹配不被转换为rem的选择器
      propList: ['*'], // 一个存储哪些将被转换的属性列表 '*'代表全部
      replace: true, // 替换包含rem的规则，而不是添加回退
      mediaQuery: false // 允许在媒体查询中转换px
      // rem适配
      // 安装两个工具
      // npm i postcss-pxtorem --save-dev
      // 作用：把px单位自动转成rem单位
      // npm i amfe-flexible --save
      // 作用: 根据设置屏幕的宽度去调整rem的值（html标签上font-size的大小）
      // 安装完成后在根目录下创建postcss.config.js文件，添加如下代码
    }
  }
}
