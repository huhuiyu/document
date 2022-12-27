<template>
  <div>
    <h1>{{ title }}</h1>
    <div>
      <el-button type="danger" @click="openDialog">按钮</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TestElementUI',
  data() {
    return {
      title: '饿了么ui测试'
    };
  },
  methods: {
    openDialog() {
      this.$message({ message: '饿了么UI', showClose: true });
    }
  }
};
</script>
