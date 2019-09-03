import React, { Component } from 'react';
import { Form, Button, Input, Icon} from 'antd';
import { setToken } from "../../libs/cookies";
import '../../assets/css/login.css'

class Login extends Component{
    constructor(props) {
        super(props);
        this.state = {}
    }
    handleLogin=(e)=>{
        //  阻止默认提交
        e.preventDefault()
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log(values)
                window.localStorage.setItem('username', values.username)
                setToken('ycx')
                this.props.history.push('/work')
            }
        })
    }
    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <div className="login">
                <Form className="loginForm" onSubmit={this.handleLogin} >
                    <h1>登录</h1>
                    <Form.Item>
                        {getFieldDecorator('username',{
                            rules: [{ required: true, message: '请输入您的用户名!' }],
                        })(
                            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('password',{
                            rules: [{ required: true, message: '请输入您的密码!' }],
                        })(
                            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
                        )}
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" >登录</Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}

Login = Form.create()(Login);
export default Login
