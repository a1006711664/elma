<template>
  <div id="app">
    <component :is="whichHeader" :seller="seller"></component>
    <div class="tab">
      <div class="tab-item">
        <router-link :to="{ name: 'goods'}">商品</router-link>
        </div>
      <div class="tab-item">
        <router-link :to="{ name: 'ratings'}">评论</router-link></div>
      <div class="tab-item">
        <router-link :to="{ name: 'seller'}">商家</router-link></div>
    </div>

    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>

  </div>
</template>

<script>

  import header from './components/header/header'
  import xtmlheader from './components/xtmlheader/header'

export default {
  name: 'App',

  data:function(){
    return{
      //商品
      seller:{},


      info:{
        id:222,
      },
      show1:false,
      demo:'hello',
      whichHeader: 'xHeader',
    }
  },
  components:{
     vHeader: header,
     xHeader: xtmlheader,
  },
  mounted:function(){
    var _self = this;
    //vue-resource
    this.$http.get('/api/seller').then(response => {
      _self.seller = response.body.data;

    }, response => {
      // error callback
    });

  }

}
</script>


<style lang="less" scoped>
  /*tab下的less*/
  @import './app.less';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}


</style>
