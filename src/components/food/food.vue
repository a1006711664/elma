<template>
  <transition name="moveLeft">
    <div v-show="showFlag" class="food" ref="food">
      <div class="food-content">
        <div class="image-header">
          <img :src="food.image" alt="">
          <div class="back" @click="hide">
            <i class="backIcon"><</i>
          </div>

        </div>
        <div class="content">
          <h1 class="title">
            {{food.name}}
          </h1>
          <div class="detail">
            <span class="sell-count">
              月售{{food.sellCount}}
            </span>
            <span class="rating">
              好评{{food.rating}}
            </span>
          </div>
          <div class="price">
            <span class="now">¥{{food.price}}</span>
            <span class="old"
                                                          v-show="food.oldPrice">¥{{food.oldPrice}}</span>
          </div>
          <div class="cartcontrol-wrapper">
            <cartcontrol :food="food"></cartcontrol>
          </div>
          <transition name="fade">
            <div class="buy" v-show="!food.count || food.count===0" @click.stop.prevent="addFrist($event)">
              加入购物车
            </div>
          </transition>
        </div>
        <split v-show="food.info"></split>
        <div class="info" v-show="food.info">
          <h1 class="title">
            商品信息
          </h1>
          <div class="text">
            {{food.info}}
          </div>
        </div>
        <split></split>
        <div class="rating">
          <h1 class="title">商品评价</h1>
          <ratingselect :select-type="selectType" :only-content="onlyContent" :desc="desc" :ratings="food.ratings"></ratingselect>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>

  import BScroll from 'better-scroll';
  import cartcontrol from '../cartcontrol/cartcontrol';
  import split from "../split/split"
  import ratingselect from "../ratingselect/ratingselect"
  const POSITIVE = 0;
  const NEGATIVE = 1;
  const ALL = 2;
    export default {
      name: "food",
      components:{
        cartcontrol,
        split,
        ratingselect
      },
      props:{
           food:{
             type:Object,
           }
      },
      filters:{
        // DF
      },
      data:function(){
        return{
          ratings:[],
          selectType:ALL,
          onlyContent:true,
          showFlag:false,
          desc:{
            all:'全部',
            positive: '推荐',
            negative: '吐槽',
          },
        }
      },
      methods:{
        addFrist:function(event){
          this.$set(this.food,'count',1);
          this.$emit('cart_add',event.target);
        },
        hide:function(){
          this.showFlag = false;
        },
        show:function(){
          this.showFlag = true;
          this.selectType = ALL;
            this.onlyContent = true;
          this.$nextTick(() =>{
            if(!this.scroll){
              this.scroll = new BScroll(this.$refs.food,{
                click:true,
              })
            }else{
              this.scroll.refresh()
            }
          })
        },
      },
    }
</script>

<style lang="less" scoped>
  @import './style.less';
</style>
