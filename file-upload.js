const express = require('express')
const app = express()
// 处理表单
const multer = require('multer')
// 添加 loki数据库
const loki = require('lokijs')

const db = new loki('uploads/uploads.json', {
  persistenceMethod: 'fs'
})

const loadCollection = ( collectionName, db) => {
  return new Promise(resolve => {
    db.loadDatabase({}, () => {
      const collection = db.getCollection( collectionName ) || db.addCollection( collectionName )
      resolve(collection)
    })
  })
}

// 文件上传过滤器
const fileFilter = (request, file, callback) => {
  if(!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)){
    return callback(new Error('images only :)'), false)
  }
  callback(null, true)
}



const upload = multer({
  dest: 'uploads/',
  fileFilter
})




// 处理单个文件上传
app.post('/profile', upload.single('avatar'), async (request, response, next) => {
  // response.send(request.file)
  const collection = await loadCollection('uploads', db)
  const result = collection.insert(request.file)

  db.saveDatabase()
  response.send(result)
})
// 处理多个文件上传  3个
app.post('/photos/upload', upload.array('photos', 3), (request, response, next) => {
  response.send(request.files)
})

// 返回状态
app.use((error, request, next) => {
  response.status(500).send({
    message: error.message
  })
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