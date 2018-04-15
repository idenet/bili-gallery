<template>
  <div id="app" @touchmove.prevent>
    <m-header></m-header>
    <tab></tab>
    <keep-alive exclude="rank">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import MHeader from '@/views/m-header/m-header'
import Tab from '@/views/tab/tab'

export default {
  name: 'app',
  components: {
    MHeader,
    Tab
  }
}
</script>

<style lang="stylus">
#app
  position fixed;
  right 0;
  left 0;
  bottom 0;
  top 0;
</style>
