import axios from 'axios'
import { getToken } from "./cookies";
import {message} from "antd";
// import { apiUrl } from "../config/config";

// axios实例
const service = axios.create({
    baseURL: process.env.BASE_API,
    timeout: 30000  //  请求超时
})

// 请求拦截
service.interceptors.request.use(
    config => {
        if (getToken()) {
            // //  每个url后携带token
            // config.params = {
            //     accessToken: getToken(),
            //     ...config.params
            // }
            //  每个请求头携带token
            config.headers['token'] = getToken()
        }
        return config
    },
    error => {
        message.error('请求错误！')
        console.log(error)
    }
)

service.interceptors.response.use(data => {
        if (data.status && data.status === 200 && data.data.success === false) {
            message.error('请求错误')
            return
        }
        return data
    },error => {
        if (error.response) {
            if (error.response.status === 404) {
                message.error('服务器被吃了404')
            } else {
                message.error('请求错误')
            }
        } else {
            message.error('未知错误')
        }
        return Promise.reject(error)
    }
)

export default service
