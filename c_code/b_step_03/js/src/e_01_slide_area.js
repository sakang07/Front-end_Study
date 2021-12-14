"use strict";

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/web.dom-collections.for-each.js");

// e_01_slide_area.js
// 광고슬라이드1
// 시나리오
// 1. 다음버튼 클릭시 li의 다음 내용이 나타나게 만들기
// 1.1 li의 갯수
// 1.2 class='on'; 여부
// 1.2.1 이전값 파악해서 on(+-)
// 1.2.2 선택한 것을 추가하고 다른 것 빼기
// 1.2.3 전체를 빼고 선택한 요소 추가
// 1.3 순번이 마지막으로 가면 처음으로 이동
// 2. 이전버튼을 클릭시 위 기능을 동일하게 수행
// ------------------------------------------
// 요소 선택
var elSlide_01 = document.querySelector('.slide_01');
var elBtnDetail = elSlide_01.querySelector('.view_btn');
var elNext = elBtnDetail.querySelector('.next');
var elPrev = elBtnDetail.querySelector('.prev');
var elViewContent = elSlide_01.querySelector('.view_content');
var elViewConUl = elViewContent.querySelector('ul');
var elViewAddv = elViewConUl.querySelectorAll('li'); // AddLen

var addLen = elViewAddv.length;
var OPTION_CLASSNAME = 'on';
var ckIndex = elSlide_01; // -----------------------------------------
// 함수
// 선택자 관련 함수기능(선택자 외 형제)

var fnSiblings = function fnSiblings() {
  var otherArr = [];
  elViewAddv.forEach(function (d, i) {
    var check = d.classList.contains(OPTION_CLASSNAME); // if(!check) {otherArr.push(d)}

    if (ckIndex !== i) {
      otherArr.push(d);
    }
  });
  return otherArr;
};

console.log(fnSiblings()); // elViewAddv.forEach((d,i) => {
//   let check = d.classList.contains(OPTION_CLASSNAME);
//   console.log(check, i);
//   // class 'on'이 있는 건 빼고
//   if(ckIndex check)
//   // 'on'이 없는 것은 제거
// });

var fnAddCount = function fnAddCount() {
  var i = ckIndex;
  ckIndex < addLen - 1 ? ckIndex++ : ckIndex = 0;
  elViewAddv[i].classList.remove(OPTION_CLASSNAME);
  elViewAddv[ckIndex].classList.add(OPTION_CLASSNAME);
};

var fnRemoveCount = function fnRemoveCount() {
  var i = ckIndex;
  ckIndex > 0 ? ckIndex-- : ckIndex = addLen - 1;
  elViewAddv[i].classList.remove(OPTION_CLASSNAME);
  elViewAddv[ckIndex].classList.add(OPTION_CLASSNAME);
}; // -----------------------------------------
// 이벤트
// 다음버튼 클릭


elNext.addEventListener('click', function (e) {
  e.preventDefault();
  fnAddCount();
}); // 이전버튼 클릭

elPrev.addEventListener('click', function (e) {
  e.preventDefault();
  fnRemoveCount();
});