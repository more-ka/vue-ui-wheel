<template>
    <div class="row">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name:'GuLuRow'
    }
</script>
<style lang="scss" scoped>
    .row{
        display: flex;
        height: 80px;
        margin-bottom: 20px;
    }
</style>