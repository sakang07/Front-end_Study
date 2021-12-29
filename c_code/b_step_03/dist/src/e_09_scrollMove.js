// e_09_scrollMove.js

const elHeadBox = document.querySelector('#headBox');
const elScrollToBtn = document.querySelector('.scroll_down_btn');

const OPTION_FIX = 'fix';
const WIN_HEIGHT = window.innerHeight; // 브라우저의 높이

// .offsetTop : 위에서 얼마나 떨어져 있는지 확인
const offsetCheck = elHeadBox.offsetTop;
// console.log(offsetCheck);

// position: sticky처럼 js로 처리
window.addEventListener('scroll', e => {
  const target = parseInt(e.currentTarget.scrollY);// 브라우저나 윈도우 비율을 다르게 하면 소수점이 나오므로 정수화
  console.log('scroll:' + target, 'offset:' + offsetCheck);

  // 스크롤 값이 현재 offset값보다 커지면 .fix 삽입하고 아니면 .fix 삭제
  target >= offsetCheck ? elHeadBox.classList.add(OPTION_FIX) : elHeadBox.classList.remove(OPTION_FIX);
});

// --------------------------------------

elScrollToBtn.addEventListener('click', e => {
  // window.scrollTo({top: WIN_HEIGHT, behavior: 'smooth'});
  window.scrollBy({top: WIN_HEIGHT, behavior: 'smooth'}); // 스크롤 할 때마다 브라우저 높이만큼 부드럽게 이동
  // window.scroll({top: 500, behavior: 'smooth'});
});



// --------------------------------------

// scrollTop : 선택한 요소 기준 스크롤이 움직인 픽셀값
// scrollY : 브라우저 기준 스크롤이 움직인 픽셀값 === pageYOffset (구형브라우저도 동작)
// offsetTop : 부모 요소의 상단에서부터의 픽셀값
// scrollTo : 문서의 지정된 위치로 스크롤
// scrollBy : 현재의 위치에서 지정된 값만큼 스크롤