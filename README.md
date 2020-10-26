# README

> 设置moment#locale的Vue插件,插件将moment挂载到Vue#prototype

## 使用插件

``` javascript
// main.js
import VueMomentLocalePlugin from 'vue-moment-locale'

Vue.use(VueMomentLocalePlugin, {
    // 插件配置
    lang: 'zh-cn' // 默认值
})
```

### Vue组件的使用方式
``` vue
<template>
    <div>{{ $moment() }}</div>
</template>
```

### 优化moment包的大小

``` javascript
// vue.config.js
module.exports = {
  // ...
  configureWebpack: {
    // ...
    plugins: [
      new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /zh-cn/),
    ]
  },
}
```

## TODO
- 添加eslint
- 添加测试
