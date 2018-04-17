const { getSlider, getPaintPictures } = require('./server/paint')
const { getPhotoActive, getCosList } = require('./server/photograph')
const { getPaintRank, getCosRank } = require('./server/rank')

const { getAllDetail } = require('./server/allDetail')

module.exports = {
  lintOnSave: false,
  devServer: {
    before: app => {
      // paint
      getSlider(app)
      getPaintPictures(app)
      // cos
      getPhotoActive(app)
      getCosList(app)
      // rank
      getPaintRank(app)
      getCosRank(app)
      // paint-detail
      getAllDetail(app)
    }
  }
}
