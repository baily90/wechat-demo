const { baseUrl } = require('./env').dev
export default function request (config) {
  wx.showLoading({
    title: config.tips || '加载中',
    mask: true
  })
  const header = {}
  if (config.method == 'post' || config.method == 'POST') {
    header['content-type'] = 'application/x-www-form-urlencoded'
  } else {
    header['content-type'] = 'application/json'
  }
  wx.request({
    method: config.method || 'get',
    url: `${baseUrl}/${config.url}`,
    header: config.header || header,
    data: config.data,
    success: (res) => {
      if (res.statusCode == 200) {
        if (config.success) {
          config.success(res)
        }
      } else {
        wx.showToast({
          title: '网络有点小故障，请稍后再试',
          icon: 'none'
        })
      }
    },
    fail: (e) => {
      if (config.fail) {
        config.fail(e)
        return
      } else {
        console.error(e)
      }
      wx.showToast({
        title: '网络有点小故障，请稍后再试',
        icon: 'none'
      })
    },
    complete: () => {
      wx.hideLoading()
    }
  })
}

