const axios = require('axios')

function getPhotoActive(app) {
  app.get('/api/getPhotoActive', (req, res) => {
    const url = 'https://api.vc.bilibili.com/photo_activity/v2/Activity/list'
    axios
      .get(url, {
        headers: {
          Host: 'api.vc.bilibili.com',
          Origin: 'https://h.bilibili.com',
          Referer: 'https://h.bilibili.com/p'
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

function getCosList(app) {
  app.get('/api/getCosList', (req, res) => {
    const url = 'https://api.vc.bilibili.com/link_draw/v2/Photo/list'
    axios
      .get(url, {
        headers: {
          Host: 'api.vc.bilibili.com',
          Origin: 'https://h.bilibili.com',
          Referer: 'https://h.bilibili.com/eden/picture_area'
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
  getPhotoActive,
  getCosList
}
