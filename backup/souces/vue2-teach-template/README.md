# vue2.x上课用模板项目

- 使用方式
  - 复制本项目
  - 修改项目(目录)名称
  - 修改`public`目录中的页面基本信息和网站logo
  - 修改`src/css/iconfont/`目录中的`iconfont.css`为自己的项目样式链接
  - 修改`package.json`中的项目`name`(名称)以及`version`(版本号)
  - 执行`npm install`初始化项目
  - 执行`npm run serve`开发项目
- 开发说明
  - 路由配置分配到`router`目录中的不同文件中，例如`test.js`都是测试功能页面，路由路径都是test开头
  - ajax请求的使用请查看`views/test/Ajax.vue`
  - iconfont，公用css，工具类，自定义指令，自定义过滤器，饿了么ui的使用请查看`views/test/Tools.vue`
