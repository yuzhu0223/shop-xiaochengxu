<template>
  <div class="wrapper">
    <button type="primary" open-type="getUserInfo" @getuserinfo="userInfo">登录</button>
  </div>
</template>

<script>
export default {
  methods: {
    // 用户授权登录会触发该函数获取用户信息，获取到用户后回退到原来跳转过来的页面
    userInfo (res) {
      // console.log(res)
      mpvue.navigateBack({
        delta: 1
      })
    }
  }
}
</script>

<style scoped lang="less">

  .wrapper {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  button {
    width: 600rpx;
  }
</style>
