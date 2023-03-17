export const headerSlice = {
  state: {
    nav: [
      { id: '1', text: 'NavItem1' },
      { id: '2', text: 'NavItem2' },
      { id: '3', text: 'NavItem3' },
    ],
    activeNav: '3',
  },
  getters: {
    getNav(state) {
      return state.nav
    },
    getActiveNav(state) {
      return state.activeNav
    },
  },
  mutations: {
    setActiveNav(state, payload) {
      state.activeNav = payload
    },
  },
  actions: {},
  modules: {},
}
