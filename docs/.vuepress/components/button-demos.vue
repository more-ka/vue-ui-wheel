<template>
    <div>
        <p>
            <strong>预览</strong>
        </p>
        <g-button>默认按钮</g-button>
        <g-button icon="settings">默认按钮</g-button>
        <g-button icon="settings" icon-position="right">默认按钮</g-button>
        <g-button :loading="true">默认按钮</g-button>
        <p>
            <strong>代码</strong>
        </p>
        <pre><code>{{content}}</code></pre>
    </div>
</template>
<script>
    import Button from '../../../src/button'

    export default {
        components: {
            'g-button': Button
        },
        data() {
            return {
                content:`
<g-button>默认按钮</g-button>
<g-button icon="settings">默认按钮</g-button>
<g-button icon="settings" icon-position="right">默认按钮</g-button>
<g-button :loading="true">默认按钮</g-button>
                    `.trim()
            }
        }
    }
</script>
