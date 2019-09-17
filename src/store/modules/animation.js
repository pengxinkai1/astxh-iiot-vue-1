export default {
  namespaced: true,
  state: {
    // 菜单工具栏状态
    toolbarFixStore: false
  },
  mutations: {
    updateToolbarFixStore(state, fold) {
      state.toolbarHeadStore = fold
    }
  }
}
