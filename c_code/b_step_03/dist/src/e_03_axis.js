// e_03_axis.js

/*
  * 마우스 움직였을 경우 해당 위치의 좌표 파악
*/

const elWrap = document.querySelector('#wrap');

// 이벤트 -------------------------------------
elWrap.addEventListener('mouseenter', e => {
  console.log(e);

  // clientX   || Y: 브라우저에 보이는 화면 기준 좌표
  // movementX || Y: 이전과 이후의 기준값 차이
  // offsetX   || Y: this(선택자) 기준
  // pageX     || Y: 브라우저 페이지에 존재하는 내용 시작부터 잰 좌표
  // screenX   || Y: 모니터 화면 기준 좌표
  // X         || Y
});