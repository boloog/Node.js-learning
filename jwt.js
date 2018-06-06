const jwt = require('jsonwebtoken')
const fs = require('fs')

const payload = {
  name: 'boloog',
  admin: true
}

// const secret = 'LONG'
// 生成 token
// const token = jwt.sign(payload, secret)

// token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYm9sb29nIiwiYWRtaW4iOnRydWUsImlhdCI6MTUyODI5OTQ0N30.m_DtXd33vqvJaXtfiwhP-Pnl5qR7IFiZGO5SA_o19K0
// console.log(token)

// 验证token 
// jwt.verify(token, secret, (error, decoded) => {
//   if(error){
//     console.log(error.message)
//   }

//   console.log(decoded)
//   // { name: 'boloog', admin: true, iat: 1528299914 }
// })



// 默认算法用的 HS256  RS256
// Private Key 私钥
// Public Key 公钥

// token 目录下生成私钥 ssh-keygen -t rsa -b 2048 -f private.key

// 公钥 openssl rsa -in private.key -pubout -outform PEM -out public.key


const privateKey = fs.readFileSync('./token/private.key')

const token = jwt.sign(payload, privateKey, { algorithm: 'RS256' })

// 和public.key 匹配 说明验证成功
console.log(token)

const publicKey = fs.readFileSync('./token/public.key')

// 验证 publicKey
jwt.verify(token, publicKey, (error, decoded) =>{
    if(error){
    console.log(error.message)
  }
  console.log(decoded)
})