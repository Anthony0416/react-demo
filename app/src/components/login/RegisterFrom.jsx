import React from 'react';
import ReactDOM from 'react-dom';
import { Form, Input, Button, notification, Icon } from 'antd';
import { browserHistory } from 'react-router'
import $ from 'jquery'

const FormItem = Form.Item;

class NormalRegisterFrom extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    checkPassword = (rule, value, callback) => {
        const form = this.props.form;
        console.log(value);
        if (value && value !== form.getFieldValue('password')) {
            callback('两次密码输入不一致!');
        } else {
            callback();
        }
    }

    handleSubmit(e) {
        e.preventDefault(); // 阻止默认提交事件
        this.props.form.validateFields((err, values) => {
            if (!err) {
                let l = values.invited;
                let n = values.username;
                let p = values.password;
                let r = values.repassword;
                $.ajax({
                    url: 'http://www.lingyun.party/app2/api/showSignup',
                    type: 'POST',
                    data: 'yourinviteCode=' + l + '&username=' + n + '&password=' + p + '&passwordRepeat=' + r,
                    success: (e) => {
                        console.log(e);
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
                    {getFieldDecorator('invited', {
                        rules: [{ required: true, message: '请输入邀请码!' }],
                    })(
                        <Input placeholder="邀请码" />
                    )}
                </FormItem>
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
                <FormItem>
                    {getFieldDecorator('repassword', {
                        rules: [
                            {
                                required: true, message: '请再次输入密码!'
                            }, {
                                validator: this.checkPassword,
                            }],
                    })(
                        <Input type="password" placeholder="确认密码" />
                    )}
                </FormItem>
                <Button type="primary" htmlType="submit" id="loginBtn">注册</Button>
            </Form>
        )
    }
}

const RegisterFrom = Form.create()(NormalRegisterFrom);
export default RegisterFrom;