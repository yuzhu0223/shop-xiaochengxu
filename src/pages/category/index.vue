<template>
  <div class="cat-container">
    <!-- 顶部搜索 -->
    <search></search>
    <!-- 分类 -->
    <div class="cat">
      <!-- 左侧顶级分类 -->
      <ul class="parent-cat">
        <scroll-view scroll-Y>
          <li
            :class="{active: isShowActive === i}"
            v-for="(item, i) in categoryList" :key="item.cat_id"
            @click="selectedLi(i)"
            >{{item.cat_name}}</li>
        </scroll-view>
      </ul>
      <!-- 右侧子级分类 -->
      <div class="child_cat">
        <scroll-view scroll-Y>
          <image class="picture" src="/static/uploads/category.png"></image>
          <div class="product"  v-for="item in catChild" :key="item.cat_id">
            <div class="title">{{item.cat_name}}</div>
            <div class="brand">
              <a :href="'/pages/list/main?query=' + child.cat_name" v-for="(child, i) in item.children" :key="i">
                <image :src="child.cat_icon"></image>
                <div class="desc">{{child.cat_name}}</div>
              </a>
            </div>
          </div>
        </scroll-view>
      </div>
    </div>
  </div>
</template>

<script>
import request from '@/utils/request'
 // 引入 搜索组件
import search from '@/components/search'
export default {
  data () {
    return {
      categoryList: [],
      isShowActive: 0
    }
  },
  computed: {
    // 当点击第几个的时候，isShowActive改变为第几个，此时显示改类的子类在右侧，
    // 而且，右侧内容并不是包含在左侧内容内，所以不能直接遍历其每项的children属性，
    // 所以需要通过计算属性在中间过渡一下
    // 过滤加工出整个categoryList中该个的children项，然后进行遍历展示
    catChild () {
      // 应该先判断在有categoryList的情况下过滤取出数据，否则没必要取数据
      return this.categoryList.length && this.categoryList[this.isShowActive].children
    }
  },

  // 每次进入该页面时，储存本页面的顶部title，以便search页面取消时返回该页面取出title设置
  onShow () {
    mpvue.setStorageSync('title', '分类')
  },

  mounted() {
    this.getCategory()
  },
  methods: {
    //分类数据
    async getCategory () {
      const {message, meta} = await request({
        url: '/api/public/v1/categories'
      })
      // console.log(message)
      if (meta.status === 200) {
        this.categoryList = message
      }
    },
    // li的点击事件:点击哪个让isShowActive展示
    selectedLi (index) {
      this.isShowActive = index
    }
  },
  components: {
    search
  }
}
</script>

<style scoped lang="less">
.cat{
  position: absolute;
  top: 0;
  bottom: 0;
  margin-top: 100rpx;
  width: 100%;
  display: flex;
  .parent-cat{
    width: 200rpx;
    height: 100%;
    background-color: #f4f4f4;
    scroll-view{
      height: 100%;
      li{
        height: 100rpx;
        width: 100%;
        line-height: 100rpx;
        text-align: center;
        font-size: 28rpx;
        border-bottom: 1rpx solid #eee;
      }
      li.active{
        position: relative;
        background-color: #fff;
        color: #ea4451;
        // 当在less的继承关系中 中需要伪类的时候 可以使用& 表示自己，否则默认是表示子代
          &::after{
          content: '';
          display: block;
          width: 9rpx;
          height: 60rpx;
          background-color: #ea4451;
          position: absolute;
          left: 0;
          top: 50%;
          margin-top: -30rpx;
        }
      }
    }

  }
  .child_cat{
    flex: 1;
    padding: 20rpx 16rpx;
    scroll-view{
      height: 100%;
      .picture{
        height: 180rpx;
        width: 100%;
      }
      .product{
        text-align: center;
        padding: 40rpx 40rpx 0 35rpx;
        .title{
          font-size: 27rpx;
          color: #333;
          &::before{
            content: '/';
            margin-right: 30rpx;
            color: #ccc;
          }
          &::after{
            content: '/';
            margin-left: 30rpx;
            color: #ccc;
          }
        }
        .brand{
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          a{
            display: block;
            width: 33.3333%;
            margin-bottom: 20rpx;
            image{
              width: 120rpx;
              height: 120rpx;
            }
            .desc{
              font-size: 24rpx;
            }
          }
        }
      }
    }
  }
}
</style>
