<template>
  <div>
    {{ msg }}
  </div>
</template>

<script>
import Header from 'components/Header'
export default {
  data() {
    return {
      msg: 'Welcome to Vue MVC'
    }
  },
  ready() {
    console.log('another mounted')
  }
}
</script>

<style lang="scss" scoped>
</style>
