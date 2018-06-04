const mongoose = require('mongoose')

// 连接数据库的地址 ravent 数据库名 
const uri = 'mongodb://localhost:27017/ravent'
const options = {
  useMongoClient: true
  
}
// 让 mongoose 支持 Promise

mongoose.Promise = global.Promise


mongoose
  .connect(uri, options)
  .then(db => console.log('连接数据库成功了 ！'))
  .catch( error => console.log('连接数据库失败～'))

  // 导出
  module.exports  = mongoose