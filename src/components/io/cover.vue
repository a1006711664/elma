<template>
    <div id="cover">
      <input type="text" v-model="ifShow">
    </div>
</template>

<script>
    export default {
      name: "cover",
      props:{
        ifShow:{
          type: Boolean,
          default: false,

        },
      },
      data: function(){
        return{
        }
      },
      methods:{
        cancelCover:function () {
          // this.ifShow = false;
        },


      },
      mounted:function(){

      }
    }
</script>

<style scoped>

</style>
