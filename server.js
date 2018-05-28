const http = require('http')

var server = http.createServer()

server.on('request', (request, response) => {
  // 响应头部信息 200 头部对象 响应内容类型
  response.writeHead(200, {
    'Content-Type': 'text/html'
  })
  response.end(`<h1> hello ~ </h1>`)
})

server.listen('8080') // 运行 http://localhost：8080