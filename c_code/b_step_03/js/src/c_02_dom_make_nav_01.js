// ../js/src/c_02_dom_make_nav_01.js
/*
// 메뉴를 클릭하면 navi 영역이 나타나게, 나타나 있으면 사라지게 하기

// 요소 선택
var $nav_area = document.querySelector('.nav_area');
var $navi_btn = document.querySelector('.navi_btn');

// .nav_area 안의 버튼 클릭하면 클래스 on 넣기
$navi_btn.addEventListener('click', function(e){
  e.preventDefault();
  var checkClassName = 'on';
  // on 유무 체크
  var isAction = $nav_area.classList.contains(checkClassName);
  // on이 없으면 넣고 있으면 빼기
  if(!isAction) {
    $nav_area.classList.add(checkClassName);
  } else {
    $nav_area.classList.remove(checkClassName);
  }
});

// 메뉴 안의 dropmenu를 클릭하면 sub_menu 영역이 나타나게, 나타나 있으면 사라지게 하기

// 요소 선택
var $drop_btn = document.querySelector('.drop_btn');
var $sub_menu = document.querySelector('.sub_menu');

// .dropmenu 클릭하면 .sub_menu에 on 넣기
$drop_btn.addEventListener('click', function(e){
  e.preventDefault();
  var checkClassName = 'on';
  // on 유무 체크
  var isAction = $drop_btn.classList.contains(checkClassName);
  // on이 없으면 넣고 있으면 빼기
  if(!isAction) {
    $drop_btn.classList.add(checkClassName);
  } else {
    $drop_btn.classList.remove(checkClassName);
  }
});
*/

// 풀이

// 메뉴를 클릭하면 navi 영역이 나타나게, 나타나 있으면 사라지게 하기
// 1. 메뉴 클릭 .navi_btn > button 클릭
// 2. navigation 영역이 나타나게 -> 그 부모인 .nav_area에 .on을 붙인다(향후 수정 고려)
// 3. 만약 navigation 영역이 나타나 있다면 반대로 사라지게 -> 그 부모인 .nav_area에 .on을 제거
// 4. button 클릭시 발생하는 이벤트는 동작하지 않도록 처리

// 변수영역 -----------------------------
var $navArea = document.querySelector('.nav_area');
var $naviBtnSelector = $navArea.querySelector('.navi_btn');
var $naviBtn = $naviBtnSelector.querySelector('button');
var navOn = 'on';

// 이벤트영역 -----------------------------
$naviBtn.addEventListener('click', function(e){
  e.preventDefault();
  // $navArea.classList.toggle('on'); // 쉽게 넣었다 뺐다 할 수 있으나 다른 기능을 더 넣게 되면 오류가 날 수 있으므로 복잡한 기능 구현시엔 권장 X
  var checkClassName = $navArea.classList.contains(navOn);
  (checkClassName) ? $navArea.classList.remove(navOn) : $navArea.classList.add(navOn);
});