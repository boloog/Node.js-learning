## Docker  创建 MongoDB数据

- 下载打开 `Docker` 配置 加速器   // https://2hme1tag.mirror.aliyuncs.com

## 创建一个 mongo 容器

- 终端运行 `docker run -d --name mongo mongo`  在 `Docker` 镜像下安装mongo 

## 与数据库交互的界面 mongo shell

- `docker exec -it mongo bash`  进入mongo里面
- `mongo` 进入 mongo
- `help`  
- `db` 查看当前使用的数据库
- `use boloog-mongo` 进入使用数据库
- `exit` 退出

## CRUD 插入文档 

- `use boloog-mongo` 进入使用数据库
- `db.albums.insertOne({ title: '2018年' })`  插入一条文档
- `db.albums.find()`  显示刚刚插入的文档  `_id` 自动插入
- `db.albums.insertMany([{ title: '5月'}, { title: '30日' }])` 插入多条文档
- `db.albums.find()`  显示刚刚插入的文档  `_id` 自动插入
- `db.albums.insert([{ title: '23点' }, { title: '20分' }])`   返回写入的结果 ，批量写入的结果  nInserted 2 表示插入两条结果
- `db.albums.find()`   一共五条信息

## 修改文档 

// 更新满足条件参数
```
db.albums.updateMany(
  {},
  {
    $set: { artist: '柏龙'}
  }
) 

{ "_id" : ObjectId("5b0ec02f156bfc20004e96c3"), "title" : "2018年", "artist" : "柏龙" }
{ "_id" : ObjectId("5b0ec0d6156bfc20004e96c4"), "title" : "5月", "artist" : "柏龙" }
{ "_id" : ObjectId("5b0ec0d6156bfc20004e96c5"), "title" : "30日", "artist" : "柏龙" }
{ "_id" : ObjectId("5b0ec136156bfc20004e96c6"), "title" : "23点", "artist" : "柏龙" }
{ "_id" : ObjectId("5b0ec136156bfc20004e96c7"), "title" : "20分", "artist" : "柏龙" }

```
// 更新一个文档，多个 也只会更新一个
```
db.albums.updateOne(
  {
    title: '2018年'
  },
  {
    $set: { artist: 'ninghao'}
  }
)

{ "_id" : ObjectId("5b0ec02f156bfc20004e96c3"), "title" : "2018年", "artist" : "ninghao" }
{ "_id" : ObjectId("5b0ec0d6156bfc20004e96c4"), "title" : "5月", "artist" : "柏龙" }
{ "_id" : ObjectId("5b0ec0d6156bfc20004e96c5"), "title" : "30日", "artist" : "柏龙" }
{ "_id" : ObjectId("5b0ec136156bfc20004e96c6"), "title" : "23点", "artist" : "柏龙" }
{ "_id" : ObjectId("5b0ec136156bfc20004e96c7"), "title" : "20分", "artist" : "柏龙" }

```

## 删除文档

// 删除一个
```
db.albums.deleteOne({ artist: 'ninghao'})

{ "_id" : ObjectId("5b0ec0d6156bfc20004e96c4"), "title" : "5月", "artist" : "柏龙" }
{ "_id" : ObjectId("5b0ec0d6156bfc20004e96c5"), "title" : "30日", "artist" : "柏龙" }
{ "_id" : ObjectId("5b0ec136156bfc20004e96c6"), "title" : "23点", "artist" : "柏龙" }
{ "_id" : ObjectId("5b0ec136156bfc20004e96c7"), "title" : "20分", "artist" : "柏龙" }

```

删除一条
```
db.albums.remove({ title: '5月'}, true)

{ "_id" : ObjectId("5b0ec0d6156bfc20004e96c5"), "title" : "30日", "artist" : "柏龙" }
{ "_id" : ObjectId("5b0ec136156bfc20004e96c6"), "title" : "23点", "artist" : "柏龙" }
{ "_id" : ObjectId("5b0ec136156bfc20004e96c7"), "title" : "20分", "artist" : "柏龙" }
```

删除多条
```
db.albums.remove({ })

```

## 查询文档

- 先添加数据 `db.movies.insertMany([])`
- `db.movies.find({ year: '2018' })`  查询是2018的字段
- `db.movies.find({ year: '2018' }, { title: 1, year: 1})`  返回包含两个字段的数据和 _id { _id: 0 } 会去掉_id
- `db.movies.find({ year: '2018' }, { title: 1, year: 1}).size()` 查看当前数量多少
- `db.movies.find({ year: '2018' }, { title: 1, year: 1}).skip(10)` 跳过前10 后面的数据
- `db.movies.find({ year: '2018' }, { title: 1, year: 1}).limit(3)` 查看三条结果
- `db.movies.find({ year: '2018' }, { title: 1, year: 1}).limit(3).skip(3)` 多条件查看文档
- `db.movies.find({ title: 1, year: 1, "rating.average": 1, _id: 0 }).sort({ "rating.average": -1 })`  降序排列

## 查询操作符

- `db.movies.find({ "rating.average": { $gt: 9.5 } })` 大于 9.5的数据 `$gt` `$lt`

## 查询包含和不包含

- `db.movies.find({ genres: { $in: ["犯罪"] }}, { title: 1, genres: 1, _id: 0} )`    查询包含犯罪的数据 

- `db.movies.find({ genres: { $nin: ["犯罪"] }}, { title: 1, genres: 1, _id: 0} )`    查询包不含犯罪的数据 
