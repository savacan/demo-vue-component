import Vue from 'vue'
import Hello from './component/Hello'

const toRegister = (el) => {
    let instance;
    return {
      mount: () => {
        console.log('vue component mount function is called')
        instance = new Vue({el: el, render: h => h(Hello)})
      },
      unmount: () => instance && instance.$destroy()
    }
  }
  
  const { registry } = window
  if (registry) {
    console.log('registry is ready')
    registry.define('vueComponent-common', toRegister)
  } else {
    console.log('registry is undefined')
    new Vue({el: document.getElementById('vueComponent-common'), render: h=>h(Hello)})
  }
  