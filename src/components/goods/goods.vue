<template>
  <div class="goods">
    <div class="menu-wrapper" ref="menuScroll">
      <ul>
        <li v-for="(item, index) in goods" class="menu-item" :class="{'current':currentIndex == index}"
            @click="selectMenu(index,$event)">
          <div class="text">
            <span v-show="item.type>0" class="icon" :class="classMap[item.type]"></span> {{item.name}}
          </div>
        </li>
      </ul>
    </div>
    <div class="foods-wrapper" ref="foodsScroll">
      <ul>
        <li v-for="(item, index) in goods" class="foods-list food-list-hook">
          <h1 class="title">{{item.name}}</h1>
          <ul>
            <li @click="selectFood(food,$event)" v-for="(food, index) in item.foods" class="food-item">
              <div class="icon">
                <img :src="food.icon" width="60" alt="">
              </div>
              <div class="content">
                <h2 class="name">{{food.name}}</h2>
                <p class="desc">{{food.description}}</p>
                <div class="extra">
                  <span class="count">月售{{food.sellCount}}份</span><span>好评率{{food.rating}}%</span>
                </div>
                <div class="price">
                  <span class="now">¥{{food.price}}</span><span class="old"
                                                                v-show="food.oldPrice">¥{{food.oldPrice}}</span>
                </div>
                <div class="cartcontrol-wrapper">
                  <cartcontrol :food="food" v-on:cart_add="cart_add"></cartcontrol>
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>

    <shopcart ref="shopcart" :delivery-price="seller.deliveryPrice" :min-price="seller.minPrice"
              :select-foods="selectFoods"></shopcart>
    <food :food="selectedFood" ref="food" v-on:cart_add="cart_add"></food>
  </div>
</template>

<script>
  import BScroll from 'better-scroll';
  //没有用的,测试的
  var swiperJ = require('../../libs/touch/swiperJudge.js');

  import shopcart from '../shopCart/cart'
  import cartcontrol from '../cartcontrol/cartcontrol'
  import food from '../food/food'

  export default {
    props: {
      seller: {
        type: Object,
      }
    },
    components: {
      shopcart,
      cartcontrol,
      food
    },
    data: function () {
      return {
        transitionName: '',
        goods: [],
        listHeight: [],
        // 跟踪Y实时变化高亮
        scrollY: 0,
        //todo
        selectedFood:{},
      }
    },
    computed: {
      currentIndex: function () {
        for (let i = 0; i < this.listHeight.length; i++) {
          let height1 = this.listHeight[i];
          let height2 = this.listHeight[i + 1];

          if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
            return i;
          }
        }
        // return 0;
      },
      selectFoods: function () {
        let foods = [];
        this.goods.forEach(function (good) {
          good.foods.forEach(function (food) {
            if (food.count) {
              foods.push(food);
            }
          })
        });
        return foods;
      },
    },
    methods: {
      selectFood:function(food,event){
        this.selectedFood = food;
        this.$refs.food.show();

      },
      'cart_add':function(target){
        this._drop(target);
      },
      swipeleft: function (s, e) {
        console.log('swipeleft');
        if (swiperJ(s)) {
          this.$router.push({path: '/ratings'})
        }

      },
      swiperight: function (s, e) {
        console.log('swiperight');

      },
      _drop:function(target){
        //调用shopcart 的方法..
        //solve两种动画同时进行会有卡顿,异步下落动画
        this.$nextTick(()=>{
          this.$refs.shopcart.drop(target);
        });

      },
      _initScroll: function () {
        let _self = this;
        this.menuScroll = new BScroll(this.$refs.menuScroll, {
          // scrollY: true,
          click: true,
        });
        this.foodsScroll = new BScroll(this.$refs.foodsScroll, {
          // 实时的派发 scroll 事件
          probeType: 3,
          click: true,
        });
        this.foodsScroll.on('scroll', (pos) => {
          _self.scrollY = Math.abs(Math.round(pos.y));
        })
      },
      _calculateHeight: function () {
        // 在nextTick,可以用原生DOM了
        // 这是一个数组
        let foodList = this.$refs.foodsScroll.getElementsByClassName('food-list-hook');
        let height = 0;
        this.listHeight.push(height);
        for (let i = 0; i < foodList.length; i++) {
          let item = foodList[i];
          height += item.clientHeight;
          this.listHeight.push(height);
        }
      },
      selectMenu: function (index, e) {
        console.log(index)
        let foodList = this.$refs.foodsScroll.getElementsByClassName('food-list-hook');
        let el = foodList[index];
        this.foodsScroll.scrollToElement(el, 300);

      },
    },
    created: function () {
      this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
      var _self = this;
      this.$http.get('/api/goods').then(response => {
        _self.goods = response.body.data;
        _self.$nextTick(() => {
          _self._initScroll();
          // 计算高度
          _self._calculateHeight();
        });
      }, response => {
        // error callback
      });
    },
    mounted: function () {
    }
  }


</script>


<style lang="less" scoped>
  @import './style.less';
</style>
