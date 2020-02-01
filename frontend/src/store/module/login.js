import database from '@/modules/firebase'

const state = {
  isLogin: false,
  userInfo: null
}

const getters = {
  getLoginState: state => state.isLogin
}

const mutations = {
  setLoginState (state) {
    state.isLogin = true
  }
}

const actions = {
  async loginAfter ({ dispatch, commit }, data) {
    try {
      let userData = await database.ref(`users/1${data.id}`).once('value')  
      if(userData.val() === null){
        database.ref(`users/${data.id}`).set(data)
      }
      commit('setLoginState')
    } catch (error) {
      alert(error)
    }   
  },
  getUserData ({}, id) {
    
    return true
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
