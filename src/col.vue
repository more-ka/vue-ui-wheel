<template>
    <div class="col" :class="[`col-${span}`]">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name:'GuLuCol',
        props:{
            span:{
                type:[Number,String]}
        }
    }
</script>
<style lang="scss" scoped>
    .col{
        width:50%;
        height: 100%;
        background: lightblue;
        border: 1px solid lightslategrey;
        $class: col-;
        @for $n from 1 through 24 {
            &.#{$class}#{$n} {
                width: ($n/24)*100%;
            }
        }
    }
</style>