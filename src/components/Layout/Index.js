import React, { Component } from 'react';
import {Route} from "react-router-dom";

//  引入导航和侧栏组件
import Navbar from './Navbar'
import Siderbar from './Siderbar'

//  antd布局
import { Layout } from "antd";
const { Content } = Layout;

class Index extends Component{
    componentDidMount() {
        console.log(this.props)
    }

    render() {
        return (
            <Layout style={{ height: '100vh' }}>
                <Navbar name={this.props.name} history={this.props.history}/>
                <Layout>
                    {
                        !this.props.hidden ?
                            <Siderbar routes={this.props.routes} pathname={this.props.location.pathname}/>
                            : null
                    }
                    <Layout style={{ padding: '20px' }}>
                        <Content className='app-content'>
                            {
                                this.props.routes.map((route, key) => {
                                    if (!route.routes) {
                                        return <Route key={key} exact path={route.path} component={route.component}/>
                                    } else {
                                        return (
                                            route.routes.map((children, childKey) => {
                                                return <Route key={childKey} exact path={children.path} component={children.component}/>
                                            })
                                        )
                                    }
                                })
                            }
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        )
    }
}

export default Index
