// 公用的工具类js
//<script src="qs.min.js">
import qs from 'qs';
import axios from 'axios';
import jsmd5 from 'js-md5';

let tools = {};

tools.name = '黑暗骑士的工具类';
//md5加密信息
tools.md5 = function(info) {
  return jsmd5(info);
};
// 格式化日期的方法，date为日期信息，可以是时间戳（数值）或者是Date类型
// format为格式，不给默认为yyyy-MM-dd hh:mm:ss
tools.formatDate = function(date, format) {
  // 日期参数必须填写
  if (!date) {
    return '';
  }
  format = format ? format : 'yyyy-MM-dd hh:mm:ss';
  // typeof 对象：获取对象的类型名称
  // 对象 instanceof 类型：判断对象是否为指定类型
  console.log('js类型判断操作符', typeof date, date instanceof Date, format);
  // 日期类型的校验
  if (typeof date != 'number' && !(date instanceof Date)) {
    console.log(date + '的类型不匹配');
    return '';
  }
  // 统一转换成Date
  if (typeof date == 'number') {
    let time = new Date();
    time.setTime(date);
    date = time;
  }
  // 处理格式化
  let result = format.replace('yyyy', date.getFullYear());
  result = result.replace('MM', date.getMonth() + 1);
  result = result.replace('dd', date.getDate());
  result = result.replace('hh', date.getHours());
  result = result.replace('mm', date.getMinutes());
  result = result.replace('ss', date.getSeconds());
  return result;
};
// 服务器地址
tools.serverUrl = 'https://huhuiyu.top/teach-demo-service';
// 本地服务器地址
// serverUrl: 'http://127.0.0.1:20000',
// token本地保存key
tools.serverTokenKey = 'top.huhuiyu.demo.key';
// 保存应答信息中的token
tools.saveToken = function(data) {
  if (data && data.token) {
    localStorage.setItem(tools.serverTokenKey, data.token);
  }
};
tools.loadToken = function() {
  let token = localStorage.getItem(tools.serverTokenKey);
  return token ? token : '';
};
//封装ajax请求,url：api地址，params：json参数，
//callback:应答回调function，method：可选参数，默认为post
tools.ajax = function(url, params, callback, method) {
  console.log('ajax请求参数：', url, params, callback, method);
  // 补全url
  url = tools.serverUrl + url;
  // 处理参数
  params = qs.stringify(params, { allowDots: true });
  // method默认处理
  method = method ? method : 'post';
  // ajax请求
  let promise = axios({
    url: url,
    data: params,
    method: method,
    // token需要通过头信息传回服务器
    headers: {
      token: tools.loadToken()
    }
  });
  // 应答结果处理
  promise
    .then(function(resp) {
      console.log('应答结果：', resp.data);
      // 保存token信息
      tools.saveToken(resp.data);
      // 回调处理
      callback(resp.data);
    })
    .catch(function(error) {
      callback({
        code: 500,
        success: false,
        message: '处理发生错误',
        error: error
      });
    });
};

// 新版js的模块导出
export default tools;
