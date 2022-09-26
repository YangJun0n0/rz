import { loginAPI } from '@/api/login'
export default {
  namespaced: true,
  state: {
    token: null
  },
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token
    }
  },
  actions: {
    async  LoginAction({ commit }, logindata) {
      const data = await loginAPI(logindata)

      commit('SET_TOKEN', data)
    }
  }
}
