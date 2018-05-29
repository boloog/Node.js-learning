## 安装express

- `yarn add nodemon babel-cli babel-preset-es2015 babel-preset-stage-0 -y` 相关包
- `"express": "./node_modules/.bin/nodemon --exec babel-node express.js"` package.json 配置运行文件命令
- `.babelrc` 添加配置文件
```
{
  "presets": ["es2015", "stage-0"]
}
```
- `express.js` 添加执行文件
- `npm run express` 执行命令 开始写作

## 查看 express 版本
- `npm view express versions json` 使用json格式显示
```
[ '0.14.0',
  '0.14.1',
  '1.0.0-beta',
  '1.0.0-beta2',
  '1.0.0-rc',
  '5.0.0-alpha.3',
  '5.0.0-alpha.4',
  '5.0.0-alpha.5',
  '5.0.0-alpha.6' 
]
```
- `yarn add express@5.0.0-alpha.6` 安装最新版本

- `yarn add body-parser`
