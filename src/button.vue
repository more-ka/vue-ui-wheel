<template>
    <button class="g-button" :class="{[`icon-${iconPosition}`]:true}" @click="$emit('click')">
        <g-icon v-if="icon && loading !== true" class="icon" :name="icon">{{icon}}</g-icon>
        <g-icon name="loading" class="loading icon" v-if="loading"></g-icon>
        <div class="g-button-content">
            <slot></slot>
        </div>
    </button>
</template>
<script>
    import Icon from './icon'
    export default {
        name:'GuLuButton',
        //props:['icon','iconPosition']
        components:{ 'g-icon':Icon
        },
        props: {
            icon: {},
            loading:{ type:Boolean, default: false },
            iconPosition: { type: String, default: 'left',
                validator: function (value) {
                    return value === 'left' || value === 'right'
                }
            }
        }
    }
</script>
<style lang="scss">
        $button-height: 32px;
        $font-size: 14px;
        $button-bg: white;
        $button-bg-active: #eee;
        $border-radius: 4px;
        $border-color: #999;
        $color: #333;
        $border-color-hover: #666;
    body {font-size: 14px}
        @keyframes rotate { 0%{transform:rotate(0deg)} 100%{transform:rotate(360deg)} }
        .g-button {
            margin-top: -7px;
        font-size: $font-size; height:  32px; padding: 0 .5em; display: inline-flex; 
        justify-content: center; align-items: center; border: 1px solid #d1cdcd; 
        border-radius: 4px; background: white; vertical-align: top;
        > .g-button-content { order: 2; }
        > .icon { order: 1; margin-right: .2em; }
        &:hover { border-color: #666; }
        &:active { background-color: #E5E5E5; }
        &:focus { outline: none; }
        &.icon-right {
            > .g-button-content { order: 1; }
            > .icon { order: 2; margin-right: 0; margin-left: .2em; } }
        .loading{ animation: rotate 2s infinite linear; }
    }

</style>

