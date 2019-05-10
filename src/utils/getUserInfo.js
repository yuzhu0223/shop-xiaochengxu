

// 获取用户信息,封装
function getUserInfo() {
  return new Promise((resolve,reject) => {
    mpvue.getUserInfo({
      success: function(res) {
        resolve(res)
      }
    })
  })
}

export default getUserInfo
