## Node中的JavaScript

### global对象

在浏览器中，全局对象指的是`window`对象。在`window`对象上定义的任何内容都可以被全局访问到。
比如，`setTimeout`其实就是`window.setTimeout`,`document`其实就是w`indow.document`。

### 模块系统

Node内置了很多实用的模块作为基础的工具集来帮助构建现代应用，包括 `http`、 `net`、 `fs`等。
Node摒弃了采用定义一堆全局变量的方式，转而引入了一个简单但却强大无比的模块系统，模块系统有三个核心的全局对象：`require`、`module`、`exports`。

### 绝对和相对模块

node_modules 查找模块
`require('colors')`
目录中的JavaScript文件模块
`require('./module_a')`
`require('./module_b')`

区别在于
node_modules 模块中找不到 `module_a`、`module_b`两个模块，需要在`require`参数前加上 `/` ; 解决Node未找到对应模块。

### 暴露API

要让模块暴露一个API成为`require`调用的返回值，就要依靠`module`和 `exports`这两个全局变量。

```
require('colors');
var a = require('./module_a');
// require('./module_b');
console.log('hello node! '.rainbow);
console.log(a.name)
console.log(a.data);
console.log(a.getPrivate());
```

输出结果：

```
hello node!
loog
this is some data
5
```
直接暴露API引入
`person.js` 直接倒出 person 

### 事件

`index.js`
```
var mybuffer = new Buffer('==ii1j2i3h1i23h', 'base64');
console.log(mybuffer);
require('fs').writeFile('logo.png', mybuffer);
```
`writeFile`是node的一个接口，让原生字节数据生成图片。

小结：

- 浏览器和`Node.js`写`JavaScript`的区别。
- 了解`Node.js`在语言标准中没有的`JavaScript`中的常用`API`,如 `定时器`、`事件`、`二进制数据`以及`模块`。
- `Node`中也有`window`对象，也可以使用 `console` 这样的开发者工具。


