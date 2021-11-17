// b_12_js_function.js

// js에 기본적으로 내장되어 있는 함수들

// alert() : 메시지 창을 띄운다
var message = "별도의 메시지 창을 띄워 확인";
// alert(message);

// prompt() : 값을 입력받는다
var userOld = "나이를 입력하세요";
// 프롬프트 창에 입력한 데이터가 propResult 변수에 할당됨
// var propResult = prompt(userOld);
// propResult 값에 조건을 걸어 참/거짓 여부에 따라 다르게 작동
// if (propResult < 20) {
//   location = "https://naver.com";
// } else {
//   document.write('어서오세요');
// } // if 문
// (propResult < 20) ? location = "https://naver.com" : document.write('어서오세요'); // 3항연산자

// confirm() : 참/거짓 값을 입력받는다
var adultCheck = '당신은 성인이신가요?';
// var confirmCheck = confirm(adultCheck);
// confirmCheck === true ? document.write('어서오세요') : location = "https://naver.com";

// console.log() : 메서드의 형식을 취하고 있는 함수
// var console = {
//   log: function(){ return arguments; },
//   warn: function(){ return arguments; },
//   error: function(){ return arguments; },
//   info: function(){ return arguments; },
//   dir: function(){ return arguments; },
//   table: function(){ return arguments; },
//   time: function(){ return arguments; },
//   timeEnd: function(){ return arguments; },
//   group: function(){ return arguments; },
//   groupEnd: function(){ return arguments; },
//   clear: function(){ return arguments; }
// }

// ---------------------------------------------------------

var arr = ['one', 'two', 'three', 'four', 'five'];
var obj = {
  'a': 'one',
  'b': 'two',
  'c': 'three'
};

// console.log() : 콘솔창에 값을 출력
console.log(arr);

// console.table() : 콘솔창에 값을 표로 출력
console.table(arr);
console.table(obj);

// console.time() ~ console.timeEnd() : 출력에 걸리는 시간을 콘솔에 출력
// 시작점부터
console.time(); 
console.log(arr);
// 끝점까지 걸린 시간을 출력
console.timeEnd(); // 0.124267578125 ms

// console.clear() : 콘솔의 기록을 삭제
console.clear();

// ---------------------------------------------------------
// Math
// Math.random() : 0~1 사이의 난수를 생성
// Math.ceil() : 소수점 이하를 올림
// Math.floor() : 소수점 이하를 버림
// Math.round() : 소수점 이하를 반올림
var random = Math.ceil(Math.random() * 10); // 1~10 사이의 난수 생성
console.log(random); // 1~10 중 하나

// parseInt() : 값을 변환이 가능한 부분까지만 정수로 변환
// parseFloat() : 값을 변환이 가능한 부분까지만 실수로 변환
var num = '20.4556778px'; // px은 소수점 날림
var num2 = '50.9876543vw123'; // vw, rem 등의 단위에서는 소수점 보존

console.log(parseInt(num)); // 20
console.log(parseFloat(num2)); // 50.9876543

// ---------------------------------------------------------

// eval() : 문자열인 값을 강제로 숫자 연산 처리
// 데이터 타입을 강제로 바꾸기 때문에 예상치 못한 결과가 나올 수 있다. typescript가 나온 현 시점에서는 타입의 체크를 중요시하기 때문에 사용에 유의.
var sum = eval('5 + 5');
console.log(sum + 10); // 20

var n = "a" / 7;
console.log(n); // NaN
// isNaN() : 값이 NaN인지 확인하는 함수
var nRel = isNaN();
console.log(n, nRel); // NaN true
// 문자열 타입이라도 산술 연산자를 사용하면 암묵적 타입 변환이 일어나 숫자가 되며, 계산이 가능하지 않으면 NaN으로 출력
var n2 = "2" * 3;
console.log(n2); // 6

// ---------------------------------------------------------

var space = ' ';
// encodeURI() : 강제로 값을 URI(Uniform Resource Identifier - 인터넷 식별자인 UTF-8) 형식으로 인코딩
// 변환 불가능한 텍스트 : A-Z a-z 0-9 ; , / ? : @ & = + $ - _ . ! ~ * ' ( ) #
var encodeS = encodeURI(space);
console.log(space, encodeS); // %20
// encodeURIComponent() : 문자 형식을 변환 불가 텍스트까지 모두 인코딩
// 그래도 변환 불가능 : - _ . ! ~ & * ' ( )
var url = 'http://naver.com';
var encode = encodeURIComponent(url);
console.log(encode); // http%3A%2F%2Fnaver.com

// decodeURI() : encodeURI()의 복원기능
// decodeURIComponent() : encodeURIComponent()의 복원기능
var korea = 'https://대한민국.kr';
var enKorea = encodeURI(korea);
console.log(enKorea); // https://%EB%8C%80%ED%95%9C%EB%AF%BC%EA%B5%AD.kr
var deKorea = decodeURI(enKorea);
console.log(deKorea); // https://대한민국.kr

// ---------------------------------------------------------

console.clear();

// setTimeout() : 일정 시간 뒤에 수행
console.log('글자 입력');
setTimeout(function(){
  console.log('3초 뒤에 등장')
}, 3000);

// setInterval() : 일정 시간마다 수행
// clearInterval() : setInterval()을 강제로 삭제
var i = 0;
// 500ms만큼 문장을 반복 수행
var setI = setInterval(function(){
  console.log('i', i);
  // if(i >= 5) {
  //   i = 0;
  // } else {
  //   i++;
  // }
  i++;
  // 반복 횟수가 6을 넘어가면 setInterval() 삭제
  if (i > 6) {
    clearInterval(setI);
  }
}, 500);

setInterval(function(){}, 1000);
var set0 = setInterval(function(){}, 1000);

// ---------------------------------------------------------

// 생성자함수 - 객체의 생성 시에만 호출되어 메모리 생성과 동시에 객체의 데이터를 초기화하는 역할
// instance -  추상화 개념 또는 클래스 객체, 컴퓨터 프로세스 등과 같은 템플렛이 실제 구현된 것

var date = new Date(); // new가 붙으면 함수 형태를 객체로 변환하여 사용할 수 있게 한다
// Date 함수는 날짜와 관련
var year = date.getFullYear();
var month = date.getMonth() + 1;
var day = date.getDate();
var w = date.getDate;
console.log(year, month, day);

// ---------------------------------------------------------

// 원시함수 - 생성자 함수, js를 기본 구성하는 함수. 형타입을 구성하게 하는 최소한의 세팅. Number(), String(), Boolean(), Function(), Object(), Array() ... 직접 사용이 불가.
// 정의되어진 원시함수는 직접 사용이 불가능한 함수 - new 연산자 필요

// 내장 함수 - js에 있는 함수
// 기본 형태로 사용할 수 있도록 만들어진 함수

// 생성자 함수 - 첫글자가 대문자로 시작하는 함수
// 원 함수를 그대로 사용하는 게 아니라 객체로 변환하여 사용하는 함수
// 직접 사용이 불가능한 함수를 객체로 변환하여 사용할 수 있도록 하는 근본이 되는 함수가 생성자 함수

// instance - 생성자함수에 의해 생성된 객체. 함수를 객체로 변환 처리하는 것.

// 변경/생성할 수 있는 함수 : 생성자 함수
// 처음부터 생성된 함수는 변경이 불가 : 원시 함수 / 내장 함수


var Fn = function(a, b) {
  this.name = a;
  this.age = b;
  console.log(this);
};

// 프로토타입
Fn.prototype.middle = 'lee';

var afn = new Fn('xido', 10);
console.log(afn.name); // Fn {name: 'xido', age: 10}
console.log(afn.middle); 

var ul = document.getElementsByTagName('ul')[0];
var li = ul.querySelectorAll('li'); 
var li2 = ul.children; // 유사배열
console.log( li, li2);

// li2.forEach(function(d){
//   console.log( 'li:', d);
// });

// 유사배열이 존재하는 이유: li들의 요소를 단순 나열하여 배열로 처리, 객체로 모은형식


