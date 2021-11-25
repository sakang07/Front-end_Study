// c_02_dom_make_nav_02.js

// 버튼을 클릭하면 하위 메뉴가 나타나거나 사라지게 하기
// 1. 버튼 클릭 : .drop_btn > button 클릭
// 2. 나타나거나 사라지는 요소 : .sub_menu (style에 직접 display: none/block 조작)
// 2-1 css의 속성 상태 파악 : getComputedStyle(선택자).속성명;
// 2-2 html의 속성 상태 파악 : 선택자.속성명.속성명...
// 2-3 상황에 따라 둘 중 하나의 값을 추출 : var a = i || 10; 혹은 if
// 기타 옵션 : event.preventDefault();


// 변수 ------------------------------
var $dropBtnSelector = document.querySelector('.drop_btn');
var $dropBtn = $dropBtnSelector.querySelector('button');
var $subMenu = document.querySelector('.sub_menu');

// window.getComputedStyle() : 매개변수의 모든 css 속성값을 담은 객체를 회신
var subMenuStyle = window.getComputedStyle($subMenu);
var displayStateFn = function(selector) {
  // 선택자의 display 상태값을 html에서 가져오거나 css에서 가져오기
  return selector.style.display || getComputedStyle(selector).display;
  /*
  var displayState;
  // 없는 값에 ! 붙이면 true / !! 붙이면 false인 암묵적 타입변환 이용
  if(!!selector.style.display) {
    displayState = selector.style.display;
  } else {
    displayState = getComputedStyle(selector).display;
  }
  */
}

// 이벤트 ------------------------------
$dropBtn.addEventListener('click', function(e){
  e.preventDefault();
  // css도 동일하게 프로퍼티의 개념을 가지므로 html에 스타일 직접 삽입이 가능
  // (subMenuStyle.display === 'none') ? subMenuStyle.style.display = 'block' : subMenu.style.display = 'none';
  var state = displayStateFn($subMenu);
  (state === 'none') ? $subMenu.style.display = 'block' : $subMenu.style.display = 'none';
  console.log(state);
});

// 클래스에 on 등을 줘서 처리하는 방법이 best
// 이 방법은 까다롭고 처리 시간이 오래 걸린다