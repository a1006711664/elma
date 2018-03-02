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
      </div>
    </div>
    <div class="bullentin-wrapper">

    </div>
  </div>
</template>


<script>
  require('./style.less');

    module.exports = {
      data:function(){
        return{
        }
      },
      props:{
        seller:{
          type:Object,
        }
      },
      methods: {},
      mounted:function(){

      }
  }


</script>

<style lang="less" scoped>
  /*tab下的less*/
  /*@import './style.less';*/
</style>
