// b_15_js_import_data-stateCheck.js

// 외부 문서를 불러오기
// 1. 생성자함수 XMLHttpRequest();
// 2. 불러온 함수를 객체화
// 3. 객체 내부의 메서드
// -----------------------------------------------------
// 예외처리 : try{}-성공 catch{}-실패 finally{}-성공여부를 떠나 무조건 수행
// 4. 상태 메시지 처리 : // 문서와의 연결이 어떤 상태인지 체크 onreadystatechange
// -----------------------------------------------------
// 5. 문서를 찾아서 열어주기 .open(method-처리방식, url-연동주소, async-비동기처리허용여부)
// 6. 문서 처리 .send()
/*
var linkFn = function(url, method, async) {
  var http = new XMLHttpRequest(); // 1. 생성자함수 XMLHttpRequest();
  var stateMessage;
  // onreadystatechange : XMLHttpRequest 객체의 이벤트 핸들러(이벤트를 조작하는) 프로퍼티. 준비상태(readyState)의 변화를 인식, 감지한다
  http.onreadystatechange = function () {
    console.log(http.status);
    // readyState : HTTP 요청의 현재 상태를 나타내는 정수. 다음과 같은 XMLHttpRequest의 정적 프로퍼티를 값으로 갖는다. 상태만을 나타내는 신호등에 비유
      console.log(http.readyState); 
      switch (http.readyState) {
        case XMLHttpRequest.UNSENT: // 0
          stateMessage = '서버와의 데이터 연결 끊어짐'
          break;
        case XMLHttpRequest.OPENED: // 1
          stateMessage = '서버 연결'
          break;
        case XMLHttpRequest.HEADERS_RECEIVED: // 2
          stateMessage = '서버 접근중, 파일 검색중'
          break;
        case XMLHttpRequest.LOADING: // 3
          stateMessage = '데이터 불러오는 중'
          break;
        case XMLHttpRequest.DONE: // 4
          stateMessage = '서버와 연결 대기중'
          break;
    }
    if(http.readyState === XMLHttpRequest.DONE && http.status < 300){
      console.log(stateMessage);
    }
  }
  var method = method || 'GET'; // 앞의 자료가 undefinde면 뒤의 값 대체
  var url = url;
  var async = async || true;

  http.open(method, url, async); // http 요청 초기화
  http.send(); // http 요청 전송
}
*/
// ----------------------------------------------------
/*
var method = 'GET';
var url = '../data/person_card.json';
var async = true;

linkFn(url, method, async);
*/
// ----------------------------------------------------

// ES6 예제
// fetch('../data/person_card.json').then(function(response){
//   console.log(response.json());
// })

// ----------------------------------------------------

var xhr = new XMLHttpRequest();
xhr.open('GET','../data/person_card.json', true);
xhr.send();
// 0.3초 후에 실행하는 메서드 setTimeout()
setTimeout(function(){
  // XMLHttpRequest 객체에 의해 전송된 HTTP 요청에 대한 응답 문자열을 자바스크립트 객체로 변환, 변수 data에 담는다.
  var data = JSON.parse(xhr.responseText);
  var dataList = [];
  // 생성자 함수 SetFn 정의
  var SetFn = function(title, link){
    this.title = title;
    this.url = link;
  };
  // forEach로 ...
  data.forEach(function(value, index){
    var title = value.title;
    var url = value.link;
    var obj = new SetFn(title, url);
    dataList.push(obj);
  });
  console.log(dataList[0].title);
}, 30);
