const inputsCheckbox = document.querySelectorAll('.checkbox__input');
const ingredients = document.querySelectorAll('.cake__item');

const addIngredients = checkboxes => {
    const nodeArray = Array.from(checkboxes);
    const ingredientsArray = Array.from(ingredients);

    for(let node of checkboxes) {
        node.addEventListener('click', event => {
            event.target.parentNode.classList.toggle('active');
            const index = nodeArray.indexOf(event.target);
            ingredientsArray[index].classList.toggle('active');
        })
    }
}

addIngredients(inputsCheckbox);

$(function(){
    $('.menu__open').on('click', function(){
      $('.menu__box').addClass('menu__box--active');
      $('.wrapper').addClass('wrapper__fixed');
    });
    $('.menu__close, .menu__link').on('click', function () {
      $('.menu__box').removeClass('menu__box--active');
      $('.wrapper').removeClass('wrapper__fixed');
    });
    $('.menu__link, .btn').on('click', function (e) {
      e.preventDefault();
      var id = $(this).attr('href'), top = $(id).offset().top;
      $('body, html').animate({ scrollTop: top }, 1500);
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
  