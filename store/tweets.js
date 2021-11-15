export const state = () => ({
  list: [],
})

export const mutations = {
  loadTweets(state, { payload }) {
    state.list = payload
  },

  favorite(state, id) {
    state.list = state.list.map((e) => {
      if (e.id === id) {
        if (e.favorite) {
          e.favorite = false
        } else {
          e.favorite = true
          this.$toast.success('Favoritado com sucesso', { duration: 2000 })
        }
      }

      return e
    })
  },
}
