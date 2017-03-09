import React from 'react'
import { browserHistory } from 'react-router'
import { render, unmountComponentAtNode } from 'react-dom'

import LoginFrom from '../components/login/LoginFrom'
import RegisterFrom from '../components/login/RegisterFrom'

import '../less/login.less'

export default class Login extends React.Component {

    componentDidMount() {
        let instance = render(<LoginFrom/>, document.getElementById('form'));
        $('#login').hide();
    }

    resister = () => {
        let instance = render(<RegisterFrom/>, document.getElementById('form'));
        $('#login').show();
        $('#register').hide();
    }
    login = () => {
        let instance = render(<LoginFrom/>, document.getElementById('form'));
        $('#login').hide();
        $('#register').show();
    }

    render() {
        return (
            <div id="loginpagewrap">
                <p>Welcome to website</p>
                <div id="loginWrap">
                    <div id="form"></div>
                    {/*<LoginFrom/>*/}
                    {/*<RegisterFrom/>*/}
                    <div id="btn">
                        <p id="register">没有账号？
                            <button onClick={this.resister}>
                                点我注册
                            </button>
                        </p>
                        <p id="login">已有账号？
                            <button onClick={this.login}>
                                点我登录
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}


