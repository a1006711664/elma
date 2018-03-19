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

    <croppa v-model="myCroppa"
            :initial-image="inintIMG"
    ></croppa>


    <button @click="uploadImage">click</button>
    <button @click = 'showPic'>showPic</button>
    <button @click="uploadCroppedImage">blobPic</button>


    <img :src="blobTest" alt="">


    <cover :ifShow="ifShow"></cover>
    <button @click="ifshow">change_ifShow</button>
    <img :src="croppPic" alt="">



    <div v-drag="drag">
      <div class="dragItem" v-for="(item, index) in dragData">
{{item}}   .{{index}}
        <span @click="del(index)">删除</span>
      </div>



    </div>
<button @click ='showNumber'>shownumber </button>











  </div>


</template>

<script>
  import "./style.less";
  //轮播
  import 'swiperCss'
  import {Swiper,swiper, swiperSlide} from 'vue-awesome-swiper';

  import cover from '../io/cover.vue'

  var swiperJ = require('../../libs/touch/swiperJudge.js');
    export default {
        name: "seller",
      data:function(){
          return{
            //
            croppPic:'',
            ifShow:true,
            blobTest:null,
            myCroppa:{},
            inintIMG:null,
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
            //drag
            dragData:[1,2,3,4,5],

          }
      },
      components: {
        swiper,
        swiperSlide,
        cover,
      },
      methods:{
        del:function(i){
          this.dragData.splice(i,1);
        },
        showNumber:function(){
  console.log(this.dragData)
        },
        drag:function(e){
          console.log(e)
          this.dragData.splice(e.newIndex, 0, this.dragData.splice(e.oldIndex, 1)[0])
        },
        ifshow:function(){
            this.ifShow = !this.ifShow;
          },
        uploadCroppedImage() {
          var _self = this;
          this.myCroppa.generateBlob((blob) => {
            console.log(blob);
            // _self.blobTest = URL.createObjectURL(blob);
            _self.croppPic = URL.createObjectURL(blob);
            //下载
            // var fileName = 'LIU';
            // var link = document.createElement('a');
            // console.log(URL.createObjectURL)
            // link.href = URL.createObjectURL(blob);
            // link.download = fileName;
            // link.click();
            // URL.revokeObjectURL(link.href);


          }, 'image/jpeg', 0.8) // 80% compressed jpeg file
        },
        showPic:function(){
          this.croppPic = this.myCroppa.generateDataUrl();
          console.log(this.myCroppa.generateDataUrl());
        },
        uploadImage:function(){
          console.log(this.myCroppa)
          this.myCroppa.chooseFile();

        },

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
          _self.inintIMG = "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2347294745,975286493&fm=27&gp=0.jpg";
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
  .dragItem{
    background-color: #ccc;
    width: 50%;
    height: 50px;
    margin-bottom: 20px;
  }

</style>
