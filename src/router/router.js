import Layout from '../components/Layout/Index'
import Work from '../pages/work/work'
import WorkView from '../pages/work/workView'
import Calendar from '../pages/work/calendar'
import ProductList from '../pages/product/productList'
import Login from '../pages/view/login'
import Message from '../pages/view/message'
import Mycenter from '../pages/view/mycenter'
/*
* path: 路由路径
* name: 路由key值
* component: 显示的模板
* hidden: 为true不显示在导航栏,且不显示左侧
* siderHidden: 为true不显示在左侧
* meta:{
*   title: 名称显示在侧边栏和面包屑
*   icon:   显示的图标（antd所有icon）
* }
* routes: 子路由
*
* */
export const constantRoutes = [
    {
        path: '/',
        name: 'login',
        component: Login,
        hidden: true,
    },
    {
        path: '/message',
        name: 'message',
        component: Layout,
        hidden: true,
        routes: [
            {
                path: '/message/',
                name: 'message',
                component: Message,
                siderHidden: true
            }
        ]
    },
    {
        path: '/center',
        name: 'center',
        component: Layout,
        hidden: true,
        routes: [
            {
                path: '/center/',
                name: 'center',
                component: Mycenter,
                siderHidden: true
            }
        ]
    },
    {
        path: '/work',
        name: 'work',
        component: Layout,
        meta: {
            title: '办公',
            icon: 'desktop'
        },
        routes: [
            {
                path: '/work/',
                name: 'workbench',
                component: Work,
                meta: {
                    title: '工作台',
                    icon: 'dashboard'
                }
            },
            {
                path: '/work/view',
                name: 'workView',
                component: WorkView
            },
            {
                path: '/work/calendar',
                name: 'calendar',
                component: Calendar,
                meta: {
                    title: '日历',
                    icon: 'calendar'
                }
            },
            {
                path: '/work/sub',
                name: 'sub',
                meta: {
                    title: '三级测试',
                    icon: 'appstore'
                },
                routes: [
                    {
                        path: '/work/sub/',
                        name: 'one',
                        component: Work,
                        meta: {
                            title: '一',
                            icon: 'user'
                        }
                    },
                    {
                        path: '/work/sub/two',
                        name: 'two',
                        component: ProductList,
                        meta: {
                            title: '二',
                            icon: 'appstore'
                        }
                    }
                ]
            }
        ]
    },
    {
        path: '/product',
        name: 'product',
        component: Layout,
        meta: {
            title: '产品',
            icon: 'user'
        },
        routes: [
            {
                path: '/product/',
                name: 'productList',
                component: ProductList,
                meta: {
                    title: '产品列表',
                    icon: 'appstore'
                }
            }
        ]
    }
]
