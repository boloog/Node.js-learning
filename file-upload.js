const express = require('express')
const app = express()

// 处理表单
const multer = require('multer')
const upload = multer({
  dest: 'uploads/'
})

// 处理单个文件上传
app.post('/profile', upload.single('avatar'), (request, response, next) => {
  response.send(request.file)
})
// 处理多个文件上传  3个
app.post('/photos/upload', upload.array('photos', 3), (request, response, next) => {
  response.send(request.files)
})

// 上传任意文件 3个数量
// app.post('/fields/upload', upload.fields([{ name: 'photos', maxCount: 3}]), (request, response, next) => {
//   response.send(request.file)
// })




app.listen(8080, () => {
  console.log(`监听端口：http://localhost:8080`)
})


// http://localhost:8080/profile
// {
//   "avatar": 'T180.jpg'
// }


// 文件字段名  原文件名 编码 类型 上传目录 上传后的名字 上传后的地址  文件大小
// {
//   "fieldname": "avatar",
//   "originalname": "head.png",
//   "encoding": "7bit",
//   "mimetype": "image/png",
//   "destination": "uploads/",
//   "filename": "c481d906d625d4a334c1ceabb8fdb21b",
//   "path": "uploads/c481d906d625d4a334c1ceabb8fdb21b",
//   "size": 24603
// }