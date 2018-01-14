## Node.js 安装与概念
### Window下安装
[Windows Installer](https://nodejs.org/en/download/) _node-v?.?.?-x??.msi_

验证是否安装成功，可以打开`shell`或者通过执行`cmd.exe`打开命令工具并输入 `$ node -version`

如果安装成功，就会显示安装的`Node.js`的版本号

### OS X下安装
[macOS Installer](https://nodejs.org/en/download/) _node-v?.?.?.pkg_

验证是否安装成功，可以打开`shell`或者通过执行`Terminal.app`打开命令工具(或者也可以在Spotlight中输入 "Terminal" 搜索该软件)并输入 `$ node -version`

如果安装成功，就会显示安装的`Node.js`的版本号

### Linux下安装
在 _Amazon Linux_ 中，可以通过如下命令来安装依赖包：
> sudo yum install gcc gcc-c++ openssl-devel curl

在 _Ubuntu_ 中，如下所示：
> sudo apt-get install g++ libssl-dev apache2-utils curl

编译：
在操作系统终端下，运行如下命令：将下面例子中的?替换成最新的Node.js的版本号
> $ curl -o http://nodejs.org/dist/node-v?.?.?.tar.gz
> $ tar -xzvf node-v?.?.?.tar.gz
> $ cd node-v?.?.?
> $ ./configure
> $ make
> $ make test
> $ make install

如果 `make test` 命令报错，建议停止安装，将 `./configure`、`make`以及`make test`命令产生的日志信息发送给Node.js的邮件列表

确保安装成功

打开终端或者类似`XTerm`这样的应用,并输入 `$ node -version`

如果安装成功，就会显示安装的`Node.js`的版本号


Node REPL [Read-Eval-Print Loop](https://zh.wikipedia.org/zh-hans/%E8%AF%BB%E5%8F%96%EF%B9%A3%E6%B1%82%E5%80%BC%EF%B9%A3%E8%BE%93%E5%87%BA%E5%BE%AA%E7%8E%AF)
要运行Node的REPL,在终端输入 node 即可,可以试试运行一些 JavaScript 表达式

> Object.keys(global)

### 执行文件
使用编辑器,新建一个名为`web-server.js`的文件，输入如下内容：
```
var http = require('http');
var server = http.createServer(function(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html'});
  res.end('<h1>Hello Node!</h1>');
});
server.listen(3000);
console.log('> Listening at http://localhost:3000/ \n');
```
使用命令来执行此文件：
> $ node web-server.js

在浏览器中输入 `http://localhost:3000/`
> Hello Node!

以上代码展示了使用Node完成了一个完整的HTTP服务器，来托管一个简单的HTML文档。

### NPM（当前Node.js最新版本就自动把NPM安装好了，无需再手动安装）
Node包管理器可以让项目中轻松地对模块进行管理，下载指定的包，解决包的依赖，运行测试脚本以及安装命令行脚本,使用第三方发布的模块可以提高项目的开发效率。

NPM本身就用Node.js开发的，有二进制包的发布形式（Window下有MSI安装器，Mac下有PKG文件），源码编译安装，使用如下命令：

> $ curl https://www.npmjs.com/install.sh | sh

通过命令检查NPM是否安装成功：
> $ npm --version

安装成功的话，会显示出所安装NPM的版本号 (5.5.1)

### 安装模块
通过NPM安装`colors`模块，新建一个`index.js`文件：

> $ npm init -y // 当前目录生成 package.json 配置文件
> $ npm install colors -S  // 安装模块到开发依赖
> $ touch index.js

模块是否安装成功，可以查看当前目录下是否有node_modules/colors目录。

使用编辑器编辑 `index.js` 文件

> $ vim index.js

添加以下内容:
```
require('colors');
console.log('hello node! '.rainbow);
```

运行index.js文件(显示的文字内容为彩虹色)
> hello node!   

### 自定义模块
首先创建一个`package.json`文件，通过这种方式定义模块有三种好处：
- 方便将项目中的模块分享给其他人，不需要把整个 `node_modules` 目录发给他们，有 `package.json` 之后，其他人运行 `npm install` 就可以把依赖的模块都下载下来。
- 方便记录所依赖模块的版本号。
- 分享更简单，因为有 `package.json` 文件，通过 `npm publish` 就可以将其发布到 NPM库中，供所有人下载使用了。

将项目中 `node_modules` 目录删除，修改 `package.json` 文件
> $ rm -r node_modules
> $ vim package.json

然后修改该文件为：
```
{
  "name": "Node.js-learning",
  "version": "1.0.0",
  "description": "",
  "main": "web-server.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/boloog/Node.js-learning.git"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/boloog/Node.js-learning/issues"
  },
  "homepage": "https://github.com/boloog/Node.js-learning#readme",
  "dependencies": {
    "colors": "1.0.0"
  }
}
```
> $ npm install
> node index // 注意了，这里文件名不需要加上 '.js' 后缀

自定义模块是内部使用的，如果想发布出去，NPM提供了如下方式，可以很方便地发布模块：
> $ npm publish
> $ hello node!

### 安装二进制工具包
