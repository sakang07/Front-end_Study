"use strict";

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.promise.js");

// d_05_promise.js
{
  // 4. fnOne 함수의 수행. fnTwo로 반환
  var fnOne = function fnOne(data) {
    var rel3 = data * data;
    return rel3;
  }; // 3. fnTwo 함수의 수행. fnThree로 반환


  var fnTwo = function fnTwo(data, fn) {
    var rel2 = data / 2;
    return fn(rel2);
  }; // 2. fnThree 함수의 수행. valueResult로 반환


  var fnThree = function fnThree(data, fn) {
    var rel1 = data * 5;
    return fn(rel1, fnOne);
  }; // 1. fnThree 함수의 호출. 4와 fnTwo의 인수를 가지므로 순차 수행.


  var valueResult = fnThree(4, fnTwo);
  console.log(valueResult);
} // GamepadButton.addEventListner('click', function(){})
// 실행 컨텍스트 : 브라우저에서 실행되는 순서를 파악하고 처리하는 형태
// 스택 : 수행하는 순서에서 처리되는 모양
// 힙 : 스택과는 별도로 관리하는 것(setTimeout, setInterval)
// -------------------------------------

{
  // 4. fnOne 함수의 수행 후 fn2Two로 반환
  var fn2One = function fn2One(data) {
    return Math.pow(data, 2);
  }; // data의 2승
  // 3. fn2Two 함수의 수행 후 fnOne 함수의 호출 // 5. 값을 fn2Three로 반환


  var fn2Two = function fn2Two(data) {
    var rel = data / 2;
    return fn2One(rel);
  }; // 2. fn2Three 함수의 수행 후 fn2Two 함수의 호출 // 6. 값을 valueResult2로 반환


  var fn2Three = function fn2Three(data) {
    var rel = data * 5;
    return fn2Two(rel);
  }; // 1. 10을 인자로 가진 fn2Three 함수의 호출


  var valueResult2 = fn2Three(10);
  console.log(valueResult2);
} // 반복되는 콜백 함수는 가독성이 나쁘며 메모리 누수가 심하게 발생하여 쓰지 않기를 권장한다.
// ---------------------------------------
// promise
// 1. pending : 진행전/진행중/대기
// 2. fulfill : 성공/이행
// 3. reject : 실패/오류

{
  // resolve (fulfill의 결과), reject의 결과를 매개변수로 가진다
  var fnDataValue = new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve('success!');
      reject('failure');
    }, 500);
  }); // 콜백과 다르게 순차적, 일방적으로 수행

  fnDataValue // promise 기능 수행 후 수행
  .then(function (resolve) {
    return '성공';
  }) // 앞의 then이 기능을 수행하지 못했을 경우 수행. 성공했을 때는 skip
  .catch(function (error) {
    return '실패';
  }) // 이전 then이 수행된 후 수행
  .then(function (data) {
    return data + ' 하였습니다';
  }).then(function (data) {
    return console.log(data);
  }); // .then(console.log); 위와 동일. 매개변수와 동일한 변수를 저렇게 없앨수 있음
} // -------------------------------------------------

{
  // 4. fnOne 함수의 수행 후 fn2Two로 반환
  var _fn2One = function _fn2One(data) {
    return Math.pow(data, 2);
  }; // data의 2승
  // 3. fn2Two 함수의 수행 후 fnOne 함수의 호출 // 5. 값을 fn2Three로 반환


  var _fn2Two = function _fn2Two(data) {
    var rel = data / 2;
    return _fn2One(rel);
  }; // 2. fn2Three 함수의 수행 후 fn2Two 함수의 호출 // 6. 값을 valueResult2로 반환


  var _fn2Three = function _fn2Three(data) {
    var rel = data * 5;
    return _fn2Two(rel);
  }; // 1. 10을 인자로 가진 fn2Three 함수의 호출


  var _valueResult = _fn2Three(10);

  console.log(_valueResult);
} // --------------
// const mathRel = data => {
//   const dataType = typeof data === 'number' && isNaN(data); // 숫자여부
//   const promise = new Promise((resolve, reject) => {
//     if(dataType) {
//       resolve('숫자');
//     } else {
//       reject('숫자 아님');
//     }
//   });
//   return promise;
// }
// console.log(mathRel(2));
// ---------------------------------------------

console.log('---------------------------');

var dataCalc = function dataCalc(ins) {
  var dataResult = new Promise(function (resolve, reject) {
    var convertNum = parseInt(ins); // 들어오는 수치를 강제로 숫자처리

    var permission = isNaN(convertNum); // 숫자를 NaN인지 아닌지 파악(NaN이면 true 도출)

    !permission ? resolve(ins) : reject('숫자가 아니니 숫자로 작성해주세요.');
  });
  return dataResult;
};

var fnNum = function fnNum(n) {
  dataCalc('a').then(function (response) {
    return response * 5;
  }).then(function (response) {
    return response / 2;
  }).then(function (response) {
    return Math.pow(response, 2);
  }).then(function () {
    return console.log;
  }).catch(function () {
    return console.log;
  }); // 625
};