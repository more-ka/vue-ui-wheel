<template>
    <div>
        <g-input value="普通输入框"></g-input>
        <g-input :disabled="true" value="disabled输入框"></g-input>
        <g-input :readonly="true" value="readonly输入框"></g-input>
    </div>
</template>

<script>
    import Input from '../../../src/input'
    export default {
        components:{
            'g-input': Input
        }
    }
</script>
