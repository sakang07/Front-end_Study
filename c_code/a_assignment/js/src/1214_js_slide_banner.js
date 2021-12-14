// 1214_js_slide_banner.js

// 변수
const elViewArea = document.querySelector('.view_area');

const elViewBtn = elViewArea.querySelector('.view_btn');
const elBtnNext = elViewBtn.querySelector('.next > button');
const elBtnPrev = elViewBtn.querySelector('.prev > button');

const elViewCont = elViewArea.querySelector('.view_content');
const elViewContLi = elViewCont.querySelectorAll('li');

const ckOn = 'on'
let i = 0;
const slideLen = elViewContLi.length;

// 기능
elViewContLi[i].classList.add(ckOn);

// 함수

// 이벤트
elBtnNext.addEventListener('click', e => {
  e.preventDefault();

  // 누를 때마다 다음 슬라이드로 클래스 'on' 넘어가기
  console.log(i, (i < slideLen));
  if (i < slideLen - 1) {
    i++;
    elViewContLi[i - 1].classList.remove(ckOn);
    elViewContLi[i].classList.add(ckOn);
  } else {
    elViewContLi[slideLen - 1].classList.remove(ckOn);
    i = 0;
    elViewContLi[i].classList.add(ckOn);
  }
});
elBtnPrev.addEventListener('click', e => {
  e.preventDefault();

  // 누를 때마다 다음 슬라이드로 클래스 'on' 넘어가기 : 오작동함 <ㅇ>
  console.log(i, (0 < i));
  if (0 < i) {
    i--;
    elViewContLi[i + 1].classList.remove(ckOn);
    elViewContLi[i].classList.add(ckOn);
  } else {
    elViewContLi[0].classList.remove(ckOn);
    i = 0;
    elViewContLi[slideLen - 1].classList.add(ckOn);
  }
});
