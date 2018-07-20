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

const Route = use('Route')

Route.on('/').render('welcome')

// apiOnly 不需要创建和编辑的路由 only 单独需要的路由 except 设置不需要访问路由
Route.resource('/posts', 'PostController')
  .only(['index', 'show'])
  // .apiOnly()

// 命名路由：Named routes   更换请求路由别名
Route
  .get('/users-a', () => 'List of users.')
  .as('users.index')

// 以上方法创建资源路由的简单方法
//Route.get('/posts', 'PostController.index')
// http://127.0.0.1:3333/posts/    post
//Route.post('/posts', 'PostController.store')
// Route.get('/posts/create', 'PostController.create')

// // http://127.0.0.1:3333/posts/10
// Route.get('/posts/:id', 'PostController.show')


// Route.patch('/posts/:id', 'PostController.update')

// Route.delete('/posts/:id', 'PostController.destroy')


// Route.get('/posts/:id/edit', 'PostController.edit')
