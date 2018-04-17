const axios = require('axios')

function getAllDetail(app) {
  app.get('/api/getAllDetail', (req, res) => {
    const url = 'https://api.vc.bilibili.com/link_draw/v1/doc/detail'
    axios
      .get(url, {
        headers: {
          Host: 'api.vc.bilibili.com',
          Origin: 'https://h.bilibili.com',
          Referer: `https://h.bilibili.com/${req.query.doc_id}`
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
  getAllDetail
}
