const axios = require('axios')

module.exports = {
  lintOnSave: false,
  devServer: {
    before: app => {
      // paint
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
      // cos
      app.get('/api/getPotoActive', (req, res) => {
        const url =
          'https://api.vc.bilibili.com/photo_activity/v2/Activity/list'
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
      // rank
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
  }
}
