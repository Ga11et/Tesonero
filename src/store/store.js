import { createStore } from 'vuex'
import { headerSlice } from './modules/header'
import { reviewsSlice } from './modules/reviews'

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: { headerSlice, reviewsSlice },
})
