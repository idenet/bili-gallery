<template>
  <div class="tab">
    <router-link tag="div" class="tab-item" to="/paint">
      <span class="tab-link">画友</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/photograph">
      <span class="tab-link">摄影</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/rank">
      <span class="tab-link">排行</span>
    </router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
@import './tab.styl';
</style>
