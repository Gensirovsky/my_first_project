let button_combo_left = document.querySelector('.content__item-combo-button-left');
let button_combo_right = document.querySelector('.content__item-combo-button-right');
let listing_page = document.querySelector('.content__combo-listing');
let combo_sliders = listing_page.querySelectorAll('.content__item-combo');

let combo_right = 0;
let combo_left = 0;
let step_right = 0;
let step_left = 0;
let button_combo_left_disabler = 0;
let button_combo_right_disabler = combo_sliders.length - 3;

button_combo_right.onclick = function (event) {
    event.preventDefault();
    combo_left = 0;
    combo_right++;
    button_combo_right_disabler--;
    button_combo_left_disabler++;
    step_right = 26 * combo_right - step_left;
    listing_page.style.transform = "translate(" + (-step_right) + "vw)";
    comboButtonDisable();
}
button_combo_left.onclick = function (event) {
    event.preventDefault();
    combo_right = 0
    combo_left++;
    button_combo_right_disabler++;
    button_combo_left_disabler--;
    step_left = 26 * combo_left - step_right;
    listing_page.style.transform = "translate(" + step_left + "vw)";
    comboButtonDisable();
}

let comboButtonDisable = function () {
    if (button_combo_left_disabler == 0) {
        button_combo_left.classList.add('display-none');
    } else {
        button_combo_left.classList.remove('display-none');
    }
    if (button_combo_right_disabler == 0) {
        button_combo_right.classList.add('display-none');
    } else {
        button_combo_right.classList.remove('display-none');
    }
    console.log(combo_sliders[combo_sliders.length - button_combo_right_disabler - 1])
    console.log(button_combo_right_disabler)
    combo_sliders[combo_sliders.length - button_combo_right_disabler - 1].classList.remove('opacity-50');
    combo_sliders[combo_sliders.length - button_combo_right_disabler - 3].classList.remove('opacity-50');
    if (combo_sliders.length - button_combo_right_disabler < combo_sliders.length) {
        combo_sliders[combo_sliders.length - button_combo_right_disabler].classList.add('opacity-50');
    }
    if (combo_sliders.length - button_combo_right_disabler > button_right_disabler) {
        combo_sliders[combo_sliders.length - button_combo_right_disabler - 4].classList.add('opacity-50');
    }
}
