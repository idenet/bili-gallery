<template>
  <div class="rank">
    <div class="switch-wrapper">
      <switches :switches="switches" :currentIndex="currentIndex" @switch="switchItem"></switches>
    </div>
    <scroll class="paint-rank-wrapper" :data="paintRankList" v-show="currentIndex === 0">
      <list-view @select="selectPaint" :data="paintRankList" :showMore="showMore"></list-view>
     <div class="loading-container" v-show="!paintRankList.length">
        <loading title="正在加载..."></loading>
      </div>
    </scroll>
    <scroll class="paint-rank-wrapper" :data="cosRankList" v-show="currentIndex === 1">
      <list-view @select="selectCos" :data="cosRankList" :showMore="showMore"></list-view>
      <div class="loading-container" v-show="!cosRankList.length">
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

import { getPaintRank, getCosRank } from '@/api/rank'
import { ERR_OK } from '@/api/config'

import { mapMutations, mapActions } from 'vuex'

export default {
  name: 'rank',
  data() {
    return {
      currentIndex: 0,
      switches: [
        {
          name: '画友排行'
        },
        {
          name: '摄影排行'
        }
      ],
      paintRankList: [],
      cosRankList: [],
      hasMore: false,
      showMore: false // 是否需要加载更多
    }
  },
  created() {
    this._allRankList()
  },
  methods: {
    selectPaint(item) {
      this.$router.push({
        path: `/rank/${item.item.doc_id}`
      })
      this.setPaint(item)
      this.saveLookHistory(item)
    },
    selectCos(item) {
      this.$router.push({
        path: `/rank/${item.item.doc_id}`
      })
      this.setPhoto(item)
      this.saveLookHistory(item)
    },
    switchItem(index) {
      this.currentIndex = index
    },
    _allRankList() {
      Promise.all([getPaintRank(), getCosRank()]).then(res => {
        if (res[0].code === ERR_OK && res[1].code === ERR_OK) {
          this.paintRankList = res[0].data.items
          this.cosRankList = res[1].data.items
        }
      })
    },
    ...mapMutations({
      setPaint: 'SET_PAINT',
      setPhoto: 'SET_PHOTO'
    }),
    ...mapActions(['saveLookHistory'])
  },
  components: {
    Switches,
    ListView,
    Loading,
    Scroll
  }
}
</script>

<style lang="stylus" scoped>
@import './rank.styl';
</style>
