import axios from 'axios'

/**
 * 获取轮播图数据
 */
export function getSlider() {
  const url = '/api/getSlider'
  const params = {
    product: 2,
    platform: 'pc',
    position_id: [8],
    csrf_token: '',
    token: ''
  }
  return axios
    .get(url, {
      params
    })
    .then(res => {
      return Promise.resolve(res.data)
    })
}

export function getPaintPictures(page_num = 0) {
  const url = '/api/getPaintPictures'
  const params = {
    category: 'all',
    type: 'hot',
    page_num: page_num,
    page_size: 20
  }
  return axios.get(url, { params }).then(res => {
    return Promise.resolve(res.data)
  })
}
