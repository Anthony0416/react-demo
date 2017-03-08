import React from 'react';
import $ from 'jquery';
import { browserHistory } from 'react-router';
import { Menu, Dropdown, notification, Icon } from 'antd';

const click = ({key}) => {
    if (key == 1) {
        // 路由处理
        document.cookie = "nowKey=" + "user";
        browserHistory.push('/user');
    } else if (key == 2) {
        // 路由处理
        document.cookie = "nowKey=" + "setting";
        browserHistory.push('/setting');
    } else if (key == 3) {
        $.ajax({
            url: 'http://www.lingyun.party/app2/api/logout',
            type: 'GET',
            success: (e) => {
                if (e.code == 1) {
                    // 弹窗
                    notification.open({
                        message: e.msg,
                        description: '',
                        duration: 2,
                        icon: <Icon type="check-circle-o" style={{ color: '#00a854' }} />,
                    });
                    // 路由处理
                    document.cookie = "nowKey=" + "login";
                    browserHistory.push('/login');
                } else {
                    notification.open({
                        message: e.msg,
                        description: '',
                        duration: 2,
                        icon: <Icon type="check-circle-o" style={{ color: '#00a854' }} />,
                    });
                }
            }
        })
    }
}

const menu = (
  <Menu onClick={click}>
    <Menu.Item key="1">用户中心</Menu.Item>
    <Menu.Item key="2">系统配置</Menu.Item>
    <Menu.Item key="3">退出登陆</Menu.Item>
  </Menu>
);

export default class Logout extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        let logoutWrap = {
            margin: '7px 20px 0 0',
            width: '100px',
            textAlign: 'right',
            float: 'right',
            paddingBottom: 15
        }
        return (
            <div style={logoutWrap}>
                <Dropdown overlay={menu}>
                    <a className="ant-dropdown-link">
                        <img src={require('../images/head.jpg')} style={{width: 35, height: 35, borderRadius: '50%'}} />
                        {/*Hi Jason &nbsp;&nbsp;<Icon type="down" />*/}
                    </a>
                </Dropdown>
            </div>
        );
    }
}

