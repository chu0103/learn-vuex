module.exports = {
  plugins: {
    'postcss-pxtorem': {
      rootValue: 37.5, // 标准UI2倍图下,1rem = 37.5px
      propList: ['*'] // 一个存储哪些将被转换的属性列表 '*'代表全部
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
