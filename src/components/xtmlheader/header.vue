<template>
  <div class="xheader">
    <div class="content-wrapper">
        <div class="avatar">
          <img :src="seller.avatar" alt="" width="64" height="64">
        </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{seller.name}}</span>
        </div>
        <div class="description">
            {{seller.description}}/{{seller.deliveryTime}}分钟送达
        </div>
        <div class="support" v-if="seller.supports">
          <span class="icon"></span>
          <span class="text">{{seller.supports[0].description}}</span>
        </div>
        <div v-if="seller.supports" class="support-count" @click="showDetail">
          <span class="count">
            {{seller.supports.length}}个
          </span>
          <!--<i> > </i>-->
        </div>
      </div>
    </div>
    <!--箭标-->
    <div class="bullentin-wrapper">
      <span class="bullentin-title"></span>
      <span class="bullentin-text">{{seller.bulletin}}</span>
      <i class="rightAB"> √</i>
    </div>
    <div class="background">
      <img :src="seller.avatar" alt="" width="100%" height="100%">
    </div>
    <div v-show="detailShow" class="detail">

    </div>
  </div>
</template>


<script>
  require('./style.less');

    module.exports = {
      data:function(){
        return{
          detailShow:false,

        };
      },
      props:{
        seller:{
          type:Object,
        }
      },
      methods: {
        showDetail:function () {
          this.detailShow = true;
        }
      },
      mounted:function(){

      }
  }


</script>

<style lang="less" scoped>
  /*tab下的less*/
  /*@import './style.less';*/
</style>
