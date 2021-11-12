// b_06_condition2.js

// 기능 설명
// input에 글자를 입력할 때 어떤 글자를 입력했는지 체크

// 변수
var inputBox = document.querySelector('#inputBox');
var par = document.querySelector('p'); // 모든 p 중 첫번째
var narr;

// 함수 설정
var keyFn = function (data) {
  switch (data) {
    case '1':
      narr = '숫자 1 입력';
      console.log('숫자 1 입력');

      break;
    case 'Enter':
      narr = '엔터 입력';
      console.log('엔터 입력');

      break;
    default:
      narr = '다른 키 입력';
      console.log('다른 키 입력');
  }
} //keyFn();

// 이벤트
// 선택자.이벤트발생('이벤트조건', 함수(발생이벤트){});
// 이벤트의 종류: 마우스(click, dblclick, mousedown, mouseup),
// 키보드(keypress, keydown, keyup), 스크롤(mousewheel, DOMMouseScroll),
// 사이즈변경(resize), 터치(touchstart, touchmove, touchend)
// inputBox에 이벤트 발생(키 입력)하면 keyFn() 수행
inputBox.addEventListener('keyup', function(event){
  console.log(event.key);
  keyFn(event.key);
  par.innerText = narr;
});

// console.log(keyFn('1'));

// ------------------------------------------------ //

// 변수
var selectFood = document.querySelector('#selectFood'); // document.getElementById('selectFood);
var btn1 = document.querySelector('.btn1'); // document.getElementsByClassName('btn1')[0];
var food = document.querySelector('.food'); // document.getElementsByClassName('food')[0]; // document.getAttribute('class', 'food');

// 함수
var switchTest2 = function(food) {
  var selectFood;
  switch (food) {
    case 'noodle':
      selectFood = '냉면을 추천합니다';
      break;
    case 'meat':
      selectFood = '소고기를 추천합니다';
      break;
    case 'rice':
      selectFood = '햇쌀을 추천합니다';
      break;
    default:
      selectFood = '주는대로 먹자!';
  }
  return selectFood;
};

// 이벤트
// btn1에 이벤트 발생('클릭', 수행: selectFood의 값을 가져와서 결과를 food에 도출하는 함수)
btn1.addEventListener('click', function(e){
  e.preventDefault(); // 기본기능 삭제
  console.log(selectFood.value);
  var rel = selectFood.value;
  var returnValue = switchTest2(rel);
  food.innerText = returnValue;
})

console.log(switchTest2('meat'));