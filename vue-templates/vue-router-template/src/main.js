import Vue from 'vue';
import App from './App.vue';
import router from './router';

// 导入自定义指令和过滤器
import './directives/mydirectives';
import './filters/myfilters';

// 导入插件
import myplugins from './plugins/myplugins';
// 使用插件
Vue.use(myplugins);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
