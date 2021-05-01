import Vue from 'vue'
import Vuex from 'vuex'

import Api from '../api/master.js'
import * as types from './mutation-types.js'

Vue.use(Vuex)

const state = {category: [], format: []}

// It's performed action when it calls dispatch() method in components.
// Action calls Web API using ajax. It's executed mutations when calls commit() method.
const actions = {
  [types.GET_CATEGORY] ({ commit }) {
    Api.category((body) => commit(types.GET_CATEGORY, body))
  },
  [types.GET_FORMAT] ({ commit }) {
    Api.format((body) => commit(types.GET_FORMAT, body))
  }
}

// Get the state which is updated.
const getters = {
  getCategory(state) {
     return state.category
  },
  getFormat(state) {
    return state.format
  }
}

// mutations updates own state.
const mutations = {
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