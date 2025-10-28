const quizAnswerBtn = document.querySelectorAll('.quiz__answer');
quizAnswerBtn?.forEach(btn => {
    btn.addEventListener('click', (e) => {
        quizAnswerBtn.forEach(btn => {
            btn.classList.remove('active');
        });
        e.currentTarget.classList.add('active');
    })
})