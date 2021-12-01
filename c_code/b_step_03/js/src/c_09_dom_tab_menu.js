// c_09_dom_tab_menu.js

// 시나리오 =================================================================
// 탭메뉴를 클릭하여 해당하는 순번에 맞는 내용을 나타나게 만들기
// 1. .tab_title_inner 내부에 있는 li(내부의 button)를 클릭, 순서를 파악
// 2. .tab_content_inner 내부에 있는 순서에 맞는 .tab_content_part를 나타나게 한다
// 3. 해당 순번의 li와 .tab_content_part 각각 class에 .on을 추가
// 4. 선택되지 않은 요소는 .on을 삭제
// - button/a 기본으로 가지고 있는 요소의 기능은 해제

// 문제
// 1. titleBtn.addEventListener('click', function(){ ... console.log(클릭한 순번)})
// 2. 순번에 맞는 요소에 class="on" 첨부
// 3. 기존의 'on' 을 제거
// 3-1. 기존의 순번을 파악해서 제거
// 3-2. 모든 요소의 'on'을 제거 후 'on' 삽입
// 3-3. 선택 순번만 'on' 첨부, 선택 순번 외 모든 요소에 'on' 제거

// 기본 변수 =================================================================
var $contentBox = document.querySelector('#contentBox');
var $titleInner = $contentBox.querySelector('.tab_title_inner');
var $titleInnerPart = $titleInner.querySelector('ul');
// querySelectorAll : NodeList로 가져오기 때문에 forEach구문을 사용할 수 있다
// children에 비해 간편하므로 querySelectorAll을 쓸 수 있으면 사용해도 됨
var $titleList = $titleInnerPart.querySelectorAll('li');
// children으로 가져왔을 때는 유사배열을 배열화해서 사용(forEach를 사용하기 위함)
// var $titleList = Array.prototype.slice.call($titleInnerPart.children); // [li, li, li, li]
// var $titleList = [].slice.call($titleInnerPart.children); // 이렇게 사용해도 위와 동일
// console.log($titleList);
// childNodes 사용
// var $testChild = $titleInner.childNodes;
// console.log($testChild);

var $contentInner = $contentBox.querySelector('.tab_content_inner');
var $contentPart =  $contentInner.querySelectorAll('.tab_content_part');
var indexCheck = 0; 
var optionName = 'on';

// 기본기능
// 0번째 li에 .on 추가
$titleList[indexCheck].classList.add(optionName);
$contentPart[indexCheck].classList.add(optionName);

// 함수 =================================================================


// 이벤트 처리 =================================================================

// forEach() : 배열을 반복해서 순환
$titleList.forEach(function(element, index){
  // li 내부의 button 선택
  var $titleBtn = element.children[0];
  $titleBtn.addEventListener('click', function(e){
    e.preventDefault();
    // console.log(element); // this: li 요소 내부의 button 요소 / this.parentNode : 요소의 부모
    /*
    // 3-1. 0번째에 들어가 있던 index번째 .on을 삭제(0번째에 .on이 들어가 있는 것을 전제로)
    $titleList[indexCheck].classList.remove(optionName);
    $contentPart[indexCheck].classList.remove(optionName);
    // ---------------------------------------------------
    // 삭제하고 버튼 누른 순번에 .on을 추가
    indexCheck = index;
    $titleList[indexCheck].classList.add(optionName);
    $contentPart[indexCheck].classList.add(optionName);
    */
    /*
    // 3-2. li 요소에 .on 전부(for) 제거 : 권장X
    $titleList.forEach(function(el){
      el.classList.remove(optionName);
    });
    $contentPart.forEach(function(el){
      el.classList.remove(optionName);
    });
    indexCheck = index;
    $titleList[indexCheck].classList.add(optionName);
    $contentPart[indexCheck].classList.add(optionName);
    */
    // 3-3. li 순번에 맞는 것 add, 아닌 것은 모두(for) remove 처리
    // 같은 탭을 또 누를 시 작동하지 않으므로 효율적
    indexCheck = index;
    $titleList.forEach(function(el, idx){
      (idx !== indexCheck) ? el.classList.remove(optionName) : el.classList.add(optionName);
    }); // $titleList.forEach
    $contentPart.forEach(function(el, idx){
      (idx !== indexCheck) ? el.classList.remove(optionName) : el.classList.add(optionName);
    }); // $contentPart.forEach
  });
});


