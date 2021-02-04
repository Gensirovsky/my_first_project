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