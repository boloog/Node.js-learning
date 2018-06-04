// const db = require('./config/database')


const Event = require('../models/event')

const event1 = new Event({
  title: 'Mongodb 数据库练习'
})

event1.save()
  .then( document => console.log(document) )
  .catch( error => console.log( error ) )
 
  // { _id: 5b155798e61f1d9a0d1ca657, title: 'Mongodb 数据库练习', __v: 0 }