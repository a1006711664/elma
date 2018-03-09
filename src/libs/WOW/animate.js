import Vue from 'vue'
import {WOW} from './wow.min.js'


//start
var a = 1;

function Animate(el,type,binding){
  this.el = el;
  this.type = type;
  this.binding = binding.value;
  this.el.classList.add('wow'+a,this.type);
  //直接调用
  let wow = new WOW({
    boxClass: 'wow'+a,
    animateClass: 'animated',
    callback:this.binding,
    live:true,
    offset: 100,
  });
  a++;
  wow.init();
};


//包装成指令
const fadeInDown = Vue.directive("fadeInDown",{

  bind:function(el,binding){
    new Animate(el,"fadeInDown",binding);
  }
});




//导出
export{fadeInDown}
