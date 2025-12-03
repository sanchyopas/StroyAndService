import { bodyUnLock } from './baseFunctions.js';

const links = document.querySelectorAll('[data-anchor]');
const isMainPage = window.location.pathname === '/';

// ---------- Функция плавного скролла ----------
const scrollToElement = (elementId) => {
  const element = document.getElementById(elementId);
  if (!element) return;

  // Хедер может отсутствовать → делаем безопасно
  const header = document.querySelector('header.header');
  const headerHeight = header ? header.clientHeight : 0;

  // Позиция элемента с учётом хедера
  const elementPosition =
    element.getBoundingClientRect().top + window.scrollY - headerHeight;

  // Закрываем меню
  document.querySelector('.header')?.classList.remove('opened');
  document.querySelector('.mobile-menu-button')?.classList.remove('opened');
  document.querySelector('.header__mobile-cnt')?.classList.remove('active');
  bodyUnLock?.();

  // ВАЖНО: ждём, пока меню закроется → затем скроллим
  setTimeout(() => {
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    });
  }, 50);
};

// ---------- Обработка кликов ----------
links.forEach((link) => {
  const anchor = link.dataset.anchor;

  if (isMainPage) {
    // Скролл на главной
    link.addEventListener('click', (event) => {
      if (!anchor) return;

      event.preventDefault();

      // Переключаем активность
      links.forEach((lnk) => lnk.parentElement.classList.remove('active'));
      link.parentElement.classList.add('active');

      scrollToElement(anchor);
    });
  } else {
    // На других страницах сохраняем секцию
    link.addEventListener('click', () => {
      if (anchor) {
        localStorage.setItem('scrollToSection', anchor);
      }
    });
  }
});

// ---------- Скролл после загрузки страницы ----------
if (isMainPage) {
  const savedAnchor = localStorage.getItem('scrollToSection');
  if (savedAnchor) {
    window.addEventListener('load', () => {
      localStorage.removeItem('scrollToSection');
      scrollToElement(savedAnchor);
    });
  }
}

// ---------- Клик вне модалки ----------
export function clickOut() {
  document.addEventListener('mouseup', (e) => {
    const modalWindow = document.querySelector('.modal.open .window');
    if (modalWindow && !modalWindow.contains(e.target)) {
      modalWindow.closest('.modal').classList.remove('open');
      document.querySelector('html').classList.remove('_lock');
    }
  });
}
