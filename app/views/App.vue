<template>
  <div>
    <header></header>
    {{ msg }}
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
