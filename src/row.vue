<template>
    <div class="row" :style="rowStyle" :class="rowClass">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name:'GuLuRow',
        props:{
            gutter:{
                type: [Number,String]
            },
            align:{
                type: String,
                validator(value){
        return ['left','right','center'].indexOf(value) >= 0
                 }
            }
        },
        mounted(){
            this.$children.forEach((vm)=>{
                vm.gutter = this.gutter
            })
        },
        computed:{
            rowStyle(){
                let {gutter} = this;
                return {
                    marginLeft:-gutter/2+'px',
                    marginRight:-gutter/2+'px'
                }
            },
            rowClass(){
                let {align} = this;
                return [align && `align-${align}`]
            }
        }
    }
</script>
<style lang="scss" scoped>
    .row{
        display: flex;
        height: 40px;
        margin-bottom: 20px;
        flex-wrap: wrap;
        &.align-left{
            justify-content: flex-start;
        }
        &.align-right{
            justify-content: flex-end;
        }
        &.align-center{
            justify-content: center;
        }
    }
</style>