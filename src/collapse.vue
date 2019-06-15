<template>
    <div class="collapse">
        <slot></slot>
    </div>
</template>

<script>
    import Vue from 'vue'

    export default {
        name: "collapse",
        props: {
            selected: {
                type: String
            }
        },
        data() {
            return {
                eventBus: new Vue()
            }
        },
        provide() {
            return {
                eventBus: this.eventBus
            }
        },
        mounted() {
            this.eventBus.$emit('update:selected', this.selected);
            this.eventBus.$on('update:selected',(name)=>{
                console.log(name)
                this.$emit('update:selected',name)
            })
        }
    }
</script>

<style lang="scss" scoped>
    $border-radius: 4px;
    .collapse {
        border-radius: $border-radius;
        border: 1px solid gray;
    }
</style>