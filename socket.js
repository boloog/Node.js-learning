import express from 'express'
import morgan from 'morgan'
import path from 'path'
import socketIO from 'socket.io'

// import { request } from 'https';

const app = express()

app.set('views', path.resolve(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(morgan('dev'))

app.get('/', (request, response) => {
  response.render('index')
})

let server = app.listen(3000, () => {
  console.log('Listen port: 3000')
})

// socketIO 服务端
let io = socketIO(server)

io.on('connection', (socket) => {
  console.log('用户已连接...')
  socket.on('disconnect', () => {
    console.log('用户失去连接了。。。')
  })

  socket.on('message', (message) => {
    console.log(message)

    io.emit('message', message)
  })



})