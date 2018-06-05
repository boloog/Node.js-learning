const Event = require('../models/event')

// 查看数据
const index = (request, response) => {
  Event.find()
    .then(documents => response.send(documents))
}

// 写入数据
const store = (request, response) => {
  // console.log(request.body)

  const event = new Event({
    title: request.body.title
  })

  event.save()
    .then(document => response.send(document))
}

// 获取数据 http://localhost:3000/api/events/5b155a459de5979af91127a8
const show = (request, response) => {
  const id = request.params.id

  Event.findById(id)
    .then(document => response.send(document))
}

// 更新当前传入的ID信息，并返回最新内容
// http://localhost:3000/api/events/5b155a459de5979af91127a8 PATCH 写 json 数据
const update = (request, response) => {
  const id = request.params.id
  const body = {
    title: request.body.title
  }
  
  Event.findByIdAndUpdate(id, { $set: body}, { new: true} )
    .then(document => response.send(document))
}


// 删除数据操作 
// http://localhost:3000/api/events/5b155a459de5979af91127a8 DELETE
const destroy = (request, response) => {
  const id = request.params.id

  Event.findByIdAndRemove(id)
    .then(document => response.send(document))
}

module.exports = {
  index,
  store,
  show,
  update,
  destroy
}


// 使用 postmen 请求 http://localhost:3000/api/events
// 返回 数据
// {
//   "message": "hello events ~"
// }
