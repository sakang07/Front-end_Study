// b_03_js_operation.js

// 사칙연산 ================================

// 함수를 만들어서 기본 n의 값과 적용할 변수의 값을 비교하는 함수
var n = 10;

var nFn = function(data) {
  return console.log(n, data);
};
nFn();

// + 연산자
var plus = n + 10;
nFn(plus);    //10 20

// - 연산자
var minus = n - 5;
nFn(minus);   // 10 5

// / 연산자
var divide = parseInt(n / 3);
nFn(divide);    // 10 3

// * 연산자
var multi = n * 6;
nFn(multi);   // 10 60

// 나머지 연산자
var remainder = n % 3;
nFn(remainder);   // 10 1

// 기존 n값 10에 n값 10을 더하고 > 다시 n에 재할당한 후 > 그 값을 nReset에 할당
var nReset = n = n + n;
nFn(nReset);    // 20 20

n = n + 20;
n = n + 100; 
nFn();    // 140

// 할당연산자 : 연산해서 자신에게 값을 할당하는 연산자
n += 60;
nFn();    // 200

n -= 10;
nFn();    // 190

n *= 2;
nFn();    // 380

n /= 9;
nFn();    // 42.2222...

n = parseInt(n);
n %= 5;
nFn();    // 2



// 증감연산자 ================================

console.clear();
nFn();

n += 1;
nFn();    // 3

// 후위 : 문장을 실행하고 기존 변수 값에 1을 더하기
n++;
nFn();    // 4

// 전위 : 기존 변수 값에 1을 더하고 문장을 실행하기
++n;
nFn();    // 5

console.clear();

var i = 5;
console.log(i);   // 5

i += 1;
console.log(i);   // 6

++i;
console.log(i);   // 7

i++;
console.log(i);   // 8

console.log(i++); // 9  : 변수 i의 값을 먼저 도출 후 연산1을 더한다.
console.log(i++); // 10
console.log(i); // 11
console.log(++i); // 12 : 변수 i의 값을 먼저 연산 후에 도출
console.log(++i); // 13
console.log(i); // 13

// 전위/후위의 계산차이는 실무에서는 큰 차이는 없다
// 실무작업에서는 정확한 값을 도출 후 작업을 진행하는 것을 권장하기에

nFn();

n = n + 1;
n += 1;
n++;
++n;
nFn('-------------');

n = n - 1;
n -= 1;
nFn();
n--;
--n;
nFn();
console.clear();
// -------------------------------------------------------------------
// 비교연산자 =======================================
n = 20;
nFn( i ); // n값과 i값 비교

var compare = n === i; // === 같은가? n값과i의 값이 같이 않으므로 false
console.log( compare );

compare = n !== i; // !== 같지않은가? true
console.log( compare );

compare = n <= i;
console.log( compare );

compare = n >= i;
console.log( compare );

// or(||) , and(&&)
// ||, && 비교연산자는 좌변과 우변을 비교하여, true/false를 찾아내는 기법
// 한쪽이 완전한 충족을하면 다른 쪽은 비교하지 않는다!
// 단, 하나의 비교연산자( |, & )사용시 결과는 0,1로 도출
// 팁, 조금이라도 빠른 연산을 위해
// ||은 true가 나오기쉽거나 우선이되는 내용을 좌변에 배치
// &&는 false가 나오기 쉽거나 우선이 되는 내용을 좌변에 배치

var compare2 = true || false; // || 둘중 하나이상 참이면 true
console.log( compare2 );

compare2 = false && false;  // && 둘중 하나라도 거짓이면 false
console.log( compare2 );

compare3 = true & true; 
console.log('|, & 하나짜리로 비교', compare3 );

// !의 의미는 부정(반대)
console.log('체크1:',  !!false ); 
console.log('체크2:',  0 , !!0);

// ---------------------------------
var checkFn = function(data){
  var d = data || '??';
  return console.log( d );
};

checkFn(10);
checkFn();

console.clear();
// 삼항연산자 =======================================
// 참/거짓에 수행하는 내용은 무조건 1줄이어야 한다. 
// (1) ? 2 : 3 ;
// (조건) ? 조건결과가 참이면 실행 : 결과가 거짓이면 실행 ;
  // 조건 ?
  //    (참) : // 참에 관련된 내용 작성
  //        (조건? 참 : 거짓); // 거짓에 관련된 내용에서 다시 조건 비교

( !true )? console.log('결과 참!!') : console.log('결과 거짓!');

var list = [];
var trueFn = function(){
  list = ['note', 'laptop', 'mouse', 'git'];
  return list;
};

var falseFn = function(){
  list = ['wallet', 'glasses', 'smartphone'];
  return list;
};

// 백팩을 들고 다닌다면?
(!true)? trueFn() : falseFn();
console.log( list );

// -------------------------------------------------

console.clear();
// 당신이 개발자라면 프론트와 백엔드 분야중 어느쪽인가?
// 프론트엔드 분야에서 익혀야하는 언어/기술 ['html', 'css', 'javascript', 'jQuery', 'node.js', 'react', 'typescript'];
// 백엔드 분야에서 익여햐하는 언어/기술 ['html', 'sql', 'c#', '.net', 'pythone', 'java', 'jsp', 'spring', 'javascript', 'node.js'];

//1. 3항연산자로 도출해보세요!
var prLang = [];
var frontEndFn = function() {
  prLang = ['html', 'css', 'javascript', 'jQuery', 'node.js', 'react', 'typescript'];
  return prLang;
};
var backEndFn = function() {
  prLang = ['html', 'sql', 'c#', '.net', 'pythone', 'java', 'jsp', 'spring', 'javascript', 'node.js'];
  return prLang;
};

// var program = 'front';
// program이 'front'와 일치하면 frontEndFn() 출력, 일치하지 않으면 backEndFn() 출력
// (program === 'front') ? frontEndFn() : backEndFn();
// console.log(prLang);


//2. 함수실행 programer('front')  -> 'front' || 'back'으로 작성하여, 1번내용실행되게 만들어보세요.

var programer = function(field) {
  var data = field === 'front';
  var data2 = field === 'back';
  // (data)? frontEndFn() : backEndFn();
  
  // 조건 ?
  //    (참) : // 참에 관련된 내용 작성
  //        (조건? 참 : 거짓); // 거짓에 관련된 내용에서 다시 조건 비교
  
  (data)?
    frontEndFn() :
      (data2) ? backEndFn() : prLang = ['검색 결과가 없습니다'];
};

programer('front');
programer('back'); 
programer('design');
console.log(prLang);
