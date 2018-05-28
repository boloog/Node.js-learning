const greeting = require('./src/greeting')

console.log( greeting.hello() )

// const request = require('request')

// request({
//   url: 'https://api.douban.com/v2/movie/top250',
//   json: true
// }, (error, response, body) => {
//   console.log(JSON.stringify(body, null, 2))
// })