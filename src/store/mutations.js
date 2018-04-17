import * as types from './mutation-types'

const mutations = {
  [types.SET_PAINT](state, paint) {
    state.paint = paint
  },
  [types.SET_PHOTO](state, photo) {
    state.photo = photo
  },
  [types.SET_LOOK_HISTORY](state, history) {
    state.lookHistory = history
  },
  [types.SET_FAVORITE_HISTORY](state, list) {
    state.favoriteHistory = list
  }
}

export default mutations
