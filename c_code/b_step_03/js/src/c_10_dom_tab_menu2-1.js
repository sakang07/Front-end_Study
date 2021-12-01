// c_10_dom_tab_menu2-1.js

// 탭메뉴 내용에 필요한 코드 형식 삽입하기

// (ES5) 문자열로 처리해야 하는데 여러 줄은 문자로 인식하지 못한다.
// 1. 모두 한 줄로 만든다 : 안정성 up, 가독성 down
// 2. 줄바꿈 전에 \를 입력한다. \ + (빈칸없이 Enter) : 안정성 down, 가독성 up
// (ES6) 템플릿 리터럴 쓰면 된다!
// (리액트) jsx : 코드 후처리 필요 없이 그대로 function(){return ( 요안에 통째로 넣기 )}
// 3. 속성값을 변수로 넣을거면 값없이 속성만 남겨두기.
// 4. 필요 없는 값들 정리하기.


var innerCode = '\
<a href="#" data-id>\
  <h4 class="event_title"></h4>\
  <p class="event_narration"></p>\
  <dl class="date">\
    <dt class="blind">기간</dt>\
    <dd></dd>\
  </dl>\
  <dl class="event_check success">\
    <dt>이벤트 진행 상태</dt>\
    <dd>이벤트 종료</dd>\
  </dl>\
</a>'

// -----------------------------------------

var $testWrap = document.querySelector('#test_wrap');
var $testList = $testWrap.querySelectorAll('li');

$testList.forEach(function(data, idx){
  data.innerHTML = innerCode;
});
