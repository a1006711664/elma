<template>

<div>

  <video-player :options="playerOptions" class="vjs-custom-skin"  ref="players" @statechanged="playerStateChanged($event)">




  </video-player>
  <button @click="change">click</button>
</div>

</template>

<script>

  //据说可以搞一个直播什么的
  // video
  // require styles
  import 'video.js/dist/video-js.css'
  import { videoPlayer } from 'vue-video-player'
    export default {
      name: "v-video",
      data:function(){
        return{
          playerOptions: {
            height: '360',
            language: 'en',
            sources: [{
              type: "video/mp4",
              // mp4
              src: "http://vjs.zencdn.net/v/oceans.mp4",
              // webm
              // src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
            }],
            poster: "https://surmon-china.github.io/vue-quill-editor/static/images/surmon-1.jpg",
          }
        }

      },
      components: {
        videoPlayer
      },
      // computed: {
      //   player() {
      //     return this.$refs.videoPlayer.player
      //   }
      // },
      methods:{
        change:function(){
          console.log(this.$refs.players.player)
          console.log(this.$refs.players.prototype)
          this.$refs.players.player.play();


        },
        playerStateChanged:function(e){
          // console.log(e);

        }
      },

      mounted:function(){
        setTimeout(() => {
          console.log('dynamic change options', this.player)
          // change src
          this.playerOptions.sources[0].src = 'https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm';
          // change item
          // this.$set(this.playerOptions.sources, 0, {
          //   type: "video/mp4",
          //   src: 'https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm',
          // })
          // change array
          // this.playerOptions.sources = [{
          //   type: "video/mp4",
          //   src: 'https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm',
          // }]
          // this.player.muted(false)
        }, 5000)
      }
    }

</script>

<style scoped>

</style>
