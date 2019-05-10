<script>
export default {
  // created () {
  //   // 调用API从本地缓存中获取数据
  //   /*
  //    * 平台 api 差异的处理方式:  api 方法统一挂载到 mpvue 名称空间, 平台判断通过 mpvuePlatform 特征字符串
  //    * 微信：mpvue === wx, mpvuePlatform === 'wx'
  //    * 头条：mpvue === tt, mpvuePlatform === 'tt'
  //    * 百度：mpvue === swan, mpvuePlatform === 'swan'
  //    * 支付宝(蚂蚁)：mpvue === my, mpvuePlatform === 'my'
  //    */

  //   let logs
  //   if (mpvuePlatform === 'my') {
  //     logs = mpvue.getStorageSync({key: 'logs'}).data || []
  //     logs.unshift(Date.now())
  //     mpvue.setStorageSync({
  //       key: 'logs',
  //       data: logs
  //     })
  //   } else {
  //     logs = mpvue.getStorageSync('logs') || []
  //     logs.unshift(Date.now())
  //     mpvue.setStorageSync('logs', logs)
  //   }
  // },
  // log () {
  //   console.log(`log at:${Date.now()}`)
  // }
}
</script>

<style lang="less">
  // 小程序是支持字体图标的
  // 但是只支持网络路径或者base64，本地路径不支持！！！！

  // mpvue 默认将字体文件转成了 base64
  // 但是不建议使用 base64，因为小程序大小是受到限制的,一般为 2M

  // 导入外部的样式
  @import './style.css';

image{
  width: 100%;
  height: 100%;
  vertical-align: middle;
}
</style>
