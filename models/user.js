const db = require('../config/database')

const options = {

}

// 模型字段  用户模型
const schema = new db.Schema({
  userName: {
    type: String,  // 类型
    required: true
  },
  password: {
    type: String,  // 类型
    required: true
  }
}, options)

// 用户模型
const User = db.model('User', schema)

module.exports = User