# README

> 设置moment#locale的Vue插件,插件将moment挂载到Vue#prototype

## 使用方法
``` javascript
import VueMomentLocalePlugin from 'vue-moment-locale'
Vue.use(VueMomentLocalePlugin, {
    // 插件配置
    lang: 'zh-cn' // 默认值
})
```

``` vue
<template>
    <div>{{ $moment() }}</div>
</template>
```

## TODO
- 添加eslint
- 添加测试
