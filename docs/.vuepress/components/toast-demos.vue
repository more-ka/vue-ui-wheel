<template>
    <div style="padding:16px 0;">
      <h2>简单用法</h2>
        <p>
            <strong>预览</strong>
        </p>
        <g-button @click="$toast('提示信息',{position:'top'})" >上方弹出</g-button>
        <g-button @click="$toast('提示信息',{position:'middle'})" >中间弹出</g-button>
        <g-button @click="$toast('提示信息',{position:'bottom'})" >下方弹出</g-button>
        <p>
            <strong>代码</strong>
        </p>
        <pre><code>{{content1}}</code></pre>
      <h2>自定义按钮文字</h2>
        <p>
            <strong>预览</strong>
        </p>
        <g-button @click="onClickButton">上方弹出</g-button>
        <pre><code>{{content2}}</code></pre>
        <p>
            <strong>代码</strong>
        </p>
      <h2>支持 HTML</h2>
        <p>
            <strong>预览</strong>
        </p>
        <g-button @click="onClick">上方弹出</g-button>
        <pre><code>{{content2}}</code></pre>
        <p>
            <strong>代码</strong>
        </p>
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
                    `.replace(/^ {8}/gm, "").trim(),
      content2: `  
        <g-button @click="onClickButton">上方弹出</g-button>

        methods: {
          onClickButton() {
            this.$toast("贾君鹏，你妈叫你回家吃饭", {
              closeButton: {text: "知道了"}
            });
          }
        }`.replace(/^ {8}/gm, "").trim(),
      content3: `
        <g-button @click="onClickButton">上方弹出</g-button>

        methods: {
          onClickButton() {
            this.$toast("贾君鹏，你妈叫你回家吃饭", {
              closeButton: {text: "知道了"}
              });
            }
          }`.replace(/^ {8}/gm, "").trim()
    };
  },
  methods: {
    onClickButton() {
      this.$toast("贾君鹏,你妈叫你回家吃饭", {
        closeButton: {
          text: "知道了"
        }
      });
    },
    onClick() {
      this.$toast('<strong style="color:red;">全世界你最帅</strong>', {enableHtml: true
      });
    }
  }
};
</script>
<style>
.toast {
  z-index: 30 !important;
  cursor: pointer;
}
</style>

