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
import spies from 'chai-spies'
chai.use(spies)

const expect = chai.expect
//  svg
{
    let div = document.createElement('div')
    document.body.querySelector('#app').appendChild(div)
    const constructor = Vue.extend(Button)
    const button = new constructor({
        propsData:{
            icon:'settings'
        }
    })
    button.$mount(div)
    let use = button.$el.querySelector('use')
    let href = use.getAttribute('xlink:href')
    expect(href).to.be.eq('#i-settings')
    button.$el.remove()
    button.$destroy()
}
// loading
{
    const div = document.createElement('div')
    document.querySelector('#app').appendChild(div)
    const constructor = Vue.extend(Button)
    const button = new  constructor({
        propsData:{
            icon:'settings',
            loading:true
        }
    })
    button.$mount(div)
    let use = button.$el.querySelector('use')
    let href = use.getAttribute('xlink:href')
    expect(href).to.eq('#i-loading')
    button.$el.remove()
    button.$destroy()
}
//  正常状态,svg order为1
{
    const div = document.createElement('div')
    document.querySelector('#app').appendChild(div)
    const constructor = Vue.extend(Button)
    const button = new  constructor({
        propsData:{
            icon:'settings'
        }
    })
    button.$mount(div)
    let svg = button.$el.querySelector('svg')
    let {order} = window.getComputedStyle(svg)
    expect(order).to.eq('1')
    button.$el.remove()
    button.$destroy()
}

//  loading 状态,svg order为2
{
    const div = document.createElement('div')
    document.querySelector('#app').appendChild(div)
    const constructor = Vue.extend(Button)
    const button = new  constructor({
        propsData:{
            icon:'settings',
            iconPosition:'right'
        }
    })
    button.$mount(div)
    let svg = button.$el.querySelector('svg')
    let {order} = window.getComputedStyle(svg)
    expect(order).to.eq('2')
    button.$el.remove()
    button.$destroy()
}
//  click事件
{
    const constructor = Vue.extend(Button)
    const gButton= new  constructor({
        propsData:{
            icon:'settings'
        }
    })
    gButton.$mount()
    let spy = chai.spy(()=>{})
    gButton.$on('click',spy)
    let button = gButton.$el
    button.click()
    expect(spy).to.have.been.called()
}