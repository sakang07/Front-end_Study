"use strict";

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.promise.js");

require("core-js/modules/es.promise.finally.js");

// d_05_promise_ex_01.js
// 시나리오:
// 국어/영어/수학 값을 모두 합쳐서 결과 도출
// 1. 점수 입력 후 버튼 클릭
// 2. 해당하는 값 모두 합
// 3. 합 + 5
// 4. 결과 * 5
// 5. 최종점수 도출 (.result > span) 도출
// * 값 입력이 안되어있다면 입력 요구
// * 0~5점 이하의 결과로 도출
//-------------------------------------------
// 변수
var testBox = document.querySelector('#testBox');
var elKorean = document.querySelector('#korean');
var elEnglish = document.querySelector('#english');
var elMath = document.querySelector('#math');
var btn = testBox.querySelector('button');
var result = testBox.querySelector('.result > span'); // ------------------------------------------

var fnRel = function fnRel(score) {
  var _n = parseInt(score);

  var sendData = function sendData(resolve) {
    var nanCheck = isNaN(_n) === false;
    var numArea = _n >= 0 && _n <= 5;

    if (nanCheck && numArea) {
      resolve(_n);
    }

    ;
  };

  return sendData;
};

var fnSubject = function fnSubject(n) {
  var relData;
  fnRel(n) // 값을 전달 받았을 때
  .then(function (response) {
    relData = response;
  }) // 값에 에러가 났을때
  .catch(function (error) {
    relData = error;
  }) // 값의 문제 여부를 떠나 최종 처리하고자 할 때
  .finally(function (rel) {
    return console.log(rel);
  });
}; // 이벤트


btn.addEventListener('click', function (e) {
  e.preventDefault();
  var _ref = [elKorean.value, elEnglish.value, elMath.value],
      kr = _ref[0],
      en = _ref[1],
      mt = _ref[2];
  fnSubject(kr);
  fnSubject(en);
  fnSubject(mt);
});