<template>
  <div id="app">
    <!-- <HelloWorld msg="The RESTful Pokémon API"/> -->
    <Detail/>
    <!-- <hr> -->
    <!-- <test/> -->
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Detail from './components/detail.vue'
import test from './components/test.vue'
export default {
  name: 'App',
  components: {
    HelloWorld ,
    Detail ,
    test
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
