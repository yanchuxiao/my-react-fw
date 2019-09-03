import React, { Component } from 'react';
import NotFound from '../../pages/view/404'
import {createBrowserHistory} from "history";
import {getToken} from "../../libs/cookies";
//  引入路由组件
import { BrowserRouter as Router, Route } from "react-router-dom";
//  路由列表
import { constantRoutes } from '../../router/router'

//  路由监听
const history = createBrowserHistory()
const location = history.location.pathname
const token = getToken()
console.log(history)
//  路由拦截
if (!token && location !== '/') {
    history.push('/')
} else if (token && location === '/') {
    history.push('work')
}
class AppMain extends Component{
    render() {
        return (
            <Router>
                {
                    constantRoutes.map((route, key) => {
                        if (route.hidden) {
                            return <Route key={key} exact path={route.path}
                              render={props => (
                                  <route.component {...props}
                                   routes={route.routes}
                                   name={route.name}
                                   hidden={route.hidden}
                                  />
                              )}
                            />
                        } else {
                            return <Route key={key} path={route.path}
                              render={props => (
                                  <route.component {...props}
                                   routes={route.routes}
                                   title={route.meta.title}
                                   icon={route.meta.icon}
                                   name={route.name}
                                  />
                              )}
                            />
                        }
                    })
                }
                {/* 404页面 */}
                <Route component={NotFound} />
            </Router>
        )
    }
}

export default AppMain
