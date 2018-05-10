let fs = require('fs'),
  stdin = process.stdin,
  stdout = process.stdout;
  // 调用目录中中每个文件
  fs.readdir(process.cwd(), function (err, files) {
    console.log('');
    if (!files.length) {
      return console.log('   \033[31m No files to show!\ 033[39m\n')
    }
  
    console.log(' Select which file or directory you want to see\n')
  
    function file(i) {
      var filename = files[i];
      fs.stat(__dirname + '/' + filename, function (err, stat) {
        if (stat.isDirectory()) {
          console.log(' ' + i + ' \033[36m ' + filename + ' /\033[39m')
        } else {
          console.log(' ' + i + ' \033[90m ' + filename + ' /\033[39m')
        }
        i++;
        if (i == files.length) {
          console.log(' ');
          stdout.write('   \033[33mEnter your choice: \033[39m ')
          stdin.resume(); // 等待用户输入
          stdin.setEncoding('utf8'); // 设置流编码为 utf8
        } else {
          file(i)
        }
      });
    }
    file(0);
  })


// 当显示文件时读取用户输入
function read(){
  console.log(' ');
  stdout.write(' \033[33mEnter your choice: \033[39m ');
  stdin.resume();
  stdin.setEncoding('utf8');

  stdin.on('data', option);

}
// 用户支持的选项调用

function option( data ){
  var filename =  files[Number(data)];
  if(!filename){
    stdout.write(' \033[33mEnter your choice: \033[39m ');
  }else{
    stdin.pause();

    fs.readFile(__dirname + '/' + filename, 'utf8', function(err,data){
      console.log(' ');
      console.log(' \033[90m' + data.replace(/(.*)/g, '   $1') + '\033[39m');
    })
  }
}
