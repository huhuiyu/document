import Vue from 'vue';
import tools from '../js/tools';

// 日期格式化
Vue.filter('formatDate', function(value, format) {
  return value ? tools.formatDate(value, format) : '';
});