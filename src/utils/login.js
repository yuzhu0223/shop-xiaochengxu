
// 登录获取token,封装
function login() {
  return new Promise((resolve,reject) => {
    mpvue.login({
      success: function(res) {
        resolve(res)
      }
    })
  })
}

export default login
