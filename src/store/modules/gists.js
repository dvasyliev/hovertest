import { getGists } from '@/api/gists'

export default {
  namespaced: true,

  state: {
    load: false,
    gists: []
  },

  getters: {
    load: state => state.load,
    gists: state => state.gists
  },

  mutations: {
    SET_LOAD(state, load) {
      state.load = load
    },

    SET_GISTS(state, gists) {
      state.gists = gists
    }
  },

  actions: {
    fetchGists({ commit }) {
      getGists().then(response => {
        const gists = response.data.filter(gist => {
          return gist.description.length > 0
        })

        commit('SET_GISTS', gists)
        commit('SET_LOAD', true)
      })
    }
  }
}
