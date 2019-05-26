#  "vue-ui-wheel" -- 一个Vue UI组件
[![Build Status](https://www.travis-ci.org/more-ka/vue-ui-wheel.svg?branch=master)](https://www.travis-ci.org/more-ka/vue-ui-wheel)

## 介绍

学习 Vue 过程中做的 UI 框架，希望对你有用。

## 开始使用

1. 添加 CSS 样式
    请在引入本框架前,在css中开启border-box
    ```
    *,*::before,*::after{box-sizing:border-box;}
    ```
    IE 8 及以上浏览器支持此样式

    你需要自己设置默认颜色等变量(之后会改为 SCSS 变量)
    :root {
        --button-height: 32px;
        --font-size: 14px;
        --button-bg: white;
        --button-bg-active: #eee;
        --border-radius: 4px;
        --border-color: #999;
        --color: #333;
        --border-color-hover: #666;
      }
    ```
    IE 15 及以上浏览器支持此样式
2. 安装 vue-ui-wheel
    ```
    npm i --save vue-ui-wheel
    ```
3. 引入 vue-ui-wheel
    ```
    import {Button,ButtonGroup,Icon} from 'vue-ui-wheel'
    import 'vue-ui-wheel/dist/index.css'

    export default {
      name: 'app',
      components: {
        HelloWorld,
          "g-button":Button
      }
    }
    ```
## 文档

## 提问

## 变更记录

## 联系方式
