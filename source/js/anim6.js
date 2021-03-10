const svgDivEl = document.querySelector('.svg')
const wMax = window.innerWidth;
const hMax = window.innerHeight;
let circleX = _ => Math.random() * wMax;
let circleY = _ => Math.random() * hMax;
let fillC = _ => `rgb(${Math.random()*20+20}, ${Math.random()*20+20}, ${Math.random()*100+50})`
let circleR = _ => Math.random() * 5 + 2;
const wMin = 0;
const hMin = 0;


svgDivEl.innerHTML = `
<svg version="1.1" baseProfile="full" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${wMax}" height="${hMax}" viewBox="0 0 ${wMax} ${hMax}">
<circle r="${circleR()}" cx="${circleX()}" cy="${circleY()}" fill="${fillC()}"/>
<circle r="${circleR()}" cx="${circleX()}" cy="${circleY()}" fill="${fillC()}"/>
<circle r="${circleR()}" cx="${circleX()}" cy="${circleY()}" fill="${fillC()}"/>
<circle r="${circleR()}" cx="${circleX()}" cy="${circleY()}" fill="${fillC()}"/>
<circle r="${circleR()}" cx="${circleX()}" cy="${circleY()}" fill="${fillC()}"/>
<circle r="${circleR()}" cx="${circleX()}" cy="${circleY()}" fill="${fillC()}"/>
<circle r="${circleR()}" cx="${circleX()}" cy="${circleY()}" fill="${fillC()}"/>
<circle r="${circleR()}" cx="${circleX()}" cy="${circleY()}" fill="${fillC()}"/>
<circle r="${circleR()}" cx="${circleX()}" cy="${circleY()}" fill="${fillC()}"/>
<circle r="${circleR()}" cx="${circleX()}" cy="${circleY()}" fill="${fillC()}"/>
<circle r="${circleR()}" cx="${circleX()}" cy="${circleY()}" fill="${fillC()}"/>
<circle r="${circleR()}" cx="${circleX()}" cy="${circleY()}" fill="${fillC()}"/>
<circle r="${circleR()}" cx="${circleX()}" cy="${circleY()}" fill="${fillC()}"/>
<circle r="${circleR()}" cx="${circleX()}" cy="${circleY()}" fill="${fillC()}"/>
<circle r="${circleR()}" cx="${circleX()}" cy="${circleY()}" fill="${fillC()}"/>
<circle r="${circleR()}" cx="${circleX()}" cy="${circleY()}" fill="${fillC()}"/>
<circle r="${circleR()}" cx="${circleX()}" cy="${circleY()}" fill="${fillC()}"/>
<circle r="${circleR()}" cx="${circleX()}" cy="${circleY()}" fill="${fillC()}"/>
<circle r="${circleR()}" cx="${circleX()}" cy="${circleY()}" fill="${fillC()}"/>
<circle r="${circleR()}" cx="${circleX()}" cy="${circleY()}" fill="${fillC()}"/>
<circle r="${circleR()}" cx="${circleX()}" cy="${circleY()}" fill="${fillC()}"/>
<circle r="${circleR()}" cx="${circleX()}" cy="${circleY()}" fill="${fillC()}"/>
<circle r="${circleR()}" cx="${circleX()}" cy="${circleY()}" fill="${fillC()}"/>
<circle r="${circleR()}" cx="${circleX()}" cy="${circleY()}" fill="${fillC()}"/>
<circle r="${circleR()}" cx="${circleX()}" cy="${circleY()}" fill="${fillC()}"/>
<circle r="${circleR()}" cx="${circleX()}" cy="${circleY()}" fill="${fillC()}"/>
<circle r="${circleR()}" cx="${circleX()}" cy="${circleY()}" fill="${fillC()}"/>
<circle r="${circleR()}" cx="${circleX()}" cy="${circleY()}" fill="${fillC()}"/>
<circle r="${circleR()}" cx="${circleX()}" cy="${circleY()}" fill="${fillC()}"/>
<circle r="${circleR()}" cx="${circleX()}" cy="${circleY()}" fill="${fillC()}"/>
<circle r="${circleR()}" cx="${circleX()}" cy="${circleY()}" fill="${fillC()}"/>
</svg>

`

const svgEl = document.querySelector('svg')
const svgCirEl = document.querySelector('circle')
const svgCirclesEl = [...document.querySelectorAll('circle')]

const getCirclePos = (attribute, elem) => Number(elem.getAttribute(`${attribute}`));

let frameNumber = 0;

const wobbleDeceleration = 20;
const wobbleAnimSteps = 500;

const wobble = (element) => {

    let reqAnimID;

    let x = 800;

    let targetCircleX = getCirclePos('cx', element) + Math.random() * x - x / 2;
    let targetCircleY = getCirclePos('cy', element) + Math.random() * x - x / 2;

    const anim = _ => {

        if ((frameNumber < wobbleAnimSteps) && (fearArr[svgCirclesEl.indexOf(element)] === false)) {

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

            element.setAttribute("cx", `${getCirclePos('cx', element) + (targetCircleX - getCirclePos('cx', element)) / wobbleDeceleration / (wobbleAnimSteps / getCirclePos('r', element))}`);
            element.setAttribute("cy", `${getCirclePos('cy', element) + (targetCircleY - getCirclePos('cy', element)) / wobbleDeceleration / (wobbleAnimSteps / getCirclePos('r', element))}`);

            reqAnimID = requestAnimationFrame(anim)

            frameNumber++;

        } else {

            cancelAnimationFrame(reqAnimID)
            frameNumber = 0;
            wobble(element)
            console.log('canceled')

        }
    }
    requestAnimationFrame(anim)
}


const fearDistance = 200
const fearDeceleration = 20;
const fearAnimSteps = 100;

let fearArr = []
for (let elem of svgCirclesEl) {
    fearArr[svgCirclesEl.indexOf(elem)] = false;
}
console.log(fearArr)

const mouseRead = mouse => {

    let mouseX = mouse.clientX;
    let mouseY = mouse.clientY;
    let frameNumber = 0;

    svgCirclesEl.forEach(element => {

        const distCursorX = _ => Math.abs(mouseX - getCirclePos('cx', element))
        const distCursorY = _ => Math.abs(mouseY - getCirclePos('cy', element))
        const distCursor = _ => Math.sqrt(Math.pow(distCursorX(), 2) + Math.pow(distCursorY(), 2))

        if ((distCursor() < fearDistance) && (fearArr[svgCirclesEl.indexOf(element)] === false)) {

            let targetCircleX = Math.round(getCirclePos('cx', element) + fearDistance * (getCirclePos('cx', element) - mouseX) / distCursor())
            let targetCircleY = Math.round(getCirclePos('cy', element) + fearDistance * (getCirclePos('cy', element) - mouseY) / distCursor())

            fearArr[svgCirclesEl.indexOf(element)] = true;

            const animToTarget = _ => {

                if ((frameNumber < fearAnimSteps) && (fearArr[svgCirclesEl.indexOf(element)] === true)) {

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

                    element.setAttribute("cx", `${getCirclePos('cx', element) + (targetCircleX - getCirclePos('cx', element)) / fearDeceleration}`);
                    element.setAttribute("cy", `${getCirclePos('cy', element) + (targetCircleY - getCirclePos('cy', element)) / fearDeceleration}`);

                    frameNumber++;
                    reqAnimID = requestAnimationFrame(animToTarget)

                } else {
                    frameNumber = 0;
                    fearArr[svgCirclesEl.indexOf(element)] = false;
                }

            }
            requestAnimationFrame(animToTarget)

        }
    })



}


svgCirclesEl.forEach(elem => wobble(elem))
window.addEventListener("mousemove", mouse => mouseRead(mouse));