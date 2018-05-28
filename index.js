
const EventEmitter = require('events')

class Player extends EventEmitter {}

var player = new Player()

// player.on('play', (track) => {
//   console.log(`正在播放: 《${track}》`)
// })

// 只执行一次事件 once
player.once('play', (track) => {
  console.log(`正在播放: 《${track}》`)
})

player.emit('play', '光辉岁月')
player.emit('play', '海阔天空')






// 倒入模块
// const greeting = require('./src/greeting')

// console.log( greeting.hello() )

// 引入第三方库
// const request = require('request')

// request({
//   url: 'https://api.douban.com/v2/movie/top250',
//   json: true
// }, (error, response, body) => {
//   console.log(JSON.stringify(body, null, 2))
// })