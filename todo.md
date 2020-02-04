👀 TODO
- 自定义组件实现v-model、sync是什么
- 异步组件、动态组件（componen :is）、keep-alive组件、处理便捷情况
-  

✨ 新知识
- 使用组件时，如果传入了props以外的属性，将直接原封不动的将这个属性挂载在组件根元素上
- Avoid mutating a prop directly since the value will be overwritten whenever the parent component re-renders. Instead, use a data or computed property based on the prop's value. Prop being mutated: "del"
  	避免直接饮用父组件的值，因为，父组件重新渲染时，该值会被覆盖，建议使用基于props的computed或者data
- 为组件添加事件，事件如何emit，父组件如何接收
    键盘回车：   v-on:keyup.enter="""
  	修饰符：      阻止冒泡v-on:click.stop
- 一些缩写：
    a. v-slot: #
    b. v-on: @
    v-bind: :
