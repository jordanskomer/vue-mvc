<template>
  <div>
    <header></header>
    {{ msg }}
    <router-view></router-view>
  </div>
</template>

<script>
import Header from 'components/Header'

export default {
  components: ['header'],
  data () {
    return {
      msg: 'Welcome to Vue MVC'
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
