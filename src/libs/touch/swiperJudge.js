
function swiperJudge(s){
  const clientW = window.screen.width*0.60;
  const X = Math.abs(s.deltaX);
  const Y = Math.abs(s.deltaY);
  return (X>=clientW && Y<40);
}
module.exports = swiperJudge;

