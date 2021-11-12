// b_08_js_repeat2.js

// for(임의변수 in 객체){} ----------------------------------
// for(in){}

// 나쁜 예 : 배열에서 사용하지 말기
// var arr = ['딸기', '바나나']
// for(var i in arr) {
//   console.log(arr[i]);
// }

var obj = {
  '딸기'   : 'red',
  '바나나': 'yellow',
  '키위'   : 'brown',
  '수박'   : 'green',
  '포도'   : 'purple'
}

for (var sample in obj) {
  console.log(sample);
} // 딸기 / 바나나 / 키위 ... 프로퍼티를 출력

for (var sample in obj) {
  console.log(obj[sample]);
} // red / yellow / brown ... 값을 출력

var sample; // 변수를 밖에서 선언해도 완전히 동일한 방식으로 출력
for (sample in obj) {
  console.log(sample + ':' + obj[sample]);
} // 딸기:red ... 프로퍼티와 값을 모두 출력

// for: 범용처리 단 객체는 불가능
// for-in: 객체를 순환하기 위해 사용


// forEach ----------------------------------------------------
// 배열.forEach(); 내장 메서드
var arr = ['딸기', '바나나', '키위', '수박', '포도']
// var i = 0;
// var arrLen = arr.length;
// for (; i < arrLen; i++) {
//   console.log(arr[1]);
// }

arr.forEach(function(data, index){ // forEach에 들어오는 인자의 첫번째는 값, 두번째는 순서
  console.log(index, data);
});

// 이벤트 메서드의 특징 : 선택자.이벤트(기능,function(){})
// 메서드 안에 함수가 들어가면 정의와 호출이 한번에 이뤄진다

var ul = document.querySelector('ul');
var li = ul.children;
var li2 = document.querySelectorAll('li');

console.log(arr); // 배열
console.log(li); // 유사 배열
console.log(li2); // 유사 배열

// for은 기본 문법, forEach()는 메서드.