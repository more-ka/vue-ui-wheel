<template>
  <div>
    <h2>简单布局</h2>
    <p>
      <strong>预览</strong>
    </p>
    <g-layout style="color: black;overflow:hidden;border-radius: 6px;">
      <g-header style="height: 50px; background:#D9EEEC;">header</g-header>
      <g-content style="height: 100px;background:#64B2CD;">content</g-content>
      <g-footer style="height: 50px; background:#D9EEEC;">footer</g-footer>
    </g-layout>
    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content1}}</code></pre>
    <h2>内侧边栏</h2>
    <p>侧边栏可关闭</p>
    <p>
      <strong>预览</strong>
    </p>
    <g-layout style="color: black;overflow:hidden;border-radius: 6px;">
      <g-header style="height: 50px; background:#D9EEEC;">header</g-header>
      <g-layout>
        <g-sider style="height: 100px; background: #3C70A4; width:200px;">sider</g-sider>
        <g-content style="height: 100px; background:#64B2CD;width: 100%;">content</g-content>
      </g-layout>
      <g-footer style="height: 50px; background:#D9EEEC;">footer</g-footer>
    </g-layout>
    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content2}}</code></pre>
    <h2>外侧边栏</h2>
    <p>侧边栏可关闭</p>
    <p>
      <strong>预览</strong>
    </p>
    <g-layout style="color: black;overflow:hidden;border-radius: 6px;">
      <g-sider style="background: #3C70A4; width:200px;">sider</g-sider>
      <g-layout>
        <g-header style="height: 50px; background:#D9EEEC;">header</g-header>
        <g-content style="height: 100px; background:#64B2CD;width: 100%;">content</g-content>
        <g-footer style="height: 50px; background:#D9EEEC;">footer</g-footer>
      </g-layout>
    </g-layout>
    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content3}}</code></pre>
  </div>
</template>
<script>
import GLayout from "../../../src/layout";
import GHeader from "../../../src/header";
import GContent from "../../../src/content";
import GFooter from "../../../src/footer";
import GSider from "../../../src/sider";

export default {
  components: { GLayout, GHeader, GContent, GFooter, GSider },
  data() {
    return {
      content1: `    
<g-layout style="color: white;">
  <g-header style="height: 50px; background:lightskyblue;">header</g-header>
  <g-content style="height: 100px;background:deepskyblue;">content</g-content>
  <g-footer style="height: 50px; background:lightskyblue;">footer</g-footer>
</g-layout>
    `.trim(),
      content2: `    
<g-layout style="color: black; overflow:hidden;">
  <g-header style="height: 50px; background:#D9EEEC;">header</g-header>
  <g-layout>
    <g-sider style="height: 100px; background: #3C70A4; width:200px;">sider</g-sider>
    <g-content style="height: 100px; background:#64B2CD;width: 100%;">content</g-content>
  </g-layout>
  <g-footer style="height: 50px; background:#D9EEEC;">footer</g-footer>
</g-layout>`.trim(),
      content3: `    
<g-layout style="color: black;">
  <g-sider style="background: #3C70A4; width:200px;">sider</g-sider>
  <g-layout>
    <g-header style="height: 50px; background:#D9EEEC;">header</g-header>
    <g-content style="height: 100px; background:#64B2CD;width: 100%;">content</g-content>
    <g-footer style="height: 50px; background:#D9EEEC;">footer</g-footer>
  </g-layout>
</g-layout>`.trim()
    };
  }
};
</script>
<style scoped>
</style>