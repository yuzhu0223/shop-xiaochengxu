function request (obj) {
  let url = obj.url || ''
  let method = obj.method || 'get'
  let data = obj.data || ''
  let header = obj.header || {}
  url = 'https://www.zhengzhicheng.cn' + url
  return new Promise(function (resolve, reject) {
    mpvue.request({
      url,
      method,
      data,
      header,
      success: function(msg) {
        resolve(msg.data)
      }
    })
  })
}

export default request
