// 导入qs和axios库
import qs from 'qs';
import axios from 'axios';

let server = {};

// 后台服务基础地址
server.baseUrl = 'https://huhuiyu.top/teach-demo-service';

// 封装ajax请求
// url：后端api地址，param：发送给后端请求的参数（json格式），通过qs转换成查询字符串格式
// cb：ajax请求回调处理函数，method：请求方式（默认为post）
server.ajax = function(url, param, cb, method) {
  // 转换成查询字符串格式, allowDots: true参数表示将多级json转换成.连接格式，例如{a:{b:'cc'}}转换为a.b=cc
  param = qs.stringify(param, { allowDots: true });
  // 默认是post
  method = method ? method : 'post';
  // 完整后台服务请求地址
  url = server.baseUrl + url;
  let promise = axios({
    method: method,
    url: url,
    data: param
  });

  promise
    .then(function(resp) {
      // 正确应答结果回调处理
      cb(resp.data);
    })
    .catch(function(error) {
      // 错误应答结果回调处理
      cb({ code: 500, success: false, message: '访问数据失败！', error: error });
    });
};

export default server;
