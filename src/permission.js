import router from '@/router'
import store from '@/store'

const whiteList = ['/login', '/404']
router.beforeEach((to, from, next) => {
//   console.log(to)
//   console.log(from)
//   next(false)
  if (store.getters.token) { // 处于登录
    console.log(store)
    if (to.path === '/login') {
      next('/')
    } else {
      next()
    }
  } else { // 没有登录
    if (whiteList.includes(to.path)) { // true
      next()
    } else {
      next('/login')
    }
  }
})
