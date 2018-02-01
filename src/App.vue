<template>
  <div id="app">
    {{show1}}
    <input type="text" v-model="demo">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
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
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
