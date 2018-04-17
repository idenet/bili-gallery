export const checkMoreMixin = {
  data() {
    return {
      hasMore: true,
      pullup: true,
      pageNum: 0
    }
  },
  methods: {
    _checkMore(data) {
      if (!data.items && (this.pageNum + 1) * data.items.length >= 500) {
        this.hasMore = false
      }
    }
  }
}
