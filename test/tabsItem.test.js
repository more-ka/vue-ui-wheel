const expect = chai.expect;
import Vue from 'vue'
import Tabs from '../src/tabs'
import TabsItem from '../src/tabs-item'
import TabsBody from '../src/tabs-body'
import TabsPane from '../src/tabs-pane'
import TabsHead from '../src/tabs-head'

Vue.component('g-tabs',Tabs);
Vue.component('g-tabs-head',TabsHead);
Vue.component('g-tabs-body',TabsBody);
Vue.component('g-tabs-item',TabsItem);
Vue.component('g-tabs-pane',TabsPane);

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe('TabsItem组件', () => {

    it('存在.', () => {
        expect(TabsItem).to.ok
    });
    it('可以接受 name 属性', () => {
        const Constructor = Vue.extend(TabsItem)
        const vm = new Constructor({
            propsData: {
                name: 'test'
            }
        }).$mount()
        expect(vm.$el.getAttribute('data-name')).to.eq('test')
    })
    it('可以接受 disabled 属性', () => {
        const Constructor = Vue.extend(TabsItem)
        const vm = new Constructor({
            propsData: {
                disabled: true
            }
        }).$mount()
        expect(vm.$el.classList.contains('disabled')).to.true
        const callback = sinon.fake();
        vm.$on('click', callback)
        vm.$el.click()
        expect(callback).to.have.not.been.called
    })

})