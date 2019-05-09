<template>
  <div class="wrapper">
    <!-- 商品图片 -->
    <swiper class="pics" indicator-dots indicator-color="rgba(255, 255, 255, 0.6)" indicator-active-color="#fff">
      <swiper-item v-for="item in goodsDetailList.pics" :key="item.goods_id">
        <image :src="item.pics_big"></image>
      </swiper-item>
    </swiper>
    <!-- 基本信息 -->
    <div class="meta">
      <p class="price">￥{{goodsDetailList.goods_price}}</p>
      <p class="name">{{goodsDetailList.goods_name}}</p>
      <p class="shipment">快递: 免运费</p>
      <span class="collect">收藏</span>
    </div>
    <!-- 商品详情 -->
    <div class="detail">
      <rich-text :nodes="goodsDetailList.goods_introduce">
        <!-- {{goodsDetailList.introduce}} 不可以-->
        <!-- <div class="lazyimg"><p> </p> <p><img data-src="//image.suning.cn/uimg/sop/commodity/507961877110504129285860_x.jpg?from=mobile&amp;format=80q.webp" alt="" usemap="#Map333323" border="0" src="//image.suning.cn/uimg/sop/commodity/507961877110504129285860_x.jpg?from=mobile&format=80q.webp" width="100%" height="auto"> </p><div moduleid="R6152003_3" modulename="商品详情"><p><img id="desc-module-1" data-src="//image.suning.cn/uimg/sop/richtext/510652317146600143013180.gif?from=mobile" alt="" src="//image.suning.cn/uimg/sop/richtext/510652317146600143013180.gif?from=mobile" width="100%" height="auto"></p> <p><img data-src="//image.suning.cn/uimg/sop/commodity/800090713589949918474800_x.jpg?from=mobile&amp;format=80q.webp" alt="" align="absmiddle" src="//image.suning.cn/uimg/sop/commodity/800090713589949918474800_x.jpg?from=mobile&format=80q.webp" width="100%" height="auto"></p> <p> </p> <p><img data-src="//image.suning.cn/uimg/sop/commodity/484194456593253256362300_x.jpg?from=mobile&amp;format=80q.webp" alt="" align="absmiddle" src="//image.suning.cn/uimg/sop/commodity/484194456593253256362300_x.jpg?from=mobile&format=80q.webp" width="100%" height="auto"><img data-src="//image.suning.cn/uimg/sop/commodity/917532525117700908921880_x.jpg?from=mobile&amp;format=80q.webp" alt="" align="absmiddle" src="//image.suning.cn/uimg/sop/commodity/917532525117700908921880_x.jpg?from=mobile&format=80q.webp" width="100%" height="auto"><img data-src="//image.suning.cn/uimg/sop/commodity/302900934177039263659570_x.jpg?from=mobile&amp;format=80q.webp" alt="" align="absmiddle" src="//image.suning.cn/uimg/sop/commodity/302900934177039263659570_x.jpg?from=mobile&format=80q.webp" width="100%" height="auto"></p> <p><img id="desc-module-2" data-src="//image.suning.cn/uimg/sop/richtext/109414838517558566364875.gif?from=mobile" alt="" src="//image.suning.cn/uimg/sop/richtext/109414838517558566364875.gif?from=mobile" width="100%" height="auto"></p> <p><img data-src="//image.suning.cn/uimg/sop/commodity/107130518751648937056330_x.jpg?from=mobile&amp;format=80q.webp" alt="" align="absmiddle" src="//image.suning.cn/uimg/sop/commodity/107130518751648937056330_x.jpg?from=mobile&format=80q.webp" width="100%" height="auto"></p> <p><img id="desc-module-3" data-src="//image.suning.cn/uimg/sop/richtext/113020254580382243198480.gif?from=mobile" alt="" src="//image.suning.cn/uimg/sop/richtext/113020254580382243198480.gif?from=mobile" width="100%" height="auto"></p> <p><img data-src="//image.suning.cn/uimg/sop/commodity/176115361038262943564920_x.jpg?from=mobile&amp;format=80q.webp" alt="" align="absmiddle" src="//image.suning.cn/uimg/sop/commodity/176115361038262943564920_x.jpg?from=mobile&format=80q.webp" width="100%" height="auto"><img data-src="//image.suning.cn/uimg/sop/commodity/207298935318803752635120_x.jpg?from=mobile&amp;format=80q.webp" alt="" align="absmiddle" src="//image.suning.cn/uimg/sop/commodity/207298935318803752635120_x.jpg?from=mobile&format=80q.webp" width="100%" height="auto"><img data-src="//image.suning.cn/uimg/sop/commodity/201743685397849541267870_x.jpg?from=mobile&amp;format=80q.webp" alt="" align="absmiddle" src="//image.suning.cn/uimg/sop/commodity/201743685397849541267870_x.jpg?from=mobile&format=80q.webp" width="100%" height="auto"></p> <p><img id="desc-module-4" data-src="//image.suning.cn/uimg/sop/richtext/103750637198438294119680.gif?from=mobile" alt="" src="//image.suning.cn/uimg/sop/richtext/103750637198438294119680.gif?from=mobile" width="100%" height="auto"></p> <p><img data-src="//image.suning.cn/uimg/sop/commodity/695503551834142297742000_x.jpg?from=mobile&amp;format=80q.webp" alt="" align="absmiddle" src="//image.suning.cn/uimg/sop/commodity/695503551834142297742000_x.jpg?from=mobile&format=80q.webp" width="100%" height="auto"><img data-src="//image.suning.cn/uimg/sop/commodity/774079549173170209276170_x.jpg?from=mobile&amp;format=80q.webp" alt="" align="absmiddle" src="//image.suning.cn/uimg/sop/commodity/774079549173170209276170_x.jpg?from=mobile&format=80q.webp" width="100%" height="auto"><img data-src="//image.suning.cn/uimg/sop/commodity/287514515144034202873930_x.jpg?from=mobile&amp;format=80q.webp" alt="" align="absmiddle" src="//image.suning.cn/uimg/sop/commodity/287514515144034202873930_x.jpg?from=mobile&format=80q.webp" width="100%" height="auto"><img data-src="//image.suning.cn/uimg/sop/commodity/605608755139044222153770_x.jpg?from=mobile&amp;format=80q.webp" alt="" align="absmiddle" src="//image.suning.cn/uimg/sop/commodity/605608755139044222153770_x.jpg?from=mobile&format=80q.webp" width="100%" height="auto"><img data-src="//image.suning.cn/uimg/sop/commodity/108351023856790531230700_x.jpg?from=mobile&amp;format=80q.webp" alt="" align="absmiddle" src="//image.suning.cn/uimg/sop/commodity/108351023856790531230700_x.jpg?from=mobile&format=80q.webp" width="100%" height="auto"><img data-src="//image.suning.cn/uimg/sop/commodity/798315594942455774824100_x.jpg?from=mobile&amp;format=80q.webp" alt="" align="absmiddle" src="//image.suning.cn/uimg/sop/commodity/798315594942455774824100_x.jpg?from=mobile&format=80q.webp" width="100%" height="auto"><img data-src="//image.suning.cn/uimg/sop/commodity/190508963016833795885286_x.jpg?from=mobile&amp;format=80q.webp" alt="" align="absmiddle" src="//image.suning.cn/uimg/sop/commodity/190508963016833795885286_x.jpg?from=mobile&format=80q.webp" width="100%" height="auto"><img data-src="//image.suning.cn/uimg/sop/commodity/141588120645544589255060_x.jpg?from=mobile&amp;format=80q.webp" alt="" align="absmiddle" src="//image.suning.cn/uimg/sop/commodity/141588120645544589255060_x.jpg?from=mobile&format=80q.webp" width="100%" height="auto"><img data-src="//image.suning.cn/uimg/sop/commodity/148659357147759226284400_x.jpg?from=mobile&amp;format=80q.webp" alt="" align="absmiddle" src="//image.suning.cn/uimg/sop/commodity/148659357147759226284400_x.jpg?from=mobile&format=80q.webp" width="100%" height="auto"><img data-src="//image.suning.cn/uimg/sop/commodity/667489405172933492664530_x.jpg?from=mobile&amp;format=80q.webp" alt="" align="absmiddle" src="//image.suning.cn/uimg/sop/commodity/667489405172933492664530_x.jpg?from=mobile&format=80q.webp" width="100%" height="auto"><img data-src="//image.suning.cn/uimg/sop/commodity/183569935914284490686131_x.jpg?from=mobile&amp;format=80q.webp" alt="" align="absmiddle" src="//image.suning.cn/uimg/sop/commodity/183569935914284490686131_x.jpg?from=mobile&format=80q.webp" width="100%" height="auto"><img data-src="//image.suning.cn/uimg/sop/commodity/197955589413063521534975_x.jpg?from=mobile&amp;format=80q.webp" alt="" align="absmiddle" src="//image.suning.cn/uimg/sop/commodity/197955589413063521534975_x.jpg?from=mobile&format=80q.webp" width="100%" height="auto"><img data-src="//image.suning.cn/uimg/sop/commodity/167765858217973754085740_x.jpg?from=mobile&amp;format=80q.webp" alt="" align="absmiddle" src="//image.suning.cn/uimg/sop/commodity/167765858217973754085740_x.jpg?from=mobile&format=80q.webp" width="100%" height="auto"><img data-src="//image.suning.cn/uimg/sop/commodity/121921866788809612071000_x.jpg?from=mobile&amp;format=80q.webp" alt="" align="absmiddle" src="//image.suning.cn/uimg/sop/commodity/121921866788809612071000_x.jpg?from=mobile&format=80q.webp" width="100%" height="auto"><img data-src="//image.suning.cn/uimg/sop/commodity/831891756225862745125000_x.jpg?from=mobile&amp;format=80q.webp" alt="" align="absmiddle" src="//image.suning.cn/uimg/sop/commodity/831891756225862745125000_x.jpg?from=mobile&format=80q.webp" width="100%" height="auto"><a target="_blank"><img data-src="//image.suning.cn/uimg/sop/commodity/698672542214252790623880_x.jpg?from=mobile&amp;format=80q.webp" alt="" align="absmiddle" src="//image.suning.cn/uimg/sop/commodity/698672542214252790623880_x.jpg?from=mobile&format=80q.webp" width="100%" height="auto"></a><img data-src="//image.suning.cn/uimg/sop/commodity/849159706115371196385800_x.jpg?from=mobile&amp;format=80q.webp" alt="" align="absmiddle" src="//image.suning.cn/uimg/sop/commodity/849159706115371196385800_x.jpg?from=mobile&format=80q.webp" width="100%" height="auto"><img data-src="//image.suning.cn/uimg/sop/commodity/145230333812937776719769_x.jpg?from=mobile&amp;format=80q.webp" alt="" align="absmiddle" src="//image.suning.cn/uimg/sop/commodity/145230333812937776719769_x.jpg?from=mobile&format=80q.webp" width="100%" height="auto"><img data-src="//image.suning.cn/uimg/sop/commodity/559469845644541304879300_x.jpg?from=mobile&amp;format=80q.webp" alt="" align="absmiddle" src="//image.suning.cn/uimg/sop/commodity/559469845644541304879300_x.jpg?from=mobile&format=80q.webp" width="100%" height="auto"><img data-src="//image.suning.cn/uimg/sop/commodity/226148250180264536311460_x.jpg?from=mobile&amp;format=80q.webp" alt="" align="absmiddle" src="//image.suning.cn/uimg/sop/commodity/226148250180264536311460_x.jpg?from=mobile&format=80q.webp" width="100%" height="auto"><img data-src="//image.suning.cn/uimg/sop/commodity/107981854127101913069810_x.jpg?from=mobile&amp;format=80q.webp" alt="" align="absmiddle" src="//image.suning.cn/uimg/sop/commodity/107981854127101913069810_x.jpg?from=mobile&format=80q.webp" width="100%" height="auto"><a target="_blank"><img data-src="//image.suning.cn/uimg/sop/commodity/218666340781650096427000_x.jpg?from=mobile&amp;format=80q.webp" alt="" align="absmiddle" src="//image.suning.cn/uimg/sop/commodity/218666340781650096427000_x.jpg?from=mobile&format=80q.webp" width="100%" height="auto"></a><img data-src="//image.suning.cn/uimg/sop/commodity/693847083144359223266730_x.jpg?from=mobile&amp;format=80q.webp" alt="" align="absmiddle" src="//image.suning.cn/uimg/sop/commodity/693847083144359223266730_x.jpg?from=mobile&format=80q.webp" width="100%" height="auto"><img data-src="//image.suning.cn/uimg/sop/commodity/942977316970082932244900_x.jpg?from=mobile&amp;format=80q.webp" alt="" align="absmiddle" src="//image.suning.cn/uimg/sop/commodity/942977316970082932244900_x.jpg?from=mobile&format=80q.webp" width="100%" height="auto"><img data-src="//image.suning.cn/uimg/sop/commodity/101064701011648973211861_x.jpg?from=mobile&amp;format=80q.webp" alt="" align="absmiddle" src="//image.suning.cn/uimg/sop/commodity/101064701011648973211861_x.jpg?from=mobile&format=80q.webp" width="100%" height="auto"><img data-src="//image.suning.cn/uimg/sop/commodity/790082945619599091929500_x.jpg?from=mobile&amp;format=80q.webp" alt="" align="absmiddle" src="//image.suning.cn/uimg/sop/commodity/790082945619599091929500_x.jpg?from=mobile&format=80q.webp" width="100%" height="auto"><img data-src="//image.suning.cn/uimg/sop/commodity/244465111275768628810400_x.jpg?from=mobile&amp;format=80q.webp" alt="" align="absmiddle" src="//image.suning.cn/uimg/sop/commodity/244465111275768628810400_x.jpg?from=mobile&format=80q.webp" width="100%" height="auto"></p> <p><img id="desc-module-5" data-src="//image.suning.cn/uimg/sop/richtext/104426825998253418575800.gif?from=mobile" alt="" src="//image.suning.cn/uimg/sop/richtext/104426825998253418575800.gif?from=mobile" width="100%" height="auto"></p> <p><img data-src="//image.suning.cn/uimg/sop/commodity/135049999116123765389052_x.jpg?from=mobile&amp;format=80q.webp" alt="" align="absmiddle" src="//image.suning.cn/uimg/sop/commodity/135049999116123765389052_x.jpg?from=mobile&format=80q.webp" width="100%" height="auto"><img data-src="//image.suning.cn/uimg/sop/commodity/107873143612991783842781_x.jpg?from=mobile&amp;format=80q.webp" alt="" align="absmiddle" src="//image.suning.cn/uimg/sop/commodity/107873143612991783842781_x.jpg?from=mobile&format=80q.webp" width="100%" height="auto"><img data-src="//image.suning.cn/uimg/sop/commodity/193286469776891569790880_x.jpg?from=mobile&amp;format=80q.webp" alt="" align="absmiddle" src="//image.suning.cn/uimg/sop/commodity/193286469776891569790880_x.jpg?from=mobile&format=80q.webp" width="100%" height="auto"><img data-src="//image.suning.cn/uimg/sop/commodity/365997967845884139674200_x.jpg?from=mobile&amp;format=80q.webp" alt="" align="absmiddle" src="//image.suning.cn/uimg/sop/commodity/365997967845884139674200_x.jpg?from=mobile&format=80q.webp" width="100%" height="auto"><img data-src="//image.suning.cn/uimg/sop/commodity/107276298913590478151313_x.jpg?from=mobile&amp;format=80q.webp" alt="" align="absmiddle" src="//image.suning.cn/uimg/sop/commodity/107276298913590478151313_x.jpg?from=mobile&format=80q.webp" width="100%" height="auto"><img data-src="//image.suning.cn/uimg/sop/commodity/207683616783055999517870_x.jpg?from=mobile&amp;format=80q.webp" alt="" align="absmiddle" src="//image.suning.cn/uimg/sop/commodity/207683616783055999517870_x.jpg?from=mobile&format=80q.webp" width="100%" height="auto"><img data-src="//image.suning.cn/uimg/sop/commodity/134292594563010251995160_x.jpg?from=mobile&amp;format=80q.webp" alt="" align="absmiddle" src="//image.suning.cn/uimg/sop/commodity/134292594563010251995160_x.jpg?from=mobile&format=80q.webp" width="100%" height="auto"><img data-src="//image.suning.cn/uimg/sop/commodity/965752296860427109758100_x.jpg?from=mobile&amp;format=80q.webp" alt="" align="absmiddle" src="//image.suning.cn/uimg/sop/commodity/965752296860427109758100_x.jpg?from=mobile&format=80q.webp" width="100%" height="auto"></p></div><div moduleid="R6152003_4" modulename="商品尺码表"><p>   </p></div><div moduleid="R6152003_5" modulename="模特效果"><p>   </p></div></div> -->
      </rich-text>
    </div>
    <!-- 操作 -->
    <div class="action">
      <!-- button按钮添加open-type="contact"属性调用客服功能 -->
      <button open-type="contact">联系客服</button>
      <span class="cart">购物车</span>
      <span class="add" @click="addCart">加入购物车</span>
      <span class="buy">立即购买</span>
    </div>
  </div>
</template>

<style scoped lang="less">

  .wrapper {
    margin-bottom: 100rpx;
    background-color: #f4f4f4;
  }

  .pics {
    height: 720rpx;
  }

  .meta {
    height: 270rpx;
    line-height: 1;
    padding: 30rpx 180rpx 30rpx 20rpx;
    box-sizing: border-box;
    background-color: #fff;
    position: relative;

    .price {
      font-size: 36rpx;
      color: #ea4451;
      margin-bottom: 30rpx;
    }

    .name {
      color: #333;
      line-height: 1.4;
      font-size: 33rpx;
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }

    .shipment {
      font-size: 27rpx;
      color: #999;
      position: absolute;
      bottom: 30rpx;
    }

    .collect {
      width: 140rpx;
      height: 88rpx;
      text-align: center;
      padding-top: 50rpx;
      box-sizing: border-box;
      border-left: 1rpx solid #ddd;
      font-size: 22rpx;
      color: #999;

      position: absolute;
      right: 20rpx;
      top: 91rpx;
    }
  }

  .detail image {
    width: 100%;
    height: 480rpx;
    margin-top: 20rpx;
  }

  .action {
    width: 100%;
    height: 98rpx;
    background-color: #fff;

    position: fixed;
    left: 0;
    bottom: 0;

    display: flex;

    span {
      display: block;
    }

    .add, .buy {
      width: 210rpx;
      text-align: center;
      line-height: 98rpx;
      font-size: 27rpx;
      color: #fff;
    }

    .add {
      background-color: #f4b73f;
    }

    .buy {
      background-color: #ea4451;
    }

    button {
      padding: 0;
      border-radius: 0;
      background-color: #fff;

      &::after {
        border: none;
      }
    }

    button, .cart {
      flex: 1;
      line-height: 1;
      color: #989898;
      font-size: 24rpx;
      box-sizing: border-box;
      padding-top: 56rpx;
    }
  }

</style>

<script>
  import request from '@/utils/request'
  import sleep from '@/utils/sleep'
  export default {
    data() {
      return {
        goods_id: null,
        goodsDetailList: []
      }
    },
    methods: {
      // 购物车的存储结构: [{}, {}]
          // 如果用户登录，需要获得用户的 id
          // 如果用户未登录，先不存，等到某时用户登录了再补上
      // 1.购物车多数据情况是将商品购买信息, 发送给服务端
      // async addCart () {
      //   await request({
      //     url:
      //   });
      // }
      // 2.有极少数情况可以把购物车存在本地
      // 目前上课局限，临时做一个本地版本的购物车
      // 本地存数据，需要 API mpvue.setStorageSync
      async addCart () {
        // 模拟商品信息
        let goodsObj = {
          goods_id: this.goods_id,
          goods_num: 1
        }
        // 从本地存储中取出保存的添加购物信息，然后在取出的数据的基础上unshift添加进去
        // 注意：如果相同的商品，需要遍历本地存的数据，然后判断是否有相同的 id 有则数量+1，没有就 unshift 添加商品操作
        let cart = mpvue.getStorageSync('cart') || []
        // let idObj = {}
        // idObj = cart.forEach((item,i) => {
        //   return idObj[i] = item.goods_id
        // })
        // console.log(idObj)
        cart.unshift(goodsObj)
        // 存储商品信息
        mpvue.setStorageSync('cart', cart)

        mpvue.showToast({
          title: '加入成功',
          duration: 2000
        })
        // 等待2秒钟
        await sleep(2)
        // 消息提示之后跳转到购物车页面：所以在之前应该设置个异步执行2秒
        // 跳转到tab页，需要使用switchTab或者事件标签上开启switchTab属性
        mpvue.switchTab({
          url: '/pages/cart/main'
        })
      }
    },

    // 获取传过来的参数，发送请求渲染数据
    async onLoad (params) {
      // console.log(params)
      this.goods_id = params.goods_id
      const {message,meta} = await request({
        url: '/api/public/v1/goods/detail',
        data:params
      })
      // console.log(message)
      this.goodsDetailList = message
    }
  }
</script>
