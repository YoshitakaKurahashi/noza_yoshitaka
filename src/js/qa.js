
$(function(){
  $('.qa-content__question').click(function(){
    $(this).siblings('.qa-content__answer').slideToggle();
    $('.qa-content__question').not($(this)).siblings('.qa-content__answer').slideUp();
  });
});