import express from 'express'
import morgan from "morgan" // 中间件
import path from 'path' // 路径模块
import bodyParser from 'body-parser' // 把用户在表单提交的内容放在body里面


const app = express()

// morgan 记录请求的日记的中间件
app.use(morgan('dev'))

// 使用 body-parser 中间件
app.use(bodyParser.urlencoded({ extended: false }))

// 评论内容 
let comments = []
// 本地变量
app.locals.comments = comments


// 使用views 当前目录下的 views 目录下存储
app.set('views', path.relative(__dirname, 'views'))
// 设置视图引擎 ejs
app.set('view engine', 'ejs')

// 跟目录渲染
app.get('/', (request, response) => {
  // 渲染视图 views/index.ejs
  response.render('index')
})

// comments 路由 提交回来
app.get('/comments', (request, response) => {
  // 渲染视图 views/index.ejs
  response.render('comments/index')
})



// comments new 路由
app.get('/comments/new', (request, response) => {
  // 渲染视图 views/index.ejs
  response.render('comments/new')
})



// 定义 post 请求的路由  
app.post('/comments/new', (request, response) => {
  if(!request.body.comment){
    response.status(400).send('Do you have something to say ?')
    return 
  }
  comments.push({
    comment: request.body.comment,
    created_at: new Date()
  })
  // 响应完重定向到 comments
  response.redirect('/comments')
})



app.listen(3000, ()=>{
  console.log('Listen port: 3000')
})


// - `npm run express ` 
// - 浏览器打开 `http://localhost:3000/` 显示 `hello ~`
// - `http://localhost:3000/hello` 可以在终端查看到 请求的日志

// GET / 304 0.322 ms - -
// GET /hello 404 1.235 ms - 144
