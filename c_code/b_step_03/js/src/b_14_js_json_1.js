// b_14_js_json_1.js

var originData = [
  {  "id": 1,  "title": "Research Associate", "link": "http: //time.com" }, 
  {  "id": 2,  "title": "Senior Developer", "link": "https://blogs.com"}, 
  {  "id": 3,  "title": "VP Quality Control", "link": "https://xinhuanet.com"}, 
  {  "id": 4,  "title": "Automation Specialist II", "link": "https://businesswire.com"}, 
  {  "id": 5,  "title": "Geological Engineer", "link": "https://marriott.com"}, 
  {  "id": 6,  "title": "Account Representative III", "link": "https://patch.com"}, 
  {  "id": 7,  "title": "Speech Pathologist", "link": "https://who.int"}, 
  {  "id": 8,  "title": "Automation Specialist IV", "link": "https://psu.edu"}, 
  {  "id": 9,  "title": "Health Coach I", "link": "https://cnbc.com"}, 
  {  "id": 10,  "title": "Developer I", "link": "http://miibeian.gov.cn"}
];

// originData copy
var textData = JSON.stringify( originData );
var dataList = JSON.parse( textData );


// .navigation을 선택
// ul을 생성해서 담기

// document.getElementsByClassName('navigation')[0];
var navi = document.querySelector('.navigation');
// navi.style.width = '100%';
// navi.style.height = '50px';
// navi.style.backgroundColor = '#dcd';
navi.style = "width:100%; height:50px; background-color:#acd"

// 생성 -> document.createElement('ul');
// var makeUl2 = '<ul class="list></ul>'; // innerHTML을 사용시 직접 내용을 작성, 일회성
// navi.innerHTML = makeUl2;
var makeUl = document.createElement('ul'); // 내부에 추가로 요소 삽입 처리, 다회성
makeUl.classList.add('list');
navi.append(makeUl);

// ul.list 선택               : querySelector('.list')
// 내부에 담을 li 생성        : createElement('li')
// li 내부에 유일요소인 a 생성: createElement('a') -> '<a></a>'
// li를 .list에 담기          : (.list).append(li)
// a에 href=속성 처리, text 글자 삽입
// console.log(dataList[0].title, dataList[0].link);

// step 1 : li 요소 하나만 생성하여 삽입
var UlList = document.querySelector('.list');
var makeLi = document.createElement('li');
/*
var title = dataList[0].title;
var link = dataList[0].link;
var makeA = '<a class="link"></a>';
makeLi.innerHTML = makeA;
var findA = makeLi.querySelector('a');
findA.href = link;
findA.innerText = title;
UlList.append(makeLi);
*/

// step 2 : li 요소를 ul에 각각 여러개 삽입 - for(){}
/*
var i = 0;
var len = dataList.length; // 10
var makeLi, makeA, findA, title, link;

for (; i < len; i++) {
  makeLi = document.createElement('li');
  makeA = '<a class="link">sample text</a>';
  makeLi.innerHTML = makeA;
  findA = makeLi.querySelector('a');

  title = dataList[i].title;
  link = dataList[i].link;
  findA.href = link;
  findA.innerText = title;
  UlList.append(makeLi); // UlList.내부의 뒤에 생성된 li를 삽입
}*/

// step 3 : li 요소를 ul에 각각 여러개 삽입 - forEach()
/*
dataList.forEach(function(data) {
  // console.log(data.title, data.link, index);
  // 함수 내부 변수 선언시 지역변수
  var makeLi = document.createElement('li');
  var makeA = '<a class="link">sample text</a>';
  makeLi.innerHTML = makeA;
  var findA = makeLi.querySelector('a');
  findA.href = data.link;
  findA.innerText = data.title;
  UlList.append(makeLi);
});*/

// for문과 forEach의 차이
// for : 순서에 의거해 값 자체를 각각 처리
// forEach : 전체를 순환하며 한번에 하나씩 수행

// ------------------------------------------------------

// 함수화 처리 : for
var i = 0;
var len = dataList.length; // 10
var loopFn1 = function(i) {
  var makeLi, makeA, findA, title, link;

  makeLi = document.createElement('li');
  makeA = '<a class="link">sample text</a>';
  makeLi.innerHTML = makeA;
  findA = makeLi.querySelector('a');

  title = dataList[i].title;
  link = dataList[i].link;
  findA.href = link;
  findA.innerText = title;
  UlList.append(makeLi);
};
  
for (; i < len; i++) {
  loopFn1(i);
}

// 함수화 처리 : forEach
/*
var loopFn2 = function (content) {
  var makeLi = document.createElement('li');
  var makeA = '<a class="link">sample text</a>';
  makeLi.innerHTML = makeA;
  var findA = makeLi.querySelector('a');
  findA.href = content.link;
  findA.innerText = content.title;
  UlList.append(makeLi);
};
dataList.forEach(loopFn2); // loopFn2()이 아님
*/

// jQuery로 처리 : 모두 수동으로 처리하는 js에 비해 반자동 처리하는 개념
// jQuery 플러그인을 html에서 불러와야 작동

console.log($.fn); // jquery: '3.6.0'
(function($){
  // document.querySelector('li')
  var ul = $('.list'); 
  // jquery의 append()는 js와 다른 개념으로 생성과 삽입을 한번에 처리(create+append)
  // if, for, forEach 모두 사용 가능하나 forEach 대신 수행할 수 있는 메서드도 내장
  dataList.forEach(function(content, index){
    ul.append('<li><a class="link"></a></li>');
    var list = ul.children('li').eq(index).children('a')
    list.text(content.title); // 식별자.innerText = '값';
    list.attr('href', content.link); // 식별자.setAttribute('속성명','값');
  })
})(jQuery); // jQuery는 통상 즉시실행함수로 사용

// 요소 선택
// var box1 = document.quertSelector('#box'); // js
// var box2 = $('#box'); // jq
// var li1 = document.querySelectorAll('li'); // js
// var li2 = $('li'); // jq