import storage from 'good-storage'

const LOOK_KEY = '__look__'
const LOOK_MAX_LEN = 200

const FAVORITE_KEY = '__favorite__'
const FAVORITE_MAX_LEN = 200

function insertArray(arr, val, compare, maxLen) {
  const index = arr.findIndex(compare)
  // 如果是第一个直接就返回
  if (index === 0) {
    return
  }
  if (index > 0) {
    arr.splice(index, 1)
  }
  arr.unshift(val)
  if (maxLen && arr.length > maxLen) {
    arr.pop()
  }
}

function deleteFromArray(arr, compare) {
  const index = arr.findIndex(compare)
  if (index > -1) {
    arr.splice(index, 1)
  }
}
export function saveLook(data) {
  let datas = storage.get(LOOK_KEY, [])
  insertArray(
    datas,
    data,
    item => {
      return item.item.doc_id === data.item.doc_id
    },
    LOOK_MAX_LEN
  )
  storage.set(LOOK_KEY, datas)
  return datas
}

export function loadLook() {
  return storage.get(LOOK_KEY, [])
}

export function saveFavorite(data) {
  let datas = storage.get(FAVORITE_KEY, [])
  insertArray(
    datas,
    data,
    item => {
      return item.item.doc_id === data.item.doc_id
    },
    FAVORITE_MAX_LEN
  )
  storage.set(FAVORITE_KEY, datas)
  return datas
}

export function deleteFavorite(data) {
  let datas = storage.get(FAVORITE_KEY, [])
  deleteFromArray(datas, item => {
    return item.item.doc_id === data.item.doc_id
  })
  storage.set(FAVORITE_KEY, datas)
  return datas
}

export function loadFavorite() {
  return storage.get(FAVORITE_KEY, [])
}
