import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import buttonGroup from './button-group'
import Input from './input'
import Row from './row'
import Col from './col'
import Layout from './layout'
import Header from './Header'
import Sider from './sider'
import Content from './content'
import Footer from './footer'
import Toast from './toast'
import plugin from './plugin'
import Tabs from './tabs'
import TabsItem from './tabs-item'
import TabsBody from './tabs-body'
import TabsPane from './tabs-pane'
import TabsHead from './tabs-head'
import Popover from './popover'
import Collapse from './collapse'
import CollapseItem from './collapse-item'

Vue.component('g-button',Button);
Vue.component('g-icon',Icon);
Vue.component('g-button-group',buttonGroup);
Vue.component('g-input',Input);
Vue.component('g-row',Row);
Vue.component('g-col',Col);
Vue.component('g-layout',Layout);
Vue.component('g-header',Header);
Vue.component('g-sider',Sider);
Vue.component('g-content',Content);
Vue.component('g-footer',Footer);
Vue.component('g-toast',Toast);
Vue.component('g-tabs',Tabs);
Vue.component('g-tabs-head',TabsHead);
Vue.component('g-tabs-body',TabsBody);
Vue.component('g-tabs-item',TabsItem);
Vue.component('g-tabs-pane',TabsPane);
Vue.component('g-popover',Popover);
Vue.component('g-collapse',Collapse);
Vue.component('g-collapse-item',CollapseItem);

Vue.use(plugin);

new Vue({
    el: '#app',
    data:{
        selectedTab: 'sports'
    },
    created(){

    },
    methods:{
        showToast(){
            this.$toast('很多很多的文字',{
                position: 'middle',
                enableHtml: false,
                closeButton: {
                    text: '朕已阅',
                    callback(){console.log('朕已阅')}
                },
                autoClose: 3,
            })
        }
    }
});


