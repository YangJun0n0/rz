import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters' // 用于派生数据,计算属性
import app from './modules/app' // app模块
import settings from './modules/settings'
import user from './modules/user'
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    settings,
    user
  },
  getters,
  plugins: [createPersistedState({
    paths: ['user.token']
  })]
})

export default store // 在main.js中引入
