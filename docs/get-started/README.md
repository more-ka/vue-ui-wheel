---
title: 快速上手
---

# 快速上手

### 添加 CSS 样式

使用本框架前，请在 CSS 中开启 border-box

    *，*::before,*::after{ box-sizing: border-box }
IE 8 及以上浏览器支持此样式。

### 引入 vue-ui-wheel

    import { Button } from 'vue-ui-wheel'
    import 'vue-ui-wheel/dist/index.css'

    export default {
        name: 'app',
        components: {
            'g-button': Button
        }
    }