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

describe('Tabs组件', () => {

    it('存在.', () => {
        expect(Tabs).to.ok
    });
    it('可以接受 selected 参数',(done)=>{
        const div = document.createElement('div');
        document.body.appendChild(div);
        div.innerHTML = `
        <g-tabs selected="animal">
        <g-tabs-head>
            <g-tabs-item name="women">美女</g-tabs-item>
            <g-tabs-item name="animal">萌宠</g-tabs-item>
            <g-tabs-item name="sports">体育</g-tabs-item>
        </g-tabs-head>
        <g-tabs-body>
            <g-tabs-pane name="women">美女相关</g-tabs-pane>
            <g-tabs-pane name="animal">萌宠相关</g-tabs-pane>
            <g-tabs-pane name="sports">体育相关</g-tabs-pane>
        </g-tabs-body>
    </g-tabs>
        `;
        const vm = new Vue({
            el: div
        });
        vm.$nextTick(()=>{
            let x = vm.$el.querySelector(`.tabs-item[data-name="animal"]`);
            expect(x.classList.contains('active')).to.be.true
            done()
        })
    })

})