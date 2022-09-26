// axios二次封装
import axios from 'axios'
import { Message } from 'element-ui'
// 通过axios 创建axios实例
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // 基准地址
  timeout: 5000
})
service.interceptors.response.use(response => {
  // 1. 考虑把数据跑出去
  // 2. 接口成功，并业务成功
  // 3. 没有成功 Promise。reject 跑出错误
  const { message, data, success } = response.data
  if (success) {
    return data // 业务成功
  }
  Message.error(message) // 业务没有成功
  return Promise.reject(new Error(message))
}, error => { // 接口的错误
  Message.error(error.message)
  return Promise.reject(error)
}
)
export default service
