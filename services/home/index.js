import api from './../api'
import request from './../../common/request'
export const getHomeInfo = (successCB, failCB) => {
  request({
    url: api.home.getHomeInfo,
    method: '',
    header: '',
    data: '',
    tips: '',
    success(res) {
      successCB(res)
    },
    fail(e) {
      failCB(e)
    }
  })
}