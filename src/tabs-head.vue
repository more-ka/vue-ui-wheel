<template>
    <div class="tabs-head" ref="head">
        <slot></slot>
        <div class="line" ref="line"></div>
        <div class="actions-wrapper">
            <slot name="actions"></slot>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'GuLuTabsHead',
        inject:['eventBus'],
        mounted(){
            this.eventBus.$on('update:selected',(item,vm)=>{
                let {width,left} = vm.$el.getBoundingClientRect();
                let left2 =  this.$refs.head.getBoundingClientRect().left;
                this.$refs.line.style.width = `${width}px`;
                this.$refs.line.style.marginLeft = `${left-left2}px`
                
            })
        }
    }
</script>
<style lang="scss" scoped>
    $tab-height: 40px;
    .tabs-head{
        display: flex;
        height: $tab-height;
        align-items: center;
        justify-content: flex-start;
        border-bottom:1px solid lightgrey;
        position: relative;
        >.line{
            position: absolute;
            bottom: 0;
            border-bottom: 2px solid deepskyblue;
            transition: all .3s;
        }
        >.actions-wrapper{
            margin-left: auto;
        }
    }
</style>