// c_10_dom_tab_menu2_2.js

// --------------------------------------------------------
// 시나리오:
// * 새로운 2021년에 해당하는 div를 생성(<div class="year_part"></div>)하여 내부에 각 이벤트 내용을 담기
// 1. .year_part는 내용의 앞에 생성
// 2. .year_part를 생성함과 동시에 h3(<h3>2021년도 이벤트</h3>) 생성
// 3. h3 뒤에 ul(<ul class="event_particle"></ul>) 생성
// 4. ul 내부에 li를 생성 및 각 기능에 따른 추가요소들을 처리
  //<a href="" data-id="">
  //  <h4 class="event_title"></h4>
  //  <p class="event_narration"></p>
  //  <dl class="date"><dt class="blind">기간</dt><dd></dd></dl>
  //  <dl class="event_check"><dt>이벤트 진행</dt><dd></dd></dl>
  //</a>
  // 5. 내부에 들어가는 각 요소의 내용을 별도의 객체로 생성하여 담을 수 있게 처리
  // 6. 상황에 맞게 조건을 보고 그에 따른 추가기능을 제작
  // 7. li의 내부에 존재하는 a를 클릭시 별도의 모달창이 나타나게 하여, 향후 추가 data를 불러와서 적용할 수 있도록 처리

// --------------------------------------------------------
// data:
var eventData = {
  heading: '2021년도 이벤트',
  // 제목, 내용(선택), 기간(시작일-종료일), 진행여부(plan, play, end, stop), 추가데이터주소, 적용이미지(background)
  eventList: [{
      title: 'spring event',
      content: '신년 맞이 대축제..',
      date: '2021.02.04 - 2021.02.21',
      status: 'end',
      morePath: '../data/y21.0201.json',
      bgImg: '../multi/img/event/bg1.png'
    },
    {
      title: 'spring event2',
      content: '싱그러운 봄을 위한 세일 이벤트',
      date: '2021.03.04 - 2021.04.05',
      status: 'end',
      morePath: '../data/y21.0402.json',
      bgImg: '../multi/img/event/bg2.png'
    },
    {
      title: 'summer flaver',
      date: '2021.07.15 - 2021.07.30',
      status: 'play',
      morePath: '../data/y21.0702.json',
      bgImg: '../multi/img/event/bg3.png'
    }
  ]
};
// --------------------------------------------------------

// 이벤트 날짜 기준 순서 뒤집기
eventData.eventList.reverse(); 
// 원본을 수정하는 것이므로 주의!
// 원본을 남겨둬야 한다면 JSON.stringify 사용하거나 어쨌든 깊은 복사 하기


// 기본 변수 ----------------------------------------------
var EVENT_INSERT_CODE = '<a href="" data-id=""><h4 class="event_title"></h4><p class="event_narration"></p><dl class="date"><dt class="blind">기간</dt><dd></dd></dl><dl class="event_check"><dt>이벤트 진행</dt><dd></dd></dl></a>';

var elEventBox = document.querySelector('#eventBox');
var elContentInner = elEventBox.querySelector('.content_inner');

var yearPartList = eventData.eventList;
var partLen = yearPartList.length;
var i = 0;

// 기능 ---------------------------------------------------
// div 생성 후 .year_part 클래스 부여
var mkYearPart = document.createElement('div');
    mkYearPart.setAttribute('class', 'year_part'); // mkYearPart.className = 'year_part'; // 동일기능

    // .year_part에 h3 > ul 생성후 클래스 부여
    // mkYearPart.innerHTML = '<h3>' + eventData.heading + '</h3><ul class="event_particle></ul>"'; // 간단하게 하기
    mkYearPart.innerHTML = '<h3>' + eventData.heading + '</h3>';
var elYearPartH3 = mkYearPart.querySelector('h3');
var mkEventParticle = document.createElement('ul');
    mkEventParticle.setAttribute('class', 'event_particle');
    // .event_particle을 h3 뒤에 삽입
    elYearPartH3.after(mkEventParticle); // .before() : 요소의 앞에 삽입 / .after() : 요소의 뒤에 삽입

    // .year_part를 본문에 삽입
    elContentInner.prepend(mkYearPart); // .prepend() : 요소의 첫 번째 자식으로 삽입

var elEventParticle = elContentInner.querySelector('.event_particle');


// 함수 ---------------------------------------------------
// 요소 생성하고 클래스 부여하는 함수
// var fnMake = function(el, name) {
//   var _mkEl = document.createElement(el);
//   if (!!name) { _mkEl.setAttribute('class', name); }
//   return _mkEl;
// };

// li 내부에 각각의 내용을 설정하는 함수
var fnFixContent = function(parentEl, data){

  var elParent = parentEl;
  // data요소 내부에 들어있는 property: title, content(option), date, status(select), morePath(외부주소), bgImg(배경)
  var elH4 = elParent.querySelector('.event_title');
  var elP = elParent.querySelector('.event_narration');
  var elDate = elParent.querySelector('.date > dd');
  var elEventCh = elParent.querySelector('.event_check');
  var elEventDd = elEventCh.querySelector('dd');
  var elLink = elParent.querySelector('a');

  elH4.innerText = data.title;
  (data.content !== undefined) ? elP.innerText = data.content :  elP.remove();
  elDate.innerText = data.date;

  // status(plan, play, end, stop) 중 하나만 선택, 해당하는 요소에 class 이름 부여, dd에 내용 표기
  switch(data.status) {
    case 'plan':
      elEventCh.classList.add('plan');
      elEventDd.innerText = '준비중';
      break;
    case 'play':
      elEventCh.classList.add('play');
      elEventDd.innerText = '진행';
      break;
    case 'end':
      elEventCh.classList.add('end');
      elEventDd.innerText = '종료';
      break;
    case 'stop':
      default:
      elEventCh.classList.add('stop');
      elEventDd.innerText = '중지';
  }
  // morePath(외부주소), bgImg(배경이미지)
  elLink.setAttribute('href', data.morePath);
  elLink.style.backgroundImage = 'url(' + data.bgImg + ')';
  elLink.style.backgroundColor = 'transparent';
};


// 이벤트 -------------------------------------------------
// 목록 생성해서 li 삽입
yearPartList.forEach(function(data, index){ // forEach()보다 for가 빠르므로 데이터를 처리하는 구문에서는 for 권장
  var mkLi = document.createElement('li');
  mkLi.innerHTML = EVENT_INSERT_CODE;
  elEventParticle.append(mkLi);

  // var mkLi = fnMake('li');
  // elEventParticle.append(mkLi);  
  fnFixContent(mkLi, data);

});


// --------------------------------------------------------
// 변수 네이밍 가이드
// el-          : 요소(element) 선택에 대한 변수
// mk-          : 요소 생성에 대한 변수
// ck-          : 단순한 값을 판단하는 변수
// fn-          : 함수를 선택하는 변수
// Pascal       : 생성자 함수
// _            : 이벤트처리메서드 내의 지역변수
// CAPITAL      : 'active', 'on' 등의 문자열
// i, n, j, k...: 단순 숫자
// ...          : 기타... 고민해 보기