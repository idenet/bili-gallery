const axios = require('axios')

function getPaintRank(app) {
  app.get('/api/getPaintRank', (req, res) => {
    const url = 'https://api.vc.bilibili.com/link_draw/v2/Doc/ranklist'
    axios
      .get(url, {
        headers: {
          Host: 'api.vc.bilibili.com',
          Origin: 'https://h.bilibili.com',
          Referer:
            'https://h.bilibili.com/common/ranklist?biz=draw&category=&type=week'
        },
        params: req.query
      })
      .then(response => {
        res.json(response.data)
      })
      .catch(e => {
        console.log(e)
      })
  })
}

function getCosRank(app) {
  app.get('/api/getCosRank', (req, res) => {
    const url = 'https://api.vc.bilibili.com/link_draw/v2/Doc/ranklist'
    axios
      .get(url, {
        headers: {
          Host: 'api.vc.bilibili.com',
          Origin: 'https://h.bilibili.com',
          Referer:
            'https://h.bilibili.com/common/ranklist?biz=photo&category=cos&type=week'
        },
        params: req.query
      })
      .then(response => {
        res.json(response.data)
      })
      .catch(e => {
        console.log(e)
      })
  })
}

module.exports = {
  getPaintRank,
  getCosRank
}
