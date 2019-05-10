
// 检测用户是否授权,封装
function getSetting() {
  return new Promise((resolve,reject) => {
    mpvue.getSetting({
      success: function(res) {
        resolve(res)
      }
    })
  })
}

export default getSetting
