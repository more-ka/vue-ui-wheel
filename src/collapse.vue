<template>
    <div class="collapse">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "collapse"
    }
</script>

<style lang="scss" scoped>
    $border-radius: 4px;
    .collapse{
        border-radius: $border-radius;
        border:1px solid gray;
    }
</style>