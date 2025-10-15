const tabsNavBtn = document.querySelectorAll('.tabs__nav button');

tabsNavBtn?.forEach(btn => {
  btn.addEventListener('click', (e) => {
    tabsNavBtn.forEach(btn => {btn.classList.remove('active');});
    btn.classList.add('active');

    document.querySelectorAll('.tabs__content').forEach(el => {
      el.classList.remove('active');
    });
    document.getElementById(btn.dataset.id).classList.add('active');

  })
})
