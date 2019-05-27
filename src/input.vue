<template>
    <div class="wrapper">
        <input :value="value" :disabled="disabled" :readonly="readonly" type="text">
    </div>
</template>
<script>
    export default {
        name: 'GuLuInput',
        props:{
            value:{
                type: String
            },
            disabled:{
                type: Boolean,
                default: false
            },
            readonly:{
                type: Boolean,
                default: false
            }
        }
    }
</script>
<style lang="scss" scoped>
    $height:32px;
    $border-color:#999;
    $border-color-hover: #666;
    $border-radius: 4px;
    $button-bg-active: #eee;
    $box-shadow:rgba(0,0,0,0.5);
    $font-size: 14px;
    .wrapper{
        font-size: $font-size;
        display: inline-block;
        >input{
            line-height: $height;
            border:1px solid $border-color;
            font-size: 14px;
            border-radius: $border-radius;
            padding: 0 0.5em;
            font-style: inherit;
            &:hover{
                border:1px solid $border-color-hover;
            }
            &:focus{
                box-shadow: inset 0 1px 3px $box-shadow;
                outline:none;
            }
            &[disabled],&[readonly]{
                border-color:#bbb;
                color: #bbb;
                cursor: not-allowed;
            }

        }
    }
</style>