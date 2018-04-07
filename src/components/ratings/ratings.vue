<template>
  <div class="ratings">

    <div class="ratings-content">
      <div class="overview">
        <div class="overview-left">
          <div class="score">
            {{seller.score}}
          </div>
          <div class="title">
            综合评分
          </div>
          <div class="rank">
            高于周边商家 {{seller.rankRate}}%
          </div>
        </div>
        <div class="overview-right">
          <div class="score-wrappwer">
            <span class="title">
              服务态度 <star :size="24" :score="seller.serviceScore"></star>
              <span class="score">{{seller.serviceScore}}</span>

            </span>
          </div>
          <div class="score-wrappwer">
            <span class="title">
              商品评分 <star :size="24" :score="seller.foodScore"></star>
              <span class="score">
                 {{seller.serviceScore}}
              </span>
            </span>
          </div>
          <div class="delivery-wrapper">
            <span class="title">送达时间</span>
            <span class="delivery">{{seller.deliveryTime}}分钟</span>
          </div>
        </div>

      </div>
      <split></split>
      <ratingselect :select-type="selectType" :only-content="onlyContent"
                    :ratings="ratings"></ratingselect>


      <div class="ratings-wrapper">
        <ul>
          <li v-for="rating in ratings" class="ratingItem">
          <div class="avatar">
            <img :src="rating.avatar" alt="">
          </div>
            <div class="content">
              <h1 class="name">{{rating.username}}</h1>
              <div class="star-wrapper">
                <star :size="24" :score="rating.score"></star>
                <span class="delivery" v-show="rating">
{{rating.deliveryTime}}
                </span>
                <p class="text">{{rating.text}}</p>
                <div class="recommend" v-show="rating.recommend.length">
                  <span class="laud">赞</span><span v-for="item in rating.recommend">{{item}}</span>
                </div>
                <div class="time">

                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import star from "../star/star"
  import split from "../split/split"
  import ratingselect from "../ratingselect/ratingselect"

  import DF from "@/libs/dateFormat/dateFormat"

  const ALL = 2;
  const ERR_OK = 0;

  export default {
    data: function () {
      return {
        desc:{},
        ratings: [],
        selectType: ALL,
        onlyContent: true
      };
    },
    props: {
      seller: {
        type: Object,
      }
    },
    methods: {},
    created(){
      let _self = this;
      this.$http.get('api/ratings').then(response => {
        response = response.body;
        if(response.errno == ERR_OK){
          _self.ratings = response.data;
        }

      }, response => {
        // error callback
      });
  },
    components: {
      star,
      split,
      ratingselect
    }
  }


</script>


<style lang="less" scoped>
  @import './style.less';
</style>
