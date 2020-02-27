import { ComponentA, ComponentB, ComponentC, ComponentD, ComponentE, ComponentF, ComponentG, ComponentH, ComponentI } from './3.15-provide-inject-components.js'

const vm = new Vue({
  el: '#app',
  provide () {
    return {
      theme: this.theme
    }
  },
  components: {
    ComponentA,
    ComponentB,
    ComponentC,
    ComponentD,
    ComponentE,
    ComponentF,
    ComponentG,
    ComponentH,
    ComponentI
  }
})
window.vm = vm