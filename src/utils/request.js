function request (obj) {
  let url = obj.url || ''
  let method = obj.method || 'get'
  let data = obj.data || ''
  url = 'https://www.zhengzhicheng.cn' + url
  return new Promise(function (resolve, reject) {
    mpvue.request({
      url,
      method,
      data,
      success: function(msg) {
        resolve(msg.data)
      }
    })
  })
}

export default request
