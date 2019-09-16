<template>
  <div style="padding-top: 16px;">
    <span style="background: #F3F5F7;display:block;padding:8px 16px;border-radius:6px;">
      <h3>popover内容支持HTML</h3>
    </span>
    <h3 style="padding-top: 16px;">点击按钮触发popover</h3>
    <p>
      <strong>预览</strong>
    </p>
    <g-popover>
      <g-button>上方弹出</g-button>
      <template slot="content">弹出内容</template>
    </g-popover>
    <g-popover position="bottom">
      <g-button>下方弹出</g-button>
      <template slot="content">弹出内容</template>
    </g-popover>
    <g-popover position="left">
      <g-button>左边弹出</g-button>
      <template slot="content">弹出内容</template>
    </g-popover>
    <g-popover position="right">
      <g-button>右边弹出</g-button>
      <template slot="content">弹出内容</template>
    </g-popover>
    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content1}}</code></pre>
    <h3 style="padding-top: 16px;">将触发方式改为hover</h3>
    <g-popover trigger="hover">
      <g-button>上边弹出</g-button>
      <template slot="content">弹出内容</template>
    </g-popover>
    <g-popover trigger="hover" position="bottom">
      <g-button>下边弹出</g-button>
      <template slot="content">弹出内容</template>
    </g-popover>
    <g-popover trigger="hover" position="left">
      <g-button>左边弹出</g-button>
      <template slot="content">弹出内容</template>
    </g-popover>
    <g-popover trigger="hover" position="right">
      <g-button>右边弹出</g-button>
      <template slot="content">弹出内容</template>
    </g-popover>
    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content2}}</code></pre>
  </div>
</template>

<script>
import GPopover from "../../../src/popover";
import GButton from "../../../src/button";
export default {
  components: { GButton, GPopover },
  data() {
    return {
      content1: `
<g-popover>
            <g-button>上方弹出</g-button>
            <template slot="content">
                弹出内容
            </template>
        </g-popover>
        <g-popover position="bottom">
            <g-button>下方弹出</g-button>
            <template slot="content">
                弹出内容
            </template>
        </g-popover>
        <g-popover position="left">
            <g-button>左边弹出</g-button>
            <template slot="content">
                弹出内容
            </template>
        </g-popover>
        <g-popover position="right">
            <g-button>右边弹出</g-button>
            <template slot="content">
                弹出内容
            </template>
        </g-popover>
                `
        .replace(/^ {8}/gm, "")
        .trim(),
      content2: `
                <g-popover trigger="hover">
            <g-button>上边弹出</g-button>
            <template slot="content">
            弹出内容
            </template>
        </g-popover>
        <g-popover trigger="hover" position="bottom">
            <g-button>下边弹出</g-button>
            <template slot="content">
            弹出内容
            </template>
        </g-popover>
        <g-popover trigger="hover" position="left">
            <g-button>左边弹出</g-button>
            <template slot="content">
            弹出内容
            </template>
        </g-popover>
        <g-popover trigger="hover" position="right">
            <g-button>右边弹出</g-button>
            <template slot="content">
            弹出内容
            </template>
        </g-popover>`
        .replace(/^ {8}/gm, "")
        .trim()
    };
  }
};
</script>

<style lang="scss" scoped>
.popover {
  display: inline-block;
  margin: 16px;
}
</style>
