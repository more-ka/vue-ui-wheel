<template>
    <div class="g-button-group">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name:'GuLuButtonGroup',
        mounted(){
            for(let node of this.$el.children){
                let name = node.nodeName.toLowerCase()
                if(name !== 'button'){
                    console.warn(`g-button-group 的子元素应该是 g-button ,你使用的是 ${name}`)
                }
            }
        }
    }
</script>
<style lang="scss">
    .g-button-group{
        display:inline-flex;
        vertical-align: top;
        >.g-button{
            border-radius: 0;
            &:not(:first-child){
                margin-left:-1px;
            }
            &:first-child{
                border-top-left-radius: 4px;
                border-bottom-left-radius: 4px;
            }
            &:last-child{
                border-top-right-radius: 4px;
                border-bottom-right-radius: 4px;
            }
            &:hover{
                position: relative;
                z-index: 1;
            }
        }


    }
</style>