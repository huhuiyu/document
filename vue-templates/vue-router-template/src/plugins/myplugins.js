// 自定义插件
import tools from '../js/tools';
let myplugins = {};

// 必须实现install方法，该方法会传入Vue原型对象
myplugins.install = function(Vue) {
  // 插件封装md5加密
  Vue.prototype.$md5 = function(info) {
    return tools.md5(info);
  };
};

export default myplugins;
