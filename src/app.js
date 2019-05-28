import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import buttonGroup from './button-group'
import Input from './input'

Vue.component('g-button',Button)
Vue.component('g-icon',Icon)
Vue.component('g-button-group',buttonGroup)
Vue.component('g-input',Input)

new Vue({
    el: '#app',
    data:{
        loading1:false,
        loading2:false,
        message: 'hi',
    },
    methods:{
        inputChange(event){
            console.log(event.target.value);
        }
    }
})


