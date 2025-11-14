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
    const isActiveElement = e.currentTarget.closest('.quiz__inner').querySelector('input[type="radio"]:checked');
    const currentStepDataStep = +e.currentTarget.dataset.step;
    const answer = isActiveElement.closest('.quiz__body').querySelector('.quiz__title').innerText;
    const answersString = `${answer} - ${isActiveElement.value}`;
    arrAnswer.push(answersString)

    questions.forEach(question => {
        question.classList.remove('active');
    });

    if (isActiveElement) {
        if (currentStep >= questions.length) {
            questions.forEach(question => {
                question.classList.remove('active');
            });
            document.querySelector('.quiz__bottom').style.display = 'none';
            document.getElementById('answers').value = arrAnswer;
            document.querySelector('[data-form]').classList.add('active');
        } else {
            currentStep += 1;
            currentStepElem.innerText = currentStep;
            nextStep.dataset.step = String(currentStep);
            document.querySelector(`[data-slide="${currentStep}"]`)?.classList.add('active');
        }
    }
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