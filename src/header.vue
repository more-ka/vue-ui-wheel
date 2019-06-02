<template>
    <div class="header">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'GuLuHeader'
    }
</script>
<style lang="scss" scoped>
    .header{
        background: gray;
        height:15vh;
    }
</style>