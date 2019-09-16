<template>
  <div style="padding:16px 0;">
    <h2>设置弹出位置</h2>
    <p>
      <strong>预览</strong>
    </p>
    <g-button @click="$toast('提示信息',{position:'top'})">上方弹出</g-button>
    <g-button @click="$toast('提示信息',{position:'middle'})">中间弹出</g-button>
    <g-button @click="$toast('提示信息',{position:'bottom'})">下方弹出</g-button>
    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content1}}</code></pre>
    <h2>自定义按钮文字</h2>
    <p>
      <strong>预览</strong>
    </p>
    <g-button @click="onClickButton">上方弹出</g-button>
    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content2}}</code></pre>
    <h2>支持 HTML</h2>
    <p>
      <strong>预览</strong>
    </p>
    <g-button @click="onClick">上方弹出</g-button>
    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content3}}</code></pre>
    <h2>自动或手动关闭</h2>
    <p>
      <strong>预览</strong>
    </p>
    <g-button @click="autoCloseButton">1 秒后自动关闭</g-button>
    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content4}}</code></pre>
    <pre><code>{{content5}}</code></pre>
    <span style="background: #F3F5F7;display:block;padding:8px 16px;border-radius:6px;">
      <h3>autoClsoe 取值为 false（手动关闭）或数字（几秒后自动关闭）</h3>
    </span>
  </div>
</template>
<script>
import plugin from "../../../src/plugin";
import GButton from "../../../src/button";
import Vue from "vue";
Vue.use(plugin);
export default {
  components: { GButton },
  data() {
    return {
      autoClose: false,
      content1: `
        <g-button>默认按钮</g-button>
        <g-button icon="settings">默认按钮</g-button>
        <g-button icon="settings" icon-position="right">默认按钮</g-button>
        <g-button :loading="true">默认按钮</g-button>
                    `
        .replace(/^ {8}/gm, "")
        .trim(),
      content2: `  
        <g-button @click="onClickButton">上方弹出</g-button>

        methods: {
          onClickButton() {
            this.$toast("贾君鹏，你妈叫你回家吃饭", {
              closeButton: {text: "知道了"}
            });
          }
        }`
        .replace(/^ {8}/gm, "")
        .trim(),
      content3: `
        <g-button @click="onClickButton">上方弹出</g-button>

        methods: {
          onClickButton() {
            this.$toast("<strong style="color:red;">全世界你最帅</strong>", {
              closeButton: {text: "知道了"}
              });
            }
          }`
        .replace(/^ {8}/gm, "")
        .trim(),
      content4: `
<g-button @click="autoCloseButton">1 秒后自动关闭</g-button>
        `
        .replace(/^ {8}/gm, "")
        .trim(),
      content5: `
methods: {
  autoCloseButton() {
    this.$toast("我会自动关闭", {
      autoClose: 1
      });
    }
  }
        `
        .replace(/^ {8}/gm, "")
        .trim()
    };
  },
  methods: {
    autoCloseButton() {
      this.$toast("我会自动关闭", {
        autoClose: 1
      });
    },
    onClickButton() {
      this.$toast("贾君鹏,你妈叫你回家吃饭", {
        closeButton: {
          text: "知道了"
        }
      });
    },
    onClick() {
      this.$toast('<strong style="color:red;">全世界你最帅</strong>', {
        enableHtml: true
      });
    }
  }
};
</script>

