import { getHomeInfo } from './../../services/home/index'
Page({
  data: {
    
  },
  onLoad: function () {
    getHomeInfo(res => {
      console.log(res)
    }, e => {
      console.log(e)
    })
  }
})
