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
      <div class="ball-container">

        <transition-group name="drop"
                          v-on:before-enter="beforeEnter"
                          v-on:enter="enter"
                          v-on:after-enter="afterEnter"
        >
          <div v-for="(ball, index) in balls" v-show="ball.show" class="ball" :key="index">
            <div class="inner inner-hook"></div>
          </div>
        </transition-group>

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "cart",
    data: function () {
      return {
        balls: [{
          show: false,
        }, {
          show: false,
        }, {
          show: false,
        }, {
          show: false,
        }, {
          show: false,
        }],
        dropBalls: [],
      }
    },
    methods: {
      beforeEnter:function(el){
          let count = this.balls.length;
          while(count--){
            let ball = this.balls[count];
            if(ball.show){
              let rect = ball.el.getBoundingClientRect();
              console.log(ball.el.getBoundingClientRect())
              let x = rect.left - 32;
              let y = -(window.innerHeight-rect.top-22);
              // el为小球的位置
              el.style.display='';
              // 外层元素上下
              el.style.webketTransform=`translate3d(0,${y}px,0)`;
              el.style.transform=`translate3d(0,${y}px,0)`;
              let inner = el.getElementsByClassName('inner-hook')[0];
              inner.style.webketTransform=`translate3d(${x}px,0,0)`;  inner.style.transform=`translate3d(${x}px,0,0)`;
            }
        }
      },
      enter:function (el) {
        //动画完成 ,重置
        // ??有什么用啊
        // let rf = el.offsetHeight;
        //重绘
        this.$nextTick(()=>{
          el.style.webketTransform='translate3d(0,0,0)';
          el.style.transform='translate3d(0,0,0)';
          let inner = el.getElementsByClassName('inner-hook')[0];
          inner.style.webketTransform='translate3d(0,0,0)';  inner.style.transform='translate3d(0,0,0)';
        })

      },
      afterEnter:function(el){
        let ball= this.dropBalls.shift();
        if(ball){
          // 应用类型
          ball.show=false;
        }
        el.style.display='none';

      },
      drop: function (el) {
        // 将选项与小球绑定
        //el为+按钮
        for (let i = 0; i < this.balls.length; i++) {
          let ball =this.balls[i];
          if (!ball.show){
            ball.show = true;
            ball.el = el;
            this.dropBalls.push(ball);
            // ball是引用类型
            // 应用类型的或用
            return;
          }
        }
      }
    },
    props: {
      selectFoods: {
        type: Array,
        default() {
          return [{
            price: 10,
            count: 3,
          }];
        }
      },
      deliveryPrice: {
        type: Number,
        default: 0,
      },
      minPrice: {
        type: Number,
        default: 0,
      },
    },
    computed: {
      payClass: function () {
        return (this.totalPrice < this.minPrice) ? 'not-enough' : 'enough';
      },
      totalPrice: function () {
        let total = 0;
        this.selectFoods.forEach((food) => {
          total += food.price * food.count;
        });
        return total;
      },
      totalCount: function () {
        let count = 0;
        this.selectFoods.forEach((food) => {
          count += food.count;
        });
        return count;
      },
      payDesc: function () {
        if (this.totalPrice === 0) {
          return `¥${this.minPrice}元起送`;
        } else if (this.totalPrice < this.minPrice) {
          let diff = this.minPrice - this.totalPrice;
          return `还差¥${diff}元起送`;
        } else {
          return '去结算';
        }
      },
    },
  }
</script>

<style lang="less" scoped>
  @import './style.less';
</style>
