// b_08_js_repeat1.js

// while(){} -------------------------------------------------------
var i = 0;
while(i < 10){ // 1. 최초값
  console.log('while:', i); // 2. 조건비교(참이면 수행, 거짓이면 종료)
  i += 1; // 3. 변수연산 후 2번으로 이동
} // 제대로 되어 있는지 구조를 확인하지 않으면 오류가 생겨 무한 루프에 빠질 수 있다

// do-while : 조건이 false라도 한 번은 수행 ---------------------------
var j = 0;
do{
  console.log('do-while:', j);
  j += 1;
} while(j < 5)

// for(){} -------------------------------------------------------
var w = 0;
while(w < 5){
  console.log('w(while):', w);
  w += 1;
}

// var y = 0;
// for(; y < 5;){
//   console.log('y(for):', y);
//   y += 2;
// }
// for (var y = 0; y < 5; y += 2) { // var로 선언하면 for문 외부에서도 변수를 인식할 수 있는 문제가 있음
//   console.log('y(for):', y);
// }
// for (let y = 0; y < 5; y += 2) { // (ES6) let은 코드블럭 바깥에서 변수를 식별할 수 없다
//   console.log('y(for):', y);
// }
var y = 0; // 그러므로 var를 쓸 때는 외부에서 선언해서 덜 헷갈리도록 쓰기
for (; y < 5; y += 2) {
  console.log('y(for):', y);
}

console.clear();
// Q. 2021년 기준으로 과거 50년을 모두 도출 ex. 2021년 - 2020년 - 2019년 ...
// 1. console.log
// 2. document

//-------풀다 망한 것들
// // 변수
// var $year = document.querySelector('.year');
// var $inputYear

// 실행
// var inputYear = function (year) {
//   var i = 0;
//   for ( ; i <= 50; i++ ){
//     var myYear = year;
    // console.log(myYear - i + '년');
//   }
// }
// console.log(inputYear());

// 이벤트
// $year.innerHTML = inputYear(2021);
// ----여기까지
// var yy = 2021;
// var text = '년';
// var targetY = 2021-50;
// for(; yy >= targetY; yy--) {
//   console.log(yy + text);
// }

// 생성자 함수를 사용하는 방법
// 1. 첫글자가 대문자
// 2. 생성자 그대로 사용하는 것이 아닌 해당하는 함수를 복제하여 객체로 사용. new 연산자를 붙여서 사용.
// 3. 함수 중에 기존에 존재하는 함수를 내장함수라고 부른다. 생성자 함수도 내장함수가 있다.

// Date(); 날짜와 관련된 함수
var date = new Date();
// console.log(date.getFullYear());

var yy = date.getFullYear();
var text = '년';
var targetY = 2021-50;
var li;
var ul = document.querySelector('.test');

for(; yy >= targetY; yy--) {
  // console.log(yy + text);
  var li = document.createElement('li');
  li.innerText = yy + text;
  ul.append(li);
}

// 요소를 생성하는 방법
// 1. document.create(요소 이름);
// 2. 생성된 요소에 기능 첨부
// 3. 생성된 요소를 선택된 요소에 담기: append()

