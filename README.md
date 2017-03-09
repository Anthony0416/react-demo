## 项目框架

在做这个项目之前寻找对比了很多框架，最后感觉这个框架不论结构还是内容，都比较适合新手去快速上手React。源框架Github：[React-seed](https://github.com/JasonBai007/react-seed)

### 熟悉框架

说是框架，其实个人感觉seed更像一个react的demo。首先查看package.json。划重点：   [animate.css](https://daneden.github.io/animate.css/)   [antd](https://ant.design/docs/react/introduce-cn)   [jquery](http://jquery.cuishifeng.cn/index.html)   [react,react-dom](https://tianxiangbing.github.io/react-cn/docs/getting-started.html)   [react-router](http://www.ruanyifeng.com/blog/2016/05/react_router.html?utm_source=tool.lu)

除此之外，框架中使用 [yarn](https://yarnpkg.com/zh-Hans/)   [less](http://lesscss.cn/)  和  [ES6](http://es6.ruanyifeng.com/)，在开始react项目之前一定要对这些都有所了解。

项目克隆到本地后：

> 安装Yarn  $ npm install -g yarn
>
> 安装依赖  $ yarn
>
> 启动服务  $ yarn start
>
> 打包文件  $ yarn build

第一次使用yarn安装依赖会经常报错，而这多是网络问题（毕竟facebook出的yarn，摊手），可以多试几次，而在以后安装时由于yarn的离线性，速度会巨快 。当然用不惯yarn的也可以使用npm install,npm start,npm run build...

但是这里还是**强烈推荐使用yarn**，媲美cnpm的速度，npm一样的强大，打包速度还比npm快...

项目目录：

```
├── README.md                            // 项目说明文档
├── webpack.config.js                    // webpack开发配置
├── webpack.production.config.js         // webpack打包配置
├── .babelrc                             // babel配置文件
├── .gitignore         // github上传忽略文件配置
├── package.json       // 项目配置文件
├── yarn.lock          // 记录依赖包的具体版本号，保证每个开发的依赖都是一样的
└── app                // 项目目录
    ├── dist           // 打包目录
    ├── src            // 开发目录
    │   ├── components // 组件目录
    │   ├── data       // mock假数据存放目录
    │   ├── images     // 图片目录
    │   ├── less       // 样式文件目录
    │   ├── pages      // 页面级jsx目录
    │   ├── main.jsx   // 页面框架
    │   └── router.jsx // 路由配置文件
    ├── favivon.icon   // 页面标题icon
    └── index.html     // 项目入口文件
```

### 踩坑

##### background图片路径问题

webpack中图片配置路径为dist/img/[name].[ext]，在实际打包中，因为react的虚拟Dom插入到index.html中，所以这样的路径相当于站在index的当前目录去寻找dist/img，当然能找到。但是css样式被打包成bundle.css放在dist/css目录下，而写在less中的background-image的实际寻找路径就变成了从当前目录出发的dist/css/dist/img...，所以会出现找到不图片的原因。

解决中尝试使用内联样式将backgroundImage放在jsx中，但是发现webpack打包时忽略了！即便尝试手动拷贝图片到dist/img，save一下热加载再次打包图片又没了！

后来尝试改变webpack配置，将publicPath路径修改为/，在loaders的图片配置将输出路径改为./dist/img/[name]的绝对路径，居然成功了。打包后的文件目录变成了奇怪的dist/dist/img，而background-image路径为/./dist/img/bg.img的绝对路径，我尝试使用dist/img和dist/dist/img发现都能找到图片 -_-|||大汗 ，最终以一个奇怪的姿势解决了这个问题╮(╯▽╰)╭。