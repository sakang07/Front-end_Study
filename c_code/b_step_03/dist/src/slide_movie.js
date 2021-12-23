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
const elModal = elViewBox.querySelector('.modal_area');
const elMovie = elModal.querySelector('.movie');
const elModalClose = elModal.querySelector('.modal_close > button');

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
let elSlide = [...elSlideLi];
let PERMISSION = true;
elViewBox.style.overflowX = 'hidden';
let dbVideoData = [];
let videoCode = (fileName, type = 'mp4') =>  `<video constrols autoPlay muted preload>
                          <source src="${fileName}" type="video/${type}" />
                        </video>`;


const path = '../data/video_modal.json';
fetch(path)
  .then(response => response.json())
  .then(data => {
    dbVideoData = [...data];
    elSlide.forEach((el,idx) => {
      el.setAttribute('data-num', dbVideoData[idx].id);
    });
  });
  // .then(response => response.text())

const fnSlideMove = (e)=>{
  e.preventDefault();
  if(PERMISSION){
    PERMISSION = false;
    let target = e.target.classList.contains('next');
    elSlide = [...elSlideLi];
    (target) ?  
      elSlideWrap.append( elSlide.at(0) ) : 
      elSlideWrap.prepend( elSlide.at(-1) ) ;

    elSlideLi = elSlideWrap.querySelectorAll('li');
    setTimeout(()=>{ PERMISSION=true; },500);
  }
};

elSlideWrap.prepend( elSlide.at(-1) ) ;
elSlideWrap.prepend( elSlide.at(-2) ) ;
elSlideLi = elSlideWrap.querySelectorAll('li');


// 이벤트
// 좌우버튼 클릭시 슬라이드 이동
elSlideBtn.addEventListener('click', fnSlideMove);

// li를 클릭시 해당하는 내용에 맞는 영상을 모달창에 띄워 처리
elSlideWrap.addEventListener('click', e => {
  e.preventDefault();
  let el = e.target;
  // .tagName : tag이름 추출 / .toLowerCase() : 대문자를 소문자로
  if(el.tagName.toLowerCase() === 'button') {
    // data-는 기본 속성이 아니므로 getAttribute로 가져와야 한다
    let num = el.parentNode.getAttribute('data-num');
    
    // 클릭한 요소의 id, file값 가져오기
    let selectData = dbVideoData.filter(data => data.id === parseInt(num));
    
    let src = `../multi/video/${selectData[0].file}.mp4`;
    elMovie.innerHTML = videoCode(src);
    elModal.classList.add('on');
    elModalClose.focus();
  }
});

// elSlideLi.forEach((el,idx) => {
//   el.addEventListener('click', e => {
//     e.preventDefault();
//     let num = el.getAttribute('data-num');
//     console.log(num);
//   })
// })

// 닫기 버튼 누르면 모달창 닫기
elModalClose.addEventListener('click', e => {
  e.preventDefault();
  elModal.classList.remove('on');
  elMovie.children[0].remove();
});






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
// console.log(arr.at(-1));