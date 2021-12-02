// b_16_js_remind_02.js
var i;
var n;
var arr;
var arr2;
var arrOrigin;
var arrClone;
var plusData;
// 일반변수, 참조변수

console.log(fnTest([5, 6, 7, 8, 9, 50]));


// 일반변수는 값(결과물) 그 자체를 가리키는 것
i = 0;
n = i;
i = 10;
n = i;
i = 'text';
console.log(i, n);

// 참조변수는 값이아닌 주소를 가리키는 것 - [], {}
arr = ['하나', '둘'];
arr2 = arr;
arr[0] = '셋';
arr[1] = '넷';
console.log(arr, arr2);

// 위와 동일한 참조변수 인것 같지만, 
// 실제로는 새로운 참조변수를 생성
arrOrigin = [1, 2, 3];
arrClone = arrOrigin;
arrOrigin = ['하나', '둘', '셋'];
console.log(arrOrigin, arrClone);
//------------------------------------------------------

// Hoist현상은, 
// 1. 변수 이름이 상단으로 올라가서 존재하는 것처럼 처리
// 2. 기명 함수(함수선언식)로 된 것은 변수선언보다 우선순위로 끌어올려지는 처리

function fnTest(data) {
  return data.reduce(function (a, b) {
    return a + b;
  });
};
console.log(fnTest(arrClone));
console.log(fnTest(arrClone));
// ---------------------------------------

console.clear();

var arrNumber = [90, 5, 30, 60, 450, 250, 3, 60, 8];
// 문제 1 : 위 배열에 들어가는 값 중 가장 작은 수를 구하는 방법 2가지 이상
// 문제 2 : 위 배열에 들어가는 값 중 가장 큰 수를 구하는 방법 2가지 이상
// 문제 3 : 위 배열에 들어가는 값 대신 정수형의 1~3자리까지의 랜덤 숫자 10개를 담아 문제 1번의 값처럼 도출

// 1-1
var minFn1 = function(arr) {
  var min = arr[0];
  for (var i = 0; i <= arr.length; i++) {
    if(min > arr[i]) {
      min = arr[i];
    }
  }
  return min;
}
console.log(minFn1(arrNumber));

// 1-2
var minFn2 = Math.min(...arrNumber);
console.log(minFn1(arrNumber));

// 2-1
var maxFn1 = function(arr) {
  var max = arr[0];
  for (var i = 0; i <= arr.length; i++) {
    if(max < arr[i]) {
      max = arr[i];
    }
  }
  return max;
}
console.log(maxFn1(arrNumber));

// 2-2
var maxFn2 = Math.max(...arrNumber);
console.log(maxFn1(arrNumber));

// 3
var arrNumber2 = [];
var ran = parseInt(Math.random()*1000);

console.log(ran);





// =============================================================
// 풀이: 문제1 - 최소값 구하기
// 1-1 : Math.min()

// Array.prototype.call(?, 1,2,3,4), 
// Array.prototype.apply(?, [1,2,3,4,5]);
// var minResult = Math.min.apply(null, arrNumber); 
// console.log( minResult );

// 1-2 : 
// var arrR2 =  [1,4,6,2,99,10,456,98765].sort(function(a,b){
//     return a - b;
// });
// console.log( arrR2 );
var arrNumber2 = [90, 5, 30, 60, 450, 250, 3, 60, 8];
var sortMin = arrNumber2.sort(function (a, b) {
  return a - b;
});
console.log(sortMin[0]);

    // 배열의내용을.정렬로처리( 정렬기준을 설정(앞의값, 뒤의값){} ) 
    //arrNumber2.sort(function(a, b){ 
      // 앞의값 - 뒤의값을 계산하여 결과가 음수이면 앞,뒤 그대로배치
      // 앞의값 - 뒤의값을 계산하여 결과가 양수이면 뒤,앞 순서로배치
      //  var c =  a - b;
      // 정렬기준을 처리하여 반환
      //  return c; 
    //});

// 1-3 : for문 이용
var arrNumber4 = [90, 5, 30, 60, 450, 250, 3, 60, 8];
var arr4Len = arrNumber4.length;
var minNumber = arrNumber4[0];
for (i = 0; i < arr4Len; i += 1) {
  if (minNumber > arrNumber4[i]) {
    minNumber = arrNumber4[i];
  }
}
console.log('for:', minNumber);


// ------------------------------------------------------
// 풀이: 문제2 - 최대값구하기
// 2-1 : Math.max()
var maxResult = Math.max.apply(null, arrNumber);
// console.log( maxResult );

// 2-2 : [].sort()
var arrNumber3 = [90, 5, 30, 60, 450, 250, 3, 60, 8];
var sortMax = arrNumber3.sort(function (a, b) {
  return b - a;
});
console.log(sortMax[0]);
var last = sortMin.length - 1;
console.log(sortMin[last]);




// --------------------------------------------------------------
// 문제 3번을 풀기위한 random 숫자만들기
var arrRan = [];
var random; //= Math.floor(Math.random() * 1000);
var i = 0;
for (; i < 10; i++) {
  random = Math.floor(Math.random() * 1000);
  arrRan.push(random);
}
// console.log( arrRan );
// ---------------------------------------------------------------

console.clear();


// 구구단
// 1: 이중 for 문
var multitable = function () {
  for (var i = 1; i < 10; i++) {
    for (var j = 1; j < 10; j++) {
      multitable = i * j
      console.log(i + ' * ' + j + ' = ' + multitable);
    }
  }
}
multitable();

// 2: 재귀함수
var loop1 = function (i) {
  var n;
  for (n = 1; n < 10; n += 1) {
    console.log(i + 'x' + n + '=' + (i * n))
    if (i !== n) {
      loop1(i);
    }
  }
};

console.clear();

// 500부터 1초에 1씩 빠지는 카운트다운
// setInterval : 일정시간마다, 끊어주는 조건이 필요(clearInterval)
// setTimeout : 정해진 시간 뒤에(1회성)

var startNum = 500;
var timed    = 100;
var endNum   = 250;
var intervalFn;
// ------------
var $btn = document.querySelector('.btn');
var $pSpan = document.querySelector('p>span')
$pSpan.innerText = 'text'
/*
// if문을 활용해 기능을 수행하는 중간에는 중복 수행하지 않게 하기
var goCheck = true; // 외부에 true 설정
var countFn = function(start) {
  if (goCheck){ // true시 if문 수행
    goCheck = false; // 수행중에는 false이기 때문에 수행하지 않는다
    // timed(100ms) 뒤에 1번 반복 수행
    intervalFn = setInterval(function () {
      $pSpan.innerText = start;
      start--;
      if (start <= endNum) {
        $pSpan.innerText = endNum + ' 처리 완료';
        clearInterval(intervalFn);
        goCheck = true; // 모든 수행이 끝난 후 다시 true로 설정
      }
    }, timed);
  }
}

$btn.addEventListener('click', function(e){
  e.preventDefault();
  countFn(startNum);
});
*/
// ----------------------------------------

var intervalCountFn = function(startNum){
  var countNum = startNum;
  setTimeout(function(){
    $pSpan.innerText = countNum;
    countNum--;
    if(countNum > endNum) {
      intervalCountFn(countNum);
    } else {
      $pSpan.innerText = countNum + '숫자 달성';
    }
  }, timed);
}

$btn.addEventListener('click', function(e){
  e.preventDefault();
  intervalCountFn(startNum);
});