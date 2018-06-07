const User = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
// 查看数据
const store = (request, response) => {
  // console.log( '注册用户')
  const userName = request.body.userName

  // 加密 密码
  bcrypt.hash(request.body.password, 10)
    .then(password => {
      const user = new User({
        userName,
        password
      })

      user.save()
      .then( () => response.send({ message: '注册成功'}))
      .catch( error => response.send(error))

    })
}

const auth = (request, response) => {
  User.findOne({ userName: request.body.userName})
    .then(user => {
      if(!user) {
        return Promise.reject({ message: '没找到用户'})
      }
      // 验证
      bcrypt.compare(request.body.password, user.password)
        .then(result => {
          if( result){
            // 签发 token
            const payload = {
              userName: user.username
            }
            // 密钥
            const secret = 'LONG'
            const token = jwt.sign( payload, secret)

            response.send({ token })
          } else {
            response.status(401).send({ message: '未通过身份验证'})
          }
        })
    })
    .catch( error => response.status(400).send(error))
}

const me = (request, response) => {
  response.send(`hello ~ ${ request.decoded.userName }`)
}

module.exports = {
  store,
  auth,
  me
}


// postman http://localhost:3000/api/users
// {
// 	"userName": "柏龙",
// 	"password": "admin"
// }

// {
//   "message": "注册成功"
// }



// 成功返回 token
// {
//   "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1MjgzODcwMTd9._8Vfiyd0ADaxEWW8zuKf4dCPKyelcn56xqjezR4m_zA"
// }