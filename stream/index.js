let fs = require('fs');

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
        process.stdout.write('   \033[33mEnter your choice: \033[39m ')
        process.stdin.resume(); // 等待用户输入
        process.stdin.setEncoding('utf8'); // 设置流编码为 utf8
      } else {
        file(i)
      }
    });
  }
  file(0);
})