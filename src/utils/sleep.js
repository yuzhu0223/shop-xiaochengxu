// 延迟执行封装函数
function sleep(s) {
  return new Promise(function (resolve,reject) {
    setTimeout(function () {
      resolve()
    }, s*1000)
  })
}

export default sleep
