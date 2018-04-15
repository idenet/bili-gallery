<template>
  <div class="rank">
    <div class="switch-wrapper">
      <switches :switches="switches" :currentIndex="currentIndex" @switch="switchItem"></switches>
    </div>
    <scroll class="paint-rank-wrapper" :data="paintRankList" v-show="currentIndex === 0">
      <list-view :data="paintRankList" :showMore="showMore"></list-view>
      <loading title="正在加载..." v-show="!paintRankList.length"></loading>
    </scroll>
    <scroll class="paint-rank-wrapper" :data="cosRankList" v-show="currentIndex === 1">
      <list-view :data="cosRankList" :showMore="showMore"></list-view>
      <loading title="正在加载..." v-show="!cosRankList.length"></loading>
    </scroll>
  </div>
</template>

<script>
import Switches from '@/base/switches/switches'
import Loading from '@/base/loading/loading'
import ListView from '@/components/list-view/list-view'
import Scroll from '@/base/scroll/scroll'

import { getPaintRank, getCosRank } from '@/api/rank'
import { ERR_OK } from '@/api/config'

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
      showMore: false // 是否加载更多
    }
  },
  created() {
    this._allRankList()
  },
  methods: {
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
    }
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
