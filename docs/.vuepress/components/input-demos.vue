<template>
  <div>
    <div style="padding:16px 0">
      <p>
        <strong>预览</strong>
      </p>
      <g-input value="默认输入框"></g-input>
      <g-input value="disabled 输入框" disabled></g-input>
      <g-input value="readonly 输入框" readonly></g-input>
      <g-input value="错误" error="错误"></g-input>
    </div>
    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content1}}</code></pre>
    <h2>双向绑定</h2>
    <p>
      <strong>预览</strong>
    </p>
    <g-input v-model="value"></g-input>
    <div>value: {{value}}</div>
    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content2}}</code></pre>
    <pre><code>{{content3}}</code></pre>
  </div>
</template>

<script>
import Input from "../../../src/input";

export default {
  components: {
    "g-input": Input
  },
  data() {
    return {
      value: "53231323",
      content1: `
<g-input value="默认输入框"></g-input>
<g-input value="disabled 输入框" disabled></g-input>
<g-input value="readonly 输入框" readonly></g-input>
<g-input value="错误" error="错误"></g-input>
`.trim(),
      content2: `
<g-input v-model="value"></g-input>
<div>
    value: {{value}}
</div>
`.trim(),
      content3: `
data:{
    value: "53231323"
}
`.trim()
    };
  }
};
</script>
