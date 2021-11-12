// b_06_js_condition3.js

var rel = true;
if (rel) {
  // 참인 경우에 수행
  console.log('값은 참입니다');
} else {
  // 거짓인 경우에 수행
  console.log('값은 거짓입니다');
}

var count = 10;
if (count <= 5) {
  console.log('숫자는 5 이하입니다');
} else if (count > 10) {
  console.log('숫자는 10을 초과합니다');
} else {
  console.log('숫자는 5보다 크고 10보다 작거나 같습니다');
}

// -------------------------------------- //

// 단항 연산자 : 충족되는 조건이 먼저 나오면 뒤의 조건을 보지 않고 if문이 종료. 그러므로 충족하기 어려운 조건부터 적는다.
var count2 = 30;
if (count2 > 20) {
  console.log('20보다 큰 수');
} else if (count2 >= 10) {
  console.log('10보다 큰 수');
} else {
  console.log('다른 수');
}

// -------------------------------------- //

// Q. 100 이하의 숫자를 입력하면 결과는 001 ~ 100 의 결과를 나오게 하기.
// 1 -> 001
// 10 -> 010
// 100 -> 100

var num = parseInt(Math.random() * 100) + 1;

if (num < 10) {
  '00' + num;
} else if (num < 100) {
  '0' + num;
} else {
  num;
}
console.log(num);
console.log('----------------------------');

// num을 문자열로 변환
var parS = num.toString();
console.log(parS, '문자열 변환');

// 0을 10개 추가
var nn = parS.padStart(10, '0');
console.log(nn, '0 10개 추가');

// 긴 숫자가 들어올 시 뒤에서부터 3글자만 자르기
var cut = nn.slice(-3);
var num2 = cut;
console.log(num2, '뒤에서 3글자 자르기');

// ---------------------------------------- //
console.log('----------------------------');

// 중첩함수
// n * n / 2 식 만들기
var a = function (n) {
  var b = function (i) {
    var c = function (j) {
      var r = j * j;
      return r;
    };
    var r2 = c(i) / 2;
    return r2;
  };
  var r3 = b(n) + 5;
  return r3;
};
// a 호출 -> b 호출 -> c 호출 -> c 해결 -> b 해결 -> a 해결 -> 결과도출
// 안쪽부터 함수를 쓰기
// 함수를 작성하는 기법
// 1. 하나의 기능은 하나의 함수
// 2. 해당하는 함수가 내부처리/외부호출인지 구분
// - 외부함수 : 여러 개의 함수에서 하나의 기능을 자주 사용
// - 내부/외부함수 : 하나의 함수에서 하나만 호출
// - 내부함수 : 함수의 결과를 오로지 한군데에서만 호출
// - 외부함수의 핵심은 별도의 수행 가능여부

console.log(a(4));

// 재귀함수

// 클로저
// 위 함수와 완전히 동일한 함수
var aFn = function (n) {
  return (function (i) {
    return (function (j) {
      var r = j * j;
      return r;
    })(i) / 2;
  })(n) + 5;
};
console.log(aFn(10));