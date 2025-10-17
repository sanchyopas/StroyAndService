import * as functions from './modules/baseFunctions.js';
import Swiper from "swiper";
import {Navigation, Pagination, Scrollbar } from "swiper/modules";

functions.isWebp();

import "./modules/tabs.js"

const heroSlider = new Swiper('.hero__slider', {
  modules: [Navigation, Scrollbar],
  direction: 'horizontal',
  slidesPerView: 2.5,
  spaceBetween: 20,

  navigation: {
    nextEl: '.hero__btn-next',
    prevEl: '.hero__btn-prev',
  },

  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

const aboutSlider = new Swiper('.about__slider', {
  modules: [Scrollbar, Navigation],
  direction: 'horizontal',
  slidesPerView: 1,
  spaceBetween: 20,

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
});

const serviceSlider = new Swiper('.service__slider', {
  modules: [Scrollbar, Navigation],
  direction: 'horizontal',
  slidesPerView: 4,
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
});

const videoSlider = new Swiper('.video__slider', {
  modules: [Scrollbar, Navigation],
  direction: 'horizontal',
  slidesPerView: 4,
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
});
