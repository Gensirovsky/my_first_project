let button_left = document.querySelector('.content__button-left');
let button_right = document.querySelector('.content__button-right');
let listing_first = document.querySelector('.content__slider-line-first');
let listing_second = document.querySelector('.content__slider-line-second');
let slidersFirst = listing_first.querySelectorAll('.content__slider');
let slidersSecond = listing_second.querySelectorAll('.content__slider');

let right = 0;
let left = 0;
let stepA = 0;
let stepB = 0;
let button_left_disabler = 0;
let button_right_disabler = slidersFirst.length - 2;

button_right.onclick = function (event) {
    event.preventDefault();
    left = 0;
    right++;
    button_right_disabler--;
    button_left_disabler++;
    stepA = 40.5 * right - stepB;
    listing_first.style.transform = "translate(" + (-stepA) + "vw)";
    listing_second.style.transform = "translate(" + (-stepA) + "vw)";
    buttonDisable();
}
button_left.onclick = function (event) {
    event.preventDefault();
    button_left_disabler--;
    button_right_disabler++;
    right = 0
    left++;
    stepB = 40.5 * left - stepA;
    listing_first.style.transform = "translate(" + stepB + "vw)";
    listing_second.style.transform = "translate(" + stepB + "vw)";
    buttonDisable();
}

let buttonDisable = function () {
    if (button_left_disabler == 0) {
        button_left.classList.add('display-none');
    } else {
        button_left.classList.remove('display-none');
    }
    if (button_right_disabler == 0) {
        button_right.classList.add('display-none');
    } else {
        button_right.classList.remove('display-none');
    }
    slidersFirst[slidersFirst.length - button_right_disabler - 1].classList.remove('opacity-50');
    slidersFirst[slidersFirst.length - button_right_disabler - 2].classList.remove('opacity-50');
    slidersSecond[slidersFirst.length - button_right_disabler - 1].classList.remove('opacity-50');
    slidersSecond[slidersFirst.length - button_right_disabler - 2].classList.remove('opacity-50');
    if (slidersFirst.length - button_right_disabler < slidersFirst.length) {
        slidersFirst[slidersFirst.length - button_right_disabler].classList.add('opacity-50');
        slidersSecond[slidersFirst.length - button_right_disabler].classList.add('opacity-50');
    }
    if (slidersFirst.length - button_right_disabler > button_right_disabler) {
        slidersFirst[slidersFirst.length - button_right_disabler - 3].classList.add('opacity-50');
        slidersSecond[slidersFirst.length - button_right_disabler - 3].classList.add('opacity-50');

    }
}

let sliders = document.querySelectorAll('.content__slider');
let details = document.querySelectorAll('.content__slider-details');
let detailsButton = document.querySelectorAll('.content__slider-detail');
let title = document.querySelectorAll('.content__slider-title');
let detailsTitle = document.querySelectorAll('.content__slider-details-title');

let comboSliders = document.querySelectorAll('.content__item-combo');
let comboDetails = document.querySelectorAll('.content__combo-details');
let comboDetailsButton = document.querySelectorAll('.content__item-button-detail')
let comboTitle = document.querySelectorAll('.content__item-combo-title');
let comboDetailsTitle = document.querySelectorAll('.content__combo-details-title');

for (let i = 0; i < detailsButton.length; i++) {

    detailsButton[i].onclick = function (event) {

        event.preventDefault();
        details[i].classList.toggle('display-hidden');
        details[i].classList.toggle('details-active');
        detailsTitle[i].textContent = title[i].textContent;
        sliders[i].classList.toggle('shadow-none');
    }
}

for (let i = 0; i < comboDetailsButton.length; i++) {
    comboDetailsButton[i].onclick = function (event) {
        event.preventDefault();
        comboDetails[i].classList.toggle('display-hidden');
        comboDetails[i].classList.toggle('details-active');
        comboDetailsTitle[i].textContent = comboTitle[i].textContent;
        comboSliders[i].classList.toggle('shadow-none');
    }
}
let header__burger = document.querySelector('.header__burger');
let header_menu = document.querySelector('.header__menu');
let back = document.querySelector('body');
let header__list = document.querySelector('.header__link');



header__burger.onclick = function () {
    header__burger.classList.toggle('active');
    header_menu.classList.toggle('active');
    back.classList.toggle('lock');
}

let buttonsForScrollign = document.querySelectorAll('.content__giftset-buttons li');
let pages = document.querySelectorAll('.page');

for (let i = 0; i < buttonsForScrollign.length; i++) {
    buttonsForScrollign[i].onclick = function (event) {
        event.preventDefault();
        for (let j = 0; j < buttonsForScrollign.length; j++) {
            buttonsForScrollign[j].classList.remove('active');
            buttonsForScrollign[j].classList.add('inactive');
        }
        buttonsForScrollign[i].classList.remove('inactive');
        buttonsForScrollign[i].classList.add('active');
        for (let k = 0; k < pages.length; k++) {
            pages[k].classList.add('display-none');
        }
        pages[i].classList.remove('display-none');
    }
}
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

