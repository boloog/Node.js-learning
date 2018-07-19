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

Route.get('/posts', () => 'List posts')

http://127.0.0.1:3333/posts/    post
Route.post('/posts', () => 'Post data')

// http://127.0.0.1:3333/posts/10
Route.get('/posts/:id', ({ params }) => {
  return `You're watching post ${ params.id }`
})