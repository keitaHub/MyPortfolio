$(function () {

  //ページ内スクロール
  var navHeight = $(".header").outerHeight();

  $('a[href^="#"]').on("click", function () {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top - navHeight;
    $("html, body").animate({ scrollTop: position, }, 500, "swing");
    return false;
  });

  //ページトップ
  $("#js-page-top").on("click", function () {
    $("body,html").animate({ scrollTop: 0, }, 500);
    return false;
  });

});



//動きのきっかけとなるアニメーションの名前を定義
function fadeAnime(){

  //ふわっと動くきっかけのクラス名と動きのクラス名の設定
  $('.fadeUpTrigger').each(function(){
    var elemPos = $(this).offset().top-50;//要素より。50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if(scroll >= elemPos - windowHeight) {
      $(this).addClass('fadeUp');
      //画面内に入ったらfadeInというクラス名を追記
    // }else{
    //   $(this).removeClass('fadeUp');
    //   //画面外に出たらfadeUpというクラス名を外す
    }
    });

}//ここまでふわっと動くきっかけのクラス名と動きのクラス名の設定

//画面をスクロールしたら動かしたい場合の記述
  $(window).scroll(function(){
    fadeAnime();/*アニメーション用の関数を呼ぶ*/
  });//ここまで画面をスクロールしたら動かしたい場合の記述

//画面が読み込まれたらすぐに動かしたい場合の記述
  $(window).on('load',function(){
    fadeAnime();/*アニメーション用の関数を呼ぶ*/
  });//ここまで画面が読み込まれたらすぐに動かしたい場合の記述



  $(".openbtn").click(function () { //ボタンがクリックされたら
    $(this).toggleClass('active'); //ボタン自身にactiveクラスを付与し
    $(".gnav").toggleClass('panelactive'); //ナビゲーションにpanelactiveクラスを付与
  });

  $(".gnav a").click(function (){ //ナビゲーションのリンクがクリックされたら
    $(".openbtn").removeClass('active'); //ボタンのactiveクラスを除去し
    $(".gnav").removeClass('panelactive'); //ナビゲーションのpanelactiveクラスも除去
  });

