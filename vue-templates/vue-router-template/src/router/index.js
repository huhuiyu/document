import Vue from 'vue';
import VueRouter from 'vue-router';
// 测试路由配置
import test from './test';
// 错误路由配置
import error from './error';

Vue.use(VueRouter);
// 错误处理的路由一定要在最后concat
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  }
]
  .concat(test)
  .concat(error)
  .concat([
    {
      // *表示任意路由地址，所以本配置一定要在最后
      path: '*',
      // 匹配地址后会转到/error/404路由文件
      redirect: '/error/404'
    }
  ]);

const router = new VueRouter({
  routes
});

export default router;
