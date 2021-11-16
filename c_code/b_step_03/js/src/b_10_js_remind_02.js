// b_10_js_remind_01-2.js
// console.log( i );


var ar1 = ['딸기','포도','바나나','오렌지'];
var cAr = [];

// 배열을 복사하는 함수
var arFn = function(arr){
  var arEx = [];
	// 배열 값과 인덱스를 순환 출력할 수 있는 forEach()
  arr.forEach(function(data, index){
		// 빈 배열에 기존 배열값을 모두 추가
    arEx[index] = data;
  });
  return arEx;
};

cAr = arFn(ar1);

ar1.push('melon');
console.log( ar1 );
console.log( cAr );


var car = ['pony','bmw','granger','audi'];
var car2 = arFn(car);
console.log( car2 );

console.clear();

var ob1 = {'fruits': ['딸기', '포도', '바나나', '오렌지']};
var c0b1 = {};

var obt = {'a': 1, 'b': 2 };
var c0bt = {};
for(var prop in obt) {
  // console.log(prop);
  c0bt[prop] = obt[prop];
}
console.log(c0bt);

var ob1 = {
  'fruits': ['딸기', '포도', '바나나', '오렌지'],
  'drink': 'coffee'
};
var c0b1 = {};

// for(var prop in ob1) {
//   // ob1에 대한 객체를 체크하여 copy
//   c0b1[prop] = ob1[prop];
//   // ob1의 프로퍼티에 들어있는 배열을 확인하여 copy
//   // 그러나 그냥 쓰면 drink:coffee가 배열이 아니라 에러가 나므로 if문 안에 넣는다
//   // ob1[prop].constructor === 'Array'로 확인해도 된다
//   // if (Array.isArray(ob1[prop])) {
//     if (ob1[prop].constructor === Array) {
//       c0b1[prop].forEach(function(data, index){
//         console.log('data:', data)
//       });
//   }
// }

// 객체 ob1의 프로퍼티 순환 반복
for (var prop in ob1) { 
  // 객체의 값이 배열인지 확인하여 참이면
  if (ob1[prop].constructor === Array) { 
    // 배열값 복사 처리 함수 호출해서 빈 객체에 할당
    c0b1[prop] = arFn(ob1[prop]); 
  } else {
    // 객체 값이 배열이 아닌 경우 빈 객체에 기존 객체 프로퍼티 추가
    c0b1[prop] = ob1[prop];
  }
}

ob1.car = 'niro';
ob1.fruits.push('melon');
console.log(c0b1);


// ----------------------------------------------------------------
console.clear();

var originAr = {
  'fruits': ['딸기','포도','바나나','오렌지'],  
  'drink':'coffee',
  'ade':{ 'ice':'레몬에이드', 'hot':'nothing' }
};

var textAr = JSON.stringify(originAr);// JSON형식을 보이는 그대로 문자화 처리
var copyAr = JSON.parse(textAr); // 객체처럼보이는 문자를 JSON형식(객체/배열)으로 변환

console.log('.stringify', textAr);
console.log('.parse', copyAr);

originAr.more = '추가객체 삽입';
originAr.fruits.push('감');

console.log( copyAr );
console.log( originAr );

// JSON(JavaScript Object Notation) 형식의 기초
// 1. property, value 모두 쌍따옴표로 처리 (별도저장시)
// 2. 주석은 사용X
// 3. 객체와 배열들의 집합

