<template>
  <div class="shopCart">
<div class="content">
  <div class="content-left">
    <div class="logo-wrapper">
      <div class="logo" :class="{hightlight:totalCount>0}">
        <i class="icon-shopping-cart" :class="{hightlight:totalCount>0}">图标</i>
      </div>
      <div class="num" v-show="totalCount>0">{{totalCount}}</div>
    </div>
    <div class="price" :class="{hightlight:totalCount>0}">¥{{totalPrice}}</div>
    <div class="desc">另需配送费{{deliveryPrice}}元</div>
  </div>
  <div class="content-right">
    <div class="pay" :class="payClass">
     {{payDesc}}
    </div>

  </div>
</div>
  </div>
</template>

<script>
    export default {
      name: "cart",
      props:{
        selectFoods:{
          type:Array,
          default(){
            return [{
              price:10,
              count:3,
            }];
          }
        },
        deliveryPrice:{
          type: Number,
          default: 0,
        },
        minPrice:{
          type: Number,
          default: 0,
        },
      },
      computed:{
          payClass:function(){
            return (this.totalPrice<this.minPrice)?'not-enough':'enough';
          },
          totalPrice:function(){
            let total = 0;
            this.selectFoods.forEach((food)=>{
total += food.price * food.count;
            });
            return total;
          },
        totalCount:function(){
          let count = 0;
          this.selectFoods.forEach((food)=>{
            count += food.count;
          });
          return count;
        },
        payDesc:function(){
           if(this.totalPrice === 0){
             return `¥${this.minPrice}元起送`;
           }else if(this.totalPrice < this.minPrice){
             let diff = this.minPrice -this.totalPrice;
             return `还差¥${diff}元起送`;
           }else{
             return '去结算';
           }
        },
      },
    }
</script>

<style lang="less" scoped>
  @import './style.less';
</style>
