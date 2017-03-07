## 项目框架



在做自己第一个项目之前寻找对比了很多框架，最后感觉这个框架不论结构还是内容，都比较适合新手去快速上手React。源框架Github：[React-seed](https://github.com/JasonBai007/react-seed)

### 熟悉框架

说是框架，其实个人感觉seed更像一个react的demo。首先查看package.json。划重点：   [animate.css](https://daneden.github.io/animate.css/)   [antd](https://ant.design/docs/react/introduce-cn)   [jquery](http://jquery.cuishifeng.cn/index.html)   [react,react-dom](https://tianxiangbing.github.io/react-cn/docs/getting-started.html)   [react-router](http://www.ruanyifeng.com/blog/2016/05/react_router.html?utm_source=tool.lu)

除此之外，框架中使用 [yarn](https://yarnpkg.com/zh-Hans/)   [less](http://lesscss.cn/)  和  [ES6](http://es6.ruanyifeng.com/)，在开始react项目之前一定要对这些都有所了解。

此外项目的webpack配置已经很详尽，几乎不需要修改可以直接使用。



### 踩坑

webpack中图片配置路径为dist/img/[name].[ext]，在实际打包中，因为react的虚拟Dom插入到index.html中，所以这样的路径相当于站在index的当前目录去寻找dist/img，当然能找到。但是css样式被打包成bundle.css放在dist/css目录下，而写在less中的background-image的实际寻找路径就变成了从当前目录出发的dist/css/dist/img...，所以会出现找到不图片的原因。

解决方案，使用内联样式style={{backgroundImage: '../images/name.jpg'}}把图片放在虚拟Dom中。