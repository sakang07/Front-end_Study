// b_15_js_import_data.js

// 네트워크(웹)를 통한 자료 요청기술
var xhr = new XMLHttpRequest();

// method : GET(단순히 자료를 요청해서 가져온다), POST(생성)
var method = 'GET';
var url = '../data/sample.txt';

// 비동기처리: 허용
var async = true; 

// 자료 요청
xhr.open(method, url, async);

// 응답처리 내용(보류)

// 자료 요청을 위해 전송
xhr.send();

// 자료를 불러왔는지 확인 : 비동기 방식이므로 일정 시간 이후에 확인
// responseText 프로퍼티는 서버에 요청하여 응답으로 받은 데이터를 문자열로 반환
setTimeout(function(){
  console.log(xhr.responseText);
}, 10);

// 네트워크 상태 표시
// 1xx (정보): 요청을 받았으며 프로세스를 계속한다
// 2xx (성공): 요청을 성공적으로 받았으며 인식했고 수용하였다
// 3xx (리다이렉션): 요청 완료를 위해 추가 작업 조치가 필요하다
// 4xx (클라이언트 오류): 요청의 문법이 잘못되었거나 요청을 처리할 수 없다
// 5xx (서버 오류): 서버가 명백히 유효한 요청에 대해 충족을 실패했다

