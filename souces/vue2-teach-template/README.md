# vue2.x上课用模板项目

- 使用方式
  - 复制本项目
  - 修改项目(目录)名称
  - 修改public目录中的页面基本信息和网站logo
  - 修改src/css/iconfont/目录中的iconfont.css为自己的项目样式链接
  - 修改package.json中的项目name以及版本号
  - 执行npm install初始化项目
  - 执行npm run serve开发项目
- 开发说明
  - 路由配置分配到router目录中的不同文件中，例如test.js都是测试功能页面，路由路径都是test开头
  - ajax请求的使用请查看views/test/Ajax.vue
  - iconfont，公用css，工具类，自定义指令，自定义过滤器，饿了么ui的使用请查看views/test/Tools.vue
