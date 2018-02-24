<template>
  <div class="rateWrap"
  v-swipeleft = "swipeleft"
  v-swiperight = "swiperight">
    评论<br/>
    商品<br/>
    商品<br/>
    商品<br/> 商品<br/> 商品<br/>
    商品<br/>
    商品<br/>
    商品<br/>
    商品<br/> 商品<br/> 商品<br/> 商品<br/> 商品<br/> 商品<br/> 商品<br/> 商品<br/>
    <br/>
    </div>
</template>

<script>
  var swiperJ = require('../../libs/touch/swiperJudge.js');
    module.exports = {
        data: function () {
            return {}
        },
        methods: {
          swipeleft:function(s){
            if(swiperJ(s)){
              this.$router.push({ path: '/seller' })
            }
          },
          swiperight:function(s){
            if(swiperJ(s)){
              this.$router.push({ path: '/goods' })
            }
          },
        }
    }


</script>


<style lang="less" scoped>
</style>
