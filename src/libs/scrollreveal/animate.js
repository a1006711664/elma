import Vue from 'vue'

import ScrollReveal from 'scrollreveal'

var a=0;
function Animate(el,type,binding){
  console.log(binding.value);
  this.el = el;
  this.type = type;
  this.binding = binding.value;
  this.el.classList.add('wow'+a,this.type);

  window.sr = ScrollReveal({ reset: true });
  //直接调用
  // 都创建一个实例
  sr.reveal(this.el, {
    reset: true,
    duration: 600,
    rotate: { x: 0, y: 0, z: 0 },
    beforeReveal: function (domEl) {},
    beforeReset: function (domEl) {},
    afterReveal: this.binding,
    afterReset: function (domEl) {}
  });
  
a++;
};

//包装成指令
const scrollShow = Vue.directive("scrollShow",{

  bind:function(el,binding){

    new Animate(el,"scrollShow",binding);
  }
});


export{scrollShow}
