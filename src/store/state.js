import { loadFavorite, loadLook } from '@/common/js/cache'

const state = {
  paint: {},
  photo: {},
  lookHistory: loadLook(),
  favoriteHistory: loadFavorite()
}

export default state
