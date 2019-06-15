<template>
    <div class="collapse">
        <slot></slot>
    </div>
</template>

<script>
    import Vue from 'vue'
    export default {
        name: "collapse",
        props:{
          single:{
              type: Boolean,
              default: false
          }
        },
        data(){
            return {
                eventBus: new Vue()
            }
        },
        provide(){
            if(this.single){
                return {
                    eventBus: this.eventBus
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    $border-radius: 4px;
    .collapse{
        border-radius: $border-radius;
        border:1px solid gray;
    }
</style>