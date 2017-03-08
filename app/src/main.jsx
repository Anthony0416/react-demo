import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './components/Nav.jsx';
import $ from 'jquery';
import { browserHistory } from 'react-router';

// 引入垫片兼容IE
require('es5-shim');
require('console-polyfill');

// Animate.CSS样式 & font-awesome样式
// 居然没有引用antd的样式文件
import 'animate.css/animate.min.css';
import './less/main.less';

// 配置整体组件
export default class Init extends React.Component {
    constructor(props) {
        super(props);        
    }

    componentDidMount() {
        // 判断登录
        // $.ajax({
        //     url: 'http://www.lingyun.party/app2/api/checkLogin',
        //     type: 'GET',
        //     success: (e) => {
        //         console.log(e)
        //         if (e.code == 1) {
        //
        //         } else {
        //             document.cookie = "nowKey=" + "login";
        //             browserHistory.push('/login');
        //         }
        //     }
        // })
    }

    render() {
        return (
            <div>
                <Nav />
                <div id="content">
                    {this.props.children}
                </div>
            </div>
        )
    }
}
