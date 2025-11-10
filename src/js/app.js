import * as functions from './modules/baseFunctions.js';
import Swiper from "swiper";
import {Navigation, Pagination, Scrollbar} from "swiper/modules";

functions.isWebp();

import "./modules/tabs.js";
import "./modules/quiz.js";
import "./modules/accordion.js";
import "./modules/smoothScroll.js";
import "./modules/popup.js";
import "./modules/video.js";

const heroSlider = new Swiper('.hero__slider', {
    modules: [Navigation, Scrollbar],
    direction: 'horizontal',
    spaceBetween: 20,

    navigation: {
        nextEl: '.hero__btn-next',
        prevEl: '.hero__btn-prev',
    },

    scrollbar: {
        el: '.swiper-scrollbar',
    },

    breakpoints: {
        310: {
            slidesPerView: 1,
        },
        992: {
            slidesPerView: 2.5,
        }
    }
});

const aboutSlider = new Swiper('.about__slider', {
    modules: [Scrollbar, Navigation],
    direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween: 20,

    navigation: {
        nextEl: '.about__btn-next',
        prevEl: '.about__btn-prev',
    },

    scrollbar: {
        el: '.about__scrollbar',
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 1,
        },

    }
});

const serviceSlider = new Swiper('.service__slider', {
    modules: [Scrollbar, Navigation],
    direction: 'horizontal',
    spaceBetween: 37,

    pagination: {
        el: '.swiper-pagination',
    },

    navigation: {
        nextEl: '.about__btn-next',
        prevEl: '.about__btn-prev',
    },

    scrollbar: {
        el: '.about__scrollbar',
    },

    breakpoints: {
        1200: {
            slidesPerView: 4,
        },
        992: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 2,
        }
    }
});

const videoSlider = new Swiper('.video__slider', {
    modules: [Scrollbar, Navigation],
    direction: 'horizontal',
    spaceBetween: 37,

    navigation: {
        nextEl: '.about__btn-next',
        prevEl: '.about__btn-prev',
    },

    scrollbar: {
        el: '.video__scrollbar',
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 1.5,
        }
    }
});

const scrollTopBtn = document.getElementById('scroll-top');

document.body.addEventListener('scroll', () => {
    const scrollTop = document.body.scrollTop;

    if (scrollTop >= 600) {
        scrollTopBtn.style.display = 'flex';
    } else {
        scrollTopBtn.style.display = 'none';
    }
});


scrollTopBtn?.addEventListener('click', (e) => {

    document.documentElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
    })
})

const burgerMenuBtn = document.getElementById('burger');
burgerMenuBtn?.addEventListener('click', () => {

    document.querySelector('.header__mobile-cnt').classList.add('active');
})
