let slideItem_1 = document.querySelector("#slideItem_1");
let slideItem_2 = document.querySelector("#slideItem_2");
let slideItem_3 = document.querySelector("#slideItem_3");
let slideItem_4 = document.querySelector("#slideItem_4");

let slide_1 = document.querySelector("#slide_1")
let slide_2 = document.querySelector("#slide_2")
let slide_3 = document.querySelector("#slide_3")
let slide_4 = document.querySelector("#slide_4")

slideItem_1.addEventListener("click", () => {
    slideItem_2.classList.remove("slider__item-active")
    slideItem_3.classList.remove("slider__item-active")
    slideItem_4.classList.remove("slider__item-active")
    slideItem_1.classList.add("slider__item-active")

    slide_2.classList.remove("slide-active")
    slide_3.classList.remove("slide-active")
    slide_4.classList.remove("slide-active")
    slide_1.classList.add("slide-active")
})

slideItem_2.addEventListener("click", () => {
    slideItem_1.classList.remove("slider__item-active")
    slideItem_3.classList.remove("slider__item-active")
    slideItem_4.classList.remove("slider__item-active")
    slideItem_2.classList.add("slider__item-active")

    slide_1.classList.remove("slide-active")
    slide_3.classList.remove("slide-active")
    slide_4.classList.remove("slide-active")
    slide_2.classList.add("slide-active")
})

slideItem_3.addEventListener("click", () => {
    slideItem_1.classList.remove("slider__item-active")
    slideItem_2.classList.remove("slider__item-active")
    slideItem_4.classList.remove("slider__item-active")
    slideItem_3.classList.add("slider__item-active")

    slide_1.classList.remove("slide-active")
    slide_2.classList.remove("slide-active")
    slide_4.classList.remove("slide-active")
    slide_3.classList.add("slide-active")
})

slideItem_4.addEventListener("click", () => {
    slideItem_1.classList.remove("slider__item-active")
    slideItem_2.classList.remove("slider__item-active")
    slideItem_3.classList.remove("slider__item-active")
    slideItem_4.classList.add("slider__item-active")

    slide_1.classList.remove("slide-active")
    slide_2.classList.remove("slide-active")
    slide_3.classList.remove("slide-active")
    slide_4.classList.add("slide-active")
})

function autoScroll() {
    setTimeout(() => {
        slideItem_2.classList.remove("slider__item-active")
        slideItem_3.classList.remove("slider__item-active")
        slideItem_4.classList.remove("slider__item-active")
        slideItem_1.classList.add("slider__item-active")

        slide_2.classList.remove("slide-active")
        slide_3.classList.remove("slide-active")
        slide_4.classList.remove("slide-active")
        slide_1.classList.add("slide-active")
        console.log("1")
        setTimeout(() => {
            slideItem_1.classList.remove("slider__item-active")
            slideItem_3.classList.remove("slider__item-active")
            slideItem_4.classList.remove("slider__item-active")
            slideItem_2.classList.add("slider__item-active")
    
            slide_1.classList.remove("slide-active")
            slide_3.classList.remove("slide-active")
            slide_4.classList.remove("slide-active")
            slide_2.classList.add("slide-active")
            console.log("2")
            setTimeout(() => {
                slideItem_1.classList.remove("slider__item-active")
                slideItem_2.classList.remove("slider__item-active")
                slideItem_4.classList.remove("slider__item-active")
                slideItem_3.classList.add("slider__item-active")
        
                slide_1.classList.remove("slide-active")
                slide_2.classList.remove("slide-active")
                slide_4.classList.remove("slide-active")
                slide_3.classList.add("slide-active")
                console.log("3")
                setTimeout(() => {
                    slideItem_1.classList.remove("slider__item-active")
                    slideItem_2.classList.remove("slider__item-active")
                    slideItem_3.classList.remove("slider__item-active")
                    slideItem_4.classList.add("slider__item-active")
            
                    slide_1.classList.remove("slide-active")
                    slide_2.classList.remove("slide-active")
                    slide_3.classList.remove("slide-active")
                    slide_4.classList.add("slide-active")
                    console.log("4")
                    autoScroll()
                }, 4000);
            }, 4000);
        }, 4000);
    }, 4000);
}

autoScroll()

let form__input = document.querySelector("#form__input")
let form__btn = document.querySelector("#form__btn")

form__btn.addEventListener("click", () => {
    if (form__input.value === "") {
        alert("Пожалуйста укажите вашу почту")
        console.log("not wor;")
    } else {
        alert('Благодарим за подписку!')
        form__input.value = ""
    }
})

console.log("JS Working");