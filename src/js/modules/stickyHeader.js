const header = document.querySelector(".header");
const heightHeader = header.offsetHeight;

document.addEventListener('scroll', e => {
    if (window.scrollY >= 600) {
        document.documentElement.style.marginTop = heightHeader + 'px';
        header.classList.add("sticky");
    } else {
        document.documentElement.style.marginTop = '0px';
        header.classList.remove("sticky");
    }
});

