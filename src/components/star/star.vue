<template>
  <div class="star" :class="starType">
    <span v-for="itemClass in itemClasses" :class="itemClass" class="star-item"
           track-by="$index"></span>
  </div>
</template>

<script>

  var LENGTH = 5;
  var CLS_ON = 'on';
  var CLS_OFF = 'off';
  var CLS_HALF = 'half';

  export default {
    name: "star",
    props:{
      size:{
        type:Number,
        default:24,
      },
      score:{
        type:Number,
        default:5,
      }
    },
    computed:{
      starType:function(){
        return 'star-' + this.size;
      },
      itemClasses:function (){
        if(this.score)
          var result =[];
        var score = Math.floor(this.score*2) / 2;
        var hasDecimal = score % 1 !==0;
        var integer = Math.floor(score);
        for(var i=0;i<integer;i++){
          result.push(CLS_ON);
        }
        if(hasDecimal){
          result.push(CLS_HALF);
        }
        while(result.length<5){
          result.push(CLS_OFF);
        }
        //返回星数组的 class
        return result;
      }
    },
    data:function () {
      return{
        // itemClasses:'',
      }
    },
    created:function(){
      console.log(this.score)
    },
  }

</script>

<style lang="less" scoped>
  .star{
    font-size: 0;
    .star-item{
      display: inline-block;
      background-repeat: no-repeat;
    }
    &.star-24{
      .star-item{
        width: 20px;
        height: 20px;
        margin-right: 9px;
        background-size: 20px 20px;
        &.on{
          background-image: url('./star24_on@2x.png');
        }
        &.half{
          background-image: url('./star24_half@2x.png');
        }
        &.off {
          background-image: url('./star24_off@2x.png');
        }
      }
    }
  }
</style>
