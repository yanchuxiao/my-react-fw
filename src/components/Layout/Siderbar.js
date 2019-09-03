import { Layout, Menu, Icon } from 'antd';
import React, {Component} from "react";
import {Link} from "react-router-dom";

const { SubMenu } = Menu;
const { Sider } = Layout;

class Siderbar extends Component{
    constructor (props) {
        super(props)
        this.state = {
            current: this.props.routes[0].path,  // 默认选中第一个
            subCurrent: '',
            collapsed: false
        }
    }
    componentWillMount() {
        // 当前路由属于sub下的子路由默认展开当前sub
        for (var i in this.props.routes) {
            if (this.props.routes[i].routes && this.props.pathname.indexOf(this.props.routes[i].name) !== -1) {
                this.setState({
                    subCurrent: this.props.routes[i].name
                })
            }
        }
    }

    componentWillUpdate (nextProps, nextState) {
        //  监听路由改变，路由改变到一级路由时默认选中第一个二级路由
        let fastPath = this.props.routes[0].path.substr(0, this.props.routes[0].path.length - 1)
        if (nextProps.pathname === fastPath) {
            nextState.current = this.props.routes[0].path
        }
    }

    componentDidMount() {
        //  当前路由为第一级路由时，默认选中第一个二级路由
        let fastPath = this.props.routes[0].path.substr(0, this.props.routes[0].path.length - 1)
        if (this.props.pathname === fastPath) {
            this.setState({
                current: this.props.routes[0].path
            })
        } else { //  不是第一级路由，选中当前路由项
            this.setState({
                current: this.props.pathname
            })
        }
    }
    siderClick = e => {
        this.setState({
            current: e.key
        })
    }
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        })
    }
    render() {
        return (
            <Sider trigger={null} collapsible collapsed={this.state.collapsed} style={{ background: '#fff' }}>
                <Icon
                    style={{ position: 'fixed', top: 24, left: 220, color: '#ffffff', fontSize: '18px' }}
                    type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                    onClick={this.toggle}
                />
                <Menu
                    onClick={this.siderClick}
                    mode="inline"
                    selectedKeys={[this.state.current]}
                    defaultOpenKeys={[this.state.subCurrent]}
                    style={{ height: '100%', borderRight: 0 }}
                >
                    {
                        this.props.routes.map((route, key) => {
                            if (route.siderHidden) {
                                return null
                            }
                            if (!route.routes) {
                                if (route.meta) {
                                    return (
                                        <Menu.Item key={route.path}>
                                            <Link to={route.path}>
                                                {route.meta.icon ? <Icon type={route.meta.icon} /> : null}
                                                <span>{route.meta.title}</span>
                                            </Link>
                                        </Menu.Item>
                                    )
                                } else {
                                    return null
                                }
                            } else {
                                return (
                                    <SubMenu
                                        key={route.name}
                                        title={
                                            <span>
                                                {route.meta.icon ? <Icon type={route.meta.icon} /> : null}
                                                <span>{route.meta.title}</span>
                                            </span>
                                        }
                                    >
                                        {
                                            route.routes.map((children, childKey) => {
                                                if (children.meta) {
                                                    return (
                                                        <Menu.Item key={children.path}>
                                                            <Link to={children.path}>
                                                                {children.meta.icon ? <Icon type={children.meta.icon} /> : null}
                                                                <span>{children.meta.title}</span>
                                                            </Link>
                                                        </Menu.Item>
                                                    )
                                                } else {
                                                    return null
                                                }
                                            })
                                        }
                                    </SubMenu>
                                )
                            }
                        })
                    }
                </Menu>
            </Sider>
        )
    }
}

export default Siderbar
