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


// 请求：Request
Route.get('/posts', ({ request }) => request.get())

// 
// Route.post('/posts', ({ request }) => request.post())


// http://127.0.0.1:3333/posts?edit=home
// json
// {
// 	"title": "苹果",
// 	"color": "red",
// 	"status": "publish"
	
// }

// Route.post('/posts', ({ request }) => request.all())
// http://127.0.0.1:3333/posts?edit=home
// Route.post('/posts', ({ request }) => request.only(['title', 'color']))
// {
// 	"title": "苹果",
// 	"color": "red"
// }


// Route.post('/posts', ({ request }) => request.except(['title', 'color']))

Route.post('/posts', ({ request }) => request.input('status', 'js'))

