// c_04_dom_blind_btn.js

(function($){
  // .btn 내부에 있는 버튼을 클릭하여 내용이 나타나거나 사라지게 만들기

  var btn         = $('.btn');
  var closeBtn    = btn.children('.close');
  var openBtn     = btn.children('.open');
  var open2Btn    = btn.children('.open2');
  var contentArea = $('.content_area');
  // -----------------------------------------
  closeBtn.on('click', function(event){
    event.preventDefault();
    contentArea.slideUp();
  });
  openBtn.on('click', function(event){
    event.preventDefault();
    contentArea.slideDown();
  });

})(jQuery);