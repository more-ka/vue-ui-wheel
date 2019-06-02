<template>
    <div class="toast">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'GuLuToast'
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
        height: $toast-height;
        font-style: $font-size;
        display: flex;
        align-items: center;
        background:$toast-bg;
        box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.50);
    }
</style>