// 密码安全
const bcrypt = require('bcrypt')

const password = 'password'

bcrypt.genSalt(10, (error, salt) => {
  console.log('salt:', salt)

  // 用户提交的密码 
  bcrypt.hash(password, salt, (error, hash) => {
    console.log(hash)
  })
})

const hashPassword = '$2b$10$b6BMgmZuSeFBBITPph4kDuDQhzjcr7AOJ.LazpJyVmVVMTkPJp8Ji'

const userInputPassword = 'admin'

// 比较密码
bcrypt.compare(userInputPassword, hashPassword)
  .then( result => console.log(result) )

// salt: $2b$10$ctE7nPND/tSX7Vnc85D6p.
// $2b$10$ctE7nPND/tSX7Vnc85D6p.YtXsB0tkQqvQ25IqvRDADwpmmiNqoPC

// salt: $2b$10$qvSHAPDXDECslmg2MZioVO
// $2b$10$qvSHAPDXDECslmg2MZioVOZCj0CpvBE6Ciwm0JMdG4NQHw6bGCZ7e









// const crypto = require('crypto')
// const hash = crypto.createHash('sha256')

// // bcrypt
// hash.update('password')

// // XohImNooBHFR0OVvjcYpJ3NgPQ1qq73WKhHvch0VQtg=
// console.log( hash.digest('base64'))