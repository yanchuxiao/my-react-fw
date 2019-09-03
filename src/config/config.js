//  接口地址
export function apiUrl() {
    const baseUrl = {
        dev: 'http://192.168.2.152:8093/api/', // 本地api
        pro: '//'  // 线上api
    }
    const apiUrl = process.env.NODE_ENV === 'development' ? baseUrl.dev : baseUrl.pro
    return apiUrl
}

//  cookies过期时间(默认1天)
export function cookiesOverdue() {
    return 1
}
