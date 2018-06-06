import Vue from 'vue'
import Vuex from 'vuex'

import Gists from '@/store/modules/gists'

Vue.use(Vuex)

export default new Vuex.Store({
  namespaced: true,
  modules: {
    Gists
  }
})
