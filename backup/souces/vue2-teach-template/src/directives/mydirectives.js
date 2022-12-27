import Vue from 'vue';

Vue.directive('focus', {
  inserted(el, binding) {
    console.debug('directive:focus-inserted==>', el, binding);
    if (binding.value) {
      el.focus();
    }
  },
  update(el, binding) {
    console.debug('directive:focus-==>update', el, binding);
    if (binding.value) {
      el.focus();
    }
  }
});
