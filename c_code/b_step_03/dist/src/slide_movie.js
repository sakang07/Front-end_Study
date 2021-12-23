// slide_movie.js

// ==========================================
/** 시나리오1
 * 
 * 1. 다음버튼 클릭시 첫 요소가 마지막으로 이동
 */
// ==========================================

// 변수
const elViewBox = document.querySelector('#viewBox');
const elSlideBtn = elViewBox.querySelector('.slide_btn');
const elSlideWrap = elViewBox.querySelector('.view_wrap');
let elSlideLi = elSlideWrap.querySelectorAll('li');

// const elSlideArr = [...elSlideLi];
// // const elSlideArr = [].slice.call(elSlideLi); // 위와 동일
// elSlideWrap.prepend(elSlideArr.at(-1)); // 복제하지 않고 넣으면 잘라서 붙여넣는게 돼서 순서가 바뀐다
// // 순서가 바뀐 이후에는 다시 선택해야 함!
// const elSlideLi = elSlideWrap.querySelectorAll('li');
// const elSlideArr = [...elSlideLi];
// elSlideWrap.prepend(elSlideArr.at(-1)); // 이렇게 반복

// const fnSlideMove1 = () => {
//   let elSlide = [...elSlideLi];
//   elSlideWrap.append(elSlide.at(0));
//   elSlideLi = elSlideWrap.querySelectorAll('li');
// };

// const fnSlideMove2 = () => {
//   let elSlide = [...elSlideLi];
//   elSlideWrap.prepend(elSlide.at(-1));
//   elSlideLi = elSlideWrap.querySelectorAll('li');
// };

// 위의 함수 두개를 하나로!
let PERMISSION = true;
elViewBox.style.overflowX = 'hidden';

const fnSlideMove = (e)=>{
  e.preventDefault();
  if(PERMISSION){
    PERMISSION = false;
    let target = e.target.classList.contains('next');
    let elSlide = [...elSlideLi];
    (target) ?  
      elSlideWrap.append( elSlide.at(0) ) : 
      elSlideWrap.prepend( elSlide.at(-1) ) ;

    elSlideLi = elSlideWrap.querySelectorAll('li');
    setTimeout(()=>{ PERMISSION=true; },500);
  }
};


// 이벤트
elSlideBtn.addEventListener('click', fnSlideMove);

// ------------------------------------------
// 이벤트 위임 : 실제로 클릭해야 하는 요소가 아닌 그 부모에서 클릭했을 경우 해당 요소가 반응할 수 있도록 인식을 바꾸는 것

let elBtn = elViewBox.querySelector('.slide_btn');
let elNext = elBtn.querySelector('.next');


// this
// function(){} 함수일 경우 이벤트 주체, ()=>{} 함수일 경우 실행되는 요소를 가리킨다

elBtn.addEventListener('click', function(e) {
  console.log('function: ',this); // <div class="slide_btn">...</div>
  console.log(e.currentTarget);
});

elBtn.addEventListener('click', e => {
  console.log('arrow function: ', this); // Window
  console.log(e.currentTarget);
})

// at
const arr = [1,2,3,4,5,6,7,8,9,10];
console.log(arr.at(-1));