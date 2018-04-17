<template lang="html">
  <div class="list-wrapper">
    <ul class="list-item">
      <li class="item" v-for="item in data" :key="item.item.doc_id" @click="selectItem(item)">
        <div class="pictures-container">
          <img alt="" v-lazy="item.item.pictures[0].img_src">
          <div class="img-desc">{{item.item.pictures.length}}P</div>
        </div>
        <div class="desc-container">
          <div class="title">
            {{item.item.title}}
          </div>
          <div class="user">
            <img  class="icon" alt="" v-lazy="item.user.head_url" width="24" height="24">
            <h1 class="name">{{item.user.name}}</h1>
            <i class="favorite icon-not-favorite"></i>
          </div>
        </div>
      </li>
      <loading title="" v-show="showMore && hasMore && data.length"></loading>
      <div class="more-desc" v-show="!showMore && !hasMore && data.length">已无更多</div>
    </ul>
  </div>
</template>

<script>
import Loading from '@/base/loading/loading'

export default {
  name: 'ListView',
  props: {
    data: {
      type: Array,
      default() {
        return []
      }
    },
    hasMore: {
      type: Boolean,
      default: true
    },
    showMore: true // 是否加载更多
  },
  methods: {
    selectItem(item) {
      this.$emit('select', item)
    }
  },
  components: {
    Loading
  }
}
</script>

<style lang="stylus">
@import './list-view.styl';
</style>
