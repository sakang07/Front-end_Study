(function($){
  // console.log( $.fn );
// $('선택자') vs document.querySelector('선택자')
  var nt = $('.next');
  var slideWrap = $('.slide_con_wrap');
  var div = slideWrap.children('div');
  var i = 0;

  // 버튼을 클릭할 때마다 div의 i번째에 내용이 나타나게
  nt.click(function(){
    i += 1; // 1씩 더한다
    if( i >= 5 ){ i = 0; } // i가 5보다 크거나 같으면 i를 0으로 다시 설정
    div.eq(i).siblings().removeClass('action'); // div i번째를 제외한 다른 형제는 모두 숨겨라
    div.eq(i).addClass('action'); // div중에 i번째는 나타나게 하라
  })

})(jQuery);    