<template>
  <div>
<div>
  商家
</div>


  <swiper v-if='img.length>0' :options="swiperOption" ref="mySwiper"
  >
    <!-- slides -->
    <swiper-slide v-for="(item, index) in img" :key="index" >

      <img :src="item.path" alt="" >

    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination" slot="pagination"></div>
    <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
    <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
    <!--<div class="swiper-scrollbar"   slot="scrollbar"></div>-->
  </swiper>

<button @click='add'>click</button>

    <el-carousel height="150px">
      <el-carousel-item v-for="(item, index) in img" :key="index+'as'">
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
  import {swiper, swiperSlide} from 'vue-awesome-swiper'
 
  
  // console.log(a.slideTo)
    export default {
        name: "seller",
      data:function(){
          return{
            img:[ ],
            swiperOption: {
            centeredSlides: true,
            autoplay: {
              delay: 1500,
              disableOnInteraction: false
             },
              loop: true,
              observer:true,
              observeParents:true,
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

                }
              },

            },

          }
      },
      components: {
        swiper,
        swiperSlide
      },
      methods:{
        add:function(){
          this.img.push({
              path:
                "http://xtml.legeek.xyz/public/upload/banner/20180126/7529673d605b86a3ab73486768c11bd4.png",
            });
        },
          callback:function(){
          },
      },
      created:function(){
      },
      mounted:function () {
        var _self = this;
       
        var a = setTimeout(function(){
          _self.img.push({
              path:
                "http://xtml.legeek.xyz/public/upload/banner/20180126/7529673d605b86a3ab73486768c11bd4.png",
            });
         _self.img.push({
              path:'http://xtml.legeek.xyz/public/upload/banner/20180126/616672abbe3706abbe670db05dd88a87.png',
            });
              console.log(_self.$refs.mySwiper);
          // _self.swiper.slideTo(2, 1000, false);

        },1000);

      }

    }
</script>

<style scoped>
  .swiper-container{
    height: 100vw;
  }

</style>
