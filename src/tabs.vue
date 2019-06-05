<template>
    <div class="tabs">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name:'GuLuTabs',
        props: {
            selected: {
                type: Boolean,
                required: true
            },
            direction: {
                type: String,
                default: 'horizontal',
                validator(value){
                    return ['horizontal','vertical'].indexOf(value) >= 0
                }
            }
        },
        created(){
          // this.$emit('update:selected','xxxx')
        }
    }
</script>
<style>
    .tabs{

    }
</style>