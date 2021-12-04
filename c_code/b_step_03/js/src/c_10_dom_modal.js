// c_10_dom_modal.js

// ---------------------------------------------------------
// 시나리오: 
// 1. li 카드 선택시 modal window가 나타나게
// 2. li 카드 클릭시 modal window를 띄울 요소를 생성
// 3. modal window가 fade 되게 
// 4. 나타나면 닫기 버튼에 focus 처리
// 5. modal window의 닫기 버튼을 클릭하면 li 카드의 위치로 돌아가서 해당 카드에 focus 처리

// ---------------------------------------------------------
// 변수:
var MODAL_CODE = '<div class="modal_part"><h4>modal title</h4><div class="modal_particle"><div class="inner_sample">sample</div></div><div class="modal_close"><button type="button">닫기</button></div></div><div class="modal_bg"></div>';

var elEventBox = document.querySelector('#eventBox');
var elContentInner = elEventBox.querySelector('.content_inner');
var elYearPart = elContentInner.querySelector('.year_part.on');
var elYearLi = elYearPart.querySelectorAll('li a');
var elYearLiSelector = [].slice.call(elYearLi);
// console.log(elYearLiSelector);

var OPTION_CHECK = 'on';
var cardIndex = 0;

// ---------------------------------------------------------
// 기능:

// ---------------------------------------------------------
// 함수:
var fnModalClick = function(){
  // modal 사라지게 하기, 클릭했던 li 위치로 돌아가기(접근성 제어)
  elModalCloseBtn.addEventListener('click', function(e){
    e.preventDefault();
    elModal.classList.remove(OPTION_CHECK);
    elYearLiSelector[cardIndex].focus();
  });
}

// modal 사라지게 하기, 클릭했던 li 위치로 돌아가기(접근성 제어)
elModalCloseBtn.addEventListener('click', function(e){
  e.preventDefault();
  elModal.classList.remove(OPTION_CHECK);
  elYearLiSelector[cardIndex].focus();
});

// ---------------------------------------------------------
// 이벤트:
// modal 나타나게 하기
elYearLiSelector.forEach(function(element, index){
  element.addEventListener('click', function(e){
    e.preventDefault();
    // console.log(this.getAttribute('data-href'));
    cardIndex = index; // 클릭한 요소의 순서를 외부에서도 알 수 있도록 빼준다

    // data를 넣기 위해서는 가장 바깥쪽의 요소를 생성후 삽입해야 함
    var makeEl = document.createElement('div');
    makeEl.setAttribute('class', 'event_modal');
    makeEl.innerHTML = MODAL_CODE;
    elContentInner.after(makeEl);

    var elModal = elEventBox.querySelector('.event_modal');
    var elModalCloseBtn = elModal.querySelector('.modal_close button');

    elModal.classList.add(OPTION_CHECK);
    elModalCloseBtn.focus();
    fnModalClick();
  });
});



// ---------------------------------------------------------
// ---------------------------------------------------------
// 첨부: 

var i = 0;
var intervalFn;
...

// ---------------------------------------------------------