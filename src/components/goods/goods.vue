<template>
  <transition :name="transitionName" >
    <div class="goodsWrap"
         v-swipeleft = "swipeleft"
         v-swiperight = "swiperight">

      <br/>
      商品<br/>
      商品<br/>
      商品<br/> 商品<br/> 商品<br/>
      商品<br/>
      商品<br/>
      商品<br/>
      商品<br/> 商品<br/> 商品<br/> 商品<br/> 商品<br/> 商品<br/> 商品<br/> 商品<br/>
      <br/>
    </div>
  </transition>
</template>

<script>
  var swiperJ = require('../../libs/touch/swiperJudge.js');
    module.exports = {
        data: function () {
            return {
              transitionName:'qwe',
            }
        },
        methods: {
          swipeleft:function(s,e){
            console.log('swipeleft');
            if(swiperJ(s)){
              this.$router.push({ path: '/ratings' })
            }

          },
          swiperight:function(s,e){
            console.log('swiperight');
            // if(swiperJ(s)){
            //
            // }
          },

        }
    }


</script>


<style>
</style>
