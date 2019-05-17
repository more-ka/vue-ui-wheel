<template>
    <button class="g-button">
        <svg class="icon">
        <use :xlink:href=`#i-${icon}`></use>
    </svg>
        <slot></slot>
    </button>
</template>
<script>
    export default {
        props:['icon']
    }
</script>
<style lang="scss">
    .g-button{
        font-size: var(--font-size);
        height: var(--button-height);
        padding: 0 1em;
        border: 1px solid var(--border-color);
        border-radius: var(--border-radius);
        background: var(--button-bg);
        &:hover{
            border-color:var(--border-color-hover);
        }
        &:active{
            background-color: var(--button-active-bg);
        }
        &:focus{
            outline:none;
        }
    }

</style>

