// 1114_js_test.js

// 1. 반복문을 이용해서 아래와 같은 배열이
//    var 동물들 = ["고양이", "강아지", "도마뱀", "원숭이"];

//    아래와 같은 결과물이 되도록 코드를 작성해보세요.
//    ["귀여운 고양이", "귀여운 강아지", "귀여운 도마뱀", "귀여운 원숭이"];

// 2. 반복문을 사용해서 다음 텍스트를 h4ck3R sp34k처럼 바꾸는 함수를 만들어 보세요. (`A`를 `4`, `I`대신 `1`, `O`대신 `0`사용)
//    var 입력 = "javascript is awesome";

// 3. 구구단 만들기


// 풀이 1. ------------------------------------------

var 동물들 = ["고양이", "강아지", "도마뱀", "원숭이"];

var makeCute = function (array) {
  var CuteAnimal = [];
  // 배열의 길이만큼 반복 수행
  for (var i = 0; i < array.length; i++) {
    // 배열에 '귀여운 ' 붙이기
    CuteAnimal.push('귀여운 ' + array[i]);
  }
  return CuteAnimal;
}
console.log(makeCute(동물들));

// 풀이 2. -------------------------------------------

var 입력 = "javascript is awesome";

var awesomeFn = function (data) {
  // 하나씩 쪼개서 배열 만들어 print에 할당
  var printFn = data.split("");
  // 배열의 길이만큼 반복 수행
  for (var i = 0; i < printFn.length; i++) {
    // a가 있다면 4로 변환
    if (printFn[i] === "a") {
      // 배열에서 i번째부터 1개 삭제하고 그 위치에 새 요소 추가
      printFn.splice(i, 1, '4'); 
    // i가 있다면 1로 변환
    } else if (printFn[i] === "i") {
      printFn.splice(i, 1, 1);
    // o가 있다면 0으로 변환
    } else if (printFn[i] === "o") {
      printFn.splice(i, 1, 0);
    } else { }
  }
  // 배열 한 문자열로 합치기
  return printFn.join("");
}

console.log(awesomeFn(입력));

// 풀이 3. ---------------------------------------------

var multiTable = function () {
  var valPrint;
  // j에 1씩 더하는 반복 수행
  for (var j = 1; j < 10; j++) {
    // i에 1씩 더하는 반복 수행
    for (var i = 1; i < 10; i++) {
      // j와 i 곱하기
      valPrint = j * i
      console.log(j +' * ' + i + ' = ' + valPrint);
    }
  }
}
multiTable();