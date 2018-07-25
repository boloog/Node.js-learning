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
// Route.get('/posts', ({ request }) => request.get())

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

// Route.post('/posts', ({ request }) => request.input('status', 'js'))


// 客户端 collect 可以把对象 变成 数组
// Route.post('/posts', ({ request }) => request.only(['title', 'content']))
// Route.post('/posts', ({ request }) => request.collect(['title', 'content']))

// Form 添加字段和值 
// title[0] title[1]


// Headers 头部信息设定
// Route.get('/posts', ({ request }) => request.headers() )
// 单一获取头部信息 header的方法
Route.get('/posts', ({ request }) => request.header('user-agent') )
// http://127.0.0.1:3333/posts get 
// 返回头部信息
// {
// 	"host": "127.0.0.1:3333",
// 	"user-agent": "insomnia/5.16.6",
// 	"cookie": "XSRF-TOKEN=7a9046039c87ed93b1f694357ec13289Ywell1%2BjiEj3su9fvVjk1lhgDkLa438hJoVfsQip81X7RqedCfPKKGMpWT2mxqyNiJ1sOiA9%2Fowb9kmTIaZY6%2BWOqkMsatqF5jdt3SyCS%2BZhD6lIA9NGUlzbgY5SZTwj; adonis-session=7b21e33bfec68200b54028729f4b805etrITdeGfLEiETLZP38%2BL1oMeFPIziQqHnUnMVyMx4Vigq4HL7wRLxIOsfq%2B%2BAmvM5NXhvy5BD6dpqLtGDZ1uVWOVLhxtNbFH%2FscAirgkiU07r6aSfPHaX2zQ64c0Zpzt; adonis-session-values=723fbfe74e57d1e794cfe70141d317b78BUNgSCxmkf7vKPGzwb7RCEYlvs3iXgbJD6ojzenfha9covCaBFZLaVFK5X57z7%2FUOrHta9aZGuocIOshtuba%2Bjx%2BOr%2FxiIQA2%2FuoKTLZMbJ9cSgIUxf8ObTGHiug0Z4ThxvvS3k1G6cj329md0XOEGqbLaij%2BDbh6BU%2FUZ964o%3D",
// 	"content-type": "multipart/form-data",
// 	"accept": "*/*"
// }
// 浏览器打开 获取头部信息
// {
//   "host": "127.0.0.1:3333",
//   "connection": "keep-alive",
//   "upgrade-insecure-requests": "1",
//   "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36",
//   "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
//   "accept-encoding": "gzip, deflate, br",
//   "accept-language": "zh-CN,zh;q=0.9,en;q=0.8,zh-TW;q=0.7,pt;q=0.6,fr;q=0.5,la;q=0.4",
//   "cookie": "pgv_pvid=7364055550; adonis-session=acfc8e2ee9fc81099ea0c7005fd883a4GyhqBPU0JhdmsCEl8j%2BCNBeJG3KXLRff%2FozBvupGXcRiH7MFu%2FEBytQHwRIEo6EnA5w7Ul7lQetPMZukvp%2F8UZ%2BPRB4YLJFhzTLWplKiRHWyfb1y30BjMgk%2Fg2JdOwDi; XSRF-TOKEN=bfc5c8ca608743c141e2b61436f68066GzaGpRVP2Nwy5rExOsmJ3NPn9ar4m5fDlPd4Ct%2B8dVO0OA6LuI6ZBu5iQ1NHNsjE27I9%2FC6OsLf3juPUwlDh53JVA%2BWgAzv9cq3mm%2B7wo1LVordUcf8k7uYeZRXIGmCS; adonis-session-values=2f866ac30b9cf2019b09ad8f8f8e9a40T9fK9rF%2B5J%2BKywCfCbqxtOvTewHYxHfJQtDWALZXUzjFvFJGYRB%2BPcgQJP3cRPoDpqkB2Dd45J55y%2F2cwdI1a3AExA6O%2BP60wdm4Fg%2FV2%2FPLZSLs5oR3PWIcbb0tANfMpYgCTQjPu8ZZzB9Erxn82E9WysvnzHbRWzNphf%2F32Bc%3D"
// }