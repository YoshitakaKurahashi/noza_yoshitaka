"use strict";

jQuery(function ($) {
  // この中であればWordpressでも「$」が使用可能になる
  $("#MenuButton").click(function () {
    // $(".l-drawer-menu").toggleClass("is-show");
    // $(".p-drawer-menu").toggleClass("is-show");
    $(".js-drawer-open").toggleClass("open");
    $(".drawer-menu").toggleClass("open");
    $("html").toggleClass("is-fixed");
  });
  var topBtn = $('.pagetop');
  topBtn.hide(); // ボタンの表示設定

  $(window).scroll(function () {
    heroBottom = $('.main-view').innerHeight();

    if ($(this).scrollTop() > heroBottom) {
      // 指定px以上のスクロールでボタンを表示
      topBtn.fadeIn();
    } else {
      // 画面が指定pxより上ならボタンを非表示
      topBtn.fadeOut();
    }
  }); // ボタンをクリックしたらスクロールして上に戻る

  topBtn.click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 300, 'swing');
    return false;
  }); // スムーススクロール (絶対パスのリンク先が現在のページであった場合でも作動)

  $(document).on('click', 'a[href*="#"]', function () {
    var time = 400;
    var header = $('header').innerHeight();
    var target = $(this.hash);
    if (!target.length) return;
    var targetY = target.offset().top - header;
    $('html,body').animate({
      scrollTop: targetY
    }, time, 'swing');
    return false;
  }); // ヘッダー固定

  var _window = $(window),
      _header = $('.header'),
      heroBottom;

  _window.on('scroll', function () {
    heroBottom = $('.main-view').innerHeight();

    if (_window.scrollTop() > heroBottom) {
      _header.addClass('transform');
    } else {
      _header.removeClass('transform');
    }
  });

  _window.trigger('scroll'); // 動きのきっかけとなるアニメーションの名前を定義


  function fadeAnime() {
    // ふわっ
    $('.fadeUpTrigger').each(function () {
      //fadeUpTriggerというクラス名が
      var elemPos = $(this).offset().top - 50; //要素より、50px上の

      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();

      if (scroll >= elemPos - windowHeight) {
        $(this).addClass('fadeUp'); // 画面内に入ったらfadeUpというクラス名を追記
      } else {
        $(this).removeClass('fadeUp'); // 画面外に出たらfadeUpというクラス名を外す
      }
    });
  } // 画面をスクロールをしたら動かしたい場合の記述


  $(window).scroll(function () {
    fadeAnime();
    /* アニメーション用の関数を呼ぶ*/
  }); // ここまで画面をスクロールをしたら動かしたい場合の記述
});