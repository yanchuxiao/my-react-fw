import Cookies from 'js-cookie'
import { cookiesOverdue } from "../config/config";

const accessToken = 'accessToken'

// 获取token
export function getToken() {
    return Cookies.get(accessToken)
}
//  存储token
export function setToken(token) {
    return Cookies.set(accessToken, token, { expires: cookiesOverdue() })
}
//  清除token
export function removeToken() {
    return Cookies.remove(accessToken)
}
