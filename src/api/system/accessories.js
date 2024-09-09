import request from '@/utils/request'

// 查询饰品信息列表
export function listAccessories(query) {
  return request({
    url: '/system/accessories/list',
    method: 'get',
    params: query
  })
}

// 查询饰品信息详细
export function getAccessories(id) {
  return request({
    url: '/system/accessories/' + id,
    method: 'get'
  })
}

// 新增饰品信息
export function addAccessories(data) {
  return request({
    url: '/system/accessories',
    method: 'post',
    data: data
  })
}

// 修改饰品信息
export function updateAccessories(data) {
  return request({
    url: '/system/accessories',
    method: 'put',
    data: data
  })
}

// 删除饰品信息
export function delAccessories(id) {
  return request({
    url: '/system/accessories/' + id,
    method: 'delete'
  })
}

export function dataAnalys(query) {
  return request({
    url: '/system/accessories/dataAnalys',
    method: 'get',
    params: query
  })
}
