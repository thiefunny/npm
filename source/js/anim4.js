const svgDivEl = document.querySelector('.svg')
const wMax = window.innerWidth;
const hMax = window.innerHeight;
let circleX = wMax / 2;
let circleY = hMax / 2;
const wMin = 0;
const hMin = 0;

const wobbleDeceleration = 20;
const wobbleAnimSteps = 100;

const fearDistance = 100
const fearDeceleration = 10
const fearAnimSteps = 50;


svgDivEl.innerHTML = `
<svg version="1.1" baseProfile="full" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${wMax}" height="${hMax}" viewBox="0 0 ${wMax} ${hMax}">
<circle id="circle1" r="10" cx="${circleX}" cy="${circleY}" fill="white"/>
<circle id="circle2" r="10" cx="${circleX}" cy="${circleY}" fill="white"/>
<circle id="circle3" r="10" cx="${circleX}" cy="${circleY}" fill="white"/>
</svg>

`

const svgEl = document.querySelector('svg')
const svgCirEl = document.querySelector('circle')
const svgCirclesEl = [...document.querySelectorAll('circle')]

console.log(svgCirclesEl);



let targetCircleX, targetCircleY;

const getCirclePos = (attribute, elem) => Number(elem.getAttribute(`${attribute}`));

let reqAnimID;
let i;

const animToTarget = (targetCircleX, targetCircleY, animSteps, animDeceleration, element) => {

    i++;

    if (i < animSteps) {

        if (getCirclePos('cx', element) < wMin) {
            element.setAttribute("cx", `${wMax}`)
            targetCircleX = wMax + targetCircleX
        }

        if (getCirclePos('cx', element) > wMax) {
            element.setAttribute("cx", `${wMin}`)
            targetCircleX = wMin + targetCircleX - wMax

        }

        if (getCirclePos('cy', element) > hMax) {
            element.setAttribute("cy", `${hMin}`)
            targetCircleY = hMin + targetCircleY - hMax
        }

        if (getCirclePos('cy', element) < hMin) {
            element.setAttribute("cy", `${hMax}`)
            targetCircleY = hMax + targetCircleY
        }

        element.setAttribute("cx", `${getCirclePos('cx', element) + (targetCircleX - getCirclePos('cx', element)) / animDeceleration}`);
        element.setAttribute("cy", `${getCirclePos('cy', element) + (targetCircleY - getCirclePos('cy', element)) / animDeceleration}`);

        reqAnimID = requestAnimationFrame(_ => animToTarget(targetCircleX, targetCircleY, wobbleAnimSteps, wobbleDeceleration, element))
    } else {
        cancelAnimationFrame(reqAnimID)
    }

}

const wobble = elem => {

    let x = 100;

    let targetCircleX = getCirclePos('cx', elem) + Math.random() * x - x / 2;
    let targetCircleY = getCirclePos('cy', elem) + Math.random() * x - x / 2;

    i = 0;

    requestAnimationFrame(_ => animToTarget(targetCircleX, targetCircleY, wobbleAnimSteps, wobbleDeceleration, elem))

}

const mouseRead = mouse => {

    let mouseX = mouse.clientX;
    let mouseY = mouse.clientY;

    const distCursorX = _ => Math.abs(mouseX - getCirclePos('cx'))
    const distCursorY = _ => Math.abs(mouseY - getCirclePos('cy'))
    const distCursor = _ => Math.sqrt(Math.pow(distCursorX(), 2) + Math.pow(distCursorY(), 2))

    if (distCursor() < fearDistance) {

        i = 0;

        cancelAnimationFrame(reqAnimID);

        targetCircleX = getCirclePos('cx') + fearDistance * (getCirclePos('cx') - mouseX) / distCursor()
        targetCircleY = getCirclePos('cy') + fearDistance * (getCirclePos('cy') - mouseY) / distCursor()

        requestAnimationFrame(_ => animToTarget(targetCircleX, targetCircleY, fearAnimSteps, fearDeceleration, svgCirEl))

    }
}

svgCirclesEl.forEach(elem => setInterval(_ => wobble(elem), 1000))

// setInterval(_ => wobble(svgCirclesEl[0]), 1000)
// setInterval(_ => wobble(svgCirclesEl[1]), 1000)
// setInterval(_ => wobble(svgCirclesEl[2]), 1000)


window.addEventListener("mousemove", mouseRead);