'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

const Database = use('Database')
const Route = use('Route')

Route.on('/').render('welcome')


// 添加路由  http://127.0.0.1:3333/hello?name=boloog
// Route.get('/hello', ({ request }) => {
//   return `hello ~ ${ request.input('name') }`
// })


// 添加控制器
// adonis make:controller Hello

// create  app/Controllers/Http/HelloController.js

// 调用控制器 里面的 render 方法
Route.get('/hello', 'HelloController.render' )

// 查看数据表里的所有数据
Route.get('/posts', async () => {
  return await Database.table('posts').select('*')
})
