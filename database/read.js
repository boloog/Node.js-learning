const Event = require('../models/event')

// 查询数据
Event.find()
  .then( documents => console.log('\nfind 所有的文档: \n', documents))

  // 指定标题
Event.find({ title: "数据库 学习" })
  .then( documents => console.log('\nfind 指定标题的文档: \n', documents))
 
// 指定标题 只读一次
Event.findOne({ title: "数据库 学习" })
  .then( document => console.log('\nfind 指定标题的文档: \n', document))

// 指定_id 只读一次
Event.findOne({ _id: "5b155a459de5979af91127a8" })
  .then( document => console.log('\nfind 指定 _id 的文档: \n', document))
 
// 指定_id 只读一次
Event.findOne({ _id: "5b155a459de5979af91127a8" })
  .then( document => console.log('\nfindById: \n', document))
 

// node database/read.js

  // [ { _id: 5b155798e61f1d9a0d1ca657, title: 'Mongodb 数据库练习', __v: 0 },
  // { _id: 5b155903c9ea849a8872110f, title: 'Mongodb 数据库练习', __v: 0 } ]