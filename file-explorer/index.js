// Module dependencies.

let fs = require('fs'); // 同步和异步API模块

 // 获取当前目录的文件列表 [ 'index.js', 'package-lock.json', 'package.json' ]

console.log(fs.readdirSync(__dirname)); // 同步获取

function async (err, files) {
  console.log(files);
}
fs.readdir(__dirname, async ); // 异步获取

