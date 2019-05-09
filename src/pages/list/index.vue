
<template>
  <div>
    <!-- 筛选 -->
    <div class="filter">
      <span class="active">综合</span>
      <span>销量</span>
      <span>价格</span>
    </div>
    <!-- 商品列表 -->
    <scroll-view class="goods" scroll-y @scrolltolower="getMore">
      <div class="item" v-for="item in goodsList" :key="item.goods_id" @click="goGoodsDetail(item.goods_id)" >
        <!-- 商品图片 -->
        <image class="pic" :src="item.goods_small_logo"></image>
        <!-- 商品信息 -->
        <div class="meta">
          <p class="name">{{item.goods_name}}</p>
          <p class="price"><span>￥</span>{{item.goods_price}}<span>.00</span></p>
        </div>
      </div>
    </scroll-view>
  </div>
</template>

<style scoped lang="less">

  .filter {
    display: flex;
    height: 96rpx;
    line-height: 96rpx;
    border-bottom: 1rpx solid #ddd;

    span {
      flex: 1;
      text-align: center;
      font-size: 30rpx;
      color: #333;

      &.active {
        color: #ea4451;
      }
    }
  }

  .goods {
    position: absolute;
    width: 100%;
    top: 97rpx;
    bottom: 0;
  }

  .item {
    display: flex;
    padding: 30rpx 20rpx 30rpx 0;
    margin-left: 20rpx;
    border-bottom: 1rpx solid #eee;

    &:last-child {
      border-bottom: none;
    }

    .pic {
      width: 200rpx;
      height: 200rpx;
      margin-right: 30rpx;
    }

    .meta {
      flex: 1;
      font-size: 27rpx;
      color: #333;
      position: relative;
    }

    .name {
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }

    .price {
      position: absolute;
      bottom: 0;

      color: #ea4451;
      font-size: 33rpx;

      span {
        font-size: 22rpx;
      }
    }
  }

</style>

<script>
import request from '@/utils/request'
  export default {
    data() {
      return {
        goodsList: [],
        queryParams: '',
        pagenum: 1,
        pagesize: 5,
        goodsRequestObj: {},
        hasMore: true // 记录是否是否还有数据可加载，加载完时不再发送请求
      }
    },
    // 获取参数在onLoad事件形参里，或者使用mpvue优化过的地址参数this.$root.$mp.query;
    // 分页加载，懒加载，先加载前5条数据展示在页面，在滚动到底的事件中再次发请求加载后一页的数据
    async onLoad (params) {
      // console.log(params)
      this.queryParams = params // 把接收过来的参数保存在数据模型data中

      this.goodsRequestObj = { // 把数据组装成后端所需的参数对象
        query: params.query || '',
        cid: params.cid || '',
        pagenum: this.pagenum,
        pagesize: this.pagesize
      }

      const {message, meta} = await request({
        url: '/api/public/v1/goods/search',
        data: this.goodsRequestObj
      })
      // console.log(message)
      this.goodsList = message.goods
      // 判断如果加载回来的数据等于商品总数据，则hasMore状态为false，表示没有更多数据要加载了
      if (message.total === message.goods.length) {
        this.hasMore = false
      }
    },

    methods: {
      // 下拉触底事件:加载后一页数据：因为本页列表数据被放在scroll-view可视视图滚动区域中，所以onReachBottom事件不会触发
      // 所以可以使用mpvue封装的scroll-view中的scrolltolower事件属性触发滚动到底部/右边的回掉函数@scrolltolower="getMore"
      // 注意1：获取下页的数据后重新赋值为goodsList要把上一次的进行拼接
      // 注意2：判断，当加载完毕后，不再发送请求
      async getMore () {
        // console.log('到底...')
        // if (this.hasMore == false) return
        if (!this.hasMore) return // 没有更多数据时，return，不再发送请求

        this.goodsRequestObj.pagenum += 1
        const {message, meta} = await request({
          url: '/api/public/v1/goods/search',
          data: this.goodsRequestObj
        })
        // console.log(message)
        // this.goodsList = this.goodsList.push(...message.goods)
        this.goodsList = this.goodsList.concat(message.goods)
          // 判断如果加载回来的总数据等于商品总数据，则hasMore状态为false，表示没有更多数据要加载了
        if (this.goodsList.length >= message.total) {
          this.hasMore = false
        }
      },

      // 点击商品跳转到详情页
      goGoodsDetail (id) {
        mpvue.navigateTo({
          url: `/pages/goods/main?goods_id=${id}`
        })
      }
    },

  }
</script>
