const expect = chai.expect;
import Vue from 'vue'
import Popover from '../src/popover'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Popover组件', () => {
    it('存在.', () => {
        expect(Popover).to.ok
    })
    it('可以设置 position', () => {
        Vue.component('g-popover', Popover)
        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
        <g-popover position="left" ref="xxx">
        <template slot="content">popover内容</template>
        <button>点击</button>
    </g-popover>
        `
        const vm = new Vue({
            el: div
        })
        vm.$el.querySelector('button').click()
        vm.$nextTick(() => {
            const {contentWrapper} = vm.$refs.xxx.$refs
            expect(contentWrapper.classList.contains('position-left')).to.true
        })
    })

})