
import Vue from 'vue'
import App from './App'
import router from './router'
import "./common/common.less"
// 公共样式
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI);
//移动端的ui
// 引入全部组件
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
Vue.use(Mint);
//ajax
//http请求
import VueResource from 'vue-resource'
Vue.use(VueResource)

//剪切
import Croppa  from 'vue-croppa';
import 'vue-croppa/dist/vue-croppa.css';
Vue.use(Croppa)

//touch
// require('./libs/touch/vuetouch.js')
import {tap,swipeleft,swiperight,press} from './libs/touch/vuetouch.js'

Vue.config.productionTip = false
//使用devtools
Vue.config.devtools = true

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
