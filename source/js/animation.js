const svgDivEl = document.querySelector('.svg')
const wMax = window.innerWidth;
const hMax = window.innerHeight;
let circleX = _ => Math.random() * wMax;
let circleY = _ => Math.random() * hMax;
// let fillC = _ => `white`
// let fillC = _ => `rgb(${Math.random()*1+10}, ${Math.random()*1+170}, ${Math.random()*1+254})`
// let fillC = _ => `${colors.aboutme}`
let circleR = _ => Math.random() + 300.6;
let circleOpacity = transparency => Math.random() * transparency;
const wMin = 0;
const hMin = 0;
const svgs = 10;
const linesQuantity = 20;
const generateSVG = number => {
    let markup = ''
    for (let i = 0; i < number; i++) {
        markup += `
        <circle r="${circleR()}" cx="${circleX()}" cy="${circleY()}" fill="#e31b70" fill-opacity="${circleOpacity(0.05)}"/>
        `
    }

    for (let i = 0; i < linesQuantity; i++) {
        markup += `
        <line x1="0" y1="0" x2="0" y2="0" stroke="#e31b70" stroke-width="1" stroke-opacity="${circleOpacity(0)}"/>
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

const line = (elem, indexOfCircle1, indexOfCircle2) => {
    elem.setAttribute('x1', `${getCirclePos('cx', svgCirclesEl[indexOfCircle1])}`);
    elem.setAttribute('y1', `${getCirclePos('cy', svgCirclesEl[indexOfCircle1])}`);
    elem.setAttribute('x2', `${getCirclePos('cx', svgCirclesEl[indexOfCircle2])}`);
    elem.setAttribute('y2', `${getCirclePos('cy', svgCirclesEl[indexOfCircle2])}`);
}

const polygons = [];
const triangleQuantity = 5;

const generateTriangles = _ => {
    for (let i = 0; i < triangleQuantity; i++) {
        const trianglesCircles = [];
        for (let i = 0; i < 3; i++) {
            trianglesCircles[i] = Math.round(Math.random() * (svgs - 1));
        }
        polygons.push(trianglesCircles);
    }
    return polygons;
}

generateTriangles();

const lines = _ => {
    for (let i = 0; i < triangleQuantity; i++) {
        for (let j = 0; j < 3; j++) {
            if (j < 2) {
                line(svgLinesEl[j + 3 * i], polygons[i][j], polygons[i][j + 1])
            } else {
                line(svgLinesEl[i * 3 + 2], polygons[i][2], polygons[i][0])
            }
        }
    }
}


let flowAnimIdArray = []
for (let i = 0; i < svgCirclesEl.length; i++) {
    flowAnimIdArray[i] = true;
}


const flow = (element) => {

    let alpha = Math.random() * 2 * Math.PI;
    const speed = 0.4;

    const flowAnim = _ => {

        if (getCirclePos('cx', element) < wMin || getCirclePos('cx', element) > wMax) {
            alpha = Math.PI - alpha
        }

        if (getCirclePos('cy', element) > hMax || getCirclePos('cy', element) < hMin) {
            alpha = -alpha
        }

        let newX = getCirclePos('cx', element) + Math.cos(alpha) * speed;
        let newY = getCirclePos('cy', element) + Math.sin(alpha) * speed;

        element.setAttribute("cx", `${newX}`);
        element.setAttribute("cy", `${newY}`);

        lines()

            flowAnimIdArray[svgCirclesEl.indexOf(element)] = requestAnimationFrame(flowAnim)
    }

    flowAnimIdArray[svgCirclesEl.indexOf(element)] = requestAnimationFrame(flowAnim)

}



let fearArr = []
for (let elem of svgCirclesEl) {
    fearArr[svgCirclesEl.indexOf(elem)] = false;
}


const fearDistance = 200;
const fearRun = 200;
const fearDeceleration = 20;
const fearAnimSteps = 100;


const fearAnimIdArray = []


for (let i = 0; i < svgCirclesEl.length; i++) {
    fearAnimIdArray[i] = true;
}

const mouseRead = mouse => {
    let mouseX = mouse.clientX;
    let mouseY = mouse.clientY;

    svgCirclesEl.forEach(element => {

        const distCursorX = _ => Math.abs(mouseX - getCirclePos('cx', element))
        const distCursorY = _ => Math.abs(mouseY - getCirclePos('cy', element))
        const distCursor = _ => Math.sqrt(Math.pow(distCursorX(), 2) + Math.pow(distCursorY(), 2))

        if ((distCursor() < fearDistance)) {

            let frameNumber = 0;

            let targetCircleX = getCirclePos('cx', element) + fearRun * (getCirclePos('cx', element) - mouseX) / distCursor()
            let targetCircleY = getCirclePos('cy', element) + fearRun * (getCirclePos('cy', element) - mouseY) / distCursor()

            const animToTarget = _ => {

                // x = x - .007;

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

                let setCx = getCirclePos('cx', element) + (targetCircleX - getCirclePos('cx', element)) / fearDeceleration
                let setCy = getCirclePos('cy', element) + (targetCircleY - getCirclePos('cy', element)) / fearDeceleration

                element.setAttribute("cx", `${setCx}`);
                element.setAttribute("cy", `${setCy}`);

                // lines()

                if (frameNumber < fearAnimSteps) {
                    fearAnimIdArray[svgCirclesEl.indexOf(element)] = requestAnimationFrame(animToTarget)
                    frameNumber ++;
                }
            }
            cancelAnimationFrame(fearAnimIdArray[svgCirclesEl.indexOf(element)])
            fearAnimIdArray[svgCirclesEl.indexOf(element)] = requestAnimationFrame(animToTarget)
        }
    })
}

svgCirclesEl.forEach(elem => flow(elem))
window.addEventListener("mousemove", mouse => {
    mouseRead(mouse)

});