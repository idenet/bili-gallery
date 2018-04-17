<template lang="html">
  <div class="paint">
    <scroll class="paint-content" :data="list.items" :pullup="pullup" @scrollToEnd="searchMore" ref="scroll">
      <div>
        <div v-if="slider.length" class="slider-wrapper">
          <div class="slider-content">
            <slider>
              <div v-for="item in slider" :key="item.title">
                <a :href="item.link">
                  <img :src="item.cover" alt="">
                </a>
              </div>
            </slider>
          </div>
        </div>
        <div class="paint-list">
          <h1 class="list-title">热门插画</h1>
          <list-view :data="list" :hasMore="hasMore" @select="selectItem"></list-view>
        </div>
      </div>
      <div class="loading-container" v-show="!list.length">
        <loading></loading>
      </div>
    </scroll>
    <router-view></router-view>
  </div>
</template>

<script>
import Slider from '@/base/slider/slider'
import Scroll from '@/base/scroll/scroll'
import Loading from '@/base/loading/loading'
import ListView from '@/components/list-view/list-view'

import { getSlider, getPaintPictures } from '@/api/paint'
import { ERR_OK } from '@/api/config'

import { checkMoreMixin } from '@/common/js/mixin'

import { mapMutations, mapActions } from 'vuex'
export default {
  mixins: [checkMoreMixin],
  name: 'paint',
  data() {
    return {
      slider: [],
      list: []
    }
  },
  computed: {},
  created() {
    this._getSlider()
    this._getPaintPictures()
  },
  methods: {
    selectItem(item) {
      this.$router.push({
        path: `/paint/${item.item.doc_id}`
      })
      this.setPaint(item) // 将浏览的提交到store
      this.saveLookHistory(item)
    },
    _getSlider() {
      getSlider().then(res => {
        if (ERR_OK === res.code) {
          this.slider = res.data[8]
        }
      })
    },
    _getPaintPictures() {
      getPaintPictures(this.pageNum).then(res => {
        if (res.code === ERR_OK) {
          this.list = res.data.items
        }
        this._checkMore(res.data)
      })
    },
    searchMore() {
      if (!this.hasMore) return
      this.pageNum++
      getPaintPictures(this.pageNum).then(res => {
        if (res.code === ERR_OK) {
          this.list = this.list.concat(res.data.items)
        }
        this._checkMore(res.data)
      })
    },
    ...mapMutations({
      setPaint: 'SET_PAINT'
    }),
    ...mapActions(['saveLookHistory'])
  },
  components: {
    Slider,
    Scroll,
    Loading,
    ListView
  }
}
</script>

<style lang="stylus" scoped>
@import './paint.styl';
</style>
