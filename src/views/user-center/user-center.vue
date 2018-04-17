<template>
  <div class="user-center">
    <div class="back" @click="back">
      <i class="icon-back"></i>
    </div>
    <div class="switch-wrapper">
      <switches :switches="switches" :currentIndex="currentIndex" @switch="switchItem"></switches>
    </div>
    <scroll class="hisotry-wrapper" :data="lookHistory" v-show="currentIndex === 0">
      <list-view @select="selectItem" :data="lookHistory" :showMore="showMore"></list-view>
     <div class="loading-container" v-show="!lookHistory.length">
        <loading title="正在加载..."></loading>
      </div>
    </scroll>
     <scroll class="hisotry-wrapper" :data="favoriteHistory" v-show="currentIndex === 1">
      <list-view @select="selectItem" :data="favoriteHistory" :showMore="showMore"></list-view>
     <div class="loading-container" v-show="!favoriteHistory.length">
        <loading title="正在加载..."></loading>
      </div>
    </scroll>
    <router-view></router-view>
  </div>
</template>

<script>
import Switches from '@/base/switches/switches'
import Loading from '@/base/loading/loading'
import ListView from '@/components/list-view/list-view'
import Scroll from '@/base/scroll/scroll'

import { mapGetters, mapActions, mapMutations } from 'vuex'
export default {
  name: 'user-center',
  data() {
    return {
      currentIndex: 0,
      switches: [
        {
          name: '最近看的'
        },
        {
          name: '我喜欢的'
        }
      ],
      paintRankList: [],
      cosRankList: [],
      hasMore: false,
      showMore: false // 是否需要加载更多
    }
  },
  computed: {
    ...mapGetters(['lookHistory', 'favoriteHistory'])
  },
  methods: {
    selectItem(item) {
      this.$router.push({
        path: `/user/${item.item.doc_id}`
      })
      if (item.item.category === 'cos') {
        this.setPhoto(item)
      } else {
        this.setPaint(item)
      }
      this.saveLookHistory(item)
    },
    back() {
      this.$router.back()
    },
    switchItem(index) {
      this.currentIndex = index
    },
    ...mapMutations({
      setPhoto: 'SET_PHOTO',
      setPaint: 'SET_PAINT'
    }),
    ...mapActions(['saveLookHistory'])
  },
  components: {
    Switches,
    Loading,
    ListView,
    Scroll
  }
}
</script>

<style lang="stylus" scoped>
@import './user-center.styl';
</style>
