<template>
  <div class="cartcontrol">
    <div class="cart-decrease" v-show="food.count>0">-</div>
    <div class="cart-count" v-show="food.count>0">{{food.count}}</div>
    <div class="cart-add" @click="addCart">+</div>

  </div>

</template>

<script>
    export default {
        name: "cartcontrol",
      props:{
          food:{
            type:Object
          }
      },
      methods:{
        addCart:function(){
          if(!this.food.count){
            this.$set(this.food,'count',1);
          }else{
            this.food.count++;
          }
        },
      },
      created:function(){
      },
    }
</script>

<style lang="less" scoped>
  @import "./style.less";

</style>
