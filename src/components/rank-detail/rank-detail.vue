<template lang="html">
  <transition name="slider">
    <detail-list :item="item" :user="user"></detail-list>
  </transition>
</template>

<script>
import DetailList from '@/components/detail-list/detail-list'

import { getAllDetail } from '@/api/allDetail'
import { ERR_OK } from '@/api/config'

import { mapGetters } from 'vuex'

export default {
  name: 'rank-detail',
  data() {
    return {
      item: {},
      user: {}
    }
  },
  computed: {
    ...mapGetters(['paint', 'photo'])
  },
  created() {
    this._getAllDetail()
  },
  methods: {
    _getAllDetail() {
      if (!this.paint.item && !this.photo.item) {
        this.$router.push('/rank')
        return
      }
      getAllDetail(this.$route.params.id).then(res => {
        if (res.code === ERR_OK) {
          this.item = res.data.item
          this.user = res.data.user
        }
      })
    }
  },
  components: {
    DetailList
  }
}
</script>

<style lang="stylus" scoped>
.slider-enter, .slider-leave-to
  transform translate3d(100%, 0, 0);
.slider-enter-active, .slider-leave-active
  transition all 0.3s;
</style>
