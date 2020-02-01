<template lang="pug">
  #app
    Header
    router-view
</template>

<script>
import Header from './components/common/Header'

export default {
  components: {
    Header: Header
  }
}
</script>
<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.container {
  width: 60vw;
  margin: 0px auto;
  padding-top: 70px;
}
</style>
