<template>
    <div class="popover" @click="onClick">
        <div class="content-wrapper" v-if="visible">
            <slot name="content"></slot>
        </div>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "GuLuPopover",
        data(){
            return {visible:false}
        },
        methods:{
            onClick(){
                this.visible = !this.visible
            }
        }
    }
</script>

<style lang="scss" scoped>
    .popover{
        display: inline-block;
        vertical-align: top;
        margin: 200px;
        position: relative;
        >.content-wrapper{
            position: absolute;
            bottom: 120%;
            left: 0;
            border: 1px solid #eee;
            padding: 8px;
            box-shadow: 0 0 3px rgba(0,0,0,0.25);
        }
    }
</style>