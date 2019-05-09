<template>
  <!-- 顶部搜索 -->
  <div class="search" :class="{focused: focused}">
    <!-- 搜索框 -->
    <div class="input-box">
      <input type="text"
        @focus="goSearch"
        :placeholder="placeholder"
        v-model="searchContent"
        @input="handleInput"
        @confirm="confirmSearch"
        >
      <span @click="cancelSearch">取消</span>
    </div>
    <!-- 搜索展示 -->
    <div class="content">
      <!-- 搜索历史标题 -->
      <div class="title">搜索历史
        <span class="clear" @click="clearHistory"></span>
      </div>
      <!-- 搜索历史展示列表 -->
      <div class="history">
        <a :href="'/pages/list/main?query='+item" v-for="(item,i) in searchHistory" :key="i">{{item}}</a>
      </div>
      <!-- 搜索结果展示 -->
      <div class="result" v-show="searchResultList.length">
        <scroll-view scroll-y>
          <a href="" v-for="item in searchResultList" :key="item.goods_id">{{item.goods_name}}</a>
        </scroll-view>
      </div>
    </div>
  </div>
</template>

<script>
import request from '@/utils/request'
export default {
  data() {
    return {
      focused: false,
      placeholder: '',
      searchContent: '',
      searchResultList: [],
      searchHistory: [], // 保存搜索历史记录
      isLock: false // isLock1.表示发送搜索商品请求的请求是否锁住
    }
  },
  methods: {
    // 点击搜索框聚焦: 给最大盒子容器添加显示focused类名
    goSearch () {
      this.focused = true
      this.placeholder = '请输入查询的商品'
      // 在首页内点击子组件搜索聚焦时(子传父事件)，改变首页盒子为可视固定高度，溢出部分隐藏，否则在滑动到底下时会显示出首页内容
      this.$emit('fixHeight', mpvue.getSystemInfoSync().windowHeight)
      // 设置顶部title
      mpvue.setNavigationBarTitle({
        title: '搜索'
      })

      // 隐藏底部tabBar,防止用户在该页面切换tabBar
      mpvue.hideTabBar()
    },

    // 点击取消按钮，取消搜索，显示首页
    cancelSearch () {
      this.focused = false
      this.placeholder = ''
      this.searchContent = ''
      this.searchResultList = [],
      // 在首页内点击子组件搜索聚焦时(子传父事件)，改变首页盒子为可视固定高度，溢出部分隐藏，
      // 否则在滑动到底下时会显示出首页内容,取消时，传参盒子高度为原来的auto
      this.$emit('fixHeight', 'auto')
      // 取消搜索时，顶部title设置回原来的页面title(从本地存储中取出设置)
      mpvue.setNavigationBarTitle({
        'title': mpvue.getStorageSync('title') || '优购'
      })

      // 显示底部tabBar
      mpvue.showTabBar()
    },

    // 输入查询商品时，发送请求进行查询
    // 注意：在查询多次时，网络状态不好的情况下，可能导致先请求的数据后回来的现象，这样会导致闪烁
    // 解决：节流，强行变成同步，在上次请求没有回来的情况下，不允许下次请求的发送
    // data中定义 isLock: false // isLock1.表示发送搜索商品请求的请求是否锁住
    async handleInput () {
      if (this.isLock) return // isLock2.锁住时return，不发送请求
       this.isLock = true // isLock3.发送请求前改变状态锁住
      // 输入检测,如果输入为空，则不发送请求
      if (!this.searchContent) return this.searchResultList = []
      // 发送请求
      const {message, meta} = await request({
        url: '/api/public/v1/goods/qsearch',
        data: {
          query: this.searchContent
        }
      })
      // console.log(message)
      if (meta.status === 200) {
        this.searchResultList = message
        this.isLock = false // isLock4.打开锁住状态，表示请求完毕，可以发送下次请求了
      }
    },

    // 用户按下确认或enter键搜索时触发的事件：记录其搜索的value保存到本地存储，记为搜索历史,并且有搜索出来内容时要跳转到商品list页
    // 注意：在触发该事件之前即本页面加载时(可在created生命周期中)也要先读取本地缓存的历史记录，然后赋值给searchHistory
    confirmSearch () {
      // 1.这里真正去搜索内容了,在发送请求之前，将搜索关键字记录下来,通常的做法是记录在本地
      // 1.1先取出本地存储的搜索历史记录信息
      this.searchHistory = mpvue.getStorageSync('history') || []
      // 1.2再把本地输入的添加进去并去重之后再存储进去
      this.searchHistory.unshift(this.searchContent)
      this.searchHistory = [... new Set(this.searchHistory)]
      mpvue.setStorageSync('history', this.searchHistory)
      // this.searchContent = ''

      // 2.对于搜索出来的内容，在按下确定或者enter键时，应该跳转到所搜商品的商品列表页
      mpvue.navigateTo({
        url: `/pages/list/main?query=${this.searchContent}`
      })
    },

    // 清除搜索历史:清除本地缓存，清除记录的历史数据
    clearHistory () {
      mpvue.removeStorageSync('history')
      this.searchHistory = []
    }
  },

  // 读取本地存储的搜索历史记录，将数据渲染到页面
  created() {
    this.searchHistory = mpvue.getStorageSync('history') || []
  }
}
</script>

<style scoped lang="less">
  .search{
    .input-box{
      background-color: #ea4451;
      padding: 20rpx 30rpx;
      display: flex;
      position: relative;
      input{
        height: 60rpx;
        background-color: #fff;
        border-radius: 12rpx;
        padding-left: 70rpx;
        font-size: 27rpx;
        color: #666;
        flex: 1;
      }
      span{
        display: none;
        width: 80rpx;
        text-align: right;
        line-height: 60rpx;
        font-size: 24rpx;
        color: #666;
      }
      &::after{
        display: block;
        content: '搜索';
        font-size: 24rpx;
        color: #666;
        width: 60rpx;
        height: 44rpx;
        line-height: 44rpx;
        transform: translate(-50%);
        padding-left: 60rpx;
        // background-image: url(/static/images/icon_search@2x.png);
        // wxss 不支持本地资源，只能获取网络的
        background-image: url(https://ugo2.oss-cn-hangzhou.aliyuncs.com/images/icon_search%402x.png);
        background-repeat: no-repeat;
        background-size: 44rpx;

        position: absolute;
        left: 50%;
        top: 28rpx;
      }
      &::before{
        display: none;
        content: '';
        width: 44rpx;
        height: 44rpx;
        background-image: url(https://ugo2.oss-cn-hangzhou.aliyuncs.com/images/icon_search%402x.png);
        background-repeat: no-repeat;
        background-size: cover;

        position: absolute;
        left: 40rpx;
        top: 28rpx;
      }
    }
    .content{
      display: none;
      position: relative;
    }
    &.focused{
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      z-index: 9;
      display: flex;
      flex-direction: column;
      .input-box {
        background-color: #eee;
        span {
          display: block;
        }
        &::after {
          display: none;
        }
        &::before {
          display: block;
        }
      }

      .content{
        display: block;
        flex: 1;
        padding: 27rpx;
        background-color: #fff;
        .title{
          font-size: 30rpx;
          color: #333;
          .clear{
            display: block;
            width: 27rpx;
            height: 27rpx;
            float: right;
            background-image: url(https://ugo2.oss-cn-hangzhou.aliyuncs.com/images/clear.png);
            background-size: cover;
          }
        }
        .history{
          padding-bottom: 10rpx;
          a{
            display: inline-block;
            padding: 25rpx 30rpx;
            color: #333;
            background-color: #ddd;
            font-size: 24rpx;
            margin-right: 15rpx;
            margin-top: 20rpx;
          }
        }
        .result{
          position: absolute;
          left: 0;
          top: 0;
          right: 0;
          bottom: 0;
          background-color: #fff;
          z-index: 10;
          a{
            display: block;
            border-bottom: 1rpx solid #eee;
            font-size: 24rpx;
            padding: 15rpx 30rpx;
          }
        }
      }
    }

  }
</style>
