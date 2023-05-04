
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

  var topBtn = $('.top-button');
  topBtn.hide();

  var sliderHeight = $(".mv").height();

  // ボタンの表示設定
  $(window).scroll(function () {
    if ($(this).scrollTop() > 70) {
      // 指定px以上のスクロールでボタンを表示
      topBtn.fadeIn();
    } else {
      // 画面が指定pxより上ならボタンを非表示
      topBtn.fadeOut();
    }
  });

  // ボタンをクリックしたらスクロールして上に戻る
  topBtn.click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 300, 'swing');
    return false;
  });

  // スクロールするとロゴの色変更
  $(window).on("scroll", function () {
    if (sliderHeight - 30 < $(this).scrollTop()) {
      $(".js-header").addClass("header-another");
    } else {
      $(".js-header").removeClass("header-another");
    }
  });

    // ハンバーガーメニュー
    $(function () {
      $(".js-hamburger").click(function () {
      $(this).toggleClass("is-open");
      if ($(this).hasClass("is-open")) {
          openDrawer();
      } else {
          closeDrawer();
      }
      });

        //backgroundまたはページ内リンクをクリックで閉じる
        $(".js-drawer a[href]").on("click", function (event) {
          closeDrawer();
      });
  });

  function openDrawer() {
      $(".header__drawer").fadeIn();
      $(".js-hamburger").addClass("is-open");
      $(".js-drawer-bg").addClass("is-open");
  }

  function closeDrawer() {
      $(".header__drawer").fadeOut();
      $(".js-hamburger").removeClass("is-open");
      $(".js-drawer-bg").removeClass("is-open");
  }

//ドロワーメニュー開閉時、ヘッダー背景の切替
// $(".js-hamburger").on("click", function () {
//   $(".header").toggleClass("is-open");
//   $(".header-another").toggleClass("is-open");
// });

  //backgroundまたはページ内リンクをクリックで閉じる
  $(".drawer__item a[href]").on("click", function (event) {
    closeDrawer();
  });

  function closeDrawer() {
    $(".js-drawer").fadeOut();
    $(".js-hamburger").removeClass("is-open");
    $(".js-hamburger-bg").removeClass("is-open");
}

  // スムーススクロール (絶対パスのリンク先が現在のページであった場合でも作動)
  topBtn.on('click', 'a[href*="#"]', function () {
    let time = 400;
    let header = $('header').innerHeight();
    let target = $(this.hash);
    if (!target.length) return;
    let targetY = target.offset().top - header;
    $('html,body').animate({ scrollTop: targetY }, time, 'swing');
    return false;
  });
 
  //メインビュースライダー
  // var swiper = new Swiper(".js-mv-swiper", {
  //   effect: "fade",
  //   loop: true,
  //   speed: 1000,
  //   autoplay: {
  //     delay: 3000,
  //     disableOnInteraction: false
  //   }
  // });
//制作実績スライダー
  // var swiper = new Swiper(".js-works-swiper", {
  //   loop: true,
  //   speed: 1000,
  //   pagination: {
  //     el: ".js-works-pagination",
  //     clickable: true
  //   },
  //   autoplay: {
  //     delay: 2500,
  //     disableOnInteraction: false
  //   },
  // });

});
