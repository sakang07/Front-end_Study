// 1210_js_promise.js

// 문제1 : 각 입력된 점수의 합 계산
// 국어점수 : 5점 이하의 값
// 영어점수 : 5점 이하의 값
// 수학점수 : 5점 이하의 값
// 점수합에 +5
// 총점을 *5
// 점수 도출 : 최종 점수: ///
// 메시지 : 점수 도출이 되지 않으면 다시 입력하세요

// 문제2 : const tel = '01027771234'
// -> const telN = ['010', '1234', '2777']
// 배열메서드: split, slice, join

// --------------------------------
// 문제 1

const fn = (num) => {
  const result = new Promise((resolve, reject) => {
    const _convertNum = parseInt(num);
    const _permission = isNaN(_convertNum);
    !_permission ? resolve(num) : reject('숫자로 작성해주세요!')
  })
  return result;
}


const fnSum = (score) => {

};