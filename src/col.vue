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
        methods:{
            createClass (obj,str=''){
                if(!obj){return []}
                let array = [];
                if(obj.span){  array.push(`col-${str}${obj.span}`)}
                if(obj.offset){  array.push(`offset-${str}${obj.offset}`)}
                return array
            }
        },
        computed:{
            colClass(){
                let {span,offset,ipad,narrowPc,pc} = this;
                let createClass = this.createClass;
                return [
                    ...createClass({span,offset}),
                    ...createClass(ipad,'ipad-'),
                    ...createClass(narrowPc,'narrow-pc-'),
                    ...createClass(pc,'pc-'),
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
        @media(min-width:577px){
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
        @media(min-width:769px){
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