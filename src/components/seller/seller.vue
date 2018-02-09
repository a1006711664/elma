<template>
  <div>
<div>
  商家
</div>


  <swiper :options="swiperOption" ref="mySwiper" @touchStart="callback">
    <!-- slides -->
    <swiper-slide v-for="(item, index) in img" :key="index" ref="swiperSlide">

      <img :src="item.path" alt="" >

    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination" slot="pagination"></div>
    <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
    <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
    <!--<div class="swiper-scrollbar"   slot="scrollbar"></div>-->
  </swiper>



    <el-carousel height="150px">
      <el-carousel-item v-for="(item, index) in img" :key="index">
        <img :src="item.path" alt="">
      </el-carousel-item>
    </el-carousel>

    <!--<el-carousel :interval="4000" type="card" height="200px">-->
      <!--<el-carousel-item v-for="(item, index) in img" :key="index">-->
        <!--<img :src="item.path" alt="">-->
      <!--</el-carousel-item>-->
    <!--</el-carousel>-->






  </div>


</template>

<script>
  //轮播
  import 'swiperCss'
  import {Swiper,swiper, swiperSlide} from 'vue-awesome-swiper'
  import swiperA from 'vue-awesome-swiper'
  var a = new swiperA.Swiper()
  // console.log(a.slideTo)
    export default {
        name: "seller",
      data:function(){
          return{
            img:[],
            swiperOption: {
              autoplay: true,
              loop: true,
              observer:true,
              navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              },
              pagination: {
                el: '.swiper-pagination',
              },
              on: {

                click:function(w){
                  console.log(this)
                  console.log(w)
                  console.log(swiper)

                }
              },

            },

          }
      },
      computed:{
          swiper:function(){
            return this.refs.mySwiper
          },
      },
      components: {
        swiper,
        swiperSlide
      },

      methods:{
          callback:function(){
            this.$refs.mySwiper.update();
          },
      },
      created:function(){
      },
      mounted:function () {
        var _self = this;
        console.log(_self.$refs);
        console.log(_self.$refs.mySwiper);
        var a = setTimeout(function(){
          _self.img=[
            {
              path:
                "http://xtml.legeek.xyz/public/upload/banner/20180126/7529673d605b86a3ab73486768c11bd4.png",
            },
            {
              path:'http://xtml.legeek.xyz/public/upload/banner/20180126/616672abbe3706abbe670db05dd88a87.png',
            },
            {
              path:
                "http://xtml.legeek.xyz/public/upload/banner/20180126/7529673d605b86a3ab73486768c11bd4.png",
            },

          ];

        },1000);

      }

    }
</script>

<style scoped>
  .swiper-container{
    height: 100vw;
  }

</style>
