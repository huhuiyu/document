<template>
  <div>
    <div class="text-center pd10"><span class="iconfont">&#xe60b;</span> {{ title }}</div>
    <hr />
    <div>
      <span>md5测试：</span>
      <input type="text" v-model="md5" v-focus="md5focus" />
      <br />
      <span>tools加密结果：{{ md5info }}</span>
      <br />
      <span>tools加密结果：{{ md5info2 }}</span>
      <br />
      <a href="https://cmd5.com/" target="_blank">一个md5加密工具网站</a>
    </div>
    <hr />
    <div>
      <el-button @click="showTime">过滤器显示当前时间</el-button>
      {{ now | formatDate }}
      -
      {{ now | formatDate('yyyy年MM月dd日 hh:mm:ss') }}
    </div>
    <hr />
    <div>
      浏览器信息：
      <pre v-html="browserInfo"></pre>
    </div>
  </div>
</template>
<script>
import tools from '../../js/tools';
export default {
  name: 'TestTools',
  data() {
    return {
      title: '工具类演示页面',
      md5: 'abc',
      md5focus: true,
      browserInfo: tools.formatJson(tools.getBrowserInfo(), true),
      now: new Date().getTime()
    };
  },
  computed: {
    md5info() {
      // 通过工具类处理md5加密
      return tools.md5(this.md5);
    },
    md5info2() {
      // 通过插件处理md5加密
      return this.$md5(this.md5);
    }
  },
  methods: {
    showTime() {
      this.now = new Date().getTime();
      this.$message({ message: tools.formatDate(this.now), showClose: true });
    }
  }
};
</script>
