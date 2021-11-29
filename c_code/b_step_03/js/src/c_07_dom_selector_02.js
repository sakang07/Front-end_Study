// c_07_dom_selector_02.js

var $conBox = document.querySelector('#conBox');
var $conNav = $conBox.querySelector('.con_nav');
var $conChildLi = $conNav.children;
var $conFirstLink = $conChildLi.children;
console.log($conFirstLink);

// HTMLCollection 처리된 요소는 배열처럼 보이지만 실제로는 배열이 아닌 유사배열
// 그 내부로 접근하려면 해당 요소를 모두 배열형식으로 변경하여야 한다
// 배열의 기능을 강제로 가져와서 처리
// slice() : 원본 배열에서 얕은 복사본을 가져와 새로운 배열 객체로 변환하는 메서드
var $convertConLi = Array.prototype.slice.call($conChildLi);
// var $convertConLi = Array.prototype.slice.apply($conChildLi); // 동일한 결과
console.log($conChildLi);

var $filterCheck = Array.prototype.filter.call($conChildLi, function(data){
  return data;
});
console.log($filterCheck);

var $conLisam = [].slice.apply($conChildLi);
var conLiFLink = [];
$conLisam.forEach(function(selector){
  conLiFLink.push(selector.children[0]);
  // console.log(selector.children[0]);
});
console.log(conLiFLink);