// b_15_js_import_data-for-jQuery.js

// jquery의 기본 사용방법
// 하지만 현 상황에서는 잘 사용하지 않음 : $선택자를 쓰는 다른 문법이 많아져서 혼동/충돌이 생길 수 있다
$.ready(function(){}); 

// IIFE 즉시실행함수
// jquery의 주요 사용방법
// 즉시실행함수는 호출 불가함에 유의

// 함수 표현식
var fn = function($){};
fn(jQuery);
// 위와 동일한 기능을 하는 즉시실행함수
(function($){})(jQuery);

// jQuery의 특징
// 1. $() : 선택자 - 이후에 들어가는 요소는 대부분 메서드, 용어 그대로 읽으면 해석 가능
// 2. $.메서드() : 유틸리티 메서드 - 어떤 기능 처리, 메서드 기준으로 읽으면 해석 가능

// ----------------------------------------------------------------------------

(function($){
  // Asynchronous JavaScript and XML(JSON) : 비동기(실시간) 웹앱 제작을 위한 웹 개발 기법
  // 동기 : 일회성, 한 번 웹페이지로 이동하면 바뀌지 않는다
  // 비동기 : 보내고 받는 행위가 사용자 요청에 따라 여러번 갱신, 웹페이지의 부분이 바뀐다. ex. SNS...
  console.log(1,'내용 스타트');
  var path = '../data/sample.txt';
  var dataFile;
  $.ajax({
    // 기본 경로는 html 기준
    url: path
  }).done(function(data){
    console.log(2,'ajax이용해서 파일 불러오기');
    // console.log(data); // sample.txt에 있는 내용이 콘솔에 출력!
    var importData = data;
    var arr = importData.split(',');
    // console.log(arr); // undefined
    dataFile = arr;
  });
  console.log(3,'ajax 뒤에 내용 표기');
  console.log(dataFile);
  // ajax와 같은 비동기 처리방식은 불러오는 데 시간이 걸리기 때문에 일정시간 뒤에 불러오게 해야 정상적으로 출력
  // setTimeout은 입력시간 이후에 기능을 수행하는 함수(js)
  setTimeout(function(){
    console.log(dataFile);
    console.log(4,'setTimeout 처리');
  }, 500);
  console.log(5,'setTimeout 뒤에 수행');
  // 순서 : 13524 - 나중에 구현되는 ajax와 그 후에 구동되도록 한 setTimeout을 제외한 코드는 순차 실행

  // ------------------------------------------------------

  // 네트워크 상태 처리
  var jsonPath = '../data/person_card.json';
  $.ajax({
    url: jsonPath
  }).done(function(data){
    var dataList = data;
    console.log(dataList);
  });
  
  $.getJSON(jsonPath, function(data){
    console.log(data);
  })
})(jQuery);


