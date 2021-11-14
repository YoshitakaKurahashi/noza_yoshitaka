// .s_04 .accordion_one
$(function(){
  //.accordion_oneの中の.accordion_headerがクリックされたら
  $('.s_04 .accordion_one .accordion_header').click(function(){
    //クリックされた.accordion_oneの中の.accordion_headerに隣接する.accordion_innerが開いたり閉じたりする。
    $(this).next('.accordion_inner').slideToggle();
    $(this).toggleClass("open");
    //クリックされた.accordion_oneの中の.accordion_header以外の.accordion_oneの中の.accordion_headerに隣接する.accordion_oneの中の.accordion_innerを閉じる
    $('.s_04 .accordion_one .accordion_header').not($(this)).next('.accordion_one .accordion_inner').slideUp();
    $('.s_04 .accordion_one .accordion_header').not($(this)).removeClass("open");
    $('.s_04 .accordion_one .accordion_header.stay').not($(this)).toggleClass("open");
  });
});
