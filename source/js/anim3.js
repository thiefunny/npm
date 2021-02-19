const svgDivEl = document.querySelector('.svg')
const wMax = window.innerWidth;
const hMax = window.innerHeight;
let circleX, circleY;
circleX = wMax / 2;
circleY = hMax / 2;
circleXprev = circleX
circleYprev = circleY

svgDivEl.innerHTML = `
<svg version="1.1" baseProfile="full" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${wMax}" height="${hMax}" viewBox="0 0 ${wMax} ${hMax}">
<circle id="circle" r="10" cx="${circleXprev}" cy="${circleYprev}" fill="white"/>
</svg>

`

const svgEl = document.querySelector('svg')
const svgCirEl = document.querySelector('circle')
let speed = 30000
let fear = 2

const mouseRead = mouse => {
    // let render;

    // clearInterval(render)

    let distCursorX = Math.abs(mouse.clientX - circleX)
    let distCursorY = Math.abs(mouse.clientY - circleY)
    let targetCircleX, targetCircleY;
    const getCircleX = _ => svgCirEl.getAttribute("cx");
    // console.log(getCircleX)

    if ((mouse.clientX - getCircleX()) > 10) {

        targetCircleX = mouse.clientX - 200
    } else {
        targetCircleX = mouse.clientX + 200;

    }

    // console.log(targetCircleX)

    // if ((mouse.clientY - circleY) > 10) {

    //     circleY = mouse.clientY - 200
    // } else if ((mouse.clientY - circleY) < -10) {
    //     circleY = mouse.clientY + 200
    // }

    circleX = Number(getCircleX());

    let render = setInterval(_ => {

        distNextStepX = Math.abs(targetCircleX - getCircleX());

        if (distNextStepX > 1) {
            if (targetCircleX > getCircleX()) {
                circleX += distNextStepX / 20;
            } else {
                circleX -= distNextStepX / 20
            }
            svgCirEl.setAttribute("cx", `${circleX}`)

        } else {
            clearInterval(render)
        }

    }, 10)

}

// window.addEventListener("click", mouseRead)
window.addEventListener("click", mouseRead);