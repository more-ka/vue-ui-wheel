<template>
    <div class="collapseItem">
        <div class="title" @click="toggle">
            {{title}}
        </div>
        <div title="content" v-if="open">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "collapse-item",
        props:{
            title:{
                type: String,
                required: true
            }
        },
        data(){
            return {
                open: false
            }
        },
        mounted(){
            this.eventBus &&
          this.eventBus.$on('update:selected',(vm)=>{
              if(vm !== this){
                  this.close()
              }
          })
        },
        methods:{
          close(){
              this.open = false
          },
            toggle(){
                if(this.open){
                    this.open = false
                }else{
                    this.open = true
                    this.eventBus &&
                    this.eventBus.$emit('update:selected',this)
                }
            }
        },
        inject:['eventBus']
    }
</script>

<style lang="scss" scoped>
    .collapseItem{
        $border-radius: 4px;
        .title{
            border:1px solid gray;
            margin-top: -1px;
            margin-left: -1px;
            margin-right: -1px;
            min-height: 32px;
            padding: 0 8px;
            display: flex;
            align-items: center;
        }
        &:first-child{
            .title{
                border-top-left-radius: $border-radius;
                border-top-right-radius: $border-radius;
            }
        }
        &:last-child{
            margin-bottom: -1px;
            .title:last-child{
                border-bottom-left-radius: $border-radius;
                border-bottom-right-radius: $border-radius;
            }
        }
    }
</style>