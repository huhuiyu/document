# nodejs安装

- [返回目录](./README.md)

---

- [nodejs官方网址](https://nodejs.org/en/)
- [本地下载地址](https://media.huhuiyu.top/download/node-v18.12.1-x64.msi)

<section class="img-flex-box" >
  <section><img class="lazy-image" data-src="../../images/webfront/nodejs/nodejs-0001.png" alt=""></section>
  <section><img class="lazy-image" data-src="../../images/webfront/nodejs/nodejs-0002.png" alt=""></section>
  <section><img class="lazy-image" data-src="../../images/webfront/nodejs/nodejs-0003.png" alt=""></section>
  <section><img class="lazy-image" data-src="../../images/webfront/nodejs/nodejs-0004.png" alt=""></section>
  <section><img class="lazy-image" data-src="../../images/webfront/nodejs/nodejs-0005.png" alt=""></section>
  <section><img class="lazy-image" data-src="../../images/webfront/nodejs/nodejs-0006.png" alt=""></section>
  <section><img class="lazy-image" data-src="../../images/webfront/nodejs/nodejs-0007.png" alt=""></section>
  <section><img class="lazy-image" data-src="../../images/webfront/nodejs/nodejs-0008.png" alt=""></section>
  <section><img class="lazy-image" data-src="../../images/webfront/nodejs/nodejs-0009.png" alt=""></section>
  <section><img class="lazy-image" data-src="../../images/webfront/nodejs/nodejs-0010.png" alt=""></section>
  <section><img class="lazy-image" data-src="../../images/webfront/nodejs/nodejs-0011.png" alt=""></section>
  <section><img class="lazy-image" data-src="../../images/webfront/nodejs/nodejs-0012.png" alt=""></section>
</section>

- 图中的指令
  - `node -v`查看nodejs版本
  - `npm -v`查看npm版本
- 附加知识点：windows平台npm全局指令错误提示问题处理
  - 执行`npm install --global --production npm-windows-upgrade`安装npm更新工具
  - 管理员身份执行`npm-windows-upgrade`启动npm更新，选择最新版本回车安装即可
- 修改全局安装和缓存配置
  - 修改npm全局安装位置：`npm config set prefix "全局安装路径"`
  - 修改npm全局缓存位置：`npm config set cache "全局缓存路径"`
  - 查看配置信息：`npm config ls`
  - 最后修改环境变量，添加全局安装路径

---

- [nodejs安装](#nodejs安装)

<!-- js处理背景和css样式 -->
<script type="module" src="https://huhuiyu.top/js/github.js"></script>
