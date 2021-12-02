// c_10_dom_tab_menu2-1.js

// 삽입할 객체 리스트
var data = [
  { id: 'event_21042', title: 'summer flavor'}
];

// 탭메뉴 내용에 필요한 코드 형식 삽입하기

// (ES5) 문자열로 처리해야 하는데 여러 줄은 문자로 인식하지 못한다.
// 1. 모두 한 줄로 만든다 : 안정성 up, 가독성 down
// 2. 줄바꿈 전에 \를 입력한다. \ + (빈칸없이 Enter) : 안정성 down, 가독성 up
// (ES6) 템플릿 리터럴 쓰면 된다!
// (리액트) jsx : 코드 후처리 필요 없이 그대로 function(){return ( 요안에 통째로 넣기 )}
// 3. 속성값을 변수로 넣을거면 값없이 속성만 남겨두기.
// 4. 필요 없는 값들 정리하기.

// 1. html 요소를 생성, 지정된 위치에 삽입 - innerHTML, append, createElement
// 2. 생성과 삽입을 반복문으로 묶고 요소의 갯수만큼 반복해서 수행
// 3. 별도의 data 내용을 가져와 삽입

// -----------------------------------------

// 선택변수
var $contentInner = document.querySelector('.content_inner');
var $yearPart = $contentInner.querySelectorAll('.year_part');
var $lastYear = $yearPart[0];

// 기능 --------------------------------------------------
// 0. 삽입할 요소
var innerCode = '\
<a href="#" data-id>\
  <h4 class="event_title"></h4>\
  <p class="event_narration"></p>\
  <dl class="date">\
    <dt class="blind">기간</dt>\
    <dd></dd>\
  </dl>\
  <dl class="event_check success">\
    <dt>진행 상태</dt>\
    <dd>종료</dd>\
  </dl>\
</a>';

// 1. ul 생성
// createElement는 요소를 생성하는 기능 - 생성만 하고 삽입은 별도
var $makeUl = document.createElement('ul');

// 2. class 추가
// 2-1. classList.add('이름') : 기존 클래스 뒤에 추가
// $makeUl.classList.add('one');

// 2-2. 선택자.className = '이름' : 기존 클래스를 대체
// $makeUl.className = 'two';

// 2-3. 선택자.setAttribute('class', '이름') : 기존값을 대체, class 뿐 아니라 다른 속성을 모두 변경할 수 있다. 단, 초반에 넣지 않으면 구동이 꼬이는 경우도 발생.
// $makeUl.setAttribute('class', 'three');
// $makeUl.setAttribute('data-id', 'three'); // 커스텀 속성도 변경 가능
$makeUl.setAttribute('class', 'event_particle');

// 3. 삽입
// append는 지정된 선택자 내부에 필요한 요소(내용)를 기존 내용 뒤에 추가 삽입하는 기능(텍스트까지 가능)
// appendChild는 Node 형식으로 구성된 내용만 담을 수 있다(html 형식 element만 가능)
$lastYear.append($makeUl);
// $lastYear.appendChild($makeUl); // 둘 다 가능

// 만든 요소 선택
var $yearUl = $lastYear.querySelector('ul');

// 4. li 여러개 생성하여 첨부
var i = 0;
var makeLiLen = data.length; // 생성할 li 갯수
var $makeLi;
for(var i = 0; i < makeLiLen; i++) {
  $makeLi = document.createElement('li');
  $makeLi.innerHTML = innerCode;
  $yearUl.append($makeLi);
}

// 5. 생성한 내용 기준 li에 내용 첨부
var selectI = 0;
var $eventList = $yearUl.querySelectorAll('li');

var $selectorLi = $eventList[selectI];
var $selectorLink = $selectorLi.querySelector('a');
var $selectorH4 = $selectorLi.querySelector('.event_title');

$selectorLink.setAttribute('data-id', 'data[selectI].id')
$selectorH4.innerText = data[selectI].title;
