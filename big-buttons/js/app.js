const twoEL = document.querySelector(".two");
const threeEL = document.querySelector(".three");

twoEL.addEventListener("mouseover", _ => {
    twoEL.classList.add('animstart-top-right');
    twoEl.removeEventListener("mouseover");
})

threeEL.addEventListener("mouseover", _ => {
    threeEL.classList.add('animstart-bottom-left');
    threeEL.removeEventListener("mouseover");
})