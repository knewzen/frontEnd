var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

console.log('api的base_url为：', process.env.BASE_API)

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_API: `"http://${process.env.BASE_API}"` || '"http://127.0.0.1:3000"',
})
