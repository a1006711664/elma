<template>

  <div class="w2d" v-cloak>
      ....vue 插件js里  json 报错
<div>


  <section   v-for="(item, index) in numberDe" v-bind:key="index"
       v-scrollShow="test"     style="background-color: rgb(241, 196, 15); visibility: visible;">{{item}}</section>





</div>


  </div>

</template>


<script>
    // import ScrollReveal from 'scrollreveal'
    // window.sr = ScrollReveal({ reset: true });
    // sr.reveal('.foo', {
    //   duration: 600,
    // });

      export default {
      name: "live2-d",
      data:function () {
        return{
          numberDe:[1,3,4,5],
        }
      },
      methods:{
        test:function(e){
           console.log('hahaha');
        }
      },
      mounted:function () {
        var _self = this;
        setTimeout(function(){
          _self.numberDe = [1,3,4,5,2,3,4,5,6];
        },6000);
      }
    }
</script>




<style lang="less">
  .w2d{
    padding-top: 150%;
  }
  .section--purple{
    background-color: greenyellow;
  }
  section{
    width: 100%;
    height: 200px;
    margin-bottom: 20px;
  }

</style>
