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
    <!--浮层-->
    <transition name="fade">
      <div v-show="detailShow" class="detail" >
        <div class="detail-wrapper clearfix">
          <div class="detail-main">
            <h1 class="name">{{seller.name}}</h1>
            <div class="starWrap">
              <star v-if="detailShow" :size="24" :score="seller.score"></star>
            </div>
            <div class="title">
              <div class="line">
              </div>
              <div class="text">
                优惠信息
              </div>
              <div class="line">
              </div>
            </div>
            <ul v-if="seller.supports" class="supports">
              <li class="support-item" v-for="(item, index) in seller.supports">
              <span class="icon" :class="classMap[seller.supports[index].type]">
              </span>
                <span class="text">{{seller.supports[index].description}}</span>
              </li>
            </ul>

            <div class="title">
              <div class="line">
              </div>
              <div class="text">
                商家公告
              </div>
              <div class="line">
              </div>
            </div>
            <div class="bulletin">
              <p class="content">
                {{seller.bulletin}}
              </p>
            </div>

          </div>
        </div>
          <div class="detail-close" @click="hiddenDetail">
          <i>X</i>
        </div>

      </div>
    </transition>
  </div>
</template>


<script>

  import star from '../star/star.vue'

  require('./style.less');

  export default {
    components: {
      star,
    },
    data: function () {
      return {
        detailShow: false,
        classMap: [],

      };
    },
    props: {
      seller: {
        type: Object,
      }
    },
    methods: {
      showDetail: function () {
        this.detailShow = true;
      },
      hiddenDetail: function () {
        this.detailShow = false;
      },
    },
    created: function () {
      this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
    },
    mounted: function () {

    },

  }


</script>

<style lang="less" scoped>
  /*tab下的less*/
  /*@import './style.less';*/

</style>
