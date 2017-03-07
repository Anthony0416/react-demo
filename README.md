





踩坑，webpack中图片配置路径为dist/img/[name].[ext]，在实际打包中，因为react的虚拟Dom插入到index.html中，所以这样的路径相当于站在index的当前目录去寻找dist/img，当然能找到。但是css样式被打包成bundle.css放在dist/css目录下，而写在less中的background-image的实际寻找路径就变成了从当前目录出发的dist/css/dist/img...，所以会出现找到不图片的原因。

解决方案，使用内联样式style={{backgroundImage: '../images/name.jpg'}}把图片放在虚拟Dom中。