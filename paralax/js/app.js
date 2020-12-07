const animateEl = document.querySelector(".animate-one");
let y;

window.addEventListener("scroll", _ => {
    console.log(window.innerHeight)
    console.log(y)
    y = animateEl.getBoundingClientRect().y;

    if (y < window.innerHeight * 0.6) {
        animateEl.classList.add("animation")
        animateEl.classList.remove("hidden")

    } else {
        animateEl.classList.remove("animation")
        animateEl.classList.add("hidden")

    }

})