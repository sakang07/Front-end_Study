// b_10_js_method.js

// 배열 메서드는 배열 형식을 이용하여 처리하는 다양한 기능을 가진 함수
// 일부는 배열 메서드가 아닌 것도 존재(property 혹은 다른 곳에서도 사용 가능한 범용 처리방식)

// 배열 메서드가 아니면서 배열을 다루기 편하게 해주는 것들 ------------------------------
var array = ['maker', 'remote', 'pen'];

// 배열의 길이를 세어 주는 .length
console.log(array.length); // 3

var text = 'javascript';
// 배열이 아닌 문자열에서도 사용 가능
console.log(text.length); // 10

var obj = {'maker': 'dog', 'dogdog': 'duck'};
// 객체에서는 작동하지 않는다 
console.log(obj.length); // undefined

// 객체의 프로퍼티를 세는 방법 1
var n = 0;
for (var i in obj) {
  n++
}
console.log(n); // 2

// 객체의 프로퍼티를 세는 방법 2
console.log(Object.keys(obj).length); // 2


// 배열 메서드 -------------------------------------------------------------------------

// 배열 맨 뒤에 추가 .push
array.push('mouse');

// 배열 맨 앞에 추가 .unshift
array.unshift('monitor');
console.log(array); // ["monitor", "maker", "remote", "pen", "mouse"]

// 배열 맨 뒤에서 삭제 .pop()
array.pop();

// 배열 맨 앞에서 삭제 .shift()
array.shift();
console.log(array); // ["maker", "remote", "pen"]

// 배열의 값들을 하나의 문자열로 합치는 .join()
var joinText = array.join(' '); // 괄호 안에 든 걸로 사이를 이어준다
console.log(joinText); // maker remote pen

// 문자열을 쪼개서 배열로 만들어 주는 .split()
var splitText = joinText.split(' '); // 괄호 안에 든 걸 기준으로 쪼갠다
console.log(splitText); // ["maker", "remote", "pen"]

// 배열의 값들을 순서대로 출력해 주는 .forEach()
array.forEach(function(d, i){ // 매개변수로 콜백함수를 가진다
  console.log(d); // maker / remote / pen
});

// 500ms에 한 번씩 배열의 요소를 출력한다
// var i = 0;
// setInterval(function(){
//   document.write(splitText[i]);
//   i++;
// }, 500)

// 배열 값의 순서를 뒤집는 reverse()
splitText.reverse();
console.log(splitText); //  ["pen", "remote", "maker"]

// 배열 값을 알파벳 순서대로 정렬해 주는 sort()
splitText.sort();
console.log(splitText); //  ["maker", "pen", "remote"]

// indexOf 내부에 값을 입력하여 동일한 값이 존재하면 그 중 첫번째가 위치한 곳을 파악하여 index 출력
// 존재하지 않으면 -1 출력
var indexCk = array.indexOf('mug');
console.log(indexCk); //  -1

// 배열의 특정 위치를 지정해 값을 치환하는 .splice()
// .splice(index, 삭제하려는 값 갯수, 삽입할 값, 삽입할 값, ...)
var replaceArr = array.splice(1, 0, 'cam', 'mug', 'charger'); // 2번째부터 0개만큼 삭제, 이후의 값 삽입
console.log(array); // ["maker", "cam", "mug", "charger", "remote", "pen"]

var array2 = ['desktop', 'tablet', 'smartphone'];
// 단순히 두 배열을 나열한 것
console.log(array, array2); 

// 배열과 배열을 하나의 배열로 합치는 .concat();
var conArray = array.concat(array2);
console.log(conArray);

// 숫자로 된 배열의 값을 모두 더하기 : forEach() 이용
var arrayN = [10, 5, 2, 50, 80, 90, 200];
var sum = 0;
arrayN.forEach (function(d,i) {
  sum += d;
});
console.log(sum); // 437

// forEach()와 비슷하게 배열을 순환하지만 그에 더해 연산작업을 같이 처리하는 .reduce()
// 두 개의 요소를 순차로 가져와서 수행
console.log(arrayN.reduce(function(a,b){ // forEach()처럼 콜백함수를 매개변수로 가진다
  return a + b;
})); /// 437
var ck = arrayN.reduce(function(a,b){
  // a: 앞의 두 인자를 식으로 처리한 결과 / b: a의 뒤에 오는 인자
  console.log('a:', a, 'b:', b); // a: 10 b: 5 / a: undefine b: 2 / ...
});

var ck2 = arrayN.reduce(function(a,b){
  var c = a + b;
  console.log(a, b); // 10 5 / 15 2 / 17 50 ...
  return c;
});
console.log(ck2); // 437

// ------------------------------------------------------------------------------

// 반환된 값을 저장하여 이후 처리하는 .fliler() 
// [].filter(function(){}) 역시 매개변수가 콜백함수
// 체크된 내용 중 return 값만 별도로 담아서 처리

var nList = [1, 2, 3, 4, 5, 6, 7];

var filterList = [];
// 4보다 큰 수만 따로 새 배열에 넣기
nList.forEach(function(d, i){
  if(d > 4) {
    filterList.push(d)
  }
});
console.log('filterList:', filterList); // filterList: [5, 6, 7]

filterList = nList.filter(function(d, i, k){
  console.log(d, i, k); // data, index, array 순서로 순환 출력
  if(d > 4) {
    return d;
  }
});
console.log(filterList); // filterList: [5, 6, 7]

// 깊은 복사 / 얕은 복사 - JSON.stringify(), JSON.parse()
// 단순한 배열 메서드
// forEach, reduce, filter