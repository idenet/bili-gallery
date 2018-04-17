import { saveLook, saveFavorite, deleteFavorite } from '@/common/js/cache'
import * as types from './mutation-types'

export function saveLookHistory({ commit }, data) {
  commit(types.SET_LOOK_HISTORY, saveLook(data))
}

export function saveFavoriteHistory({ commit }, data) {
  commit(types.SET_FAVORITE_HISTORY, saveFavorite(data))
}

export function deleteFavoriteHistory({ commit }, data) {
  commit(types.SET_FAVORITE_HISTORY, deleteFavorite(data))
}
