# vuecli导入js

[返回目录](/web/vue-docs/vuecli.md)

---

- [vuecli导入js](#vuecli导入js)
  - [自定义js导入](#自定义js导入)
  - [导入第三方js](#导入第三方js)
  - [简单封装ajax](#简单封装ajax)
  - [图中的一些指令和核心代码](#图中的一些指令和核心代码)

## 自定义js导入

---
![step0001](/web/vue-images/vuecli-0042.png)

---
![step0001](/web/vue-images/vuecli-0043.png)

---
![step0001](/web/vue-images/vuecli-0044.png)

---
![step0001](/web/vue-images/vuecli-0045.png)

## 导入第三方js

---
![step0001](/web/vue-images/vuecli-0046.png)

---
![step0001](/web/vue-images/vuecli-0047.png)

---
![step0001](/web/vue-images/vuecli-0048.png)

---
![step0001](/web/vue-images/vuecli-0049.png)

## 简单封装ajax

---
![step0001](/web/vue-images/vuecli-0050.png)

---
![step0001](/web/vue-images/vuecli-0051.png)

---
![step0001](/web/vue-images/vuecli-0052.png)

---
![step0001](/web/vue-images/vuecli-0053.png)

---
![step0001](/web/vue-images/vuecli-0054.png)

---
![step0001](/web/vue-images/vuecli-0055.png)

## 图中的一些指令和核心代码

- md5加密：`npm install --save js-md5`
- json和query字符串转换：`npm install --save qs`
- ajax框架axios：`npm install --save axios`
- ajax封装代码

```js
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
```
