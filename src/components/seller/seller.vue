<template>
  <div class="testBox">
<div>
  商家
</div>


  <swiper :options="swiperOption" ref="mySwiper" @touchStart="callback" v-if="isBanner">
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


    <!--<el-carousel height="150px">-->
      <!--<el-carousel-item v-for="(item, index) in img" :key="index">-->
        <!--<img :src="item.path" alt="">-->
      <!--</el-carousel-item>-->
    <!--</el-carousel>-->

<div class="cropperTest">


    <vueCropper
      ref="cropper"
      :img="optionPic.img"
      :outputSize="optionPic.size"
      :outputType="optionPic.outputType" class="asd"
    ></vueCropper>

</div>
  </div>


</template>

<script>
  import "./style.less";
  import VueCropper from 'vue-cropper';
  //轮播
  import 'swiperCss'
  import {Swiper,swiper, swiperSlide} from 'vue-awesome-swiper'

    export default {
        name: "seller",
      data:function(){
          return{
            isBanner:false,
            img:[],
            //图片剪裁
            optionPic:{
              img:require('./cropper.jpg'),
              autoCrop: true,
              autoCropWidth: 100,
              autoCropHeight: 100,
              fixedBox: true,

            },
            swiperOption: {
            autoplay: {
              //重要的
              delay: 2000,
              stopOnLastSlide: false,
              disableOnInteraction: false,
              },
              loop: true,
              observer:true,
              navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              },
              pagination: {
                el: '.swiper-pagination',
              },
            },

          }
      },
      components: {
        swiper,
        swiperSlide,
        VueCropper
      },
      methods:{
        callback:function(){
        },
      },
      created:function(){
      },
      mounted:function () {
        var _self = this;
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
          _self.isBanner = true;
        },1000);

      }

    }
</script>

<style scoped>
  .swiper-container{
    height: 100vw;
  }

</style>
