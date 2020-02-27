export const ComponentA = {
  provide () {
    return {
      theme: this.theme
    }
  },
  data () {
    return {
      theme: {
        color: 'green'
      }
    }
  },
  template: `
      <div style="text-align: center">
        <h1 :style="{ color: theme.color }">A</h1>
        <button @click="changeColor">A变色</button>
        <slot></slot>
      </div>
    `,
  methods: {
    changeColor (color) {
      this.theme.color = this.theme.color === 'red' ? 'green' : 'red'
    }
  }
}

export const ComponentB = {
  inject: ['theme'],
  template: `
      <div>
        <h2 :style="{ color: theme.color }">B</h2>
        <slot></slot>
      </div>
    `
}

export const ComponentC = {
  inject: ['theme'],
  template: `
      <div>
        <h2 :style="{ color: theme.color }">C</h2>
        <slot></slot>
      </div>
    `
}

export const ComponentD = {
  inject: ['theme'],
  template: `
      <div>
        <h2 :style="{ color: theme.color }">D</h2>
        <button @click="changeColor">changeColorD</button>
        <slot></slot>
      </div>
    `,
  methods: {
    changeColor () {
      this.theme.color = this.theme.color === 'red' ? 'green' : 'red'
    }
  }
}
export const tplElement = function (level, innerHTML) {
  return {
    inject: ['theme'],
    render (h) {
      return h(`h${level}`, { ref: innerHTML, style: { color: this.theme.color } }, [ innerHTML, this.$slots.default])
    }
  }
}

export const ComponentE = tplElement(3, 'E')
export const ComponentF = tplElement(3, 'F')
export const ComponentG = tplElement(3, 'G')
export const ComponentH = tplElement(3, 'H')
export const ComponentI = tplElement(3, 'I')
