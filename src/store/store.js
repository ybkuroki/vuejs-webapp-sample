import Vue from 'vue'
import Vuex from 'vuex'

import AuthApi from '@/api/auth.js'
import CategoryApi from '@/api/category.js'
import FormatApi from '@/api/format.js'
import * as types from '@/store/mutation-types.js'

Vue.use(Vuex)

const state = {account: null, category: null, format: null}

// It's performed action when it calls dispatch() method in components.
// Action calls Web API using ajax. It's executed mutations when calls commit() method.
const actions = {
  [types.GET_LOGIN_ACCOUNT]({ commit }) {
    AuthApi.loginAccount((body) => commit(types.GET_LOGIN_ACCOUNT, body))
  },
  [types.GET_CATEGORY] ({ commit }) {
    CategoryApi.list((body) => commit(types.GET_CATEGORY, body))
  },
  [types.GET_FORMAT] ({ commit }) {
    FormatApi.list((body) => commit(types.GET_FORMAT, body))
  }
}

// Get the state which is updated.
const getters = {
  getLoginAccount(state) {
    return state.account
  },
  getCategory(state) {
     return state.category
  },
  getFormat(state) {
    return state.format
  }
}

// mutations updates own state.
const mutations = {
  [types.GET_LOGIN_ACCOUNT](state, account) {
    state.account = account
  },
  [types.GET_CATEGORY] (state, category) {
    state.category = category
  },
  [types.GET_FORMAT] (state, format) {
    state.format = format
  }
}

const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
export default store