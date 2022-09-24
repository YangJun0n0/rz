// axios二次封装
import axios from 'axios'
// 通过axios 创建axios实例

const service = axios.create({
  baseURL: './dev',// 基准地址
  timeout: 5000
})
export default service