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
const testBox = document.querySelector('#testBox');
const elKorean =document.querySelector('#korean');
const elEnglish = document.querySelector('#english');
const elMath = document.querySelector('#math');
const btn = testBox.querySelector('button');
const result = testBox.querySelector('.result > span');
// ------------------------------------------

const fnRel = function(score){
  const _n = parseInt(score);
  const sendData = new Promise(function(resolve, reject){
    const nanCheck = isNaN(_n) === false;
    nanCheck ? resolve(_n) : reject('숫자를 다시 한 번 정확하게 입력해주세요.')
  })
  return sendData;
}

const fnSubject = n => {
  let relData;
  fnRel(n)
    .then(response => {relData = response})
    .catch(error => {relData = error})
    .finally(rel => console.log(rel));
}


// 이벤트

btn.addEventListener('click', function(e){
  e.preventDefault();
  const [kr, en, mt] = [elKorean.value, elEnglish.value, elMath.value];
  fnSubject(kr);
});