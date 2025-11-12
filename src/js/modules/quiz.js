let currentStep = 1
const questions = document.querySelectorAll("[data-slide]");
const currentStepElem = document.querySelector('.quiz__current-step');
const lastStepElem = document.querySelector('.quiz__last-step');
const nextStep = document.getElementById('next-step');

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
        document.getElementById('quiz-inner').innerHTML = `
           <form action="" class="popup__form form" method="POST" id="callback-form">
              <input type="text" name="name" class="form__input" placeholder="Ваше имя" required/>
              <input type="tel" name="phone" class="form__input" placeholder="номер телефона" required data-tel-input/>
              <div class="form__row">
                <input type="checkbox" name="agreement" class="form" id="agreement">
                <label for="agreement" class="form__row-label">Я согласен(а) с <a href="" target="_blank">политиккой
                  конфиденциальности</a></label>
              </div>
              <button type="submit" class="form__submit">Отправить</button>
            </form>`;
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