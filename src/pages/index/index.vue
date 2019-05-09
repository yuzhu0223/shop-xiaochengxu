<template>
  <div :style="{height: searchFocusHeight, overflow: 'hidden'}">
    <!-- 顶部搜索 -->
    <search @fixHeight="handleFixHeight"></search>
    <!-- 轮播图 -->
    <swiper
      class="banner"
      indicator-dots indicator-color="rgba(255,255,255,0.6)" indicator-active-color="#fff" autoplay circular interval="2000">
      <swiper-item v-for="(item,i) in swiperList" :key="i">
        <!-- 跳转到列表页的地址与参数的拼接 :url="'/pages/list/main?query=' + item.name" -->
        <navigator :url="'/pages/list/main?cid=' + item.goods_id">
          <image :src="item.image_src"></image>
        </navigator>
      </swiper-item>
    </swiper>
    <!-- 导航  -->
    <div class="navs">
      <!-- 点击跳转到分类页，因为分类页是tab页，所以直接跳转不过去，所以需要需要给navigator放置open-type="switchTab"属性
      允许跳转到tab页，也可用js控制：调用wx.switchTab -->
      <navigator open-type="switchTab" url="/pages/category/main" v-for="(item, i) in navsList" :key="i">
        <image :src="item.image_src"></image>
      </navigator>
    </div>
    <!-- 楼层 -->
    <div class="floors">
      <div class="floor" v-for="(item, i) in floorsList" :key="i">
        <!-- 楼层标题 -->
        <div class="title">
          <image :src="item.floor_title.image_src"></image>
        </div>
        <!-- 楼层介绍图片 -->
        <div class="img">
          <navigator :url="'/pages/list/main?query=' + item.name" v-for="(item2, index) in item.product_list" :key="index">
            <image :src="item2.image_src"></image>
          </navigator>
        </div>
      </div>
    </div>
    <!-- 回到顶部 -->
    <span class="gotop icon-home" @click="goTop" v-show="isTop"></span>
  </div>
</template>

<script>
// 导入 Promise 模块
import request from '@/utils/request.js'
// 导入search组件
import search from '@/components/search'
export default {
  components: {
    search
  },
  data () {
    return {
      isTop: false,
      swiperList: [],
      navsList: [],
      floorsList: [],
      searchFocusHeight: 'auto'
    }
  },

  mounted() {
    this.getSwiper()
    this.getNavs()
    this.getFloors()
  },

    // 原生小程序提供了网络访问的能力，即 wx.request
    // 在 mpvue 中，所有的原生小程序的 API 都能被支持
    // 前提需要将 wx 命名空间转换成 mpvue 即 wx.request
    // 转换为 mpvue.request

    // wx.showLoading() 转换 mpvue.showLoading() // 并且所需要的参数完全一致！！！
  methods: {
    // 轮播图
    /************ 传统异步 ************/
    // async getSwiper () {
    // var _this = this;
    // mpvue.request({
    //   url: 'https://www.zhengzhicheng.cn/api/public/v1/home/swiperdata',
    //   success: function (info) {
    //     // console.log(info);
    //     _this.bannerList = info.data.message;
    //   }
    // });

    /************ promise 处理异步 ************/

    // request('https://www.zhengzhicheng.cn/api/public/v1/home/swiperdata').then(function (info) {
    //   console.log(info)
    // })
    async getSwiper () {
      const {message, meta} = await request({
          url: '/api/public/v1/home/swiperdata'
      })
      if(meta.status === 200) {
        this.swiperList = message
      }
    },

    // 导航分类
    async getNavs () {
      const {message, meta} = await request({
        url: '/api/public/v1/home/catitems'
      })
      // console.log(message)
      if(meta.status === 200) {
        this.navsList = message
      }
    },

    // 楼层
    async getFloors () {
      const {message, meta} = await request({
        url: '/api/public/v1/home/floordata'
      })
      // console.log(message)
      if(meta.status === 200) {
        this.floorsList = message
      }
    },

    // 回到顶部
    goTop () {
      // 调用小程序原生接口，使页面滚动到指定位置
      mpvue.pageScrollTo({
        scrollTop: 0
      })
    },

    // 在首页内点击子组件搜索聚焦时(子传父事件)，改变首页盒子为可视固定高度，溢出部分隐藏，
    // 否则在滑动到底下时会显示出首页内容
    handleFixHeight (res) {
      // console.log(res)
      const height = typeof(res) ? res + 'px' : 'auto'
      this.searchFocusHeight = height
    }
  },

  // 每次进入该页面时，储存本页面的顶部title，以便search页面取消时返回该页面取出title设置
  onShow () {
    mpvue.setStorageSync('title', '优购')
  },

  // 同级这里可以直接写小程序页面的事件监听
  onPullDownRefresh () {
    // 下拉刷新
    this.getSwiper()
    this.getNavs()
    this.getFloors()
     // 当请求完毕时，主动关闭加载动效
    mpvue.stopPullDownRefresh()
  },

  onReachBottom () {
    // 上拉加载...
  },

  // 页面滚动事件:控制回到顶部按钮的滚动距离的显示与否
  onPageScroll (e) {
    // console.log(e)
    // 当大于等于 200 时，显示回到顶部
    this.isTop = e.scrollTop >= 200
  }

}
</script>

<style scoped lang="less">
  // 在 vue 中使用 less 需要安装
  // less-loader、less 并且还需要进行配置 (webpack)

  // 在 mpvue 中使用 less 同样需要安装
  // less-loader、less 但是无须配置
  // 顶部
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
  // 轮播图
  .banner{
    width: 750rpx;
    height: 340rpx;
    navigator {
      width: 100%;
      height: 100%;
    }
  }
  //  导航
  .navs{
    width: 100%;
    height: 190rpx;
    padding: 20rpx;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    navigator {
      width: 25%;
      height: 100%;
    }
  }
  // 楼层
  .floors{
    .floor{
      .title{
        width: 750rpx;
        height: 60rpx;
        padding-top: 27rpx;
        padding-left: 15rpx;
        background-color: #f4f4f4;
      }
      .img{
        overflow: hidden;
        margin-bottom: 10rpx;
        navigator{
          height: 188rpx;
          margin-left: 13rpx;
          margin-top: 10rpx;
          float: left;
        }
        navigator:first-child{
          width: 232rpx;
          height: 386rpx;
        }
        navigator:nth-child(2){
          width: 273rpx;
        }
        navigator:nth-child(3){
          width: 193rpx;
        }
        navigator:nth-child(4){
          width: 193rpx;
        }
        navigator:nth-child(5){
          width: 273rpx;
        }
      }
    }
  }
  // 回到顶部
  .gotop{
    position: fixed;
    bottom: 60rpx;
    right: 30rpx;
    // display: inline-block;
    width: 88rpx;
    height: 88rpx;
    border-radius: 50%;
    background-color: #ccc;
    text-align: center;
    line-height: 88rpx;
  }
</style>
