var merge = require('webpack-merge')
var prodEnv = require('./prod.env')
var base_api = process.env.BASE_API !== undefined ? `"http://${process.env.BASE_API}"` : '"http://127.0.0.1:8090"'
console.log('api的base_url为：', base_api)

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_API: base_api,
})
