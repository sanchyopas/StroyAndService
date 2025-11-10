const playBtn = document.querySelectorAll('.video__play');

const playVideo = (e) => {
    const srcVideo = e.currentTarget.dataset.src;
    const parent = e.currentTarget.parentElement;

    e.currentTarget.nextElementSibling.style.display = 'none';
    e.currentTarget.style.display = 'none';

    parent.innerHTML = `<video src="${srcVideo}" muted controls></video>`



}

playBtn?.forEach(btn => {
    btn.addEventListener('click', playVideo)
})



//