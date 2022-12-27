// 测试页面路由配置
const routes = [
  {
    path: '/test/ajax',
    name: 'TestAjax',
    component: () => import('../views/test/Ajax.vue')
  },
  {
    path: '/test/tools',
    name: 'TestTools',
    component: () => import('../views/test/Tools.vue')
  }
];

export default routes;
