<template>
  <ul class="gists">
    <gist
      v-for="(gist, index) in gists"
      :key="index"
      :gist="gist"/>
  </ul>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Gist from '@/pages/gists/gist'

export default {
  components: {
    Gist
  },

  computed: {
    ...mapGetters('Gists', [
      'load',
      'gists'
    ])
  },

  methods: {
    ...mapActions('Gists', [ 'fetchGists' ])
  },

  created() {
    if (!this.load) {
      this.fetchGists()
    }
  }
}
</script>

<style>
  .gists {
    list-style: none;
  }
</style>
