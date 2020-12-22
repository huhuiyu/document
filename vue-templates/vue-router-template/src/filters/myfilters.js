// src/filters/myfilters.js
// 自定义filter（过滤器）
// 导入vue核心api
import Vue from 'vue';
import tools from '../js/tools';

// 第一步：定义filter
Vue.filter('formatDate', function(value, format) {
  // 过滤器的第一个参数，就是vue页面传入的值（也就是 | formatDate前面的对象值）
  // 记住：在页面上调用时，只需要传入2-n位置的参数，因为第一个固定为值
  console.log('filter formatDate:', value);
  return tools.formatDate(value, format);
});
