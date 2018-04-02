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
            </span>
          </div>
          <div class="score-wrappwer">
            <span class="title">
              商品评分 <star :size="24" :score="seller.foodScore"></star>
            </span>
          </div>
          <div class="delivery-wrapper">
            <span class="title">送达时间</span>
            <span>{{seller.deliveryTime}}</span>分钟
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  import star from  "../star/star"
    export default{
        data: function () {
            return {}
        },
      props:{
          seller:{
            type: Object,
          }
      },
        methods: {

        },
      components:{
        star
      }
    }


</script>


<style lang="less" scoped>
  @import './style.less';
</style>
