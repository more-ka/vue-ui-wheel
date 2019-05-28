const expect = chai.expect;
import Vue from 'vue'
import Input from '../src/input'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Input组件', () => {

    it('存在.', () => {
        expect(Input).to.ok
    })
    describe('props',()=>{
        let vm
        const Constructor = Vue.extend(Input)
        afterEach(()=>{
            vm.$destroy()
        })
        it('可以接受 value', () => {
            vm = new Constructor({
                propsData: {
                    value: '姓名'
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.value).to.equal('姓名')
        })
        it('可以接受 disabled', () => {
            vm = new Constructor({
                propsData: {
                    disabled: true
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.disabled).to.equal(true)
        })
        it('可以接受 readonly', () => {
            vm = new Constructor({
                propsData: {
                    readonly: true
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.readOnly).to.equal(true)
        })
        it('可以接受 error', () => {
            vm = new Constructor({
                propsData: {
                    error: '错误'
                }
            }).$mount()
            const useElement = vm.$el.querySelector('use')
            expect(useElement.getAttribute('xlink:href')).to.equal('#i-error')
            const errorMessage = vm.$el.querySelector('.errorMessage')
            expect(errorMessage.innerText).to.equal('错误')
        })
    })
})