const expect = chai.expect;
import Vue from 'vue'
import Col from '../src/col'

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe('Col 组件', () => {

    it('存在.', () => {
        expect(Col).to.ok
    })
    it('可以接受 span 属性', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                span: 10
            }
        }).$mount(div)
        const element = vm.$el
        expect(vm.$el.classList.contains('col-10')).to.eq(true)
        div.remove()
        vm.$destroy()
    })
    it('可以接受 offset 属性', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                offset: 10
            }
        }).$mount(div)
        const element = vm.$el
        expect(vm.$el.classList.contains('offset-10')).to.eq(true)
        div.remove()
        vm.$destroy()
    })
    it('可以接受 phone 属性', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                ipad: {span:12,offset:1}
            }
        }).$mount(div)
        const element = vm.$el
        expect(vm.$el.classList.contains('col-ipad-12')).to.eq(true)
        expect(vm.$el.classList.contains('offset-ipad-1')).to.eq(true)
        div.remove()
        vm.$destroy()
    })
    it('可以接受 narrowPc 属性', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                narrowPc: {span:12,offset:1}
            }
        }).$mount(div)
        const element = vm.$el
        expect(vm.$el.classList.contains('col-narrow-pc-12')).to.eq(true)
        expect(vm.$el.classList.contains('offset-narrow-pc-1')).to.eq(true)
        div.remove()
        vm.$destroy()
    })
    it('可以接受 pc 属性', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                pc: {span:12,offset:1}
            }
        }).$mount(div)
        const element = vm.$el
        expect(vm.$el.classList.contains('col-pc-12')).to.eq(true)
        expect(vm.$el.classList.contains('offset-pc-1')).to.eq(true)
        div.remove()
        vm.$destroy()
    })
})