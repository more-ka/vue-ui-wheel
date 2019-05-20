import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import buttonGroup from './button-group'

Vue.component('g-button',Button)
Vue.component('g-icon',Icon)
Vue.component('g-button-group',buttonGroup)

new Vue({
    el: '#app',
    data:{
        loading1:false,
        loading2:false
    },
})

//单元测试

import chai from 'chai'
const expect = chai.expect

const constructor = Vue.extend(Button)
const button = new  constructor({
    propsData:{
        icon:'settings'
    }
})
button.$mount('#test')
let use = button.$el.querySelector('use')
let href = use.getAttribute('xlink:href')
expect(href).to.eq('#i-settings')
console.log(href);