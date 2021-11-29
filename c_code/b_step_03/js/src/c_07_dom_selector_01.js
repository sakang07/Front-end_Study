// c_07_dom_selector_01.js

// html 요소 선택
var $wrap = document.getElementById('wrap');
// var $wrap = document.querySelector('#wrap');

// 각각 스타일 주기
// $wrap.style.width = '90%';
// $wrap.style.margin = 'auto';
// $wrap.style.backgroundColor = '#eee';

// 한번에 스타일 주기
$wrap.style = 'width: 90%; margin:auto; background-color: #fda; padding:0.5rem;';

// getElements와 같이 복수 형식 선택자는 무조건 값을 배열에 담기 때문에 index를 붙여줘야 정상적으로 선택.
var $h1 = $wrap.getElementsByTagName('h1')[0]; 
$h1.style = 'width: 100px; height: 30px; background-color:#dfd;'

// 자식 선택자 : 자식요소가 여러개일 경우 index 지정
var $h1Link = $h1.children;
$h1Link[0].style = 'padding: 0.5rem; color: #05f;';
$h1Link[1].classList.add('blind');
console.log($h1Link);

// ------------------------------------------------------------------

var $navArea = $wrap.getElementsByClassName('nav_area'); 
// var $navArea2 = $wrap.getElementsByTagName('nav')[0].className === 'nav_area';
// console.log( $navArea2 );
$navArea[0].style = 'width:100%';

var $navH2 = $navArea[0].children[0];
$navH2.classList.add('blind');
var $navUl = $navArea[0].children[1];
$navUl.style = 'display:flex;'

var $navLi = $navUl.children;
console.log( $navLi );

// ------------------------------------------------------------------

// .querySelector
var $headBox = document.querySelector('#headBox');
$headBox.style = 'width: 100%; height: auto; background-color: #adf;';
var $headH1 = $headBox.querySelector('h1');

// 이미 한번에 스타일을 적용했는데 또 하면 전자가 날아감
// $headH1.style = 'border-radius: 5px; font-size: 1.2rem'; 
// 각각 주면 스타일이 들어간다
$headH1.style.borderRadius = '5px';
$headH1.style.fontSize = '1.2rem';

var $h1Insert = $headH1.childNodes;
console.log($h1Insert);

var $navArea3 = $headBox.querySelector('.nav_area');
$navArea3.style.height = '30px';
$navArea3.style.backgroundColor = '#eee';

var $navli2 = $navArea3.querySelectorAll('li');
console.log( $navli2 );

// HTML collection : 옛날 방식의 선택자
// document.getElementById();

// NodeList
// querySelector 선택자는 아직 미지원되는 브라우저가 있어서 범용성이 조금 떨어진다.
// document.querySelector();

