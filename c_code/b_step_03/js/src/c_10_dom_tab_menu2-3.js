// c_10_dom_tab_menu2-3.js

// ---------------------------------------------------------
// 시나리오: 
// 1. li 카드 선택시 modal window가 나타나게
// 2. li 카드 클릭시 modal window를 띄울 요소를 생성
// 3. modal window가 fade 되게 
// 4. 나타나면 닫기 버튼에 focus 처리
// 5. modal window의 닫기 버튼을 클릭하면 li 카드의 위치로 돌아가서 해당 카드에 focus 처리

// 작성 순서
// 1. 원본 html 코드가 있는 채로 js 작성
// 2. html코드 주석화
// 3. 있던 코드가 없어짐에 따라 에러나는 것들을 정리해서 요소 생성시 동작하도록 변경 처리하기!
  // class 추가, focus, 닫기버튼 이벤트
// 4. 요소 생성
  // 4-1. 요소를 먼저 전부 생성하고 기능 처리
  // 4-2. 요청이 발생할 때 요소를 생성하고 처리(v)
    // 요소 생성 코드를 함수화해서 이벤트 처리 코드 안에 삽입
    // 요소를 생성시 감싸는 박스를 생성하여 그 내부에 코드를 삽입


// ---------------------------------------------------------

// 변수 ----------------------------------------------------
var elEventBox = document.querySelector('#eventBox');
var elEventArea = elEventBox.querySelector('.event_area');

// event content list
var elContentInner = elEventArea.querySelector('.content_inner');
var elYearPart = elContentInner.querySelector('.year_part.on');
var elEventParticle = elYearPart.querySelector('.event_particle');
var elEventLi = elEventParticle.querySelectorAll('li');
var elEventLi = elEventParticle.children;
var elEventLiArr = Array.prototype.slice.call(elEventLi); 

// event modal (생성시 선택 가능하도록 처리)
var elEventModal; // = elEventBox.querySelector('.event_modal');
var elModalClose; // = elEventModal.querySelector('.modal_close button')

// 추가 적용할 변수
var OPTION_TEXT = 'on';
var OPTION_INDEX = 0; // forEach 내부의 index값을 파악하기 위해 외부로 빼준 변수, 숫자를 적용할 예정이므로 0을 초기값으로 할당
var MODAL_CODE = '<div class="modal_part">\
                    <h4>modal title</h4>\
                    <div class="modal_particle">\
                      <div class="inner_sample">sample</div>\
                    </div>\
                    <div class="modal_close">\
                      <button type="button">닫기</button>\
                    </div>\
                  </div>\
                  <div class="modal_bg"></div>'


// 기능 ----------------------------------------------------

// 함수 ----------------------------------------------------
// 유사배열을 배열화하는 함수
var fnToArray = function(data) {
  return Array.prototype.slice.call(data);
}

// 닫기버튼 클릭 활성화하는 함수
var fnCloseBtnAction = function(){
  // 닫기버튼 클릭 (elEventModal이 생성되어 있지 않으면 에러가 발생하므로 생성시 동작하도록 처리)
  elModalClose.addEventListener('click', function(e){
    e.preventDefault();

    elEventModal.classList.remove(OPTION_TEXT);
    elEventLiArr[OPTION_INDEX].children[0].focus();
  });
}

// elEventModal 내용을 생성
var fnMakeModal = function(){
  // 1. div 생성
  var _mkModal = document.createElement('div'); 

  // 2. class 부여
  _mkModal.setAttribute('class', 'event_modal'); 
  // _mkModal.className = 'event_modal'; // 위와 동일

  // 3. div 내부에 코드 삽입
  _mkModal.innerHTML = MODAL_CODE;

  // 4. 생성된 div 삽입 
  elContentInner.after(_mkModal); 
  // ----
  // 생성된 요소 선택
  elEventModal = elEventBox.querySelector('.event_modal');
  elModalClose = elEventModal.querySelector('.modal_close button')

  // .on을 첨부하여 나타나도록 처리 및 focus
  elEventModal.classList.add(OPTION_TEXT);
  elModalClose.focus();

  // 버튼 요소가 인지되어있는 상태에서 닫기 버튼을 사용할 수 있도록 처리
  fnCloseBtnAction();
};

// 이벤트 --------------------------------------------------
// content li 클릭
elEventLiArr.forEach(function(element, index){
  var elLink = element.children[0];
  elLink.addEventListener('click', function(e){
    e.preventDefault();
    OPTION_INDEX = index;
    fnMakeModal();
  });
});

// 닫기버튼 클릭 이벤트 원래 있던 자리...


// 번외 ---------------------------------------------------------------------------------------------------------
console.log('번외 ---------------------------------')
var footInner = document.querySelector('.footer_inner');

// children: html 요소만 추출
// childNodes: html 말고 text와 주석, 줄바꿈 같은 요소가 아닌 node 모두 추출
var footInnerLi = footInner.childNodes;
console.log(footInnerLi);

// 필요한 요소를 뽑아내려면 prototype 이용 - nodeType: node의 타입을 확인할 수 있는 속성
// nodeType: 1 - p, div, li... / 8 - comment / 0 - text
// console.log(footInnerLi[1].nodeType);
// console.log(footInnerLi[3].nodeType === 3);

// filter() : 조건에 맞는 return값만 가진 새 배열을 반환(깊은 복사)
// 원래는 filter의 주체에 적용되지만 주체가 유사배열이므로 배열 메서드를 사용할 수 없어서 prototype을 사용
// this를 변경하기 위해 call()/apply()을 사용
// call(this, 인자1, 인자2, 인자3...)
// applay(this, [인자1, 인자2, 인자3, ...])
var footTypeArr = Array.prototype.filter.call(footInnerLi, function(data){
  // data의 형식이 p, div, li 등의 요소인 것만 반환
  return data.nodeType === 1; 
});

console.log(footTypeArr);

// NodeList는 forEach로 사용할 수는 있지만 실제로는 배열이 아닌 유사배열. 이외의 배열 메서드를 사용할 수 없다
// 배열 메서드를 사용하기 위해 Array.prototype 기능을 이용


// 탭메뉴의 구현
// 방법 1 : 모든 구성을 일단 처리해놓고 시작 - 로딩은 느리겠지만 그 이후에는 빠르다, 자잘한 것들 구현에 사용
// 방법 2 : 요청시(클릭) 해당 항목을 구현한다 - 로딩은 빠르지만 작동이 느리다, 양이 많은 데이터 구현에 사용
  // 생성자 함수로 프로퍼티 이름을 바꾸고 객체화.
  // filter()기능으로 구현할 항목을 걸러서 사용한다.


  // 함수의 정의와 호출

  var a = 10; // 전역
  console.log(a); // 10

  

  var fnB = function(){
    a = 100; // 전역인 a에 100을 재할당
    console.log(a); // 100 
  }

  var fnA = function(){
    var a = 5; // fnA의 지역변수 a를 선언하고 5를 할당
    console.log(a); // 5
    fnB(); // 100 지역변수 a에 영향받지 않고 정의 시점에서의 a값을 출력
    console.log(a); // 5
  }

  fnA();
  console.log(a); // 100 : fnA()가 호출되었기 때문에 a가 100으로 재할당 됨