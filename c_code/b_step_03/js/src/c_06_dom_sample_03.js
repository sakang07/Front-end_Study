// c_06_dom_sample_03.js

(function($){
  // console.log($.fn);

  // tab 메뉴의 타이틀 중의 하나를 선택했을 경우 해당하는 순번의 내용 요소를 나타나게 하기
  // 제목과 내용 모두 .on 클래스로 처리했으므로 .on을 첨부/제거의 역할이 필요
  // 클릭한 요소의 순번이 몇 번째인가? 처리해야 하는 순번은 몇 번째에 주어야 하는가?를 생각해야 한다
// 변수 ---------------------------------------------------
  var conBox = $('#contentBox');
  // find() : 하위 요소 중 특정 요소를 찾는 메서드
  var conTitle = conBox.find('.tab_title_inner');
  // children() : 자식 요소를 선택하는 메서드
  var conTitleUl = conTitle.children('ul');
  var conTitleLi = conTitleUl.children('li');
  var conTitleBtn = conTitleLi.children('button');
  var index;
  var conContent = conBox.find('.tab_content_inner');
  var conContentList = conContent.children('div');
// ---------------------------------------------------

// 이벤트 ---------------------------------------------------
  conTitleBtn.on('click', function(e) {
    e.preventDefault();
    // jQuery에서는 이벤트 처리된 주체를 $(this) 라고 한다
    // index() : 부모요소를 기준으로 자신이 몇 번째 자식인지 파악하는 메서드
    // 클릭한 요소는 버튼요소이므로 자신이 아닌 그 부모의 순서값을 파악해야 한다
    // parent() : 부모요소를 선택하는 메서드
    index = $(this).parent().index();

    // 전체에 class 제거 후 선택 순서에 .on 첨부 -------------
    // conTitleLi에 들어있는 .on을 모두 제거
    conTitleLi.removeClass('on');
    // conTitleLi중 index번째(eq(순서지정))에 .on을 첨부
    // eq() : arr[]와 비슷하게 요소를 선택해 주지만 -n을 넣어서 뒤에서 n번째도 선택가능
    conTitleLi.eq(index).addClass('on');

    conContentList.removeClass('on');
    conContentList.eq(index).addClass('on');


  });
// jQuery는 여러 개의 선택자가 존재할 때 이를 묶어서 한번에 클릭이 가능한데 이 때 그 순서를 파악하는 것은 클릭시 index로 처리.
// javascript는 여러 개의 선택자가 존재할 시 여러 개를 클릭시에 그 클릭 대상들을 반복수행해서 처리해야 한다.

})(jQuery);