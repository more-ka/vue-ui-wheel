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
          if(this.$refs.contentWrapper &&
              (this.$refs.contentWrapper === e.target || this.$refs.contentWrapper.contains(e.target)))
          { return }
              this.close()
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
    $border-radius: 4px;
.popover {
  display: inline-block;
  vertical-align: top;
  margin: 200px;
  position: relative;
}
.content-wrapper {
    position: absolute;
    border-radius: $border-radius;
    left: 0;
    border: 1px solid black;
    padding: 0.5em 1em;
    /*box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);*/
    filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.5));
    background: white;
    transform: translateY(-100%);
    margin-top: -16px;
    max-width: 16em;
    word-break: break-all;
}
    .content-wrapper::before,.content-wrapper::after{
        position: absolute;
        display: block;
        content:'';
        border: 10px solid transparent;
        width: 0;
        height: 0;
    }
    .content-wrapper::before {
        border-top-color: black;
        top: 100%;
    }
    .content-wrapper::after{
        border-top-color: white;
        top:calc(100% - 1px);
    }
</style>