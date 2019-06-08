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
                this.eventBus.$emit('update:selected',this.name)
            }
        }
    }
</script>
<style lang="scss" scoped>
    .tabs-item{
        padding: 0 16px;
        border: 1px solid lightgray;
        height: 32px;
        display: flex;
        align-items: center;
        &.active{
            background: #eee;
        }
    }
</style>