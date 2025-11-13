let currentStep = 1
const questions = document.querySelectorAll("[data-slide]");
const currentStepElem = document.querySelector('.quiz__current-step');
const lastStepElem = document.querySelector('.quiz__last-step');
const nextStep = document.getElementById('next-step');
 const arrAnswer = []
document.addEventListener('DOMContentLoaded', () => {
    questions[0].classList.add("active");

    currentStepElem.innerText = 1;
    lastStepElem.innerText = questions.length;

    nextStep.dataset.step = String(currentStep + 1);
    nextStep?.addEventListener('click', nextStepHandler);
    answerClickHandler()
})

function nextStepHandler(e) {

    if (currentStep < questions.length) {
        currentStep++;
        currentStepElem.innerText = currentStep;
        nextStep.dataset.step = String(currentStep);
    } else {

    }

    questions.forEach(question => {
        question.classList.remove('active');
    });

    const currentStepDataStep = +e.currentTarget.dataset.step;
    document.querySelector(`[data-slide="${currentStepDataStep}"]`)?.classList.add('active');
}


function answerClickHandler() {
    const quizAnswerBtn = document.querySelectorAll('.quiz__answer');
    quizAnswerBtn?.forEach(btn => {
        btn.addEventListener('click', (e) => {
            quizAnswerBtn.forEach(btn => {
                btn.classList.remove('active');
            });
            e.currentTarget.classList.add('active');
        })
    })
}