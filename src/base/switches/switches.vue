<template lang="html">
  <div class="switch">
    <li class="switch-item" v-for="(item,index) in switches" :key="index" :class="{'active': currentIndex === index}" @click="switchItem(index)">
      <span>{{item.name}}</span>
    </li>
  </div>
</template>

<script>
export default {
  name: 'switches',
  props: {
    switches: {
      type: Array,
      default() {
        return []
      }
    },
    currentIndex: {
      type: Number,
      default: 0
    }
  },
  methods: {
    switchItem(index) {
      this.$emit('switch', index)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import './switches.styl';
</style>
