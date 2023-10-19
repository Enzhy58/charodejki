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


'use strict';

$(function () {

  function Cake(elem) {
    let _this = this;

    _this.base = 'vanilla';
    _this.filling = 'white';
    _this.coating = 0;
    _this.topping = 0;
    _this.decor = [];

    _this.elem = elem;
    _this.elBase = _this.elem.find('.cake__base');
    _this.elFilling = _this.elem.find('.cake__filling');
    _this.elCoating = _this.elem.find('.cake__coating');
    _this.elTopping = _this.elem.find('.cake__topping');
    _this.elDecor = _this.elem.find('.cake__decor');


    _this.setBase = function (value) {
      _this.base = value;
      _this.elBase.children().hide();
      if (_this.base != 0) {
        _this.elBase.find('.cake__base--' + value).show();
      }
    };

    _this.setFilling = function (value) {
      _this.filling = value;
      _this.elFilling.children().hide();
      if (_this.filling != 0) {
        _this.elFilling.find('.cake__filling--' + value).show();
      }
    };

    _this.setCoating = function (value) {
      _this.coating = value;
      _this.elCoating.children().hide();
      if (_this.coating != 0) {
        _this.elCoating.find('.cake__coating--' + value).show();
      }
    };

    _this.setTopping = function (value) {
      _this.topping = value;
      _this.elTopping.children().hide();
      if (_this.topping != 0) {
        _this.elTopping.find('.cake__topping--' + value).show();
      }
    };

    _this.setDecor = function (value) {
      let index = _this.decor.indexOf(value);
      if (index !== -1) {
        _this.elDecor.find('.cake__decor--' + value).hide();
        _this.decor.splice(index, 1);
      }
      else {
        _this.elDecor.find('.cake__decor--' + value).show();
        _this.decor.push(value);
      }
    };

    _this.resetDecor = function () {
      _this.elDecor.find('.cake__decor').hide();
      _this.decor = [];
    };

    _this.reset = function () {
      _this.setBase('vanilla');
      _this.setFilling('white');
      _this.setCoating(0);
      _this.setTopping(0);
      _this.resetDecor();
    };

    _this.reset();
  }

  function DesignerForm(elem) {
    let _this = this;

    _this.elem = elem;

    _this.cake = new Cake($('#cake'));


    _this.iBase = _this.elem.find('input[name="base"]');
    _this.iBase.change(function () {
      let input = $(this);
      let value = input.val();
      _this.cake.setBase(value);
    });

    _this.iFilling = _this.elem.find('input[name="filling"]');
    _this.iFilling.change(function () {
      let input = $(this);
      let value = input.val();
      _this.cake.setFilling(value);
    });

    _this.iCoating = _this.elem.find('input[name="coating"]');
    _this.iCoating.change(function () {
      let input = $(this);
      let value = input.val();
      _this.cake.setCoating(value);
    });

    _this.iTopping = _this.elem.find('input[name="topping"]');
    _this.iTopping.change(function () {
      let input = $(this);
      let value = input.val();
      _this.cake.setTopping(value);
    });

    _this.iDecor = _this.elem.find('input[name^="decor["]');
    _this.iDecor.change(function () {
      let input = $(this);
      let value = input.val();
      _this.cake.setDecor(value);
    });

  }

  new DesignerForm($('#designer'));

});