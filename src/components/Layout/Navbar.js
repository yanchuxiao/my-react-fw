import React, { Component } from 'react';
import {Layout, Menu, Icon, Avatar, Dropdown, Badge, message} from "antd";
import {constantRoutes} from "../../router/router";
import {removeToken} from "../../libs/cookies";
import {Link} from "react-router-dom";

const { Header } = Layout
class Navbar extends Component{
    constructor (props) {
        super(props)
        this.state = {
            username: '',
            current: 'work'
        }
    }
    componentDidMount() {
        this.setState({
            username: window.localStorage.getItem('username'),
            current: this.props.name
        })
    }
    Loginout=()=>{
        removeToken()
        this.props.history.push('/')
        message.success('已退出登录')
    }
    render() {
        const downMenu = (
            <Menu style={{ width: 150, textAlign: 'center' }}>
                <Menu.Item>
                    <Link to={'/center'}>
                        <Icon type='user' />
                        <span style={{ marginLeft: 10 }}>个人中心</span>
                    </Link>
                </Menu.Item>
                <Menu.Item style={{ borderTop: '1px solid #ddd' }}>
                    <div onClick={this.Loginout} rel="noopener noreferrer">
                        <Icon type='poweroff' />
                        <span style={{ marginLeft: 10 }}>退出登录</span>
                    </div>
                </Menu.Item>
            </Menu>
        )
        return (
            <Header className="header">
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    selectedKeys={[this.state.current]}
                    style={{ lineHeight: '64px', marginLeft: 80, float: 'left' }}
                >
                    {
                        constantRoutes.map((route, key) => {
                            if (route.hidden) {
                                return (
                                    null
                                )
                            } else {
                                return (
                                    <Menu.Item key={route.name}>
                                        <Link to={route.path}>
                                            <Icon type={route.meta.icon} />
                                            {route.meta.title}
                                        </Link>
                                    </Menu.Item>
                                )
                            }

                        })
                    }
                </Menu>
                <div style={{ float: 'right', color: '#ffffff' }}>
                    <div style={{float:'left'}}>
                        <Badge dot>
                            <Link style={{color: '#ffffff'}} to='/message'>
                                <Icon style={{cursor: 'pointer',fontSize: '18px'}} type="bell" />
                            </Link>
                        </Badge>
                    </div>
                    <Dropdown overlay={downMenu} placement="bottomCenter">
                        <div style={{float: 'right',marginLeft: 20,cursor: 'pointer'}}>
                            <Avatar style={{ backgroundColor: '#87d068' }} icon="user" />
                            <span style={{ marginLeft: 10 }}>{this.state.username}</span>
                            <Icon style={{fontSize: '16px',marginLeft: 10}} type="caret-down" />
                        </div>
                    </Dropdown>
                </div>
            </Header>
        )
    }
}

export default Navbar
