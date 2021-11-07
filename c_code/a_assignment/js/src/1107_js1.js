// 문제1 . 위 코드를 살펴보고 다른 버전의 인디언 이름 제조기를 만들어보세요. 리스트 다 바꿔서요. 각 목록의 갯수는 5개 이상으로 늘려보세요.
// 문제2. 인디언 이름 제조기를 확장해서 "[감정]보다 [색상], [자연]의 [단어]!"처럼 변경해보세요.
// 문제3. +연산자 대신 join 사용해보세요 (배웠다면!)
// 문제4. 전 여기서 요소 생성하는 방법을 1,3번을 선택했는데 대신 2번(document.querySelector())을 사용한 버전을 만들어보세요.
// 문제1,2에 추가해서..목록 갯수가 몇개든 상관없이 코드가 동작할 수 있게 변경해보세요.

var colorList = ['초록', '노란', '하얀', '보랏빛', '어두운', '잿빛' ];
var natureList = ['강아지', '참새', '거북이', '공룡', '두더지', '꿈틀이', '버섯'];
var wordList = ['인형', '어리석음', '노래', '샛별', '날개'];
var emotionList = ['기쁨', '슬픔', '고통', '즐거움', '귀여움']

// colorList 배열에서 무작위 단어 고르기 
// Math.floor()는 소수점 이하 버림, Math.random()은 0~1 사이의 난수 생성, .length는 배열 길이 반환
// var color = colorList[Math.floor(Math.random()*colorList.length)];

// natureList 배열에서 무작위 단어 고르기
// var nature = natureList[Math.floor(Math.random()*natureList.length)];

// wordList 배열에서 무작위 단어 고르기
// var word = wordList[Math.floor(Math.random()*wordList.length)];

// emotionList 배열에서 무작위 단어 고르기
// var emotion = emotionList[Math.floor(Math.random()*emotionList.length)];

// 무작위로 고른 문자열을 한 문장으로 조합 : .join() 사용
// var indianName2 = [ color, nature, word, emotion ];
// var myIndianName = indianName2.join('보다 ');
// console.log(myIndianName); // ????

// 무작위로 고른 문자열을 한 문장으로 조합
// var indianName = emotion + '보다 ' + color + ', ' + nature + '의 ' + word + '!';
var $root2 = document.querySelector('#root2');

// 함수화?
var makeFn = function() {
  
  var color = colorList[Math.floor(Math.random()*colorList.length)];
  var nature = natureList[Math.floor(Math.random()*natureList.length)];
  var word = wordList[Math.floor(Math.random()*wordList.length)];
  var emotion = emotionList[Math.floor(Math.random()*emotionList.length)];
  
  var indianName = emotion + '보다 ' + color + ', ' + nature + '의 ' + word + '!';

  // 1번째 방법
  // $root2.innerHTML ='';
  // var $newElement = document.createElement('div');
  // $newElement.innerHTML = indianNameReset;
  // $root2.append($newElement);
  
  // 2번째 방법
  $root2.innerHTML = '<div>' + indianName + '</div>';
};

// 조합된 단어를 브라우저에 표시
// 1. id가 root인 요소 선택하기
// var $root2 = document.querySelector('#root2');

// 2. 새 요소 생성하고 1번에서 선택한 요소 안에 추가하기
// var $newElement = document.createElement('div');
// $newElement.innerHTML = indianName;
// $root2.append($newElement);

makeFn();


// button 누르면 랜덤 이름 바뀌기

// DOM 객체 생성
var $buttonIn = document.createElement('button');

// <div> 태그에 HTML 삽입
$buttonIn.innerHTML = '다시 만들기!';

// CSS .rename 삽입
$buttonIn.setAttribute('class', 'rename');

// 선택한 요소의 끝에 삽입
var $root = document.querySelector('#root');
$root.append($buttonIn);

// 버튼 클릭하면 이벤트 실행
$buttonIn.addEventListener('click', makeFn);


// 트위터 공유 버튼 만들기
var $buttonIn2 = document.createElement('button');
$buttonIn2.innerHTML = '트위터 공유하기';
var $root = document.querySelector('#root');
$root.append($buttonIn2);
$buttonIn2.addEventListener('click', shareTwitter);

// 함수
function shareTwitter() {
    var indianName = $root2.innerText;
    var sendText = "나의 인디언 이름은" + indianName + "입니다."; // 전달할 텍스트
    var sendUrl = "https://codepen.io/sakang07/full/vYJRVpM"; // 전달할 URL
    window.open("https://twitter.com/intent/tweet?text=" + sendText + "&url=" + sendUrl);
}