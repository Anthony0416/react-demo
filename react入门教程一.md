## react入门教程一

### react简介

React 起源于 Facebook 的内部项目，因为该公司对市场上所有 JavaScript MVC 框架，都不满意，就决定自己写一套，用来架设Instagram 的网站。做出来以后，发现这套东西很好用，就在2013年5月开源了。

由于 React的设计思想极其独特，属于革命性创新，性能出众，代码逻辑却非常简单。所以，越来越多的人开始关注和使用，认为它可能是将来 Web 开发的主流工具。

这个项目本身也越滚越大，从最早的UI引擎变成了一整套前后端通吃的 Web App 解决方案。衍生的 React Native 项目，目标更是宏伟，希望用写 Web App 的方式去写 Native App。如果能够实现，整个互联网行业都会被颠覆，因为同一组人只需要写一次 UI ，就能同时运行在服务器、浏览器和手机。

#### 特点：

1. 声明式设计：React采用声明范式，可以轻松描述应用。
2. 高效：React通过对DOM的模拟，最大限度地减少与DOM的交互。
3. 灵活：React可以与已知的库或框架很好地配合。

#### 一些好的学习途径：

> [阮一峰-React 技术栈系列教程](http://www.ruanyifeng.com/blog/2016/09/react-technology-stack.html)
>
> [菜鸟教程 | react教程](http://www.runoob.com/react/react-tutorial.html)
>
> [react中文社区](http://react-china.org/)
>
> [官方文档](http://reactjs.cn/react/docs/getting-started-zh-CN.html)
>



### react入门知识储备

#### [ES6](http://es6.ruanyifeng.com/)

react推荐使用ES6语法，如果你已经熟悉ES6，那就最好去使用ES6。

但如果你并不很了解，使用之前的ES语法也是可以的，但在此之前，你一定要先了解ES6的 const，let 以及 箭头函数。

#### [Webpack](http://webpackdoc.com/) & [Babel](http://babeljs.cn/)

Babel用于将ES6及jsx语法翻译成浏览器可以识别渲染的语法，而Webpack则用于将这一过程自动化，从而提高开发效率。

前期学习过程中可以借助脚手架去配置Webpack和Babel，但是要试着去看懂理解他们的配置，逐渐去摆脱脚手架的束缚。



### react两种前端使用方法

#### 直接使用

通过script标签引入

```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Hello React!</title>
    <script src="https://cdn.bootcss.com/react/15.4.2/react.min.js"></script>
    <script src="https://cdn.bootcss.com/react/15.4.2/react-dom.min.js"></script>
    <script src="https://cdn.bootcss.com/babel-standalone/6.22.1/babel.min.js"></script>
  </head>
  <body>
    <div id="example"></div>
    <script type="text/babel">
      ReactDOM.render(
        <h1>Hello, world!</h1>,
        document.getElementById('example')
      );
    </script>
  </body>
</html>
```

注意：

1. 最后一个 `<script>`标签的 type 属性为 `text/babel` 。这是因为 React 独有的 JSX 语法，跟 JavaScript 不兼容。凡是使用 JSX 的地方，都要加上 `type="text/babel"` 。
2. 上面代码一共用了三个库： react.js 、react-dom.js 和 Browser.js ，它们必须首先加载。

#### webpack打包编译

安装node环境，使用npm安装依赖

脚手架快速搭建开发环境



### JSX语法及组件

#### JSX

React 使用 JSX 来替代常规的 JavaScript。

JSX 的基本语法规则：遇到 HTML 标签（以 `<` 开头），就用 HTML 规则解析；遇到代码块（以 `{` 开头），就用 JavaScript 规则解析。

```
ReactDOM.render(
    <h1>Hello, world!</h1>,
    document.getElementById('example')
);
```

注意：

1. 我们可以在 JSX 中使用 JavaScript 表达式。表达式写在花括号 **{}** 中。
2. 在 JSX 中不能使用 **if else** 语句，但可以使用 **conditional (三元运算)** 表达式来替代。
3. React 推荐使用内联样式。
4. JSX 允许直接在模板插入 JavaScript 变量。如果这个变量是一个数组，则会展开这个数组的所有成员。

#### 组件

React 允许将代码封装成组件（component），然后像插入普通 HTML 标签一样，在网页中插入这个组件。React.createClass 方法就用于生成一个组件类。

```
var HelloMessage = React.createClass({
  render: function() {
    return <h1>Hello World！</h1>;
  }
});
 
ReactDOM.render(
  <HelloMessage />,
  document.getElementById('example')
);
```

注意：

1. 组件类的第一个字母必须大写，否则会报错。
2. 组件类只能包含一个顶层标签，否则也会报错。



### react数据载体

#### state

React 把组件看成是一个状态机（State Machines）。通过与用户的交互，实现不同状态，然后渲染 UI，让用户界面和数据保持一致。

React 里，只需更新组件的 state，然后根据新的 state 重新渲染用户界面（不要操作 DOM）。

以下实例中创建了LikeButton 组件，getInitialState 方法用于定义初始状态，也就是一个对象，这个对象可以通过 this.state 属性读取。当用户点击组件，导致状态变化，this.setState 方法就修改状态值，每次修改以后，自动调用 this.render 方法，再次渲染组件。

```
var LikeButton = React.createClass({
  getInitialState: function() {
    return {liked: false};
  },
  handleClick: function(event) {
    this.setState({liked: !this.state.liked});
  },
  render: function() {
    var text = this.state.liked ? 'like' : 'haven\'t liked';
    return (
      <p onClick={this.handleClick}>
        You {text} this. Click to toggle.
      </p>
    );
  }
});

ReactDOM.render(
  <LikeButton />,
  document.getElementById('example')
);
```

#### props

state 和 props 主要的区别在于 props 是不可变的，而 state 可以根据与用户交互来改变。这就是为什么有些容器组件需要定义 state 来更新和修改数据。 而子组件只能通过 props 来传递数据。

```
var HelloMessage = React.createClass({
  render: function() {
    return <h1>Hello {this.props.name}</h1>;
  }
});

ReactDOM.render(
  <HelloMessage name="Runoob" />,
  document.getElementById('example')
);
```



### 真实DOM与事件

组件并不是真实的 DOM 节点，而是存在于内存之中的一种数据结构，叫做虚拟 DOM （virtual DOM）。只有当它插入文档以后，才会变成真实的 DOM 。根据 React 的设计，所有的 DOM 变动，都先在虚拟 DOM 上发生，然后再将实际发生变动的部分，反映在真实 DOM上，这样可以极大提高网页的性能表现。

但是，有时需要从组件获取真实 DOM 的节点，这时就要用到 `ref` 属性。

 ```
 var MyComponent = React.createClass({
   handleClick: function() {
     this.refs.myTextInput.focus();
   },
   render: function() {
     return (
       <div>
         <input type="text" ref="myTextInput" />
         <input type="button" value="Focus the text input" onClick={this.handleClick} />
       </div>
     );
   }
 });

 ReactDOM.render(
   <MyComponent />,
   document.getElementById('example')
 );
 ```

上面代码中，组件 `MyComponent` 的子节点有一个文本输入框，用于获取用户的输入。这时就必须获取真实的 DOM 节点，虚拟 DOM 是拿不到用户输入的。为了做到这一点，文本输入框必须有一个 `ref` 属性，然后 `this.refs.[refName]` 就会返回这个真实的 DOM 节点。

React 组件支持很多事件，除了 `Click` 事件以外，还有 `KeyDown` 、`Copy`、`Scroll` 等，详细参见 [官方文档](http://facebook.github.io/react/docs/events.html#supported-events)。

注意：

由于 `this.refs.[refName]` 属性获取的是真实 DOM ，所以必须等到虚拟 DOM 插入文档以后，才能使用这个属性，否则会报错。上面代码中，通过为组件指定 `Click` 事件的回调函数，确保了只有等到真实 DOM 发生 `Click` 事件之后，才会读取 `this.refs.[refName]` 属性。



### 表单

 用户在表单填入的内容，属于用户跟组件的互动，所以不能用 `this.props` 读取。

 ```
 var Input = React.createClass({
   getInitialState: function() {
     return {value: 'Hello!'};
   },
   handleChange: function(event) {
     this.setState({value: event.target.value});
   },
   render: function () {
     var value = this.state.value;
     return (
       <div>
         <input type="text" value={value} onChange={this.handleChange} />
         <p>{value}</p>
       </div>
     );
   }
 });

 ReactDOM.render(<Input/>, document.body);
 ```

上面代码中，文本输入框的值，不能用 `this.props.value` 读取，而要定义一个 `onChange` 事件的回调函数，通过 `event.target.value` 读取用户输入的值。`textarea` 元素、`select`元素、`radio`元素都属于这种情况，[官方文档](http://facebook.github.io/react/docs/forms.html)。



### 生命周期

组件的声明周期分为三种：

- Mounting：已插入真实 DOM
- Updating：正在被重新渲染
- Unmounting：已移出真实 DOM

react为每个状态提供两种处理函数，will在函数状态之前调用，did则在函数状态之后调用：

- componentWillMount()
- componentDidMount()
- componentWillUpdate(object nextProps, object nextState)
- componentDidUpdate(object prevProps, object prevState)
- componentWillUnmount()

此外还有三种特殊状态的处理函数：

- constructor()：组件调用之前的构造函数，早于componentWillMount()，常用于声明props和state

- componentWillReceiveProps(object nextProps)：已加载组件收到新的参数时调用
- shouldComponentUpdate(object nextProps, object nextState)：组件判断是否重新渲染时调用

