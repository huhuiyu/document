<template>
  <div>
    <!-- 可以使用导入的css样式了 -->
    <div class="text-center pd10">{{ title }}</div>
    <hr />
    <!-- 测试iconfont效果 -->
    <div class="text-center font">
      <span class="iconfont">&#xe6a8;</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CssTest',
  data() {
    return { title: 'css演示页面' };
  }
};
</script>
<style scoped>
/* 导入公用css */
@import '../../css/common.css';
/* 导入iconfont样式 */
@import '../../css/iconfont/iconfont.css';
/* 页面样式 */
.font {
  font-size: 2rem;
}
</style>
