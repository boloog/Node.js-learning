const http = require('http')

var options = {
  protocol: 'http:',
  hostname: 'api.douban.com',
  port: '80',
  method: 'GET',
  path: '/v2/movie/top250'
}

var responseData = ''

var request = http.request( options, (response) => {
  // console.log(response)
  console.log(response.statusCode) // 成功
  console.log(response.headers)   // 头部信息

  // 请求设置编码 返回data数据（不是二进制）
  response.setEncoding('utf8')
  response.on('data', (chunk) => {
    responseData +=chunk
  })
  response.on('end', () => {
    JSON.parse(responseData).subjects.map( (item) => {
      console.log( item.title )
    })
  })

})

request.on('error', (error) => {
  console.log(error)
})

request.end()



const fs = require('fs')
const zlib = require('zlib')

// 读取文件流 不存在就报错
var fileReadStream = fs.createReadStream('data.json')
var fileWriteStream = fs.createWriteStream('data.json.gz')

// 打包文件 并读取文件流
fileWriteStream.on('pipe', (source) => {
  console.log(source)
}) 

// 打包文件 并读取文件流
fileReadStream
  .pipe(zlib.createGzip())
  .pipe(fileWriteStream)


var count = 0
fileReadStream.once('data', (chunk) => {
  console.log(chunk.toString());

  // fileWriteStream.write(chunk)
})


fileReadStream.on('data', (chunk) => {
  console.log(`${ ++count }接受到：${chunk.length}`)
  
})

fileReadStream.on('end', () => {
  console.log(`--- 结束 ---`)
})

fileReadStream.on('error', (error) => {
  console.log(error)
})



// 循环删除文件 
fs.readdirSync('logs').map((file) => {
  fs.unlink(`logs/${file}`, (error) => {
    if (error) {
      console.log(error)
    } else {
      console.log(`成功的删除了文件：${file}`);
    }
  })
})

// 删除目录
fs.rmdir('logs', (error) => {
  if (error) {
    console.log(error)
  } else {
    console.log('成功的删除了目录：logs');
  }
})


// 重命名目录或文件
fs.rename('logs/hello.log', 'logs/greeting.log', (error) => {
  if (error) {
    console.log(error)
  } else {
    console.log('重名名成功');
  }
})


// 列出目录里的东西
fs.readdir('logs', (error, files) => {
  if (error) {
    console.log(error)
  } else {
    console.log(files);
  }
})



//读取
fs.readFile('logs/hello.log', 'utf-8', (error, data) => {
  if (error) {
    console.log(error)
  } else {
    // toString() 转换二进制
    // console.log(data.toString());
    // 或者添加字符编码
    console.log(data);
  }
})

// 写入文件
fs.writeFile('logs/hello.log', '您好 ~ \n', (error) => {
  if (error) {
    console.log(error)
  } else {
    console.log('成功写入文件')
  }
})

// 后添加写入
fs.appendFile('logs/hello.log', 'hello ~ \n', (error) => {
  if (error) {
    console.log(error)
  } else {
    console.log('成功写入文件')
  }
})





// 创建目录
fs.mkdir('logs', (error) => {
  if (error) {
    console.log(error)
  } else {
    console.log('成功创建目录')
  }
})

// 查看 index.js  返回结果
fs.stat('index.js', (error, stats) => {
  if (error) {
    console.log(error)
  } else {
    console.log(stats);
    console.log(`文件：${stats.isFile()}`)
    console.log(`目录：${stats.isDirectory()}`)
  }
})














// events 事件操作
// const EventEmitter = require('events')

// class Player extends EventEmitter {}

// var player = new Player()

// // player.on('play', (track) => {
//   console.log(`正在播放: 《${track}》`)
// })

// // 只执行一次事件 once
// player.once('play', (track) => {
//   console.log(`正在播放: 《${track}》`)
// })

// player.emit('play', '光辉岁月')
// player.emit('play', '海阔天空')






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