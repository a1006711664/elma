<template>
  <div id="app">
    <v-header>

    </v-header>
    <div class="tab">
      <div class="tab-item">
        <router-link :to="{ name: 'goods'}">商品</router-link>
        </div>
      <div class="tab-item">
        <router-link :to="{ name: 'ratings'}">评论</router-link></div>
      <div class="tab-item">
        <router-link :to="{ name: 'seller'}">商家</router-link></div>
    </div>

    <router-view/>
  </div>
</template>

<script>

  import header from './components/header/header'

export default {
  name: 'App',

  data:function(){
    return{
      info:{
        id:222,
      },
      show1:false,
      demo:'hello',
    }
  },
  components:{
    vHeader: header,
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
