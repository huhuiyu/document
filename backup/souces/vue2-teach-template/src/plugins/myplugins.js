import server from '../js/server';
import tools from '../js/tools';

let myplugin = {};

myplugin.install = function(Vue) {
  // ajax插件封装
  Vue.prototype.$ajax = function(url, param, callback, method) {
    server.ajax(url, param, callback, method, this);
  };
  // md5加密插件封装
  Vue.prototype.$md5 = function(info) {
    return tools.md5(info);
  };
};
export default myplugin;
