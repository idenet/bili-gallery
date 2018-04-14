const axios = require('axios')

module.exports = {
  lintOnSave: false,
  devServer: {
    before: app => {
      app.get('/api/getSlider', (req, res) => {
        const url = 'http://api.vc.bilibili.com/oper/v1/banner/getListOnline'
        axios
          .get(url, {
            headers: {
              Host: 'api.vc.bilibili.com',
              Origin: 'https://h.bilibili.com',
              Referer: 'https://h.bilibili.com/d'
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
      app.get('/api/getPaintPictures', (req, res) => {
        const url = 'https://api.vc.bilibili.com/link_draw/v2/Doc/list'
        axios
          .get(url, {
            headers: {
              Host: 'api.vc.bilibili.com',
              Origin: 'https://h.bilibili.com',
              Referer: 'https://h.bilibili.com/eden/draw_area'
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
  }
}
