<template>
  <div id="app">
    <topbar-view/>
    <router-view/>
  </div>
</template>

<script>
import TopbarView from '@/views/topbar'

export default {
  name: 'App',
  components: {
    TopbarView
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
