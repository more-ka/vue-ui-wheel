<template>
    <div>
        <g-popover>
            <g-button>上方弹出</g-button>
            <template slot="content">
                弹出内容
            </template>
        </g-popover>
    </div>
</template>

<script>
    import Popover from '../../../src/popover'
    import Button from '../../../src/button'
    export default {
        'g-button': Button,
        'g-popover': Popover
    }
</script>
