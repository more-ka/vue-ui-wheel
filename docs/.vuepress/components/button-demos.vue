<template>
  <div>
    <p>提供单个按钮和组合形式的按钮，按钮可以添加图标，设置图标位置等。。。</p>
    <h2>单个按钮</h2>
    <p>
      <strong>预览</strong>
    </p>
    <g-button>默认按钮</g-button>
    <g-button icon="settings">设置</g-button>
    <g-button icon="download" icon-position="right">下载</g-button>
    <g-button :loading="true">登陆中</g-button>
    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
    <h2>组合按钮</h2>
    <p>
      <strong>预览</strong>
    </p>
    <g-button-group >
      <g-button icon="left">上一页</g-button>
      <g-button icon="right" icon-position="right">下一页</g-button>
    </g-button-group>
    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content2}}</code></pre>
  </div>
</template>
<script>
import Button from "../../../src/button.vue";
import ButtonGroup from "../../../src/button-group.vue";

export default {
  components: {
    "g-button": Button,
    "g-button-group": ButtonGroup
  },
  data() {
    return {
      content: `
<g-button>默认按钮</g-button>
<g-button icon="settings">设置</g-button>
<g-button icon="download" icon-position="right">设置</g-button>
<g-button :loading="true">登陆中</g-button>
                    `.trim(),
      content2: `<g-button-group>
      <g-button icon="left">上一页</g-button>
      <g-button icon="right" icon-position="right">下一页</g-button>
    </g-button-group>
                    `
    };
  }
};
</script>
<style>
.g-button-group {
  display: inline-flex;
  vertical-align: top;
  > .g-button {
    border-radius: 0;
    &:not(:first-child) {
      margin-left: -1px;
    }
    &:first-child {
      border-top-left-radius: var(--border-radius);
      border-bottom-left-radius: var(--border-radius);
    }
    &:last-child {
      border-top-right-radius: var(--border-radius);
      border-bottom-right-radius: var(--border-radius);
    }
    &:hover {
      position: relative;
      z-index: 1;
    }
  }
}
</style>