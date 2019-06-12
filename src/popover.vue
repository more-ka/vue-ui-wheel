<template>
    <div class="popover" @click="onClick" ref="popover">
        <div ref="contentWrapper" class="content-wrapper" v-if="visible">
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
      positionContent(){
          document.body.appendChild(this.$refs.contentWrapper)
          let {left,top} = this.$refs.buttonWrapper.getBoundingClientRect()
          this.$refs.contentWrapper.style.left = left+window.scrollX+'px'
          this.$refs.contentWrapper.style.top = top+window.scrollY+'px'
      },
      onClickDocument(e){
          if(this.$refs.popover &&
              (this.$refs.popover === e.target || this.$refs.popover.contains(e.target)))
          { return }
              this.close()
              console.log('关闭111');
              console.log(e.target);
          console.log(this.$refs.popover);

      },
      open(){
          this.visible = true
          this.$nextTick(() => {
              this.positionContent()
              document.addEventListener("click", this.onClickDocument);
          });
      },
      close(){
          this.visible = false;
          document.removeEventListener('click',this.onClickDocument)
      },
    onClick(event) {
        if(this.$refs.buttonWrapper.contains(event.target)){
            console.log('button')
            if (this.visible === true) {
                this.close()
            }else{
                this.open()
            }
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