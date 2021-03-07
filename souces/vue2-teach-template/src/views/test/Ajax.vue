<template>
  <div>
    <div> {{ title }}</div>
    <div>
      <input type="text" v-model="echo" placeholder="发送给服务器的信息" />
      <button @click="ajax">发送</button>
      <button @click="pluginsAjax">插件模式发送</button>
      <pre>{{ result }}</pre>
    </div>
  </div>
</template>
<script>
import server from '../../js/server';
export default {
  name: 'TestAjax',
  data() {
    return {
      title: 'ajax请求封装演示页面',
      // 发送给服务器的参数
      echo: '',
      // 应答结果
      result: {}
    };
  },
  methods: {
    ajax() {
      let app = this;
      // 使用封装的ajax调用后端接口
      server.ajax('/', { echo: this.echo }, function(data) {
        app.result = data;
      });
    },
    pluginsAjax() {
      this.$ajax('/', { echo: this.echo }, function(data) {
        this.result = data;
      });
    }
  }
};
</script>
