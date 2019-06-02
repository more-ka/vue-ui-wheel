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

Vue.component('g-button',Button)
Vue.component('g-icon',Icon)
Vue.component('g-button-group',buttonGroup)
Vue.component('g-input',Input)
Vue.component('g-row',Row)
Vue.component('g-col',Col)
Vue.component('g-layout',Layout)
Vue.component('g-header',Header)
Vue.component('g-sider',Sider)
Vue.component('g-content',Content)
Vue.component('g-footer',Footer)
Vue.component('g-toast',Toast)
Vue.use(plugin)

new Vue({
    el: '#app',
    data:{
        loading1:false,
        loading2:false,
        message: 'hi',
    },
    methods:{
        showToast(){
            this.$toast('我是 toast')
        }
    }
})


