import Vue from 'vue'

import Sortable from 'sortablejs'


function Drag(el,type,binding){
  console.log(binding.value);
  this.el = el;
  this.type = type;
  this.binding = binding.value;
  // this.el.classList.add('wow'+a,this.type);
  var defaultOptions = {
    draggable: '.dragItem',
    delay: 0,
    scroll: true,
    onUpdate:binding.value,
  };
  Object.assign(defaultOptions)
  var sortable = new Sortable(el, defaultOptions);

  //直接调用
  // 都创建一个实例

};

//包装成指令
const drag = Vue.directive("drag",{

  bind:function(el,binding){

    new Drag(el,"drag",binding);
  }
});


export{drag}
