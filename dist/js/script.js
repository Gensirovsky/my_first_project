
let header__burger = document.querySelector('.header__burger');
let header_menu = document.querySelector('.header__menu');
let back = document.querySelector('body');
let header__list = document.querySelector('.header__link');

let button_left = document.querySelector('.content__button-left');
let button_right = document.querySelector('.content__button-right');
let listing_first = document.querySelector('.content__slider-line-first');
let listing_second = document.querySelector('.content__slider-line-second');
let slidersFirst = listing_first.querySelectorAll('.content__slider');
let slidersSecond = listing_second.querySelectorAll('.content__slider');
let sliders = document.querySelectorAll('.content__slider');
let buttonsBuy = document.querySelectorAll('.content__slider-buy');
let buttonsDetailFirst = listing_first.querySelectorAll('.content__slider-detail');
let buttonsDetailSecond = listing_second.querySelectorAll('.content__slider-detail');
let cart = document.getElementById('buy');
let price = document.querySelectorAll('.content__slider-price');
let description = document.querySelectorAll('.content__slider-description');
let details = document.querySelectorAll('.content__slider-details');
let detailsButton = document.querySelectorAll('.content__slider-detail');
let image = document.querySelectorAll('.content__slider-image');
let title = document.querySelectorAll('.content__slider-title');
let sliderWrapper = document.querySelectorAll('.content__slider-wrapper');
let detailsTitle = document.querySelectorAll('.content__slider-details-title');

let right = 0;
let left = 0;
let stepA = 0;
let stepB = 0;
let button_left_disabler = 0;
let button_right_disabler = slidersFirst.length - 2;
let buy = 0;

let click = 0;
for (let i = 0; i < detailsButton.length; i++) {
    console.log(detailsButton);
    detailsButton[i].onclick = function (event) {
        event.preventDefault();
        console.log(i);
        if (click % 2 == 0) {
            details[i].classList.remove('display-hidden');
            details[i].style.transform = "translateY(" + 0 + "vh)";
        } else {
            details[i].style.transform = "translateY(" + 40 + "vh)";
            details[i].classList.add('display-hidden');
        }
        detailsTitle[i].textContent = title[i].textContent;
        sliders[i].classList.toggle('shadow-none');
        click++;
    }
}
/*
for (let i = 0; i < buttonsDetailSecond.length; i++) {
    buttonsDetailSecond[i].onclick = function (event) {
        event.preventDefault();
        details[i + buttonsDetailSecond.length].classList.toggle('display-none');
        detailsTitle[i + buttonsDetailSecond.length].textContent = title[i + buttonsDetailSecond.length].textContent;


    }
}
*/
for (let i = 0; i < buttonsBuy.length; i++) {
    buttonsBuy[i].onclick = function (event) {
        event.preventDefault();
        buy++;
        cart.textContent = buy;
    }
}

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
    console.log(slidersFirst.length - button_right_disabler);
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

header__burger.onclick = function () {
    header__burger.classList.toggle('active');
    header_menu.classList.toggle('active');
    back.classList.toggle('lock');
}



var leaf = function () { }