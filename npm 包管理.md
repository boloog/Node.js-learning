## npm 安装与升级

- `npm`安装 先安装`node.js` 在官网下载最新的`node.js` 
- `sudo npm install npm -g` 更新`npm`包

```
  node -v
  v8.9.1
  npm -v
  6.1.0
```

## 全局安装与删除包

- 全局安装 `npm install vue -g` (`--global` 简写为 `-g`)
- 删除包 `npm uninstall vue -g`

## 在本地项目内安装包

- 项目内安装包 `npm install vue `
- 查看当前安装的包 `npm list`  (`npm ls`)

## 安装指定版本的包 

- 查看包相关信息 `npm info vue`
```
vue@2.5.16 | MIT | deps: none | versions: 229
Reactive, component-oriented view layer for modern web interfaces.
https://github.com/vuejs/vue#readme

dist
.tarball http://registry.npm.taobao.org/vue/download/vue-2.5.16.tgz
.shasum: 07edb75e8412aaeed871ebafa99f4672584a0085

maintainers:
- yyx990803 <yyx990803@gmail.com>

dist-tags:
beta: 2.5.17-beta.0  csp: 1.0.28-csp      latest: 2.5.16

published 2 months ago by yyx990803 <yyx990803@gmail.com>
```

- 安装指定版本 `npm install vue@2.5.16`

- 删除包 `npm uninstall vue`

## 配置文件：package.json

- 初始化创建配置文件 `npm init` 或者 `npm init -y` 快速安装
- `package.json` 里面相关参数说明 
- `dependencies` 项目依赖的包 `npm install vue --save`
- `devDependencies` 开发依赖的包 `npm install vue --save-dev`
- 分享项目可删除 `node_modules` 目录
- 分享后使用项目 `npm install` 安装所有依赖 `node_modules` 自动生成包

## 更新本地安装的包

- 安装 `gulp` `npm info gulp` 查看最新的 `gulp`
- 安装项目开发依赖`gulp`指定版本 `npm install gulp@3.0.0 --save-dev`   
- 检查更新 `npm outdated`
```
Package  Current  Wanted  Latest  Location
gulp       3.0.0   3.9.1   3.9.1  Node.js

```
- `"gulp": "^3.0.0",` `^` 表示只能更新第二个数字
- `"gulp": "~3.0.0",` `~` 表示只能更新最后一个数字
- `"gulp": "*",` `*` 表示更新版本
- `npm list | grep gulp` 格式化查看当前安装的包

## 使用快速的安装源：nrm
- `npm install nrm --g` 全局安装 nrm 
- `nrm ls` 查看可以切换的源 `*` 表示当前使用的源
- `nrm test` 查看可以使用源的速度
- `nrm use tabao` 使用`taobao`源, `npm install gulp` 自动走向淘宝源,更快速安装源