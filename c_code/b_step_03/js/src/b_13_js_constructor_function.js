// b_13_js_constructor_function.js
// 'use strict'; // 엄격하게 기능을 제한하여 처리하는 모드

// 생성자 함수의 제작
// 함수의 이름은 PascalCase

// 기존 객체 생성 방법
var user = {};
user.name = 'seula';
user.age = 20;
user.email = 'abc@co.kr';

console.log(user);

// 생성자 함수 : this 사용
var UserSetting = function(userName, userAge, userEmail) {
  this.name = userName;
  this.age = userAge;
  this.email = userEmail;
};


// this : window
console.log('전역의 this: ', this); // window
// window.console.log('console 결과'); 
// this.console.log('console 결과');

// this : 인스턴스
var ObjFn = function(a) {
  this.alpha = a;
  console.log('생성자 함수 내의 this: ', this);
};
var alpha = new ObjFn('abcd');


// 인스턴스 처리 : 생성자 함수의 기능으로 객체를 생성(new 연산자와 함께 사용)
var user1 = new UserSetting('seula', 20, 'abc@co.kr');
console.log(user1); // {name: 'seula', age: 20, email: 'abc@co.kr'}

// 매개변수가 부족하면 해당 프로퍼티는 undefined
var user2 = new UserSetting('puppy', 10);
console.log(user2); // {name: 'puppy', age: 10, email: undefined}

// prototype : 생성자에 담기는 별도의 정보. 외부에 노출되지 않게 처리 가능
UserSetting.prototype.group = '가족 명단 체크';
console.log(user1.group); // 가족 명단 체크

UserSetting.prototype.trueCheck = function() {
  return this.age / 2;
};

console.log(user1.trueCheck()); // 10

// ---------------------------------------------------------

var SetMenu = function(brand, type, narr, link) {
  this.brand = brand;
  this.type = type;
  this.narr = narr;
  this.link = link;
}

// 생성자 함수로 만든 인스턴스에 기본 내장되어야 하는 값 : 프로토타입
SetMenu.prototype.title = '겨울에 어울리는 음료';
var coffeeList = [];
var drink1 = new SetMenu('nespresso', 'coffee', '겨울에 따뜻하게 마실 수 있는 커피', 'https://nespresso.com');

coffeeList.push(drink1);
console.log(coffeeList[0].title);

// ---------------------------------------------------------

var nodeList = document.querySelectorAll('li'); // NodeList : 배열
var ul = document.querySelector('ul'); // NodeList : 배열
var list = ul.children; // HTMLCollection : 배열이 아닌 유사배열, 배열 메서드가 동작하지 않는다
console.log(list);

// prototype은 재설정, 추가 옵션을 주는 개념
// 배열이 가지고 있는 본연의 기능 중 값을 배열 형식으로 처리하는 것
var listArr = Array.prototype.slice(list);
console.log(listArr);

// list.forEach(function(data, index) {
//   data.style.border = '1px solid #3df';
// }) // TypeError : list가 배열이 아니라 forEach 사용 불가

listArr.forEach(function(data, index) {
  data.style.border = '1px solid #3df';
}); // TypeError : list가 배열이 아니라 forEach 사용 불가

// --------------------------------------------------------

// prototype : 하나의 기능을 사용할 수 있는 환경을 구축하는 처리형태
// 사용하는 변수 값 자체에 있는 기능은 아니며 본연의 타입 형태에 담겨 처리할 수 있도록 만드는 것.

// ---------------------------------------------------------

// 배열 형식을 가진 기능이 실제 배열이 아닌 형태는 유사배열로 불리며 배열의 고유 기능을 처리하지 못한다(배열 메소드 기능)
// 배열로 강제로 처리하기 위해서는 배열의 고유 기능을 처리해 주어야 하는데
// 이 때 필요한 형식이 prototype이다.

// 이처럼 본래 가지고 있지 않은 형식을 강제로 수행하기 위해서는 어떠한 설정을 주어야 하는데 이를 prototype에 내장시켜 처리하도록 만든다

// 생성자 함수,
// this,
// 배열/유사배열
// prototype

// 배열 메소드
var arr = [];
arr.push(1)
// console.log(  arr  );
// console.log( arr.unshift('data')  );

// arr = Array.prototype.push(1);
// Array.prototype.unshift('data');

var ListFn = function(type, color){
  this.type = type;
  this.color = color;
};
ListFn.prototype.store = 'anyang';

var coffee = new ListFn('americano', 'brown');
console.log( coffee.store );

// -----------------------------------------

// console.clear();

// 1. this : window
// 2. this : 일반함수 - window이지만 엄격모드에서는 undefined
// 3. this : 생성자함수로 만들어진 객체
// 4. this : 메서드 - 객체로 처리되어 있는 변수명

var n = 0;
var addFn = function(){
  // 'use strict' 모드를 사용하면 일반함수 내의 this는 undefined
  // this.n = 50;
  n = 50;
  n++;
};
addFn();

console.log(n);
console.log(window, n);

// ------------------------------------------

var lastName = 'kim';
var firstName = 'min';

var useFile = {
  firstName : 'seula',
  lastName  : 'kang',
  job       : 'designer',
  subjob    : 'developer',
  fullName  : function() {
    return this.lastName + ' ' + this.firstName;
  }
};

console.log(useFile.fullName());

// --------------------------------------------------

// call, apply, bind

// 배열에 요소 추가 : push() 메서드 이용
var ar1 = [1, 2];
ar1.push('바나나', '키위'); 
console.log(ar1); // [1, 2, '바나나', '키위']

// 배열에 요소 추가 2 : prototype 이용
Array.prototype.push.call(ar1, '사과', '오렌지');
// Array, Object, Function
console.log(ar1); // [1, 2, '바나나', '키위', '사과', '오렌지']

var obj = {
  string: 'seula',
  reName: function() {
    console.log('name', this.string);
  }
};
obj.reName();

var obj2 = {
  string: 'sub name'
};
console.log(obj2.string);

// obj.reName.call(선택자, 대입할 값);
obj.reName.call(obj2);
// Object.prototype.reName.call(obj2);

var obj3 = {
  string: [1, 3, 4, 5]
};
console.log(obj3);
obj.reName.call(obj2);
obj.reName.apply(obj3);

// ---------------------------------------------------------

var listFn = function() {
  // return arguments;
  // return Array.prototype.slice.call(arguments); // 유사배열을 배열로 변환
  return Array.prototype.join.call(arguments).split(','); // 위와 동일한 기능
};

var makeList = listFn('test', 'file', 1, 2, 4, 5);
console.log(makeList); // 유사 배열

// ---------------------------------------------------------

// 5. this : 이벤트 핸들러 - 이벤트의 주체가 되는 선택자
var btn = document.querySelector('#btn');
// btn.addEventListener('이벤트 내용', function(e){});
btn.addEventListener('click', function(e){
  // this는 btn을 가리킴
  console.log(this); 
});

// XMLHttpRequest -> ajax
