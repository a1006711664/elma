<template>
  <div class="testBox"
       v-swiperight = "swiperight">
    <mt-loadmore :top-method="loadTop" @top-status-change="handleTopChange" ref="loadmore">
      <ul>
        <li v-for="item in list">{{ item }}</li>
      </ul>
      <div slot="top" class="mint-loadmore-top">
         <span class="rotate-circle circle-border">
            <span class="small-circle"></span>
        </span>
        <!--<span class="rotate-circle"></span>-->
        <!--<span v-show="topStatus !== 'loading'" :class="{ 'rotate': topStatus === 'drop' }">↓</span>-->
        <!--<span v-show="topStatus === 'loading'">Loading...</span>-->
      </div>
    </mt-loadmore>

  <!--start-->
  <!--<swiper :options="swiperOption" ref="mySwiper" @touchStart="callback" v-if="isBanner">-->
    <!--&lt;!&ndash; slides &ndash;&gt;-->
    <!--<swiper-slide v-for="(item, index) in img" :key="index" ref="swiperSlide">-->

      <!--<img :src="item.path" alt="" >-->

    <!--</swiper-slide>-->
    <!--&lt;!&ndash; Optional controls &ndash;&gt;-->
    <!--<div class="swiper-pagination" slot="pagination"></div>-->
    <!--<div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>-->
    <!--<div class="swiper-button-next swiper-button-white" slot="button-next"></div>-->
    <!--&lt;!&ndash;<div class="swiper-scrollbar"   slot="scrollbar"></div>&ndash;&gt;-->
  <!--</swiper>-->


    <!--<el-carousel height="150px">-->
      <!--<el-carousel-item v-for="(item, index) in img" :key="index">-->
        <!--<img :src="item.path" alt="">-->
      <!--</el-carousel-item>-->
    <!--</el-carousel>-->

    <!--end-->

<div class="cropperTest">


    <vueCropper
      ref="cropper"
      :img="option.img"
      :outputSize="option.size"
      :outputType="option.outputType"
      :info="true"
      :full="option.full"
      :canMove="option.canMove"
      :canMoveBox="option.canMoveBox"
      :fixedBox="option.fixedBox"
      :original="option.original"
      :autoCrop="option.autoCrop"
      :autoCropWidth="option.autoCropWidth"
      :autoCropHeight="option.autoCropHeight"


      @realTime="realTime"
    >


    </vueCropper>

</div>

  </div>


</template>

<script>
  import "./style.less";
  import VueCropper from 'vue-cropper';
  //轮播
  import 'swiperCss'
  import {Swiper,swiper, swiperSlide} from 'vue-awesome-swiper'
  var swiperJ = require('../../libs/touch/swiperJudge.js');
    export default {
        name: "seller",
      data:function(){
          return{
            option: {
              img: 'https://t10.baidu.com/it/u=2792595669,2545160207&fm=173&s=3A9265C94A6399555ED051190300C0C5&w=600&h=338&img.JPEG',
              size: 1,
              full: false,
              outputType: 'png',
              canMove: true,
              fixedBox: false,
              original: false,
              canMoveBox: false,


              autoCrop: true,
              // 只有自动截图开启 宽度高度才生效
              autoCropWidth: 300,
              autoCropHeight: 250,
              // 开启宽度和高度比例
            },
            isBanner:false,
            img:[],
            list:[1,2,3,4,56,6,7,23,3,4,4,4,5,66,7,87,8,9,9,0,3,345],
            topStatus: '',
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
          //cropper
        // 实时预览函数
        realTime (data) {
          this.previews = data
        },







        //end



        swiperight:function(s){
          console.log(12)
          console.log(swiperJ(s))
          if(swiperJ(s)){
            this.$router.push({ path: '/ratings' })
          }
        },
        callback:function(){
        },
        handleTopChange:function(status) {
          this.topStatus = status;
          console.log(status)
        },
        loadTop:function(){
          var _self = this;
          setTimeout(function(){
            _self.$refs.loadmore.onTopLoaded();
          },2000)
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
  .testBox{
    width: 100vw;
    overflow: hidden;
  }
  .swiper-container{
    height: 100vw;
  }

</style>
