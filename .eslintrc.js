var path = require('path')
module.exports = {
  root: true,
  extends: ['eslint:recommended', 'prettier'],
  env: {
    browser: true,
  },
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error', // 不符合 prettier 规则的代码，要进行错误提示（红线）
    'no-console': 'off',
    semi: [0],
    quotes: [1, 'single'],
  },
}
