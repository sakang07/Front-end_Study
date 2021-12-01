// 1201_js_tab_menu.js

// 시나리오
// 탭을 누르면 내용 이동
// : 탭을 클릭하면 해당하는 탭과 내용영역에 클래스 .on 추가
// 1. .tab_title > li > a를 클릭, 순서를 파악
// 2. 순서에 맞는 .tab_inner > li를 나타나게 한다
// - 선택되지 않은 .on는 삭제
// - 해당 순번의 .tab_title > li 와 .tab_inner > li 에 .on 추가

// 변수 ------------------------------------------------------
$tabTitle = document.querySelector('.tab_title');
$tabTitleLi = Array.prototype.slice.apply($tabTitle.children);
$tabInner = document.querySelector('.tab_inner');
$tabInnerLi = Array.prototype.slice.apply($tabInner.children);

var on = 'on'; // 활성화된 클래스에 추가할 이름
var idxOrder = 0;

// 함수 ------------------------------------------------------
var addFn = function(){
  $tabTitleLi[idxOrder].classList.add(on);
  $tabInnerLi[idxOrder].classList.add(on);
};
var removeFn = function(){
  $tabTitleLi[idxOrder].classList.remove(on);
  $tabInnerLi[idxOrder].classList.remove(on);
};

// 이벤트 실행 ------------------------------------------------------

// 맨 첫번째 li에 .on 추가
addFn();

// 누른 탭버튼의 순번을 파악
$tabTitleLi.forEach(function(data, idx){
  // 탭버튼(.tab_title > li > a)을 선택하는 변수
  var $titleBtn = data.children[0];
  
  // 탭버튼을 누르면 이벤트 실행
  $titleBtn.addEventListener('click', function(e){
    // 기본기능 제거
    e.preventDefault();

    // 누른 탭버튼이 기존값인지 확인하여 다른 탭일때만 작동
    if (idxOrder !== idx) {
      // 0번째에 들어가 있던 idx번째의 .on 삭제
      removeFn();
      // 버튼 누른 순번에 .on 추가
      idxOrder = idx;
      addFn();
    }
  });
});

