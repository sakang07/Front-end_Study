// c_10_dom_tab_menu2.js

// 시나리오1 : 이벤트 페이지에서 해당하는 연도를 클릭시, 그에 맞는 연도의 data 목록이 나타나게 만들기
// 변수 선택 : 연도 선택(.title_inner, li, button), 해당 순번의 내용(.content_inner, .year_part)
// class 추가/제거 : .title_inner > li, .content_inner > .year_part에 각각 '.on'을 추가/제거
// 선택자 사용법 : querySelector
// 순서를 선택/할당하는 방식 : forEach
// .on을 할당하는 방법 : 선택순번 외 제거

// 변수 ====================================================
var $eventBox = document.querySelector('#eventBox');
var $titleInner = $eventBox.querySelector('.title_inner');
var $titleUl = $titleInner.children[0];
var $titleList = $titleUl.children;
var $titleLiEl = [].slice.call($titleList); // button 선택자 추후 진행

var $contentInner = $eventBox.querySelector('.content_inner');
var $contentYear = $contentInner.querySelectorAll('.year_part');
var optionIndex = 0;
var optionName = 'on';


// 함수 ====================================================
// 각각 들어있는 .on 클래스 제거
var classSwitchFn = function(element){
// 순환하면서 idx번만큼 반복 순환
  element.forEach(function(data, idx){
    // $titleLiEl의 idx 값이 optionIndex(초기값: 0)와 다르면 : 클릭한 값이 아니면
    if (idx !== optionIndex){
      // 다른 요소들에서 모두 .on 제거
      data.classList.remove(optionName);
    } else {
      // 같은 요소에 .on 추가
      data.classList.add(optionName);
    }
  });
};

// 함수 사전 수행
classSwitchFn($titleLiEl);
classSwitchFn($contentYear);

// 이벤트 ==================================================
// li 요소 각각을 클릭시 수행하는 기능
$titleLiEl.forEach(function(element, index){
  var $liBtn = element.children[0];
  $liBtn.addEventListener('click', function(event){
    event.preventDefault();
    optionIndex = index;
    classSwitchFn($titleLiEl);
    classSwitchFn($contentYear);
  });
});