import axios from 'axios'

export function getPotoActive() {
  const url = '/api/getPhotoActive'
  const params = {
    type: 0,
    biz: 2,
    page_size: 3
  }
  return axios
    .get(url, {
      params
    })
    .then(res => {
      return Promise.resolve(res.data)
    })
}

export function getCosList(pageNum = 0) {
  const url = '/api/getCosList'
  const params = {
    category: 'cos',
    type: 'hot',
    page_num: pageNum,
    page_size: 20
  }
  return axios
    .get(url, {
      params
    })
    .then(res => {
      return Promise.resolve(res.data)
    })
}
