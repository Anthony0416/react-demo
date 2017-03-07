import React from 'react';
import ReactDOM from 'react-dom';
import { Form, Input, Button, notification, Icon } from 'antd';
import { browserHistory } from 'react-router'
import $ from 'jquery'

const FormItem = Form.Item;

class NormalLoginFrom extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault(); // 阻止默认提交事件
        this.props.form.validateFields((err, values) => {
            if (!err) {
                let n = values.username;
                let p = values.password;
                $.ajax({
                    url: 'http://www.lingyun.party/app2/api/showSignin',
                    type: 'POST',
                    data: 'username=' + n + '&password=' + p,
                    success: (e) => {
                        if (e.code == 1) {
                            // 弹窗
                            notification.open({
                                message: e.msg,
                                description: '',
                                icon: <Icon type="check-circle-o" style={{ color: '#00a854' }} />,
                            });
                            // 路由处理 跳转首页
                            document.cookie = "nowKey=" + "home";
                            browserHistory.push('/');
                        }else {
                            notification.open({
                                message: e.msg,
                                description: '',
                                icon: <Icon type="exclamation-circle-o" style={{ color: '#ffbf00' }} />,
                            });
                        }
                    }
                })
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form horizontal onSubmit={this.handleSubmit}>
                <FormItem>
                    {getFieldDecorator('username', {
                        rules: [{ required: true, message: '请输入用户名!' }],
                    })(
                        <Input placeholder="用户名" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: '请输入密码!' }],
                    })(
                        <Input type="password" placeholder="密码" />
                    )}
                </FormItem>
                <Button type="primary" htmlType="submit" id="loginBtn">登录</Button>
            </Form>
        )
    }
}

const LoginFrom = Form.create()(NormalLoginFrom);
export default LoginFrom;