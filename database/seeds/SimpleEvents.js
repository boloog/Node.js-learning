const data = require("./SimpleEvents.json")

const Event = require("../../models/event")

// 插入数据
Event.insertMany(data)
  .then( () => console.log('数据处理成功'))
 

// node database/seeds/SimpleEvents.js 插入json数据
// node database/read.js 读取数据