/**
 * Vue Moment Locale插件
 * @author andychung
 * @date 2020-10-26
 */
// eslint-disable-next-line
const moment = require('moment')

// 导出插件对象
let plguinObject = {
  install(/* Vue构造函数 */Vue, /* 插件选项 */options = {
    lang: 'zh-cn'
  }) {
    moment.locale(options.lang)
    // 注入moment到Vue原型上
    Vue.prototype.$moment = moment
  }
}

module.exports = plguinObject
