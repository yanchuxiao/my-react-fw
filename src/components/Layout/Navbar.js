import React, { Component } from 'react';
import $ from 'jquery'
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
            current: 'work',
            logoWidth: $(window).width() >= 768 ? '120px' : '35px',
            menuLeft: $(window).width() >= 768 ? '80px' : '20px',
            display: $(window).width() >= 768 ? 'unset' : 'none',
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
        const downMenuMobile = (
            <Menu style={{ width: '100%', textAlign: 'center' }}>
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
                                        <span style={{ marginLeft: 10 }}>{route.meta.title}</span>
                                    </Link>
                                </Menu.Item>
                            )
                        }

                    })
                }
            </Menu>
        )
        return (
            <Header className="header">
                <div className="logo" style={{width: this.state.logoWidth}} />
                {
                    this.state.menuLeft === '80px' ?
                        <Menu
                            theme="dark"
                            mode="horizontal"
                            selectedKeys={[this.state.current]}
                            style={{ lineHeight: '64px', marginLeft: this.state.menuLeft, float: 'left' }}
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
                        </Menu> :
                        <Dropdown overlay={downMenuMobile} placement="bottomCenter">
                            <div style={{float: 'left',marginLeft: 80,cursor: 'pointer',color: '#fff'}}>
                                <Icon style={{fontSize: '20px',marginLeft: 10}} type="appstore" />
                            </div>
                        </Dropdown>
                }
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
                            <Avatar style={{ backgroundColor: '#ff8b12' }} icon="user" />
                            <span style={{ marginLeft: 10, display: this.state.display }}>{this.state.username}</span>
                            <Icon style={{fontSize: '16px',marginLeft: 10, display: this.state.display}} type="caret-down" />
                        </div>
                    </Dropdown>
                </div>
            </Header>
        )
    }
}

export default Navbar
