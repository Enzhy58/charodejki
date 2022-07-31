$(function(){
  $('.menu__open').on('click', function(){
    $('.menu__box').addClass('menu__box--active');
    $('.wrapper').addClass('wrapper__fixed');
  });
  $('.menu__close').on('click', function () {
    $('.menu__box').removeClass('menu__box--active');
    $('.wrapper').removeClass('wrapper__fixed');
  });
});