// src/directives/mydirectives.js
// 自定义指令
import Vue from 'vue';

// 第一步，定义指令
Vue.directive('focus', {
  // inserted表示指令被加入的到vue页面元素时触发
  // el参数是指令作用的元素，binding是绑定的指令信息,其中的value就是绑定值
  inserted(el, binding) {
    console.log('mydirective focus:', el, binding);
    if (binding.value) {
      el.focus();
    }
    // el.setAttribute('placeholder', '指令修改的属性');
  },
  // update指令的绑定值发生变化时触发
  update(el, binding) {
    console.log('mydirective focus:', el, binding);
    // 如果更新的值没有变化，就不需要动作
    if (binding.oldValue == binding.value) {
      return;
    }
    if (binding.value) {
      el.focus();
    }
  }
});
