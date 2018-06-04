## 安装MongoDB

- 安装MongoDB `brew install mogodb`
- brew search mongo / choco install mongodb
- 启动 mongod `NonExistentPath: Data directory /data/db not found.,`
- 创建 `sudo mkdir -p /data/db` 
- 修改使用人 `sudo chown -R  longbolong /data/db`
- 执行 `mongod`   没报错启动成功

- 新建  `mongo` 就可以管理数据库了

## MongoDB 图形界面管理软件 Robo 3t
- 搜索 robo `brew search robo`  homebrew/cask/robo-3t
- 安装 `brew install homebrew/cask/robo-3t` / choco install homebrew/cask/robo-3t (WIN)
- 运行应用  `Robo 3T`   我同意 一下步 完成 `Create` `Localhost`
- 保存运行 `Cannot connect to the mongodb at localhost:27017 Error:Network is unreachable` - `Before, you must run` `mongod` OK

## Node.js 与 MongoDB 连接起来，需要 [Mongoose](http://mongoosejs.com/)

- 安装 [node-mongodb-native](https://github.com/mongodb/node-mongodb-native) 或者 `Mongoose` 

## test
- 创建`config/database.js` `db.js` 运行 `node db.js` 端口正确就连接成功。


## 数据模型 
