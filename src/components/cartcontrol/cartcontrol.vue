<template>
  <div class="cartcontrol">
    <transition name="move">
      <div class="cart-decrease " @click="decreaseCart" v-show="food.count>0">
        <span class="inner">-</span>
      </div>
    </transition>
    <transition name="move">
      <div class="cart-count" v-show="food.count>0">{{food.count}}</div>
    </transition>
    <div class="cart-add" @click="addCart">+</div>

  </div>

</template>

<script>
  export default {
    name: "cartcontrol",
    props: {
      food: {
        type: Object
      }
    },
    methods: {
      decreaseCart: function () {
        if(!this.food.count){
          return;
        }
        this.food.count--;
      },
      addCart: function () {
        if (!this.food.count) {
          this.$set(this.food, 'count', 1);
        } else {
          this.food.count++;
        }
        this.$emit('cart_add',event.target);
      },
    },
    created: function () {
    },
  }
</script>

<style lang="less" scoped>
  @import "./style.less";

</style>
