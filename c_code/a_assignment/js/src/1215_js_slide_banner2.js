// 1215_js_slide_banner2.js

// 슬라이드 fade out


// 변수
const elViewArea = document.querySelector('.view_area');

const elViewBtn = elViewArea.querySelector('.view_btn');
const elBtnNext = elViewBtn.querySelector('.next > button');
const elBtnPrev = elViewBtn.querySelector('.prev > button');

const elViewCont = elViewArea.querySelector('.view_content');
const elViewContLi = elViewCont.querySelectorAll('li');

const ckOn = 'on';

// 기능


// 함수
fnCk = el => {
  el.classList.add(ckOn);
};


// 이벤트
// 버튼 클릭하면 다음 슬라이드로
elBtnNext.addEventListener('click', e => {
  e.preventDefault();

  // 
});