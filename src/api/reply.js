import jsonp from './jsonp'
import { options } from './config'

export function getReply(doc_id = 0) {
  const url = 'https://api.bilibili.com/x/v2/reply'
  const data = {
    jsonp: 'jsonp',
    pn: 1,
    type: 11,
    oid: doc_id,
    sort: 0,
    _: Date.now()
  }
  return jsonp(url, data, options)
}
