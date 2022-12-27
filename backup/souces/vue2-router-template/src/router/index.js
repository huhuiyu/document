import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

// 路由配置信息
const routes = [
  {
    // path表示地址栏访问路径，服务器完整地址加#path，例如http://127.0.0.1:8080/#/,http://127.0.0.1:8080/#/about
    path: '/',
    // name不重要，首字符最好大写，否则编译时会有警告
    name: 'Home',
    // componet表示访问路径对应的vue页面文件
    component: () => import('../views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  }
];

const router = new VueRouter({
  routes
});

export default router;
