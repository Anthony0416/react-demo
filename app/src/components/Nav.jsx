import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import Topbar from '../components/Topbar'

// 引入Antd组件
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;

export default class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current:document.cookie.split(";")[0].split("=")[1]
        }
    }
    changeCookie = (v) => {
        document.cookie = "nowKey=" + v;
    }    
    handleClick = (e) => {
        this.setState({ current: e.key });
        this.changeCookie(e.key);
        if(e.key == "home"){
            browserHistory.push('/');
        }else if(e.key == 'list'){
            browserHistory.push('list');
        }else if(e.key == 'report'){
            browserHistory.push('report');
        }else if(e.key == 'user'){
            browserHistory.push('user');
        }else if(e.key == 'setting'){
            browserHistory.push('setting');
        }
    }
    componentDidMount() {
        var now = window.location.pathname.substring(1);
        now = now === '' ? 'home' : now;
        this.changeCookie(now);
        this.setState({ current: now });
    }
    render() {
        return (
            <div id="nav">
                <div id="nav_content">
                    <img src={require('../images/logo.png')} width="50" id="logo"/>
                    <Menu
                        onClick={this.handleClick}
                        selectedKeys={[this.state.current]}
                        mode="horizontal"
                    >
                        <Menu.Item key="home">
                            首页
                        </Menu.Item>
                        <Menu.Item key="list">
                            列表
                        </Menu.Item>
                        <Menu.Item key="setting">
                            设置
                        </Menu.Item>
                    </Menu>
                    <Topbar/>
                </div>
            </div>
        );
    }
}