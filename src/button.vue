<template>
    <button class="g-button" :class="{[`icon-${iconPosition}`]:true}">
        <svg v-if="icon" class="icon">
        <use :xlink:href=`#i-${icon}`></use>
    </svg>
        <div class="content">
            <slot></slot>
        </div>
    </button>
</template>
<script>
    export default {
        props:['icon','iconPosition']
    }
</script>
<style lang="scss">
    .g-button{
        font-size: var(--font-size);
        height: var(--button-height);
        padding: 0 1em;
        display:inline-flex;
        justify-content: center;
        align-items: center;
        border: 1px solid var(--border-color);
        border-radius: var(--border-radius);
        background: var(--button-bg);
        vertical-align: middle;
        >.content{order:2;}
        >.icon{order:1;margin-right: .4em;}
        &:hover{border-color:var(--border-color-hover);}
        &:active{background-color: var(--button-active-bg);}
        &:focus{outline:none;}
        &.icon-right{
            >.content{order:1;}
            >.icon{order:2;margin-right: 0;margin-left: .4em;}
        }
    }

</style>

