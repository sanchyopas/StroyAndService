import {bodyLock, bodyUnLock} from "./baseFunctions.js";

export const openPopup = (e) => {
    bodyLock();

    const currentPopup = document.getElementById(e.currentTarget.dataset.popup);
    currentPopup.classList.add("popup_show");
    closePopupOnOutsideClick(currentPopup);

    const hiddenField = currentPopup.querySelector("#order-product");
    if (hiddenField) {
        hiddenField.value = e.currentTarget.dataset.name;
    }
};

const closePopup = (e) => {
    bodyUnLock();
    document.querySelector(".popup_show")?.classList.remove("popup_show");
};

document.addEventListener("keydown", (e) => {
    if (e.keyCode === 27 && document.querySelector(".popup_show").classList.contains("popup_show")) {
        document.querySelector(".popup_show").classList.remove("popup_show");
        document.body.classList.remove("_lock");
        bodyUnLock();
    }
});

document.addEventListener('click', (e) => {

})

function closePopupOnOutsideClick(currentPopup) {
    // console.log(currentPopup)
    const content = currentPopup.querySelector(".popup__content");
    content.addEventListener("click", (e) => {
        const currentClickElement = e.currentTarget;
        // console.log(e.currentTarget, 'currentTarget');
        if (!currentClickElement.classList.contains("popup__content")) {

        }
        const popupQuiz = e.target.closest(".popup__content");
        // console.log(popupQuiz)
    });
}

// const popup = document.querySelectorAll(".popup");
// popup?.forEach(popup => popup.addEventListener("click", (e) => {
//     const popupQuiz = e.target.closest(".quiz");
//     console.log(popupQuiz)
//
//     if (!e.target.closest(".popup__content")) {
//         e.currentTarget.classList.remove("popup_show");
//         document.body.classList.remove("_lock");
//     }
// }));

const modalOpenButtonsList = document.querySelectorAll("[data-popup]");
modalOpenButtonsList?.forEach(btn => btn.addEventListener("click", openPopup));

const modalCloseButtonsList = document.querySelectorAll("[data-close]");
modalCloseButtonsList?.forEach(btn => btn.addEventListener("click", closePopup));