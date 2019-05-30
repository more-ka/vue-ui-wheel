<template>
    <div class="col" :class="colClass" :style="colStyle">
            <slot></slot>
    </div>
</template>
<script>
    let validator = (value)=>{
        let keys = Object.keys(value);
        let valid = true;
        keys.forEach(key=>{
            if(!['span','offset'].includes(key)){
                valid = false
            }
        });
        return valid
    };
    export default {
        name:'GuLuCol',
        props:{
            span:{
                type:[Number,String]
            },
            offset:{
                offset:[Number,String]
            },
            phone:{type: Object,validator,},
            ipad:{type: Object,validator,},
            narrowPc:{type: Object,validator,},
            pc:{type: Object,validator,},
        },
        data(){
            return{
                gutter:0
            }
        },
        computed:{
            colClass(){
                let {span,offset,ipad,narrowPc,pc} = this;
                return [
                    span && `col-${span}`,
                    offset && `offset-${offset}`,
                    ...(ipad && [`col-ipad-${ipad.span}`]),
                    ...(narrowPc && [`col-narrowPc-${narrowPc.span}`]),
                    ...(pc && [`col-pc-${pc.span}`]),
                ]
            },
            colStyle(){
                let {gutter} = this;
                return {
                    paddingLeft:gutter/2+'px',
                    paddingRight:gutter/2+'px'
                }
            }
        }
    }
</script>
<style lang="scss" scoped>
    .col{
        width: 50%;
        height: 100%;
        border: 1px solid lightslategrey;
        $class: col-;
        @for $n from 1 through 24 {
            &.#{$class}#{$n} {
                width: ($n/24)*100%;
            }
        }
        $class: offset-;
        @for $n from 1 through 24 {
            &.#{$class}#{$n} {
                margin-left: ($n/24)*100%;
            }
        }
        @media(min-width:576px) and (max-width:768px){
        $class: col-ipad-;
        @for $n from 1 through 24 {
            &.#{$class}#{$n} {
                width: ($n/24)*100%;
            }
        }
        $class: offset-ipad-;
        @for $n from 1 through 24 {
            &.#{$class}#{$n} {
                margin-left: ($n/24)*100%;
                }
            }
        }
        @media(min-width:769px) and (max-width:992px){
        $class: col-narrowPc-;
        @for $n from 1 through 24 {
            &.#{$class}#{$n} {
                width: ($n/24)*100%;
            }
        }
        $class: offset-narrowPc-;
        @for $n from 1 through 24 {
            &.#{$class}#{$n} {
                margin-left: ($n/24)*100%;
            }
        }
    }
        @media(min-width:993px){
            $class: col-pc-;
            @for $n from 1 through 24 {
                &.#{$class}#{$n} {
                    width: ($n/24)*100%;
                }
            }
            $class: offset-pc-;
            @for $n from 1 through 24 {
                &.#{$class}#{$n} {
                    margin-left: ($n/24)*100%;
                }
            }
        }
    }
</style>