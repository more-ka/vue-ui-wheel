<template>
    <div class="tabs-item" @click="onClick" :class="classes" :data-name="name">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name:'GuLuTabsItem',
        inject: ['eventBus'],
        data(){
            return{
                active: false
            }
        },
        props:{
            disabled:{
                type: Boolean,
                default: false
            },
            name:{
                type: String|Number,
                require: true
            }
        },
        computed:{
            classes(){
                return{
                    active: this.active,
                    disabled: this.disabled
                }
            }
        },
        created(){
            this.eventBus &&
            this.eventBus.$on('update:selected', (name)=>{
                this.active = name === this.name;
            })
        },
        methods:{
            onClick(){
                if(this.disabled){return}
                this.eventBus &&
                this.eventBus.$emit('update:selected',this.name,this)
                this.$emit('click',this)
            }
        }
    }
</script>
<style lang="scss" scoped>
    $color: deepskyblue;
    .tabs-item{
        padding: 0 16px;
        height: 100%;
        display: flex;
        align-items: center;
        cursor: pointer;
        &.disabled{
            background: #eee;
            cursor: no-drop;
        }
        &.active{
            color: $color;
            font-weight: bold;
        }
    }
</style>