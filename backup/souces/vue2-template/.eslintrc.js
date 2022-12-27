module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', 'eslint:recommended', '@vue/prettier'],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    // 发布项目时不要输出console
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // 发布项目时不要启用debugger
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // 格式化使用prettier
    'prettier/prettier': 0,
    // 单引号
    quotes: [2, 'single'],
    // function前面不要多余的空格
    'space-before-function-paren': [0, 'always'],
    // 分号
    semi: [2, 'always']
  }
};
