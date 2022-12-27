import Vue from 'vue';
import App from './App.vue';
import router from './router';

// 导入自定义指令
import './directives/mydirectives';
// 导入自定义过滤器
import './filters/myfilters';

// 导入elementUi
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// 导入自定义插件
import MyPlugins from './plugins/myplugins';
Vue.use(MyPlugins);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
