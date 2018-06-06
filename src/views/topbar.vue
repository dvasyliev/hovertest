<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link
      to="/gists"
      @mouseover.native="onMouseover"
      @mouseout.native="onMouseout">Gists
    </router-link>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

const MOUSEOVER_TIME_MS = 200

export default {
  data() {
    return {
      mouseover: false
    }
  },

  computed: {
    ...mapGetters('Gists', [ 'load' ])
  },

  methods: {
    ...mapActions('Gists', [ 'fetchGists' ]),

    onMouseover() {
      console.log('onMouseover')
      this.mouseover = true

      setTimeout(() => {
        if (this.mouseover && !this.load) {
          console.log('fetchGists')
          this.fetchGists()
        }
      }, MOUSEOVER_TIME_MS)
    },

    onMouseout() {
      console.log('onMouseout')
      this.mouseover = false
    }
  }
}
</script>
