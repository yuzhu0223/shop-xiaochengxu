<template>
  <div class="wrapper">
    <!-- 订单状态 -->
    <div class="tabs">
      <span class="active">全部</span>
      <span>待付款</span>
      <span>已付款</span>
      <span>退款/退货</span>
    </div>
    <!-- 订单 -->
    <scroll-view class="orders" scroll-y>
      <div class="item">
        <!-- 商品图片 -->
        <image class="pic" src="/static/uploads/goods_1.jpg"></image>
        <!-- 商品信息 -->
        <div class="meta">
          <p class="name">【海外购自营】黎珐(ReFa) MTG日本 CARAT铂金微电流瘦脸瘦身提拉紧致V脸美容仪 【保税仓发货】</p>
          <p class="price"><span>￥</span>1399<span>.00</span></p>
          <p class="num">x1</p>
        </div>
        <!-- 总价 -->
        <div class="amount">
          共1件商品 总计: ￥4099(含运费0.00)
        </div>
        <!-- 其它 -->
        <div class="extra">
          订单号: GD20180511000000000178
          <button size="mini" type="primary" @click="payment(111111)">支付</button>
        </div>
      </div>

    </scroll-view>
  </div>
</template>

<style scoped lang="less">

  .wrapper {

  }

  .tabs {
    display: flex;
    height: 96rpx;
    line-height: 96rpx;
    background-color: #fff;
    box-shadow: 0 4rpx 10rpx #ccc;

    span {
      flex: 1;
      text-align: center;
      font-size: 27rpx;
      color: #333;

      &.active {
        color: #ea4451;
      }
    }
  }


  .orders {
    width: 100%;
    background-color: #f4f4f4;

    position: absolute;
    top: 97rpx;
    bottom: 0;
  }

  .item {
    padding: 30rpx 20rpx;
    margin-top: 27rpx;
    background-color: #fff;

    .pic {
      width: 200rpx;
      height: 200rpx;
      float: left;
    }

    .meta {
      height: 200rpx;
      margin-left: 230rpx;
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

    .num {
      position: absolute;
      bottom: 0;
      right: 20rpx;
      color: #333;
    }

    .amount {
      text-align: right;
      padding: 20rpx;
      font-size: 24rpx;
      border-top: 1rpx solid #eee;
      border-bottom: 1rpx solid #eee;
      margin-top: 20rpx;
      color: #999;
    }

    .extra {
      padding: 30rpx;
      font-size: 24rpx;
      color: #999;

      position: relative;

      button {
        position: absolute;
        right: 20rpx;
        font-size: 24rpx;
        margin-top: -10rpx;
      }
    }
  }

</style>

<script>
  import request from '@/utils/request'
  export default {
    data() {
      return {
        orderList: []
      }
    },
    //页面一进来，发送请求拿订单数据
    async onShow () {
      const {message, meta} = await request({
        url: '/api/public/v1/my/orders/all',
        header: {Authorization: mpvue.getStorageSync('token')},
        data: {
          type: 1
        }
      })
      this.orderList = message
    },
    methods: {
      async payment (order_number) {
        // 前端一般是只调起支付窗口
        // 但是在调起窗口时需要传入的参数:由后端提供，所以应先发起请求，获得这些参数
        // 然后再通过 wx.requestPayment() 调起支付窗口

        // 1. 发请求获取参数
        let {message} = await request({
          url: '/api/public/v1/my/orders/req_unifiedorder',
          method: 'post',
          header: {
            "Authorization": mpvue.getStorageSync('token')
          },
          data: {
            order_number
          }
        })

        // 2. 调起支付窗口
        // mpvue.requestPayment({
        //   timeStamp: message.pay.timeStamp,
        //   nonceStr: message.pay.nonceStr,
        //   package: message.pay.package,
        //   paySign: message.pay.paySign,
        //   signType: message.pay.signType,
        //   success: function () {
        //     console.log(111)
                // 然后调用成功之后，做刷新该页面(后端改支付状态)、清空购物车(实际后端处理)等操作
        //   }
        // })

      }
    }
  }

</script>
