// javascript를 이용하여 버튼 클릭시 높이값이 0이 되도록 처리
// 높이가 0이면, display:none;

// 버튼 클릭시 높이값이 0이 되도록 처리
// - 높이값을 먼저 파악, 최종 값이 0값
// - 클릭시 기능 수행
// 높이가 0이면 display:none;
// - if() 이용하여 0값으로 처리되었는지 체크
// display:none 일 경우 차후의 처리를 위해 style 기능 제거할지 파악

// 선택자 ---------------------------------------------------------
var $btn         = document.querySelector('.btn');
var $closeBtn    = $btn.querySelector('.close');
var $openBtn     = $btn.querySelector('.open');
var $openBtn2    = $btn.querySelector('.open2');
var $toggleBtn   = $openBtn2;
var $contentArea = document.querySelector('.content_area');

// 기능 변수 ------------------------------------------------------
var conH         = getComputedStyle($contentArea).height;
var conHResult   = parseInt(conH);
var timed        = 500;
var slideH;
var permission   = true;
// 처음부터 보이지 않게 하기 위한 처리(css에서 값을 가져오지 못하기에, js를 통해 값을 가져와서 파악후 display처리)
// $contentArea.style.display = 'none'; 

// 함수1: 클릭하면 사라지는 슬라이드 ---------------------------------------
var slideUpFn = function (height) {
  // 기능 수행 중에는 중복 수행되지 않도록 하기
  // permission이 true일 때 실행
  if (permission) {
    permission = false; // 시작하면 false가 됨

    var setH = height;
    slideH = setInterval(function () {
      setH--;
      if (setH >= 0) {
        $contentArea.style.height = setH + 'px';
      } else {
        clearInterval(slideH);
        $contentArea.style = null;
        $contentArea.style.display = 'none';
        permission = true;
      }
    }, timed / 100);
  }
};

// 함수2: 클릭하면 나타나는 슬라이드 ---------------------------------------
// $contentArea 상태가 'none' 일때, 'block'으로 처리와 동시에, 
// 기본 높이값을 파악후( conH,conHResult 에서 이미 파악 ) -> 높이 0부터 기본 높이값까지 1씩 추가해서 변동되게 수행
// 필요한 높이만큼 수행되었다면, 더이상 처리할 내용이없으니, style 기능 제거 ( null )
// 단, 기능이 수행되는 중간에 다른 기능을 첨부하지 못하게 제어( permission )

var slideDownFn = function (baseHeight) {
  var originH = baseHeight;
  var setH = 0;

  if(permission) {
    permission = false;
    $contentArea.style.display = 'block';
    $contentArea.style.height = setH;
  
    slideH = setInterval (function(){
      if (setH < originH) {
        setH++;
        $contentArea.style.height = setH + 'px';
        console.log('높이값 변경중:', setH);
      } else {
        // $contentArea.style = null;
        permission = true;
        console.log('높이값 처리 완료');
        clearInterval(slideH);
      }
    }, timed / 1000);
  }
}; // slideDownFn(baseHeight)


// 함수 번외: 클릭하면 슬라이드 색 랜덤으로 바꾸기 --------------------------
var countFn = function (n) {
  // 일정시간 뒤에 한 번만 수행
  // setInterval : 일정시간마다 수행 - clearInterval
var arr = [2, 4, 7, 10, 20, 30, 50, 90, 432, 654, 777, 963]
var red, green, blue;

setTimeout(function () {
  red   = (Math.floor(Math.random() * 256)).toString(16);
  green = (Math.floor(Math.random() * 256)).toString(16);
  blue  = (Math.floor(Math.random() * 256)).toString(16);
  
  if(red.length   !== 2) { red   = '0' + red;   }
  if(green.length !== 2) { green = '0' + green; }
  if(blue.length  !== 2) { blue  = '0' + blue;  }
  
  console.log(red + green + blue);
  var randomColor = '#' + red + green + blue;

    // var ram = Math.floor(Math.random() * 12);
    // console.log(arr[ram]);

    $contentArea.style.backgroundColor = randomColor;
  }, 50);
};

// $closeBtn 클릭 이벤트 ------------------------------------------
$closeBtn.addEventListener('click', function (e) {
  e.preventDefault();
  // console.log($contentArea.clientHeight); // 클라이언트의 height값 출력
  slideUpFn(conHResult);
})

// $openBtn 클릭 이벤트 ------------------------------------------
$openBtn.addEventListener('click', function (e) {
  e.preventDefault();
  // countFn(0); // 함수샘플 구현
  slideDownFn(conHResult);
});

// $toggleBtn 클릭 이벤트 : $openBtn기능과, $closeBtn 기능을 모두 처리
$toggleBtn.addEventListener('click', function(event){
  event.preventDefault();
  /*
  var onState = $contentArea.classList.contains('on');
  if (onState) { 
    // console.log('현재 내용이 보이는 상태입니다.');
    slideUpFn(conHResult);  
    $contentArea.classList.remove('on');
  } else {
    // console.log('현재 내용이 보이지 않습니다.');
    slideDownFn(conHResult);  
    $contentArea.classList.add('on');
  }
  */
  var viewState = getComputedStyle($contentArea).display === 'block';
  (viewState) ? slideUpFn(conHResult) : slideDownFn(conHResult);
});

// -------------------------------------------------------------------------
// 과제: modal window 만들기 (하나의box만) : 샘플사이트 http://fancybox.net/
// opacity:100%; -> opacity:0; display:none;
// display:block; -> opacity:100%; 

/*
// 내가한거
// 변수
var $closeBtn = document.querySelector('.close');
var $contentArea = document.querySelector('.content_area');

// 이벤트 처리
$closeBtn.addEventListener('click', function(e){
  e.preventDefault();
  // height가 줄어들게...
  var intervalFn = setInterval(function() {
    var heightVal = parseInt(getComputedStyle($contentArea).height); // 350
    heightVal--;
    $contentArea.style.height = heightVal + 'px';
    console.log($contentArea.style.height);

    if (heightVal <= 0) {
      clearInterval(intervalFn);
      $contentArea.style.display = 'none';
    }
  }, 1);
})
*/