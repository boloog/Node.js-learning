const db = require('../config/database')

const options = {

}

// 模型字段
const schema = new db.Schema({
  title: {
    type: String  // 类型
  }
}, options)

// 活动模型
const Event = db.model('Event', schema)

module.exports = Event