<template>
  <div class="photograph">
    <scroll class="photo-content" :data="cosList" :pullup="pullup" @scrollToEnd="searchMore">
      <div>
        <div class="active-wrapper">
          <h1 class="active-title">热门活动</h1>
          <ul class="active-content">
            <li class="item" v-for="item in activeList" :key="item.title">
              <a :href="item.link">
                <div class="pic" :style="bgImage(item)"></div>
              </a>
            </li>
          </ul>
        </div>
        <div class="photo-list">
          <h1 class="list-title">热门COS</h1>
          <list-view :data="cosList" :hasMore="hasMore"></list-view>
        </div>
      </div>
      <loading class="loading-container" title="正在加载中..." v-show="!cosList.length"></loading>
    </scroll>
  </div>
</template>

<script>
import Scroll from '@/base/scroll/scroll'
import Loading from '@/base/loading/loading'
import ListView from '@/components/list-view/list-view'

import { getPotoActive, getCosList } from '@/api/photograph'
import { ERR_OK } from '@/api/config'

import { checkMoreMixin } from '@/common/js/mixin'

export default {
  mixins: [checkMoreMixin],
  name: 'photograph',
  data() {
    return {
      activeList: [],
      cosList: []
    }
  },
  created() {
    this._getPotoActive()
    this._getCosList()
  },
  methods: {
    bgImage(item) {
      return {
        backgroundImage: `url(${item.cover})`
      }
    },
    _getPotoActive() {
      getPotoActive().then(res => {
        if (ERR_OK === res.code) {
          // 取后两位
          this.activeList = this._formatPhotoActive(Array.from(res.data.items))
        }
      })
    },
    _formatPhotoActive(data) {
      return data.filter((item) => {
        return item.desc_type !== 1
      })
    },
    _getCosList() {
      getCosList(this.pageNum).then(res => {
        if (res.code === ERR_OK) {
          this.cosList = res.data.items
        }
        this._checkMore(res.data)
      })
    },
    searchMore() {
      if (!this.hasMore) return
      this.pageNum++
      getCosList(this.pageNum).then(res => {
        if (res.code === ERR_OK) {
          this.cosList = this.cosList.concat(res.data.items)
        }
        this._checkMore(res.data)
      })
    }
  },
  components: {
    Scroll,
    Loading,
    ListView
  }
}
</script>

<style lang="stylus">
@import './photograph.styl';
</style>
