<template>
  <!-- 顶部搜索 -->
  <div class="header">
    <!-- 搜索框 -->
    <div class="search">
      <input type="text" placeholder="请输入商品">
    </div>
    <!-- 搜索结果 -->
    <div class="result"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="less">
  .header{
    padding: 20rpx 30rpx;
    background-color: #ff2d4a;
    .search{
      input{
        height: 60rpx;
        width: 100%;
        background-color: #fff;
        border-radius: 12rpx;
        padding-left: 15rpx;
        font-size: 27rpx;
        color: #666;
      }
    }
  }
</style>
