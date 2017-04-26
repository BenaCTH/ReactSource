# webpack+react+es6 最新环境搭建和配置（全）
- .安装Node
- .（可选）有了node和在node中集成的npm，为了加快框架的下载速度，建议输入以下命令切换至淘宝源
   npm config set registry http://registry.npm.taobao.org/
- .全局安装Webpack, Babel, Webpack-dev-server：
  npm install babel webpack webpack-dev-server -g

  npm install webpack-dev-server
- .建立项目目录，用npm init 初始化 npm 项目
  mkdir react-hello-world
  cd react-hello-world
  npm init
- .在项目中安装 react, react-dom
  npm install react react-dom --save
- .在项目中安装 Babel 转换器，需要用到插件 babel-preset-react, babel-preset-latest，latest 即最新的 ES 规范，包括了 Async/Await 这些新特性。

  npm install babel-loader babel-core babel-preset-react babel-preset-latest --save
 

- .创建项目文件，main.js 即项目入口文件，App.js 即 React 组件主文件

  touch index.html App.js main.js webpack.config.js

- .配置webpack，编辑webpack.config.js
    module.exports = {
        entry: './main.js', // 入口文件路径
        output: {
            path: '/',
            filename: 'index.js'
        },
        devServer: {
            inline: true,
            port: 3333
        },
        module: {
            loaders: [
                {
                    test: /\.js$/, // babel 转换为兼容性的 js
                    exclude: /node_modules/,
                    loader: 'babel-loader',
                    query: {
                        presets: ['react', 'latest']
                    }
                }
            ]
        }
    }
- .开始写项目：
- .配置 npm scripts, 编辑 package.json，在"scripts"属性处添加一行：

    "scripts": {
       "start": "webpack-dev-server"
    },
 

- .基本的框架搭建完毕，npm start 然后打开 http://localhost:3333 试试：

    npm start
  
 # 通过 npm 使用 React
 
- $ npm install -g cnpm --registry=https://registry.npm.taobao.org
- $ npm config set registry https://registry.npm.taobao.org
   这样就可以使用 cnpm 命令来安装模块了：
- $ cnpm install [name]

# 使用 create-react-app 快速构建 React 开发环境
- create-react-app 是来自于 Facebook，通过该命令我们无需配置就能快速构建 React 开发环境。
- create-react-app 自动创建的项目是基于 Webpack + ES6 。
- 执行以下命令创建项目：
- $ cnpm install -g create-react-app
- $ create-react-app my-app
- $ cd my-app/
- $ npm start
