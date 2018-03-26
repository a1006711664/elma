<template>
  <div class="cartcontrol">
    <transition name="move">
      <div class="cart-decrease inner" @click="decreaseCart" v-show="food.count>0">-</div>
    </transition>
    <!--<transition name></transition>-->
    <div class="cart-count" v-show="food.count>0">{{food.count}}</div>
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
        this.food.count--;
      },
      addCart: function () {
        if (!this.food.count) {
          this.$set(this.food, 'count', 1);
        } else {
          this.food.count++;
        }
      },
    },
    created: function () {
    },
  }
</script>

<style lang="less" scoped>
  @import "./style.less";

</style>
