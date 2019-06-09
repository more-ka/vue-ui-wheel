<template>
    <div class="tabs-item" @click="xxx" :class="classes">
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
                    active: this.active
                }
            }
        },
        created(){
            this.eventBus.$on('update:selected', (name)=>{
                this.active = name === this.name;
            })
        },
        methods:{
            xxx(){
                this.eventBus.$emit('update:selected',this.name,this)
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
        &.active{
            background: #eee;
            color: $color;
            font-weight: bold;
        }
    }
</style>