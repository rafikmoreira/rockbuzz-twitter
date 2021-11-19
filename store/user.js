export const state = () => ({
  profile: {},
})

export const mutations = {
  setData(state, payload) {
    state.profile = payload
  },
}
