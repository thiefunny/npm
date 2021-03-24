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
</svg>

`

const svgEl = document.querySelector('svg')
const svgCirEl = document.querySelector('circle')
const svgCirclesEl = document.querySelectorAll('circle')

console.log(svgCirclesEl)

let targetCircleX, targetCircleY;

const getCirclePos = attribute => Number(svgCirEl.getAttribute(`${attribute}`));

let reqAnimID;
let i;

const animToTarget = (targetCircleX, targetCircleY, animSteps, animDeceleration) => {

    i++;

    if (i < animSteps) {

        if (getCirclePos('cx') < wMin) {
            svgCirEl.setAttribute("cx", `${wMax}`)
            targetCircleX = wMax + targetCircleX
        }

        if (getCirclePos('cx') > wMax) {
            svgCirEl.setAttribute("cx", `${wMin}`)
            targetCircleX = wMin + targetCircleX - wMax

        }

        if (getCirclePos('cy') > hMax) {
            svgCirEl.setAttribute("cy", `${hMin}`)
            targetCircleY = hMin + targetCircleY - hMax
        }

        if (getCirclePos('cy') < hMin) {
            svgCirEl.setAttribute("cy", `${hMax}`)
            targetCircleY = hMax + targetCircleY
        }

        svgCirEl.setAttribute("cx", `${getCirclePos('cx') + (targetCircleX - getCirclePos('cx')) / animDeceleration}`);
        svgCirEl.setAttribute("cy", `${getCirclePos('cy') + (targetCircleY - getCirclePos('cy')) / animDeceleration}`);

        reqAnimID = requestAnimationFrame(_ => animToTarget(targetCircleX, targetCircleY, wobbleAnimSteps, wobbleDeceleration))
    } else {
        // cancelAnimationFrame(reqAnimID)
    }

}

const wobble = _ => {

    let x = 50;
    targetCircleX = getCirclePos('cx') + Math.random() * x - x/2;
    targetCircleY = getCirclePos('cy') + Math.random() * x - x/2;

    i = 0;

    requestAnimationFrame(_ => animToTarget(targetCircleX, targetCircleY, fearAnimSteps, fearDeceleration))

}

const mouseRead = mouse => {

    let mouseX = mouse.clientX;
    let mouseY = mouse.clientY;

    const distCursorX = _ => Math.abs(mouseX - getCirclePos('cx'))
    const distCursorY = _ => Math.abs(mouseY - getCirclePos('cy'))
    const distCursor = _ => Math.sqrt(Math.pow(distCursorX(), 2) + Math.pow(distCursorY(), 2))

    if (distCursor() < fearDistance) {

        i = 0;

        // cancelAnimationFrame(reqAnimID);

        targetCircleX = getCirclePos('cx') + fearDistance * (getCirclePos('cx') - mouseX) / distCursor()
        targetCircleY = getCirclePos('cy') + fearDistance * (getCirclePos('cy') - mouseY) / distCursor()

        requestAnimationFrame(_ => animToTarget(targetCircleX, targetCircleY, fearAnimSteps, fearDeceleration))

    }
}

// setInterval(wobble, 2000)


window.addEventListener("mousemove", mouseRead);