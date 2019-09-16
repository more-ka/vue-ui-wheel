<template>
  <div>
    <h2>简单用法</h2>
    <p>
      <strong>预览</strong>
    </p>
    <g-collapse :selected.sync="selectedTab1">
      <g-collapse-item title="标题1" name="1">内容1</g-collapse-item>
      <g-collapse-item title="标题2" name="2">内容2</g-collapse-item>
      <g-collapse-item title="标题3" name="3">内容3</g-collapse-item>
    </g-collapse>
    <p>
      <strong>代码</strong>
    </p>
    <pre><code class="html">{{content1}}</code></pre>
    <pre><code class="html">{{content2}}</code></pre>
    <h2>设置 single</h2>
    <p>
      <strong>预览</strong>
    </p>
    <g-collapse :selected.sync="selectedTab2" single>
      <g-collapse-item title="标题1" name="1">内容1</g-collapse-item>
      <g-collapse-item title="标题2" name="2">内容2</g-collapse-item>
      <g-collapse-item title="标题3" name="3">内容3</g-collapse-item>
    </g-collapse>
    <p>
      <strong>代码</strong>
    </p>
    <pre><code class="html">{{content3}}</code></pre>
    <pre><code class="html">{{content4}}</code></pre>
    <span style="background: #F3F5F7;display:block;padding:8px 16px;border-radius:6px;">
      <h3>设定 single 同时建议 selectedTab 也为单个</h3>
    </span>
  </div>
</template>
<script>
import GCollapseItem from "../../../src/collapse-item";
import GCollapse from "../../../src/collapse";
export default {
  components: { GCollapseItem, GCollapse },
  data() {
    return {
      selectedTab1: ["1", "2", "3"],
      selectedTab2: ["1"],
      content1: `
<g-collapse :selected="selectedTab">
  <g-collapse-item title="标题1" name="1">内容1</g-collapse-item>
  <g-collapse-item title="标题2" name="2">内容2</g-collapse-item>
  <g-collapse-item title="标题3" name="3">内容3</g-collapse-item>
</g-collapse>`.trim(),
      content2: `
return {
  selectedTab: ["1", "2", "3"]
  }`.trim(),
  content3:`
<g-collapse :selected="selectedTab" single>
  <g-collapse-item title="标题1" name="1">内容1</g-collapse-item>
  <g-collapse-item title="标题2" name="2">内容2</g-collapse-item>
  <g-collapse-item title="标题3" name="3">内容3</g-collapse-item>
</g-collapse>`.trim(),
  content4:`
return {
  selectedTab: ["1", "2", "3"]
  }`.trim()
    };
  }
};
</script>