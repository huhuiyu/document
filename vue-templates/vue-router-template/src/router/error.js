// 错误相关相关路由配置
const routers = [
  // 404错误页
  {
    path: '/error/404',
    name: 'Error404',
    component: () => import('../views/error/Error404.vue')
  }
];

export default routers;
