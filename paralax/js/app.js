const animateEl = document.querySelectorAll("li");
const mainEl = document.querySelector(".a");

let y;

const on = _ => {
}

const off = _ => {
}



for (let elem of animateEl) {
    elem.classList.add("animate-one")
    elem.classList.add("animation-off")
}

const anim = _ => {
    for (let elem of animateEl) {

        y = elem.getBoundingClientRect().y;

        if (y < window.innerHeight*0.9) {
            elem.classList.add("animation-on")
            elem.classList.remove("animation-off")
            elem.classList.remove("hidden")

        } else {
            elem.classList.remove("animation-on")
            elem.classList.add("animation-off")
            elem.classList.add("hidden")
        }
    }
}



window.addEventListener("scroll", _ => {
    // console.log(window.innerHeight)
    // console.log(y)
    console.log(mainEl.scrollTop)

    anim();

})