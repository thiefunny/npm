const animateEl = document.querySelectorAll("li");
const mainEl = document.querySelector(".a");

let y;
let scrollDown = true;
let minWindow = 0;

(_ => {for (let elem of animateEl) {
    elem.classList.add("animate-one")
    elem.classList.add("animation-off")
}

const anim = _ => {
    for (let elem of animateEl) {

        y = elem.getBoundingClientRect().y;

        if (y < window.innerHeight * 0.9 && scrollDown) {
            elem.classList.add("animation-on")
            elem.classList.remove("animation-off")
            elem.classList.remove("hidden")

        } else if (y > window.innerHeight * 0.8 && !scrollDown) {
            elem.classList.remove("animation-on")
            elem.classList.add("animation-off")
            elem.classList.add("hidden")
        }
    }
}

window.addEventListener("scroll", _ => {
    console.log(window.pageYOffset)
    let x = window.pageYOffset;

    if (x > minWindow) {
        console.log('w górę');
scrollDown = true;

        minWindow = x;
    } else {
        console.log('w dół');
        scrollDown = false;

        minWindow = x;
    }

    anim();

})})()