const Event = require('../models/event')

let id = '5b155a459de5979af91127a8'

let body = {
  title: '我来更新title'
}
//
Event.findByIdAndUpdate(id, { $set: body}, { new: true })
  .then( document => console.log(document))

// 运行 node database/update.js 