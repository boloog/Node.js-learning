




const Event = require('../models/event')

let id = '5b155a459de5979af91127a6'

Event.findByIdAndRemove(id)
  .then( document => console.log(document))

// 运行 node database/delete.js 

