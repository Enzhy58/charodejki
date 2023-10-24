$(function () {

  $('.menu__open').on('click', function () {
    $('.menu__box').addClass('menu__box--active');
    $('.wrapper').addClass('wrapper__fixed');
  });

  $('.menu__close, .menu__link').on('click', function () {
    $('.menu__box').removeClass('menu__box--active');
    $('.wrapper').removeClass('wrapper__fixed');
  });

});

document.getElementById('home').onclick = function () {
  window.location.href = 'index.html';
};
document.getElementById('cakes').onclick = function () {
  window.location.href = 'cakes.html';
};
document.getElementById('desserts').onclick = function () {
  window.location.href = 'desserts.html';
};