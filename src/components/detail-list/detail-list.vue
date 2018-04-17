<template lang="html">
  <div class="detail-list">
    <div class="back" @click="back">
      <i class="icon-back"></i>
    </div>
    <div class="detail-user" v-show="item.pictures">
      <h1 class="title" v-html="item.title"></h1>
      <div class="user">
        <img class="user-icon" :src="user.head_url" alt="" width="40" height="40">
        <span class="name" v-html="user.name"></span>
      </div>
      <div v-show="item.pictures" @click="toggleFavorite({user, item})" class="favorite" :class="favoriteIcon({user, item})"></div>
    </div>
    <div class="bg-image" :style="bgImage"></div>
    <scroll class="detail-content" :data="item.pictures">
      <div class="image-content">
        <div class="paint-desc">
          <ul class="tags">
            <li class="tags-item" v-for="item in item.tags" :key="item.text">
              <span>{{item.text}}</span>
            </li>
          </ul>
          <div v-show="item.pictures" class="view-count">
            <span>浏览:</span>
            <span>{{item.view_count}}</span>
          </div>
          <div v-show="item.description" class="desc" v-html="item.description"></div>
        </div>
        <img class="image-item" :src="item.img_src" alt="" v-for="item in item.pictures" :key="item.img_src">
        <reply v-if="item.doc_id" :id="getId"></reply>
      </div>
    </scroll>
    <div class="empty" :style="emptyStyle" v-if="!item && !user"></div>
  </div>
</template>

<script>
import Scroll from '@/base/scroll/scroll'
import Reply from '@/components/reply/reply'

import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'detail-list',
  props: {
    item: {
      type: Object,
      default() {
        return {}
      }
    },
    user: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  computed: {
    getId() {
      return this.item.doc_id
    },
    bgImage() {
      return (
        this.item.pictures &&
        `background-image:url(${this.item.pictures[0].img_src})`
      )
    },
    emptyStyle() {
      return `background-image:url(${require('../../common/image/empty.jpg')})`
    },
    ...mapGetters(['favoriteHistory'])
  },
  methods: {
    toggleFavorite({ user, item }) {
      let data = { user, item }
      if (this._isFavorite(data)) {
        this.deleteFavoriteHistory(data)
      } else {
        this.saveFavoriteHistory(data)
      }
    },
    favoriteIcon({ user, item }) {
      let data = { user, item }
      if (this._isFavorite(data)) {
        return 'icon-favorite'
      } else {
        return 'icon-not-favorite'
      }
    },
    _isFavorite(data) {
      const index = this.favoriteHistory.findIndex(item => {
        return item.item.doc_id === data.item.doc_id
      })
      return index > -1
    },
    back() {
      this.$router.back()
    },
    ...mapActions(['saveFavoriteHistory', 'deleteFavoriteHistory'])
  },
  components: {
    Scroll,
    Reply
  }
}
</script>

<style lang="stylus" scoped>
@import './detail-list.styl';
</style>
