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