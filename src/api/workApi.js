import request from '../libs/request'

//  请求测试
export function apiTest(data) {
    return request({
        url: 'data/get_data_json',
        params: data,
        method: 'get'
    })
}
