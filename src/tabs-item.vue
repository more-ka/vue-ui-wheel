<template>
    <div class="tabs-item">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        props:{
            disabled:{
                type: Boolean,
                default: false
            }
        }
    }
</script>
<style>
    .tabs-item{

    }
</style>