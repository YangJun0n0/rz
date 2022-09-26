import require from '@/utils/request'
export function loginAPI(data) {
  return require({
    url: '/sys/login',
    method: 'POST',
    data
  })
}
