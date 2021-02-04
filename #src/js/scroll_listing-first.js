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
