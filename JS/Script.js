let slideItem_1 = document.querySelector("#slideItem_1")
let slideItem_2 = document.querySelector("#slideItem_2")
let slideItem_3 = document.querySelector("#slideItem_3")
let slideItem_4 = document.querySelector("#slideItem_4")

let slide_1 = document.querySelector("#slide_1")
let slide_2 = document.querySelector("#slide_2")
let slide_3 = document.querySelector("#slide_3")
let slide_4 = document.querySelector("#slide_4")

function slider(slideBlock, slideBtn) {
    slide_1.classList.remove("slide-active")
    slide_2.classList.remove("slide-active")
    slide_3.classList.remove("slide-active")
    slide_4.classList.remove("slide-active")

    slideBlock = document.getElementById(slideBlock)

    slideBlock.classList.add("slide-active")

    slideItem_1.classList.remove("slider__item-active")
    slideItem_2.classList.remove("slider__item-active")
    slideItem_3.classList.remove("slider__item-active")
    slideItem_4.classList.remove("slider__item-active")

    slideBtn = document.getElementById(slideBtn)

    slideBtn.classList.add("slider__item-active")
}

function autoSliding() {
    if (slideItem_1.classList.contains("slider__item-active")) {setTimeout(() => {slider("slide_2", "slideItem_2")}, 3500);} 
    if (slideItem_2.classList.contains("slider__item-active")) {setTimeout(() => {slider("slide_3", "slideItem_3")}, 3500);}
    if (slideItem_3.classList.contains("slider__item-active")) {setTimeout(() => {slider("slide_4", "slideItem_4")}, 3500);}
    if (slideItem_4.classList.contains("slider__item-active")) {setTimeout(() => {slider("slide_1", "slideItem_1")}, 3500);}
    console.log("autoSliding work!")
}

console.log("Auto Sliding fun is work!")

// autoSliding()

// var form__input = document.querySelector("#form__input")
// var form__btn = document.querySelector("#form__btn")

// form__btn.addEventListener("click", () => {
//     if (form__input.value === "") {
//         alert("Пожалуйста укажите вашу почту")
//         console.log("not wor;")
//     } else {
//         alert('Благодарим за подписку!')
//         form__input.value = ""
//     }
// })

console.log("JS Working");