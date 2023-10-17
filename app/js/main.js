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