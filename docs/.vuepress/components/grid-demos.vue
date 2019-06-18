<template>
    <div style="padding-top: 16px;">
        <h2>24格网格</h2>
        <p><strong>预览</strong></p>
        <g-row>
            <g-col span="8"><div>8</div></g-col>
            <g-col span="8"><div>8</div></g-col>
            <g-col span="8"><div>8</div></g-col>
        </g-row>
        <g-row>
            <g-col span="6"><div>6</div></g-col>
            <g-col span="6"><div>6</div></g-col>
            <g-col span="6"><div>6</div></g-col>
            <g-col span="6"><div>6</div></g-col>
        </g-row>
        <g-row>
            <g-col span="4"><div>4</div></g-col>
            <g-col span="4"><div>4</div></g-col>
            <g-col span="4"><div>4</div></g-col>
            <g-col span="4"><div>4</div></g-col>
            <g-col span="4"><div>4</div></g-col>
            <g-col span="4"><div>4</div></g-col>
        </g-row>
        <g-row>
            <g-col span="2"><div>2</div></g-col>
            <g-col span="2"><div>2</div></g-col>
            <g-col span="2"><div>2</div></g-col>
            <g-col span="2"><div>2</div></g-col>
            <g-col span="2"><div>2</div></g-col>
            <g-col span="2"><div>2</div></g-col>
            <g-col span="2"><div>2</div></g-col>
            <g-col span="2"><div>2</div></g-col>
            <g-col span="2"><div>2</div></g-col>
            <g-col span="2"><div>2</div></g-col>
            <g-col span="2"><div>2</div></g-col>
            <g-col span="2"><div>2</div></g-col>
        </g-row>
        <p><strong>代码</strong></p>
        <pre><code>{{content1}}</code></pre>
        <h2>设置 gutter</h2>
        <p><strong>预览</strong></p>
        <g-row gutter="10">
            <g-col span="8"><div>8</div></g-col>
            <g-col span="8"><div>8</div></g-col>
            <g-col span="8"><div>8</div></g-col>
        </g-row>
        <g-row gutter="10">
            <g-col span="6"><div>6</div></g-col>
            <g-col span="6"><div>6</div></g-col>
            <g-col span="6"><div>6</div></g-col>
            <g-col span="6"><div>6</div></g-col>
        </g-row>
        <g-row gutter="10">
            <g-col span="4"><div>4</div></g-col>
            <g-col span="4"><div>4</div></g-col>
            <g-col span="4"><div>4</div></g-col>
            <g-col span="4"><div>4</div></g-col>
            <g-col span="4"><div>4</div></g-col>
            <g-col span="4"><div>4</div></g-col>
        </g-row>
        <p><strong>代码</strong></p>
        <pre><code>{{content2}}</code></pre>
        <h2>设置 offset</h2>
        <p><strong>预览</strong></p>
        <g-row gutter="10">
            <g-col span="8"><div>8</div></g-col>
            <g-col span="8"  offset="8"><div>8</div></g-col>

        </g-row>
        <g-row gutter="10">
            <g-col span="6"><div>6</div></g-col>
            <g-col span="6"  offset="3"><div>6</div></g-col>
            <g-col span="6"  offset="3"><div>6</div></g-col>
        </g-row>
        <g-row gutter="10">
            <g-col span="4"><div>4</div></g-col>
            <g-col span="4" offset="4"><div>4</div></g-col>
            <g-col span="4"><div>4</div></g-col>
            <g-col span="4" offset="4"><div>4</div></g-col>
        </g-row>
        <p><strong>代码</strong></p>
        <pre><code>{{content3}}</code></pre>
    </div>
</template>
<style scoped>
* {
  box-sizing: border-box;
}
.row {
  margin-bottom: 16px;
}
.col > div {
  height: 40px;
  border: 1px solid grey;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #eee;
}
</style>
<script>
import GRow from "../../../src/row";
import GCol from "../../../src/col";
export default {
  components: { GRow, GCol },
  data() {
    return {
      content1: `
      * {box-sizing: border-box;}
                <g-row>
            <g-col span="8"><div>8</div></g-col>
            <g-col span="8"><div>8</div></g-col>
            <g-col span="8"><div>8</div></g-col>
        </g-row>
        <g-row>
            <g-col span="6"><div>6</div></g-col>
            <g-col span="6"><div>6</div></g-col>
            <g-col span="6"><div>6</div></g-col>
            <g-col span="6"><div>6</div></g-col>
        </g-row>
        <g-row>
            <g-col span="4"><div>4</div></g-col>
            <g-col span="4"><div>4</div></g-col>
            <g-col span="4"><div>4</div></g-col>
            <g-col span="4"><div>4</div></g-col>
            <g-col span="4"><div>4</div></g-col>
            <g-col span="4"><div>4</div></g-col>
        </g-row>
        <g-row>
            <g-col span="2"><div>2</div></g-col>
            <g-col span="2"><div>2</div></g-col>
            <g-col span="2"><div>2</div></g-col>
            <g-col span="2"><div>2</div></g-col>
            <g-col span="2"><div>2</div></g-col>
            <g-col span="2"><div>2</div></g-col>
            <g-col span="2"><div>2</div></g-col>
            <g-col span="2"><div>2</div></g-col>
            <g-col span="2"><div>2</div></g-col>
            <g-col span="2"><div>2</div></g-col>
            <g-col span="2"><div>2</div></g-col>
            <g-col span="2"><div>2</div></g-col>
        </g-row>
                `
        .replace(/^ {8}/gm, "")
        .trim(),
      content2: `
    * {box-sizing: border-box;}
        <g-row gutter="10">
            <g-col span="8"><div>8</div></g-col>
            <g-col span="8"><div>8</div></g-col>
            <g-col span="8"><div>8</div></g-col>
        </g-row>
        <g-row gutter="10">
            <g-col span="6"><div>6</div></g-col>
            <g-col span="6"><div>6</div></g-col>
            <g-col span="6"><div>6</div></g-col>
            <g-col span="6"><div>6</div></g-col>
        </g-row>
        <g-row gutter="10">
            <g-col span="4"><div>4</div></g-col>
            <g-col span="4"><div>4</div></g-col>
            <g-col span="4"><div>4</div></g-col>
            <g-col span="4"><div>4</div></g-col>
            <g-col span="4"><div>4</div></g-col>
            <g-col span="4"><div>4</div></g-col>
        </g-row>
        `
        .replace(/^ {8}/gm, "")
        .trim(),
      content3: `<g-row gutter="10">
            <g-col span="8"><div>8</div></g-col>
            <g-col span="8"  offset="8"><div>8</div></g-col>

        </g-row>
        <g-row gutter="10">
            <g-col span="6"><div>6</div></g-col>
            <g-col span="6"  offset="3"><div>6</div></g-col>
            <g-col span="6"  offset="3"><div>6</div></g-col>
        </g-row>
        <g-row gutter="10">
            <g-col span="4"><div>4</div></g-col>
            <g-col span="4" offset="4"><div>4</div></g-col>
            <g-col span="4"><div>4</div></g-col>
            <g-col span="4" offset="4"><div>4</div></g-col>
        </g-row>`.replace(/^ {8}/gm,'')
    };
  }
};
</script>