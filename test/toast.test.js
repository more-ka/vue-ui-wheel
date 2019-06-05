const expect = chai.expect;
import Vue from 'vue'
import Toast from '../src/toast'

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe('toast 组件', () => {
    it('存在.', () => {
        expect(Toast).to.ok
    })
    describe('props',()=>{
        it('接受 autoClose',(done)=>{
            let div = document.createElement('div')
            document.body.appendChild(div)
            const Constructor = Vue.extend(Toast)
            const vm = new Constructor({
                propsData: {
                    autoClose: 1
                }
            }).$mount(div)
            expect(document.body.contains(vm.$el)).to.eq(true)
            vm.$on('close',()=>{
                expect(document.body.contains(vm.$el)).to.eq(false)
                done()
            })
        })
        it('接受 closeButton',(done)=>{
            const callback = sinon.fake();
            const Constructor = Vue.extend(Toast)
            const vm = new Constructor({
                propsData: {
                    closeButton: {
                        text: '关掉它',
                        callback
                    }
                }
            }).$mount()
            let closeButton = vm.$el.querySelector('.close')
            expect(closeButton.textContent.trim()).to.eq('关掉它')
            setTimeout(()=>{
                closeButton.click()
                expect(callback).to.have.been.called
                done()
            },200)
        })
        it('接受 enableHtml',()=>{
            const Constructor = Vue.extend(Toast)
            const vm = new Constructor({
                propsData: {enableHtml: true}
            })
            vm.$slots.default = ['<strong id="test">hi</strong>']
            vm.$mount()
            let strong = vm.$el.querySelector('#test')
            expect(strong).to.exist
        })
        it('接受 position',()=>{
            const Constructor = Vue.extend(Toast)
            const vm = new Constructor({
                propsData: {position: 'bottom'}
            }).$mount()
            let strong = vm.$el.querySelector('#test')
            expect(vm.$el.classList.contains('position-bottom')).to.eq(true)
        })
    })
})
const callback = sinon.fake();
