// c_08_dom_fade_btn.js

// .card를 클릭시 각각 필요한 기능으로 모달창이 나타나게 만들기
// 1. setInterval 이용하여 opacity로 처리되게 만들기
// 2. setTimeout 이용하여 opacity로 처리되게 만들기
// 3. css-transition 이용하여 opacity로 처리되게 만들기

// 순서 체크
// 1. .card 내부에 있는 a 클릭시 -> .new_area_modal을 나타나게 만들기
// 2. a는 기본 기능이 페이지 이동 -> preventDefault()
// 3. 모달 기능 처리 -> display:block과 동시에 opacity:0에서 서서히 1로 변경되게 처리

// 변수
var $newBox       = document.getElementById('newBox');
var $card         = document.getElementsByClassName('card');
var $modal        = document.getElementsByClassName('new_area_modal')[0];
var $closeBtnPart = $modal.getElementsByClassName('close_btn')[0];
var $closeBtn     = $closeBtnPart.children[0];
var cardIndex    = 0;

// 공통함수
// 상황에 맞게 display:block, none 처리하는 함수
var displayFn = function(view){
  var displayCheck = view || false;
  if(!displayCheck) {
    $modal.style.display = 'block';
    $modal.style.opacity = 0;
  } else {
    $modal.style = null; // style 깨끗하게 밀기
    $modal.style.display = 'none';
    $card[cardIndex].children[0].focus();
  }
};

// ---------------------------------------------------------------------

// 방법 1
var $intervalBtn = $card[0];

var intervalFn = function(){
  var value = 0;
  var interval;

  interval = setInterval(function(){
    value++;
    (value <= 100) ? $modal.style.opacity = value + '%' : clearInterval(interval);
  }, 10);
};

// 이벤트 수행
$intervalBtn.addEventListener('click', function(e){
  e.preventDefault();
  displayFn();
  intervalFn();
  $closeBtn.focus();
});

// ---------------------------------------------------------------------

// 방법 2
var $timeoutBtn = $card[1];

var opValue = 0;
var timeoutFn = function(){
  opValue++;
  
  setTimeout(function(){
    $modal.style.opacity = opValue + '%';
    if(opValue <= 100) {
      timeoutFn();
    } else {
      return;
    }
  }, 1);
};

// 이벤트 수행
$timeoutBtn.addEventListener('click', function(e){
  e.preventDefault();
  displayFn();
  timeoutFn();
  $closeBtn.focus();
});

// ---------------------------------------------------------------------

// 방법 3 : 제일 일반적
var $cssBtn = $card[2];

var cssTransitionFn = function(){
  // $modal.style.transitionProperty = 'opacity';
  // $modal.style.transitionDuration = '500ms';
  // $modal.style.transitionTimingFunction = 'linear';
  $modal.style.transition = 'opacity 500ms linear';
  setTimeout(function(){
    $modal.style.opacity = 1;
  }, 1);
};

// 이벤트 수행
$cssBtn.addEventListener('click', function(e){
  e.preventDefault();
  displayFn();
  cssTransitionFn();
  $closeBtn.focus();
});

// ---------------------------------------------------------------------

// 닫기 버튼

var intervalHideFn = function(){
  var style = $modal.style;
  var value = $modal.style.opacity * 100;
  var interval;

  interval = setInterval(function(){
    value--;
    if (value >= 0) {
      style.opacity = value + '%'
    } else {
      clearInterval(interval);
      displayFn();
    }
  }, 10);
};

// 닫기 버튼
$closeBtn.addEventListener('click', function(e){
  e.preventDefault();
  intervalHideFn();
});

// 이슈 : css-transition 기능으로 나타난 효과는 사라질 때 갑자기 사라지게 되므로
// opacity가 1이 된 후에는 css-transition 기능을 강제로 삭제해야 함.