import axios from 'axios'

import { format } from '@/common/js/util'

export function getPaintRank() {
  const url = '/api/getPaintRank'
  const date = format(new Date(), 'L')
  const params = {
    biz: 1,
    category: '',
    rank_type: 'week',
    date,
    page_num: 0,
    page_size: 50
  }
  return axios
    .get(url, {
      params
    })
    .then(res => {
      return Promise.resolve(res.data)
    })
}

export function getCosRank() {
  const url = '/api/getCosRank'
  const date = format(new Date(), 'L')
  const params = {
    biz: 2,
    category: 'cos',
    rank_type: 'week',
    date,
    page_num: 0,
    page_size: 50
  }
  return axios
    .get(url, {
      params
    })
    .then(res => {
      return Promise.resolve(res.data)
    })
}
