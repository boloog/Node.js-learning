// 路由 Routes 
// in 《 Node.js：REST 接口 》
// 首先要启动数据 MongoDB 终端运行 mongod

const express = require('express')
const eventRouter = require('./routes/eventRouter')
const app = express()
const port = process.env.PORT || 3000
const bodyParser = require('body-parser') // body json数据

app.use(bodyParser.json())


// http://localhost:3000/api/events  {"message":"hello events ~"}
app.use('/api', eventRouter)

app.get('/', (request, response) => {
  response.send('hello ~')
})

app.listen(port, () => console.log(`监听端口：http://localhost:${port}`))




// const http = require('http')

// var server = http.createServer()

// server.on('request', (request, response) => {
//   // 响应头部信息 200 头部对象 响应内容类型
//   response.writeHead(200, {
//     'Content-Type': 'text/html'
//   })
//   response.end(`<h1> hello ~ </h1>`)
// })

// server.listen('8080') // 运行 http://localhost：8080