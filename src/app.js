import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import buttionGroup from './button-group'

Vue.component('g-button',Button)
Vue.component('g-icon',Icon)
Vue.component('g-button-group',buttionGroup)

new Vue({
    el: '#app',
    data:{
        loading1:false,
        loading2:false
    },
})