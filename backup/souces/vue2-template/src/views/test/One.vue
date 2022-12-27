<template>
  <div>
    {{ title }}
  </div>
</template>
<script>
// 导入js文件，不需要扩展
import test from '../../js/test';

export default {
  name: 'TestOne',
  data() {
    // 使用导入的js对象info属性
    return { title: '测试js导入' + test.info };
  },
  created() {
    // 调用导入的js对象的show方法
    test.show('黑暗骑士');
  }
};
</script>
