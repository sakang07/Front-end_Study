// c_01_dom_sample_01.js

// ------------------------------------------------

// 1. 버튼을 클릭한다 -> 메뉴가 나타난다
// 2. 버튼을 클릭한다 -> 메뉴가 사라진다

// ------------------------------------------------

// 1. 버튼을 클릭한다 -> 메뉴가 나타난다
// 1-1. 버튼 : .navbar-toggler -> var navToggleBtn = document.querySelector('.navbar-toggler');
// 1-2. 클릭 : 선택자 클릭(addEventListener) -> navToggleBtn.addEventListener('click', function(e){});
// 1-3. 메뉴선택 : .navbarSupportedContent -> document.querySelector('#navbarSupportedContent');
// 1-4. 메뉴 나타나게 - html.classname="action" : class 이름 추가 + (none- > block) : 이벤트핸들러 함수 안에서 실행
// 1-5. 기능을 수행하기 전 체크 : 해당 버튼의 고유기능 해제(event.preventDefault()), action의 유무(classsList.contains("action"))

// 변수
// 1-1
var navToggleBtn = document.querySelector('.navbar-toggler');
// 1-3
var navbarSupportedContent = document.querySelector('#navbarSupportedContent');

// 이벤트
// 1-2
navToggleBtn.addEventListener('click', function (e) {
  e.preventDefault();
  var checkClassName = 'on';
  // 1-5
  var isAction = navbarSupportedContent.classList.contains('action');
  // console.log(isAction);
  // 1-4
  if (!isAction) {
    navbarSupportedContent.classList.add(checkClassName);
  } else {
    navbarSupportedContent.classList.remove(checkClassName);
  }
});

// --------------------------------------------------------------------

// jQuery로 동일하게 동작하는 코드

// 변수
// 1-1
var navToggleBtn = $('.navbar-toggler');
// 1-3
var navbarSupportedContent = $('#navbarSupportedContent');

// 이벤트
// 1-2
navToggleBtn.on('click', function (e) {
  e.preventDefault();
  var checkClassName = 'on';
  // 1-5
  var isAction = navbarSupportedContent.hasClass('action');
  // console.log(isAction);
  // 1-4
  if (!isAction) {
    navbarSupportedContent.addClass(checkClassName);
  } else {
    navbarSupportedContent.removeClass(checkClassName);
  }
});