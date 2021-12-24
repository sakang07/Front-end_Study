// d_12_rwd.js

// @media 화면타입 and (max-width: 768px){}

const elMobile = document.querySelector('.mobile');
const elPc = document.querySelector('.pc');
// elMobile.style.display = 'none';
// elPc.style.display = 'none';

// ----------------------------------------------

const tab = 768; // 모든 브라우저 사용 가능
const tabDevice = '(max-width: 768)'; // 구형브라우저 x

let winWidth = window.innerWidth;
console.log(winWidth);

const fnRwd = () => {
  if (winWidth > tab){
    elMobile.style.display = 'block';
    elPc.style.display = 'none';
  } else {
    elMobile.style.display = 'none';
    elPc.style.display = 'block';
  }
};
fnRwd(winWidth);

window.addEventListener('resize', e => {
  const winReWidth = window.innerWidth;
  console.log(winReWidth);
  fnRwd(winReWidth);

})