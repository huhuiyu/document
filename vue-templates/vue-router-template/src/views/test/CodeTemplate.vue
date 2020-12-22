<template>
  <div>
    <div>{{ title }}</div>
    <div>
      模板所在文件夹：C:\Users\系统用户名\AppData\Roaming\Code\User\snippets
    </div>
    <div>
      <label>
        模板名称：
        <input type="text" placeholder="请输入模板名称" v-model="info.name" />
      </label>
      <br />
      <label>
        scope(发生作用的文件类型)：
        <input type="text" placeholder="请输入scope" v-model="info.scope" />
      </label>
      <br />
      <label>
        触发代码：
        <input type="text" placeholder="请输入触发代码" v-model="info.prefix" />
      </label>
      <br />
      <label>
        模板代码：
        <textarea cols="80" rows="10" v-model="info.body" placeholder="请输入模板代码内容"></textarea>
      </label>
      <br />
      <label>
        描述：
        <input type="text" placeholder="请输入模板描述信息" v-model="info.description" />
      </label>
      <br />
    </div>
    <div>
      模板内容：
    </div>
    <pre>{{ result }}</pre>
  </div>
</template>
<script>
export default {
  name: 'CodeTemplate',
  data() {
    return {
      title: 'vscode代码模板生成工具',
      info: {
        name: '',
        scope: '',
        prefix: '',
        body: '',
        description: ''
      }
    };
  },
  computed: {
    result() {
      let key = this.info.name;
      let template = {};
      let body = this.info.body;
      // 处理body格式
      let bodys = body.split('\n');

      template[key] = {
        scope: this.info.scope,
        prefix: this.info.prefix,
        description: this.info.description,
        body: bodys
      };

      return template;
    }
  }
};
</script>
