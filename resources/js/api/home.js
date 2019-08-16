import request from '../utils/request'

export function getActivityList(params) {
    return request({
        url: '/api/activity',
        params: params
    })
}
