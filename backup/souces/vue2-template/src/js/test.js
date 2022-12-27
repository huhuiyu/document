// 创建js对象
let test = {};

// 编写属性和方法
test.info = '测试js导入';

test.show = function(info) {
  console.log('测试js导入：', info);
};

// 导出js对象
export default test;
