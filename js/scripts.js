// import Swiper from "swiper";
// import 'swiper/css';
// import { Navigation, Pagination } from 'swiper/modules'


const swiper = new Swiper('.car-swiper', {
    direction: "horizontal",
    loop: true,
    spaceBetween: 20,

    pagination: {
        el: '.car-swiper-pagination',
        clickable: true,
    },

    navigation: {
        nextEl: '.car-swiper-btn-next',
        prevEl: '.car-swiper-btn-prev',
        
    }
});


function changeCheckbox(elem) {
    let item = document.getElementById(elem);
    switch (item.getAttribute("aria-checked")) {
        case "true":
            item.setAttribute("aria-checked", "false");
            break;
        case "false":
            item.setAttribute("aria-checked", "true");
            break;
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const colorLabels = document.querySelectorAll('.cars-filters__colors-label');
    colorLabels.forEach(label => {
        label.addEventListener('keydown', function (event) {
            if (event.code === "Space") {
                event.preventDefault();
                changeCheckbox(this.id);
            }
        });
    });
});

let rangePrice = document.querySelector('input[type="range"].cars-filters__range-slider');
rangePrice.style.setProperty('--value', rangePrice.value);
rangePrice.style.setProperty('--min', rangePrice.min == '' ? '0' : rangePrice.min);
rangePrice.style.setProperty('--max', rangePrice.max == '' ? '100' : rangePrice.max);
rangePrice.addEventListener('input', () => rangePrice.style.setProperty('--value', rangePrice.value)
);