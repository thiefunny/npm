const svgDivEl = document.querySelector('.svg')
const wMax = window.innerWidth;
const hMax = window.innerHeight;
let circleX = _ => Math.random() * wMax;
let circleY = _ => Math.random() * hMax;
let fillC = _ => `white`
// let fillC = _ => `rgb(${Math.random()*2+10}, ${Math.random()*2+10}, ${Math.random()*1+250})`
let circleR = _ => Math.random() * 3 + 1;
let circleOpacity = transparency => Math.random() * transparency;
const wMin = 0;
const hMin = 0;
const svgs = 5;
const generateSVG = number => {
    let markup = ''
    for (let i = 0; i < number; i++) {
        markup += `
        <circle r="${circleR()}" cx="${circleX()}" cy="${circleY()}" fill="${fillC()}" fill-opacity="${circleOpacity(0.9)}"/>
        <line x1="0" y1="0" x2="0" y2="0" stroke="white" stroke-width="1" stroke-opacity="0.4"/>
        `
    }

    return markup;
}

svgDivEl.innerHTML = `
<svg version="1.1" baseProfile="full" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${wMax}" height="${hMax}" viewBox="0 0 ${wMax} ${hMax}">
${generateSVG(svgs)}
</svg>

`

const svgCirclesEl = [...document.querySelectorAll('circle')]
const svgLinesEl = [...document.querySelectorAll('line')]

const getCirclePos = (attribute, elem) => Number(elem.getAttribute(`${attribute}`));

let frameNumber = 0;

const wobbleDeceleration = 100;
const wobbleAnimSteps = 100;

const line = (elem, indexOfCircle1, indexOfCircle2) => {

    elem.setAttribute('x1', `${getCirclePos('cx', svgCirclesEl[indexOfCircle1])}`);
    elem.setAttribute('y1', `${getCirclePos('cy', svgCirclesEl[indexOfCircle1])}`);
    elem.setAttribute('x2', `${getCirclePos('cx', svgCirclesEl[indexOfCircle2])}`);
    elem.setAttribute('y2', `${getCirclePos('cy', svgCirclesEl[indexOfCircle2])}`);

}

const lines = _ => {

    for (let i = 0; i < svgs - 1; i++) {
        line(svgLinesEl[i], i, i + 1)
    }

}


const wobble = (element) => {

    let reqAnimID;

    let x = 1000;
    let targetCircleX = getCirclePos('cx', element) + Math.random() * x - x / 2;
    let targetCircleY = getCirclePos('cy', element) + Math.random() * x - x / 2;

    const anim = _ => {

        if ((frameNumber < wobbleAnimSteps) && (fearArr[svgCirclesEl.indexOf(element)] === false)) {

            if (getCirclePos('cx', element) < wMin) {
                element.setAttribute("cx", `${wMin}`)
                targetCircleX = wMin - targetCircleX
            }

            if (getCirclePos('cx', element) > wMax) {
                element.setAttribute("cx", `${wMax}`)
                targetCircleX = wMax - (targetCircleX - wMax)
            }

            if (getCirclePos('cy', element) > hMax) {
                element.setAttribute("cy", `${hMax}`)
                targetCircleY = hMax - (targetCircleY - hMax)
            }

            if (getCirclePos('cy', element) < hMin) {
                element.setAttribute("cy", `${hMin}`)
                targetCircleY = hMin - targetCircleY
            }

            // lines()

            element.setAttribute("cx", `${getCirclePos('cx', element) + (targetCircleX - getCirclePos('cx', element)) / wobbleDeceleration / (wobbleAnimSteps / getCirclePos('r', element))}`);
            element.setAttribute("cy", `${getCirclePos('cy', element) + (targetCircleY - getCirclePos('cy', element)) / wobbleDeceleration / (wobbleAnimSteps / getCirclePos('r', element))}`);

            reqAnimID = requestAnimationFrame(anim)

            frameNumber++;

        } else {

            cancelAnimationFrame(reqAnimID)
            frameNumber = 0;
            wobble(element)
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

let attractionArr = []
for (let elem of svgCirclesEl) {
    attractionArr[svgCirclesEl.indexOf(elem)] = false;
}

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
            let x = circleOpacity(0.9);
            let y = `rgb(255, 0,0)`

            const animToTarget = _ => {

                if ((frameNumber < fearAnimSteps) && (fearArr[svgCirclesEl.indexOf(element)] === true)) {

                    if (getCirclePos('cx', element) < wMin) {
                        element.setAttribute("cx", `${wMin}`)
                        targetCircleX = wMin - targetCircleX
                    }

                    if (getCirclePos('cx', element) > wMax) {
                        element.setAttribute("cx", `${wMax}`)
                        targetCircleX = wMax - (targetCircleX - wMax)
                    }

                    if (getCirclePos('cy', element) > hMax) {
                        element.setAttribute("cy", `${hMax}`)
                        targetCircleY = hMax - (targetCircleY - hMax)
                    }

                    if (getCirclePos('cy', element) < hMin) {
                        element.setAttribute("cy", `${hMin}`)
                        targetCircleY = hMin - targetCircleY
                    }

                    element.setAttribute("fill", `${y}`);
                    element.setAttribute("fill-opacity", `${x+(fearAnimSteps-frameNumber)/fearAnimSteps}`);
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


const attractionDeceleration = 200;
// const attractionAnimSteps = 10000;


const attraction = (element, mouse) => {

    let mouseX = mouse.clientX;
    let mouseY = mouse.clientY;
    let startTime = Date.now();

    let targetCircleX = mouseX
    let targetCircleY = mouseY
    let reqAnimID

    const anim = _ => {

        let now = Date.now();
        let elapsed = now - startTime;

        if ((fearArr[svgCirclesEl.indexOf(element)] === false) && (elapsed > 100)) {

            element.setAttribute("cx", `${getCirclePos('cx', element) + (targetCircleX - getCirclePos('cx', element))/10}`);
            element.setAttribute("cy", `${getCirclePos('cy', element) + (targetCircleY - getCirclePos('cy', element))/10}`);
            startTime = now;
            attractionArr[svgCirclesEl.indexOf(element)] = true;

        }

        reqAnimID = requestAnimationFrame(anim)

    }

    if (attractionArr[svgCirclesEl.indexOf(element)] === false) {
        cancelAnimationFrame(reqAnimID)
console.log('miki')
    // requestAnimationFrame(anim)

        anim();

        // attractionArr[svgCirclesEl.indexOf(element)] = true;

    } else {
        // cancelAnimationFrame(anim)
    }

    // requestAnimationFrame(anim)

}



// svgCirclesEl.forEach(elem => wobble(elem))
window.addEventListener("click", mouse => {
    // mouseRead(mouse)
    // attraction(mouse)
    svgCirclesEl.forEach(elem => {
        attractionArr[svgCirclesEl.indexOf(elem)] = false;
        attraction(elem, mouse);
    })

});