import axios from 'axios'

export function getAllDetail(doc_id = 0) {
  const url = '/api/getAllDetail'
  const params = {
    doc_id
  }
  return axios
    .get(url, {
      params
    })
    .then(res => {
      return Promise.resolve(res.data)
    })
}
