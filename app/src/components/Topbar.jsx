import React from 'react';
import { Menu, Dropdown, Icon } from 'antd';

const menu = (
  <Menu>
    <Menu.Item>
      <a href="/user">用户中心</a>
    </Menu.Item>
    <Menu.Item>
      <a href="/setting">系统配置</a>
    </Menu.Item>
    <Menu.Item>
      <a href="/login">退出登陆</a>
    </Menu.Item>
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

