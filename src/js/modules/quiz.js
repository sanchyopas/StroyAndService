import {openPopup} from "./popup.js";

const questions = [
    {
        id: 1,
        title: "Раздвижные или распашные системы123123 ?",
        answers: [
            {
                image: "/img/quiz-1.png",
                title: "Остекление веранды, беседки, террасы, зоны для барбекю"
            }, {
                image: "/img/quiz-1.png",
                title: "Остекление веранды, беседки, террасы, зоны для барбекю"
            }, {
                image: "/img/quiz-1.png",
                title: "Остекление веранды, беседки, террасы, зоны для барбекю"
            }
        ]
    },
    // {
    //     id: 2,
    //     title: "Раздвижные или распашные системы2 ?",
    //     answers: [
    //         {
    //             image: "static/img/quiz-1.png",
    //             title: "Остекление веранды, беседки, террасы, зоны для барбекю2"
    //         }, {
    //             image: "static/img/quiz-1.png",
    //             title: "Остекление веранды, беседки, террасы, зоны для барбекю2"
    //         }, {
    //             image: "static/img/quiz-1.png",
    //             title: "Остекление веранды, беседки, террасы, зоны для барбекю2"
    //         }
    //     ]
    // },
    // {
    //     id: 3,
    //     title: "Раздвижные или распашные системы3 ?",
    //     answers: [
    //         {
    //             image: "static/img/quiz-1.png",
    //             title: "Остекление веранды, беседки, террасы, зоны для барбекю3"
    //         }, {
    //             image: "static/img/quiz-1.png",
    //             title: "Остекление веранды, беседки, террасы, зоны для барбекю3"
    //         }, {
    //             image: "static/img/quiz-1.png",
    //             title: "Остекление веранды, беседки, террасы, зоны для барбекю3"
    //         }
    //     ]
    // }
]


const currentStepElem = document.querySelector('.quiz__current-step');
const lastStepElem = document.querySelector('.quiz__last-step');
let currentStep = 1
const nextStep = document.getElementById('next-step');

document.addEventListener('DOMContentLoaded', () => {
    currentStepElem.innerText = 1;
    lastStepElem.innerText = questions.length;

    generateLoyoutSlide(questions[0]);

    answerClickHandler();


    nextStep?.addEventListener('click', nextStepHandler)

})


function generateLayoutAnswer(arr) {
    return arr.answers.map((answer) => `
        <div class="quiz__answer">
          <img src="${answer.image}" alt="">
          <p>${answer.title}</p>
        </div>
    `).join('');
}

function prevStepHandler() {
}

function nextStepHandler(e) {
    const currentStepDataStep = +e.currentTarget.dataset.step;
    const parentElement = e.currentTarget.closest('.quiz__inner').querySelector('.active');

    if (parentElement) {
        if (currentStep >= questions.length) {
            document.getElementById('quiz-inner').innerHTML = `
            <p class="quiz__title">Заполните форму и наш менеджер свяжется с вами ?</p>
            <form action="" class="popup__form form" method="POST" id="callback-form">
              <input type="text" name="name" class="form__input" placeholder="Ваше имя" required/>
              <input type="tel" name="phone" class="form__input" placeholder="номер телефона" required data-tel-input/>
              <div class="form__row">
                <input type="checkbox" name="agreement" class="form" id="agreement">
                <label for="agreement" class="form__row-label">Я согласен(а) с <a href="" target="_blank">политиккой
                  конфиденциальности</a></label>
              </div>
              <button type="submit" class="form__submit">Отправить</button>
            </form>`
        } else {
            currentStep += 1;
            nextStep.dataset.step = String(currentStep);
            document.getElementById('current-step').innerText = currentStep;
            nextQuestion(currentStep - 1);
        }

    }
}

function generateLoyoutSlide(arr) {
    const layoutQuestion = `
        <p class="quiz__title">${arr.title}</p>
        <div class="quiz__answers">${generateLayoutAnswer(arr)}</div>`
    document.getElementById('quiz-body').innerHTML = layoutQuestion;
}

function nextQuestion(currentStep) {
    const nextElement = questions[currentStep];
    generateLoyoutSlide(nextElement);
    answerClickHandler();
}

function prevQuestion(currentStep) {
    const prevElement = questions[currentStep];
    console.log(prevElement)
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