<template>
  <div>
    <div>
      {{ title }}
    </div>
    <div>
      <input type="text" v-model="info" />
      <button @click="toMd5">md5加密</button>
      <span v-text="md5info"></span>
    </div>
  </div>
</template>
<script>
import md5 from 'js-md5';

export default {
  name: 'TestMD5',
  data() {
    return {
      title: 'MD5测试页面',
      // 原始信息
      info: '',
      // md5加密后信息
      md5info: ''
    };
  },
  methods: {
    toMd5() {
      // 使用第三方库进行md5加密
      this.md5info = md5(this.info);
    }
  }
};
</script>
