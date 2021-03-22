const svgDivEl = document.querySelector('.svg')
const wMax = window.innerWidth;
const hMax = window.innerHeight;
let circleX = _ => Math.random() * wMax;
let circleY = _ => Math.random() * hMax;
// let fillC = _ => `white`
// let fillC = _ => `rgb(${Math.random()*1+10}, ${Math.random()*1+170}, ${Math.random()*1+254})`
// let fillC = _ => `${colors.aboutme}`
let circleR = _ => Math.random() + 0.6;
let circleOpacity = transparency => Math.random() * transparency + 0.2;
const wMin = 0;
const hMin = 0;
const svgs = 100;
const linesQuantity = 100;
const generateSVG = number => {
    let markup = ''
    for (let i = 0; i < number; i++) {
        markup += `
        <circle r="${circleR()}" cx="${circleX()}" cy="${circleY()}" fill="#e31b70" fill-opacity="${circleOpacity(0.5)}"/>
        `
    }

    for (let i = 0; i < linesQuantity; i++) {
        markup += `
        <line x1="0" y1="0" x2="0" y2="0" stroke="#e31b70" stroke-width="1" stroke-opacity="${circleOpacity(0.2)}"/>
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

let frameNumber = 0;
const wobbleDeceleration = 100;
const wobbleAnimSteps = 400;

const wobble = (element) => {

    let reqAnimID;

    let r = Number(element.getAttribute('r'));
    let f = Number(element.getAttribute('fill-opacity'));

    let x = 20000;
    let targetCircleX = getCirclePos('cx', element) + Math.random() * x - x / 2;
    let targetCircleY = getCirclePos('cy', element) + Math.random() * x - x / 2;

    const anim = _ => {

        if (frameNumber < wobbleAnimSteps) {

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

            lines();

            let setCx = getCirclePos('cx', element) + (targetCircleX - getCirclePos('cx', element)) / wobbleDeceleration / (wobbleAnimSteps / getCirclePos('r', element))
            let setCy = getCirclePos('cy', element) + (targetCircleY - getCirclePos('cy', element)) / wobbleDeceleration / (wobbleAnimSteps / getCirclePos('r', element))

            element.setAttribute("cx", `${setCx}`);
            element.setAttribute("cy", `${setCy}`);

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

const fearDistance = 200;
const fearRun = 200;
const fearDeceleration = 20;
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

            let targetCircleX = Math.round(getCirclePos('cx', element) + fearRun * (getCirclePos('cx', element) - mouseX) / distCursor())
            let targetCircleY = Math.round(getCirclePos('cy', element) + fearRun * (getCirclePos('cy', element) - mouseY) / distCursor())

            let x = 1;
            // let y = `rgb(255, 0,0)`

            // element.setAttribute("fill", `${y}`);
            element.setAttribute("fill-opacity", `${x}`);

            const animToTarget = _ => {

                x = x - .007;

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

                element.setAttribute("fill-opacity", `${x}`);

                if (Math.floor(setCx) !== targetCircleX && Math.floor(setCy) !== targetCircleY) {
                    fearAnimIdArray[svgCirclesEl.indexOf(element)] = requestAnimationFrame(animToTarget)
                }

            }
            cancelAnimationFrame(fearAnimIdArray[svgCirclesEl.indexOf(element)])
            requestAnimationFrame(animToTarget)
        }
    })
}

svgCirclesEl.forEach(elem => wobble(elem))
window.addEventListener("mousemove", mouse => {
    mouseRead(mouse)

});


// let attractionArr = []
// for (let elem of svgCirclesEl) {
//     attractionArr[svgCirclesEl.indexOf(elem)] = false;
// }

// attraction(mouse)
// svgCirclesEl.forEach(elem => {
//     attraction(elem, mouse);
// })



// const attractionDeceleration = 400;


// let attractionAnimIdArray = []
// for (let i = 0; i < svgCirclesEl.length; i++) {
//     attractionAnimIdArray[i] = true;
// }

// console.log(attractionAnimIdArray)

// const attraction = (element, mouse) => {

//     let mouseX = mouse.clientX;
//     let mouseY = mouse.clientY;
//     let startTime = Date.now();

//     let targetCircleX;
//     let targetCircleY;

//     const anim = _ => {


//         targetCircleX = mouseX
//         targetCircleY = mouseY
//         // lines()

//         let now = Date.now();
//         let elapsed = now - startTime;

//         // const setCx = getCirclePos('cx', element) + (targetCircleX - getCirclePos('cx', element));
//         // const setCy = getCirclePos('cy', element) + (targetCircleY - getCirclePos('cy', element));
//         const setCx = getCirclePos('cx', element) + (targetCircleX - getCirclePos('cx', element)) / attractionDeceleration;
//         const setCy = getCirclePos('cy', element) + (targetCircleY - getCirclePos('cy', element)) / attractionDeceleration;

//         if (elapsed > 1000 / 60) {

//             element.setAttribute("cx", `${setCx}`);
//             element.setAttribute("cy", `${setCy}`);
//             startTime = now;
//         }

//         if (Math.floor(setCx) !== targetCircleX && Math.floor(setCy) !== targetCircleY) {
//             attractionAnimIdArray[svgCirclesEl.indexOf(element)] = requestAnimationFrame(anim)
//         }

//     }

//     cancelAnimationFrame(attractionAnimIdArray[svgCirclesEl.indexOf(element)])
//     // reqAnimIDattraction = requestAnimationFrame(anim)
//     attractionAnimIdArray[svgCirclesEl.indexOf(element)] = requestAnimationFrame(anim)

// }