<template lang="html">
  <div class="reply">
    <div class="header">
      <h1 class="title">评论</h1>
      <span class="count">{{reply.length}}</span>
    </div>
    <div class="reply-content">
      <ul>
        <li class="content-item" v-for="item in reply" :key="item.ctime">
          <div class="avatar">
            <img v-lazy="item.member.avatar" alt="" width="40" height="40">
          </div>
          <div class="content">
            <p class="text" v-html="item.content.message"></p>
            <div class="time">{{item.ctime | formatTime }}</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { getReply } from '@/api/reply'
import { ERR_OK } from '@/api/config'
import { createReply } from '@/common/js/reply'
import { formatDate } from '@/common/js/util'

export default {
  name: 'reply',
  props: {
    id: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      reply: []
    }
  },
  created() {
    this._getReply()
  },
  methods: {
    _getReply() {
      getReply(this.id).then(res => {
        if (ERR_OK === res.code) {
          this.reply = this._formatReply(res.data.replies)
        }
      })
    },
    _formatReply(data) {
      let ret = []
      data.forEach(item => {
        ret.push(createReply(item))
      })
      return ret
    }
  },
  filters: {
    formatTime(time) {
      let date = new Date(time * 1000)
      return formatDate(date, 'yyyy-MM-dd hh:mm')
    }
  }
}
</script>

<style lang="stylus" scoped>
@import './reply.styl';
</style>
