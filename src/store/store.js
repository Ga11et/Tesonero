import { createStore } from 'vuex'
import { headerSlice } from './modules/header'
import { reviewsSlice } from './modules/reviews'
import { questionsSlice } from './modules/questions'
import { menuSlice } from './modules/menu'

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: { headerSlice, reviewsSlice, questionsSlice, menuSlice },
})
