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
        <div class="goods" v-for="(item,index) in cartList" :key="item.goods_id">
          <!-- 商品图片 -->
          <image class="pic" :src="item.goods_pic"></image>
          <!-- 商品信息 -->
          <div class="meta">
            <p class="name">{{item.goods_name}}</p>
            <p class="price"><span>￥</span>{{item.goods_price}}<span>.00</span></p>
            <!-- 加减 -->
            <div class="amount">
              <span class="reduce" @click="changeNum(-1,index)">-</span>
                <!-- 事件对象可以获取最新输入的数量value值，index可以断定改变的是哪个商品的数量 -->
              <input type="number" :value="item.goods_number" class="number" @blur="checkInputNum($event,index)">
              <span class="plus" @click="changeNum(1,index)">+</span>
            </div>
          </div>
          <!-- 选框 -->
          <span class="checkbox">
            <icon type="success" size="20" :color="item.goods_selected ? '#ea4451': '#ccc'" @click="changeSelected(index)"></icon>
          </span>
        </div>
      </div>
    </div>
    <!-- 其它 -->
    <div class="extra">
      <label class="checkall">
        <icon type="success" :color="checkedAll ? '#ea4451': '#ccc'"  size="20" @click="changeCheckedAll"></icon>
        全选
      </label>
      <div class="total">
        合计: <span>￥</span><label>{{totalPrice}}</label><span>.00</span>
      </div>
      <div class="pay" @click="pay">结算(3)</div>
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
    padding-bottom: 110rpx;
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
        width: 101rpx;
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

      .amount {
        position: absolute;
        bottom: 0;
        right: 20rpx;

        height: 48rpx;
        text-align: center;
        border: 1rpx solid #ddd;
        border-radius: 8rpx;

        display: flex;
        align-items: center;

        span {
          display: block;
          width: 60rpx;
          line-height: 48rpx;
          font-size: 36rpx;
          color: #ddd;
          text-align: center;
        }

        input {
          width: 60rpx;
          height: 48rpx;
          min-height: 48rpx;
          font-size: 27rpx;
          border-left: 1rpx solid #ddd;
          border-right: 1rpx solid #ddd;
        }
      }
    }
  }

  .extra {
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 9;

    width: 750rpx;
    height: 96rpx;
    text-align: center;
    line-height: 96rpx;
    font-size: 36rpx;
    border-top: 1rpx solid #eee;
    background-color: #fff;
    color: #333;

    display: flex;

    .checkall {
      width: 140rpx;
      line-height: 1;
      margin-left: 25rpx;
      display: flex;
      align-items: center;

      icon {
        margin-right: 20rpx;
      }
    }

    .total {
      display: flex;
      justify-content: center;
      flex: 1;

      label, span {
        color: #ea4451;
        vertical-align: bottom;
        position: relative;
        bottom: -2rpx;
      }

      span {
        position: relative;
        bottom: -3rpx;
        font-size: 24rpx;

        &:first-child {
          margin-left: 10rpx;
        }
      }
    }

    .pay {
      width: 200rpx;
      background-color: #ea4451;
      color: #fff;
    }

  }
</style>

<script>
import request from '@/utils/request'
import getSetting from '@/utils/getSetting'
import login from '@/utils/login'
import getUserInfo from '@/utils/getUserInfo'
  export default {
    data() {
      return {
        cartList: [],
        checkedAll: true,
        totalPrice: 0
      }
    },
    // 在展示页面的时候获取本地存储的购物信息，展示到页面上(实际开发中发送后端请求)
    onShow () {
      this.cartList = mpvue.getStorageSync('cart') || []
      // console.log(this.cartList)

      this.getTotalPrice()
    },
    methods: {
      // 加减操作改变商品数量
      changeNum (step, index) {
        // 改变数量之前，需要进行验证,如果step为-1时，数量<=1,return;如果step为1，数量>=商品库存总量（假定库存为100）,return
        if (step === -1 && this.cartList[index].goods_number <= 1) return
        if (step === 1 && this.cartList[index].goods_number >= 100) {
          mpvue.showToast('库存不足')
          return
        }
        // 不能直接修改绑定的数量，因为是遍历绑定的数据，直接修改的话修改的全部的数据，所以应该根据下标或商品id判断改变的是哪个索引或id商品的数量
        this.cartList.map((val,i) => {
          if (index === i) {
            val.goods_number += step
          }
        })

        this.getTotalPrice() // 数量改变，调用重新计算总价
      },

      // 输入框中数量的改变：通过失焦事件，
      // 先找到输入框改变的那项，然后判断数量输入框中输入的数据是否小于1或者大于库存
      checkInputNum (e,index) {
        this.cartList.map((val,i) => {
          if (index === i) { // 找到输入框改变的那项，然后进行数量判断
            if (e.mp.detail.value <= 1) return this.cartList[index].goods_number = 1
            if (e.mp.detail.value >= 100) {
              mpvue.showToast('库存不足')
              this.cartList[index].goods_number = 100
              return
            }
          }
        })
        this.getTotalPrice() // 数量改变，调用重新计算总价
      },

      // 商品的选中状态的改变,类似加减的改变，且复选框的状态影响全选按钮的状态
      changeSelected (index) {
        this.cartList.map((val,i) => {
          // 若点击当前索引的商品，则当前索引商品的选中状态改变取反
          if (index === i) {
            val.goods_selected = !val.goods_selected
          }

          // 如果有未选中的商品，则全选按钮不选中
          if (!val.goods_selected) {
            this.checkedAll = false
          }
        })

        // 若商品都选中则全选按钮也选中
        const isAllSelected = this.cartList.every((item,i) => {
          return item.goods_selected
        })
        if (isAllSelected) {
          this.checkedAll = true
        }

        this.getTotalPrice() // 商品选中状态改变，调用重新计算总价
      },

      // 全选按钮的选中状态,点击全选按钮时，改变其自己的状态，也要改变所有商品的选中状态
      changeCheckedAll () {
        this.checkedAll = !this.checkedAll
        this.cartList.forEach((item,i) => {
          item.goods_selected = this.checkedAll
        })

        this.getTotalPrice() // 全选按钮状态改变，调用重新计算总价
      },

      // 总金额的计算,注意：在页面进来的时候要先调用一次计算总价，在其他操作改变时也都要调用
      getTotalPrice () {
        // 每次调用改方法+=计算总价之前，先把之前的清0
        this.totalPrice = 0
        this.cartList.forEach((item,i) => {
          // 将 goods_selected 值为 true 商品统计金额
          if(item.goods_selected) {
            this.totalPrice += item.goods_price * item.goods_number;
          }
        })
      },

      // 点击结算,创建订单:请求中需要携带token--获取token发送请求：需要通过wx.login()获取用户登录凭证code + 通过 getUserInfo获取用户信息encryptedData、iv、rawData、signature--需要先用wx.getSetting检测用户是否授权才能获取code及用户信息:授权可获取信息，未授权跳转到授权页面让其授权--授权页面创建：button按钮开发open-type=getUserInfo，触发getuserinfo事件回掉获取用户信息，并在success中跳转回退到跳转过来的页面:wx.navigateBack({delta:1})
      async pay () {
        // 1.过滤出选中的商品数据，并判断选中的商品为0时return，不发送请求
        const selectedGoods = this.cartList.filter((item) => {
          return item.goods_selected === true
        })
        if (selectedGoods.length === 0) return

        // 以下2,3,4步骤可以各个封装成Promise，因为2,3,4属于嵌套函数，3,4没有依赖但是也要嵌套，所以可以封装成Promise解决回掉地狱的问题
        // 2.检测用户是否授权
        const {authSetting} = await getSetting()
        if (!authSetting['scope.userInfo']) {
          return mpvue.navigateTo({
            url: '/pages/auth/main'
          })
        }
        // console.log(authSetting)

        // 3.登录获取code
        const {code} = await login()
        // console.log(code)

        // 4.获取用户信息
        const {encryptedData, iv, rawData, signature} = await getUserInfo()
        // console.log(res1)

        // 5.发送获取token的请求，并将获取的token存储
        // 注意：发送请求的前端人员要在开发人员名单里，并且前端发送请求的AppId要与后端接收请求的AppId一致
        // 因为后端需要AppId、开发密钥、code三者数据处理，才生成token，所以此处token数据获取不到
        // const {message, meta} = await request({
        //   url: '/api/public/v1/users/wxlogin',
        //   method: 'post',
        //   data: {
        //     code,
        //     encryptedData,
        //     iv,
        //     rawData,
        //     signature
        //   }
        // })
        let message1 = {}
        message1.token = 'Bearer ey JhbGcioiJIUzIINiIsInR5cCI6IkpxVCJ9.eyJ1awQi0jYzLCJ pYXQi0jEINTczOTA5NjUsImV4cCI6MTUINzQ3NzM2NXO.iLCLCESErbh'
        // console.log(message1)
        // 记录登录的状态即 token
        mpvue.getStorageSync('token', message1.token)

        // 6.发送生成新订单的请求
        const {message,meta} = await request({
          url: '/api/public/v1/my/orders/create',
          method: 'post',
          header: {"Authorization" :  message1.token},
          data: {
            order_price: this.totalPrice,
            consignee_addr: '北京马坡',
            goods: selectedGoods
          }
        })
        console.log(message) // token无效返回message为null，meta.status=401

        // 7.获取订单成功后，跳转至订单页面
        if (meta.status === 401) {
          mpvue.navigateTo({
            url: '/pages/order/main'
          })
        }


      }

    },
  }
</script>
