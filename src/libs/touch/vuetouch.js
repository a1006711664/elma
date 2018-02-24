import Vue from 'vue'
import hammer from 'hammerjs'

function vueTouch(el,type,binding){
  this.el = el;
  this.type = type;
  this.binding = binding;
  //直接调用
  var hammertime = new Hammer(this.el);
  hammertime.on(this.type,this.binding.value);
};


//包装成指令
const tap = Vue.directive("tap",{
  bind:function(el,binding){
    new vueTouch(el,"tap",binding);
  }
});

const swipeleft = Vue.directive("swipeleft",{
  bind:function(el,binding){
    new vueTouch(el,"swipeleft",binding);
  }
});

const swiperight = Vue.directive("swiperight",{
  bind:function(el,binding){
    new vueTouch(el,"swiperight",binding);
  }
});

const press = Vue.directive("press",{
  bind:function(el,binding){
    new vueTouch(el,"press",binding);
  }
});
const panleft = Vue.directive("panleft",{
  bind:function(el,binding){
    new vueTouch(el,"panleft",binding);
  }
});
const panright = Vue.directive("panright",{
  bind:function(el,binding){
    new vueTouch(el,"panright",binding);
  }
});


//导出
export{tap,swipeleft,swiperight,press}
