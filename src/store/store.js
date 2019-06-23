import Vue from 'vue'
import Vuex from 'vuex'

import Ajax from '../lib/ajax.js'
import * as types from './mutation-types.js'

Vue.use(Vuex)

const state = {category: [], format: []}

// コンポーネントからdispatch()により、actionが呼ばれる。
// Ajax通信を行い、commit()により、mutationsを呼び出す。
const actions = {
    [types.GET_CATEGORY] ({ commit }) {
        Ajax.get('/api/master/category',
			{},
			(body) => {
				commit(types.GET_CATEGORY, body)
			})
    },
    [types.GET_FORMAT] ({ commit }) {
        Ajax.get('/api/master/format',
			{},
			(body) => {
				commit(types.GET_FORMAT, body)
			})
    }
}

// 更新されたstateを取得する。
const getters = {
    getCategory(state) {
         return state.category
    },
    getFormat(state) {
        return state.format
    }
}

// mutationsは、自身のstateを更新する。
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