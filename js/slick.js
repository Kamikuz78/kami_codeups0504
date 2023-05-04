jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる


$(".js-mv-slider")
.on("init", function () {
  $('.slick-slide[data-slick-index="0"]').addClass("add-animation");
})
// 通常のオプション
.slick({
  autoplay: true, // 自動再生ON
  fade: true, // フェードON
  arrows: false, // 矢印OFF
  // variableWidth: true,
  speed: 2000, // スライド、フェードアニメーションの速度2000ミリ秒
  autoplaySpeed: 4000, // 自動再生速度4000ミリ秒
  pauseOnFocus: false, // フォーカスで一時停止OFF
  pauseOnHover: false, // マウスホバーで一時停止OFF
})
.on({
  // スライドが移動する前に発生するイベント
  beforeChange: function (event, slick, currentSlide, nextSlide) {
    // 表示されているスライドに"add-animation"のclassをつける
    $(".slick-slide", this).eq(nextSlide).addClass("add-animation");
    // あとで"add-animation"のclassを消すための"remove-animation"classを付ける
    $(".slick-slide", this).eq(currentSlide).addClass("remove-animation");
  },
  // スライドが移動した後に発生するイベント
  afterChange: function () {
    // 表示していないスライドはアニメーションのclassを外す
    $(".remove-animation", this).removeClass(
      "remove-animation add-animation"
    );
  },
});

// works内スライダー
$(".js-common-slider").slick({
  autoplay: true,
  fade: true,
  arrows: false,
  speed: 2000,
  autoplaySpeed: 4000,
  pauseOnFocus: false,
  pauseOnHover: false,
  adaptiveHeight: true,
  dots: true,
  dotsClass: "common-slide-dots"
});

})