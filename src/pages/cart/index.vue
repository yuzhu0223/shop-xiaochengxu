<template>
  <div class="wrapper">
    <!-- 收货信息 -->
    <dl class="shipment">
      <dt>收货人: </dt>
      <dd class="meta">
        <span class="name">刘德华</span>
        <span class="phone">13535337057</span>
      </dd>
      <dt>收货地址:</dt>
      <dd>广东省广州市天河区一珠吉</dd>
    </dl>
    <!-- 购物车 -->
    <div class="carts">
      <div class="item">
        <!-- 店铺名称 -->
        <div class="shopname">优购生活馆</div>
        <div class="goods">
          <!-- 商品图片 -->
          <image class="pic" src="/static/uploads/goods_1.jpg"></image>
          <!-- 商品信息 -->
          <div class="meta">
            <p class="name">【海外购自营】黎珐(ReFa) MTG日本 CARAT铂金微电流瘦脸瘦身提拉紧致V脸美容仪 【保税仓发货】</p>
            <p class="price"><span>￥</span>1399<span>.00</span></p>
          </div>
          <!-- 选框 -->
          <span class="checkbox">
            <icon type="success" color="#ea4451"></icon>
          </span>
        </div>
        <div class="goods">
          <!-- 商品图片 -->
          <image class="pic" src="/static/uploads/goods_2.jpg"></image>
          <!-- 商品信息 -->
          <div class="meta">
            <p class="name">【海外购自营】黎珐(ReFa) MTG日本 CARAT铂金微电流瘦脸瘦身提拉紧致V脸美容仪 【保税仓发货】</p>
            <p class="price"><span>￥</span>1399<span>.00</span></p>
          </div>
          <!-- 选框 -->
          <span class="checkbox">
            <icon type="success" color="#ea4451"></icon>
          </span>
        </div>
        <div class="goods">
          <!-- 商品图片 -->
          <image class="pic" src="/static/uploads/goods_5.jpg"></image>
          <!-- 商品信息 -->
          <div class="meta">
            <p class="name">【海外购自营】黎珐(ReFa) MTG日本 CARAT铂金微电流瘦脸瘦身提拉紧致V脸美容仪 【保税仓发货】</p>
            <p class="price"><span>￥</span>1399<span>.00</span></p>
          </div>
          <!-- 选框 -->
          <span class="checkbox">
            <icon type="success" color="#ccc"></icon>
          </span>
        </div>
      </div>
      <div class="item">
        <!-- 店铺名称 -->
        <div class="shopname">优购生活馆</div>
        <div class="goods">
          <!-- 商品图片 -->
          <image class="pic" src="/static/uploads/goods_1.jpg"></image>
          <!-- 商品信息 -->
          <div class="meta">
            <p class="name">【海外购自营】黎珐(ReFa) MTG日本 CARAT铂金微电流瘦脸瘦身提拉紧致V脸美容仪 【保税仓发货】</p>
            <p class="price"><span>￥</span>1399<span>.00</span></p>
          </div>
          <!-- 选框 -->
          <span class="checkbox">
            <icon type="success" color="#ccc"></icon>
          </span>
        </div>
        <div class="goods">
          <!-- 商品图片 -->
          <image class="pic" src="/static/uploads/goods_2.jpg"></image>
          <!-- 商品信息 -->
          <div class="meta">
            <p class="name">【海外购自营】黎珐(ReFa) MTG日本 CARAT铂金微电流瘦脸瘦身提拉紧致V脸美容仪 【保税仓发货】</p>
            <p class="price"><span>￥</span>1399<span>.00</span></p>
          </div>
          <!-- 选框 -->
          <span class="checkbox">
            <icon type="success" color="#ea4451"></icon>
          </span>
        </div>
        <div class="goods">
          <!-- 商品图片 -->
          <image class="pic" src="/static/uploads/goods_5.jpg"></image>
          <!-- 商品信息 -->
          <div class="meta">
            <p class="name">【海外购自营】黎珐(ReFa) MTG日本 CARAT铂金微电流瘦脸瘦身提拉紧致V脸美容仪 【保税仓发货】</p>
            <p class="price"><span>￥</span>1399<span>.00</span></p>
          </div>
          <!-- 选框 -->
          <span class="checkbox">
            <icon type="success" color="#ccc"></icon>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">

  .shipment {
    height: 100rpx;
    line-height: 2;
    padding: 30rpx 30rpx 40rpx 30rpx;
    font-size: 27rpx;
    color: #333;
    background-color: #fff;
    background-image: url(https://ugo2.oss-cn-hangzhou.aliyuncs.com/images/cart_border%402x.png);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: bottom;

    dt {
      width: 140rpx;
      float: left;
      clear: both;
    }

    dd {
      padding-left: 160rpx;
    }

    .meta {
      padding-right: 50rpx;
    }

    span.phone {
      float: right;
    }
  }

  .carts {
    background-color: #f4f4f4;
    overflow: hidden;

    .item {
      margin-top: 20rpx;
    }
    
    .shopname {
      padding: 30rpx;
      font-size: 30rpx;
      color: #333;
      background-color: #fff;
      border-top: 1rpx solid #eee;
      border-bottom: 1rpx solid #eee;
    }

    .goods {
      display: flex;
      padding: 30rpx 20rpx 30rpx 0;
      margin-left: 100rpx;
      border-bottom: 1rpx solid #eee;
      background-color: #fff;
  
      position: relative;

      span.checkbox {
        display: block;
        width: 100rpx;
        height: 100%;
        background-color: #fff;

        display: flex;
        justify-content: center;
        align-items: center;

        position: absolute;
        left: -100rpx;
        top: 0;
      }

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
  }
</style>

<script>
  export default {
    
  }
</script>