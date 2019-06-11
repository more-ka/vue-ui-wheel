<template>
    <div class="popover" @click.stop="onClick">
        <div ref="contentWrapper" class="content-wrapper" v-if="visible"  @click.stop>
            <slot name="content"></slot>
        </div>
        <div ref="buttonWrapper">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
  name: "GuLuPopover",
  data() {
    return { visible: false };
  },
  methods: {
    onClick() {
      this.visible = !this.visible;
      if (this.visible === true) {
        setTimeout(() => {
            document.body.appendChild(this.$refs.contentWrapper)
            let {left,top} = this.$refs.buttonWrapper.getBoundingClientRect()
            this.$refs.contentWrapper.style.left = left+window.scrollX+'px'
            this.$refs.contentWrapper.style.top = top+window.scrollY+'px'
            let eventHandler = ()=>{
                this.visible = false;
                document.removeEventListener('click',eventHandler)
            }
            document.addEventListener("click", eventHandler);
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.popover {
  display: inline-block;
  vertical-align: top;
  margin: 200px;
  position: relative;
}
.content-wrapper {
    position: absolute;
    left: 0;
    border: 1px solid #eee;
    padding: 8px;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
    transform: translateY(-100%);
}
</style>