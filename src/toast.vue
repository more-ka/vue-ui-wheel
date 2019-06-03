<template>
    <div class="toast">
        <slot></slot>
        <span class="line" v-if="closeButton"></span>
        <span class="close" v-if="closeButton" @click="onClickButton">{{closeButton.text}}</span>
    </div>
</template>
<script>
    export default {
        name: 'GuLuToast',
        props:{
            autoClose:{
                type: Boolean,
                default: true
            },
            autoCloseDelay:{
                type: Number,
                default: 30
            },
            closeButton:{
                type: Object,
                default(){
                    return{text:'关闭',callback:undefined}
                }
            }
        },
        mounted(){
            if(this.autoClose){
                setTimeout(()=>{
                    this.close()
                },this.autoCloseDelay*1000)
            }
        },
        methods:{
            close(){
                this.$el.remove()
                this.$destroy()
            },
            onClickButton(){
                this.close()
                if(this.closeButton && typeof this.closeButton.callback==='function'){
                    this.closeButton.callback()
                }
            }
        }
    }
</script>
<style lang="scss" scoped>
    $font-size: 14px;
    $toast-height:40px;
    $toast-bg:rgba(0,0,0,0.74);
    .toast{
        position: fixed;
        top:0;
        left:50%;
        transition: translateX(-50%);
        color: white;
        padding: 0 16px;
        border-radius: 4px;
        height: $toast-height;
        font-style: $font-size;
        display: flex;
        align-items: center;
        background:$toast-bg;
        box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.50);
        >.line{
            border-left: 1px solid #666;
            height: 100%;
            margin-left: 16px;
            margin-right: 16px;
        }
        >.close{
        }
    }
</style>