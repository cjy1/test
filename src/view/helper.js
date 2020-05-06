import apis from '../utils/apis';
import request from '../utils/request';
console.log('apis', apis)
export const login = data => {
  console.log('data', data)
  return request({
    url: apis.login,
    method:'post',
    data
  })
}