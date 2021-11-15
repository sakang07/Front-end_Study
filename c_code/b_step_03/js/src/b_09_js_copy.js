// b_09_js_copy.js

var favoriteColor = ['indipink', 'skyblue', 'lavender', 'emerald green'];
var copyColor = favoriteColor; // 같은 값을 공유하는 얕은 복사
favoriteColor.push('yellow'); // 두 변수 모두에서 yellow가 할당되어 있다.

// 문제 1. -------------------------------------------------------------------------------
// 배열의 깊은 복사 예제
// cloneColor와 favoriteColor의 값이 동일하게 복사하고
// 이후에 favoriteColor.push('sky'), cloneColor.push('deep orange')의 값이 각자 들어가게 하기

// 힌트
// var cloneColor = [];
// cloneC[0] = 'red';
// cloneC[1] = 'blue';

// 풀려고 노력해봄 --------------------------------------------------------------------
// 깊은 복사를 하는 함수 copyFn
var copyFn = function (array) {
  var cloneArray = [];
  // 배열의 길이만큼 새 배열에 요소 추가
  for(var i = 0; i <= array.length - 1; i++) {
    cloneArray.push(array[i]);
  }
  return cloneArray;
}
// 두 배열의 값은 같지만
console.log(favoriteColor); // ["indipink", "skyblue", "lavender", "emerald green", "yellow"]
console.log(copyFn(favoriteColor)); // ["indipink", "skyblue", "lavender", "emerald green", "yellow"]
// 두 배열은 다른 배열
console.log(copyFn(favoriteColor) === favoriteColor); // false


// 풀이 -------------------------------------------------------------------------------


var arr = ['one'];
var arr2 = [];
// 배열에 인덱스를 지정하여 push()로 넣어줄 때는 참조 변수가 아닌 값이 복사된다
arr2.push(arr[0]);
arr.push('two');
console.log(arr, arr2); // ["one", "two"], ["one"]

// 방법 1-----------------------------------
/*
  cloneColor.push(favoritColor[0]);
  cloneColor.push(favoritColor[1]);
  cloneColor.push(favoritColor[2]);
  cloneColor.push(favoritColor[3]);
  cloneColor.push(favoritColor[4]);
  cloneColor.push(favoritColor[5]);

  favoritColor.push('sky');
  cloneColor.push('deep orange');

  console.log(favoritColor, cloneColor);
*/

// 방법2 -------------------------
// var i = 0;
// var len = favoritColor.length;
/*
for(; i <= len; i+=1){
  cloneColor.push(favoritColor[i]);
}
favoritColor.push('sky');
cloneColor.push('deep orange');
*/

var cloneColor = [];
var i = 0;

// 방법 3. for 문과 if 문의 중첩 ---------------------------------- 
var len = favoriteColor.length;
for (; i <= len; i++) {
  if (i !== len) {
    // 반복 수와 해당 배열의 길이가 같아지기 전까지는 다음 문 실행
    cloneColor.push(favoriteColor[i]);
  } else {
    // 마지막 반복 시 다음 문 실행
    favoriteColor.push('sky');
    cloneColor.push('deep orange');
  }
}
// console.log(favoriteColor, cloneColor);

// 방법 4. 배열.forEach(function(){}); 이용 ---------------------------------- 
favoriteColor.forEach(function(data, index){
  // cloneColor[index] = favoriteColor[index];
  // cloneColor.push(data);
  cloneColor[index] = data;
});
favoriteColor.push('sky');
cloneColor.push('deep orange');

console.log(favoriteColor, cloneColor);

// =======================================================================

var pc = {
  'dell' : '프리시전',
  'apple' : 'mac book',
  'samsung' : 'galaxy book'
};

var copyPc = pc;
pc.lg = 'gear';
console.log(copyPc);

var clonePc = {};

// 문제 2. -------------------------------------------------------------------------------
// 객체의 깊은 복사 예제
// {dell: "프리시전", hp: "z시리즈", apple: "mac book", samsung: "galaxy book", lg: "gear", asus: "gen book"} 은 pc에,
// {dell: "프리시전", hp: "z시리즈", apple: "mac book", samsung: "galaxy book", lg: "gear", lenova: "think pad"} 은 clonePc로 복사하기

// 풀어봄
var copyFn2 = function (obj) {
  for (var key in obj) {
    // console.log(obj[key]);
    clonePc[key] = obj[key]; // 좌우변 헷갈리지 않도록 주의!
  }
  return clonePc;
}

console.log('확인', copyFn2(pc));

// 풀이 ----------------------------------------------------

// 방법1 --------------------
/*
clonePc['dell'] = '프리시전';
clonePc['hp'] = 'z시리즈';
clonePc['apple'] = 'mac book';
clonePc['samsung'] = 'galaxy book';
*/

// for (var 변수 in 원본 객체) {}
for (var data in pc) {
  // console.log(data); // 프로퍼티 키 출력
  clonePc[data] = pc[data]; // 두 배열의 값을 일치시켜 주기
}
pc['asus'] = 'gen book';
clonePc['lenova'] = 'think pad';

console.log(pc); // {dell: "프리시전", apple: "mac book", samsung: "galaxy book", lg: "gear", asus: "gen book"}
console.log(clonePc); // {dell: "프리시전", apple: "mac book", samsung: "galaxy book", lg: "gear", lenova: "think pad"}


// 과제! ---------------------------------------------------------------------------------------
// 다음의 배열과 객체들을 깊은 복사 해보기
// var cookie = ['초코칩','칙촉','빼빼로','호빵','촉촉한초코칩','칸쵸','홈런볼','엄마손'];
// var snack = { '농심':'새우깡', '해태':'맛동산', '오리온':'고래밥', '크라운':'산도' };
// var ice = [ {'롯데':['폴라포','수박바']},{'해태':'브라보'},{'허쉬':'민트초코'},{'빙그레':'투게더'} ];
